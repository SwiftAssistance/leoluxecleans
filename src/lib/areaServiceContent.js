// Builds the content for an area x service page from src/data. The same output
// feeds the visible page and its FAQPage schema, so the two always match.
import { services, getServiceBySlug } from '../data/services';
import { locations, getLocationBySlug } from '../data/locations';
import { areas, getAreaDetail } from '../data/areas';
import { reviewsForService } from '../data/reviews';
import { business, isCoreArea } from '../config/business';

const listJoin = (items) =>
  items.length <= 1 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;

const capitalise = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const RELATED = {
  'home-cleaning': ['deep-clean', 'end-of-tenancy'],
  'deep-clean': ['home-cleaning', 'end-of-tenancy'],
  'end-of-tenancy': ['deep-clean', 'specialist-cleaning'],
  'office-cleaning': ['after-events', 'specialist-cleaning'],
  'after-events': ['deep-clean', 'specialist-cleaning'],
  'specialist-cleaning': ['deep-clean', 'home-cleaning'],
};

// Section order and headings differ by service so the pages are not
// structurally identical.
const LAYOUTS = {
  'home-cleaning': {
    order: ['local', 'why', 'pricing', 'reviews', 'included', 'faq'],
    headings: {
      local: (a) => `Regular cleaning for ${a} homes`,
      pricing: (a) => `Home cleaning prices in ${a}`,
      included: () => 'Every regular clean covers',
      faq: (a) => `${a} home cleaning questions`,
      reviews: () => 'What our home cleaning customers say',
    },
  },
  'deep-clean': {
    order: ['pricing', 'local', 'included', 'faq', 'why', 'reviews'],
    headings: {
      local: (a) => `Deep cleaning ${a} properties`,
      pricing: (a) => `What a deep clean costs in ${a}`,
      included: () => 'What a deep clean includes',
      faq: (a) => `Deep cleans in ${a}: your questions answered`,
      reviews: () => 'Deep clean reviews from Google',
    },
  },
  'end-of-tenancy': {
    order: ['included', 'local', 'pricing', 'why', 'faq', 'reviews'],
    headings: {
      local: (a) => `Moving out of a ${a} rental`,
      pricing: (a) => `End of tenancy cleaning prices, ${a}`,
      included: () => 'The inventory checklist we clean to',
      faq: (a) => `End of tenancy in ${a}: common questions`,
      reviews: () => 'Reviews from our customers',
    },
  },
  'office-cleaning': {
    order: ['why', 'local', 'included', 'reviews', 'pricing', 'faq'],
    headings: {
      local: (a) => `Commercial cleaning across ${a}`,
      pricing: (a) => `How office cleaning is priced in ${a}`,
      included: () => 'What we clean in your workplace',
      faq: (a) => `Questions from ${a} businesses`,
      reviews: () => 'What our business customers say',
    },
  },
  'after-events': {
    order: ['local', 'faq', 'pricing', 'included', 'reviews', 'why'],
    headings: {
      local: (a) => `The morning after in ${a}`,
      pricing: (a) => `After-event cleaning costs in ${a}`,
      included: () => 'What an after-event clean covers',
      faq: (a) => `Booking an after-event clean in ${a}`,
      reviews: () => 'Reviews from our customers',
    },
  },
  'specialist-cleaning': {
    order: ['local', 'pricing', 'faq', 'included', 'why', 'reviews'],
    headings: {
      local: (a) => `Specialist jobs we do in ${a}`,
      pricing: (a) => `Specialist cleaning prices in ${a}`,
      included: () => 'Specialist services available',
      faq: (a) => `Specialist cleaning in ${a}: FAQs`,
      reviews: () => 'Reviews from our customers',
    },
  },
};

const priceLabel = (service) => (service.priceFrom ? `From £${service.priceFrom}` : 'Custom quote');

const heroPriceLine = (service) =>
  service.priceFrom ? `${service.title} from £${service.priceFrom}` : `${service.title} priced by custom quote`;

function pricingRows(service) {
  const related = (RELATED[service.slug] || []).map(getServiceBySlug).filter(Boolean);
  return [
    { label: service.title, price: priceLabel(service), href: `/services/${service.slug}/`, current: true },
    ...related.map((s) => ({ label: s.title, price: priceLabel(s), href: `/services/${s.slug}/` })),
  ];
}

// Four local FAQs whose answers come from the area's own data.
function localFaqs(service, detail) {
  const a = detail.name;
  const districts = listJoin(detail.postcodeDistricts);
  const svc = service.title.toLowerCase();
  const types = detail.propertyTypes;

  const coverage = {
    q: `Which parts of ${a} do you cover for ${svc}?`,
    a: `All of ${a} in ${districts}, including ${listJoin(detail.neighbourhoods)}. If you are near ${listJoin(
      detail.landmarks.slice(0, 2)
    )}, you are well inside the area we cover.`,
  };

  const travel = {
    q: `How far is your team from ${a}?`,
    a: `${capitalise(detail.travel.time)}: ${detail.travel.route}. We confirm an arrival time when you book and call ahead if anything changes. Our hours are ${business.hours.display}`,
  };

  const access = {
    q: `Is there anything we should know about parking or access in ${a}?`,
    a: detail.access,
  };

  const specific = {
    'home-cleaning': {
      q: `How much does a regular clean cost for a ${a} home?`,
      a: `Home cleaning starts from £${service.priceFrom}. The final figure depends on the size of the property and how often you book: ${types[0]} take a different amount of time to ${types[2]}. We give you a fixed quote before the first visit.`,
    },
    'deep-clean': {
      q: `How long does a deep clean take for a typical ${a} home?`,
      a: `Typically 4 to 6 hours for a 2 to 3 bedroom home, with prices from £${service.priceFrom}. In ${a} that covers most ${types[1]}; ${types[0]} can take longer, and we will tell you when we quote.`,
    },
    'end-of-tenancy': {
      q: `Do you do end of tenancy cleans for flats as well as houses in ${a}?`,
      a: `Yes. We clean everything from ${types[3]} to ${types[0]}, starting from £${service.priceFrom}. If any cleaning issues are raised after our visit, we come back within 48 hours at no extra charge.`,
    },
    'office-cleaning': {
      q: `Can you clean our ${a} premises outside working hours?`,
      a: `Yes. We clean early in the morning, in the evening or at weekends, and follow your sign-in, key-holding and alarm procedures. As we are ${detail.travel.time} away, we can set a regular slot that suits your opening times. Every quote is tailored to the size of the premises and how often you need us.`,
    },
    'after-events': {
      q: `How soon after an event can you get to ${a}?`,
      a: `We are ${detail.travel.time} from ${a}, so the morning after is usually possible. Call ${business.phone.display} as early as you can and we will give you the earliest slot. After-event cleans start from £${service.priceFrom}.`,
    },
    'specialist-cleaning': {
      q: `What specialist cleaning do ${a} homes usually need?`,
      a: `It depends on the property. ${capitalise(types[0])} often need carpets, upholstery or windows done, while ${types[2]} tend to book oven cleans and hard floors. Specialist cleaning starts from £${service.priceFrom}.`,
    },
  }[service.slug];

  const orders = {
    'home-cleaning': [specific, coverage, travel, access],
    'deep-clean': [specific, access, coverage, travel],
    'end-of-tenancy': [specific, travel, access, coverage],
    'office-cleaning': [specific, access, travel, coverage],
    'after-events': [travel, specific, access, coverage],
    'specialist-cleaning': [specific, coverage, access, travel],
  };
  return orders[service.slug];
}

export function getAreaServiceContent(areaSlug, serviceSlug) {
  const location = getLocationBySlug(areaSlug);
  const service = getServiceBySlug(serviceSlug);
  if (!location || !service) return null;

  const indexable = isCoreArea(areaSlug);
  const detail = getAreaDetail(areaSlug);
  const areaIndex = locations.findIndex((l) => l.slug === areaSlug);
  const layout = LAYOUTS[service.slug];

  const nearbySlugs = detail
    ? detail.nearby
    : areas.map((a) => a.slug).filter((s) => s !== areaSlug).slice(0, 4);
  const nearby = nearbySlugs
    .map(getLocationBySlug)
    .filter(Boolean)
    .map((l) => ({
      name: l.name,
      href: isCoreArea(l.slug) ? `/areas/${l.slug}/${service.slug}/` : `/areas/${l.slug}/`,
      label: isCoreArea(l.slug) ? `${service.title} in ${l.name}` : `Cleaning in ${l.name}`,
    }));

  return {
    location,
    service,
    detail,
    indexable,
    layout,
    postcodes: detail ? detail.postcodeDistricts.join(', ') : location.postcodes,
    priceLine: heroPriceLine(service),
    pricing: pricingRows(service),
    faqs: detail ? localFaqs(service, detail) : service.faqs,
    why: detail ? detail.why : null,
    serviceNote: detail ? detail.serviceNotes[service.slug] : null,
    reviews: reviewsForService(service.slug, areaIndex, 2),
    nearby,
    otherServices: services.filter((s) => s.slug !== service.slug),
  };
}
