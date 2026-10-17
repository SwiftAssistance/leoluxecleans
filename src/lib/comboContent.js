// Service x town pages (e.g. /areas/windsor/end-of-tenancy/), for the four
// main services in the six core towns. Every page is built from that town's
// own data in src/data/areas.ts: its note for the service, property types,
// neighbourhoods, travel and access. The same FAQ list feeds the visible page
// and its FAQPage schema. scripts/checks/uniqueness.mjs fails the build if
// these pages get too similar to one another.
import { areas, getAreaDetail } from '../data/areas';
import { getServiceBySlug } from '../data/services';
import { reviewsForService } from '../data/reviews';
import { business, CORE_AREA_SLUGS } from '../config/business';

export const COMBO_SERVICES = ['home-cleaning', 'deep-clean', 'end-of-tenancy', 'office-cleaning'];

// Pairs that are live, as 'town/service' (e.g. 'windsor/end-of-tenancy').
// Empty for now: built only from the town and service data, these pages were
// 1-4% unique against the town pages, the doorway pattern Google declined to
// index before. Add a pair once it has its own content, then check
// `VERBOSE=1 node scripts/checks/uniqueness.mjs` after a build.
// To go live, the route also has to exist: copy scripts/templates/combo-page.jsx
// to app/(site)/areas/[slug]/[service]/page.jsx (Next's static export refuses
// a route with no pages, so it stays out of app/ while this list is empty).
export const PUBLISHED_COMBOS = [];

export const comboPath = (areaSlug, serviceSlug) => `/areas/${areaSlug}/${serviceSlug}/`;

export const hasCombo = (areaSlug, serviceSlug) =>
  CORE_AREA_SLUGS.includes(areaSlug) &&
  COMBO_SERVICES.includes(serviceSlug) &&
  PUBLISHED_COMBOS.includes(`${areaSlug}/${serviceSlug}`);

export const allCombos = () =>
  CORE_AREA_SLUGS.flatMap((area) => COMBO_SERVICES.map((service) => ({ area, service }))).filter(
    ({ area, service }) => hasCombo(area, service)
  );

const listJoin = (items) =>
  items.length <= 1 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;

const capitalise = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const priceText = (service) =>
  service.priceFrom ? `from £${service.priceFrom}` : 'priced to your premises, with a free quote';

// Short, plain description of the job for each service, used in headings.
const JOB = {
  'home-cleaning': 'regular home clean',
  'deep-clean': 'deep clean',
  'end-of-tenancy': 'end of tenancy clean',
  'office-cleaning': 'office clean',
};

function comboFaqs(detail, service) {
  const a = detail.name;
  const job = JOB[service.slug];
  const local = [
    {
      q: `How much does ${service.title.toLowerCase()} cost in ${a}?`,
      a: service.priceFrom
        ? `${service.title} in ${a} starts from £${service.priceFrom}. ${capitalise(detail.propertyTypes[0])} take a different amount of time to ${detail.propertyTypes[detail.propertyTypes.length - 1]}, so we give you a fixed price for your property before any work starts.`
        : `Every office quote in ${a} is tailored to the size of the premises, how often you need us and when we can get in. We visit or talk it through, then give you a fixed price before any work starts.`,
    },
    {
      q: `Which parts of ${a} do you cover for a ${job}?`,
      a: `All of ${a} in ${listJoin(detail.postcodeDistricts)}, including ${listJoin(detail.neighbourhoods)}. We are ${detail.travel.time} away: ${detail.travel.route}.`,
    },
    {
      q: `Is there anything to know about parking or access for a ${job} in ${a}?`,
      a: detail.access,
    },
  ];
  // Two of the service's own questions, picked by town so neighbouring pages
  // don't all repeat the same pair.
  const index = CORE_AREA_SLUGS.indexOf(detail.slug);
  const own = [0, 1].map((i) => service.faqs[(index + i) % service.faqs.length]);
  return [...local, ...own];
}

export function getComboContent(areaSlug, serviceSlug) {
  if (!hasCombo(areaSlug, serviceSlug)) return null;
  const detail = getAreaDetail(areaSlug);
  const service = getServiceBySlug(serviceSlug);
  if (!detail || !service) return null;
  const index = areas.findIndex((a) => a.slug === areaSlug);
  return {
    detail,
    service,
    job: JOB[serviceSlug],
    price: priceText(service),
    note: detail.serviceNotes[serviceSlug],
    faqs: comboFaqs(detail, service),
    reviews: reviewsForService(serviceSlug, index, 3),
    // Other main services in this town, and this service in the other core towns.
    otherServices: COMBO_SERVICES.filter((s) => s !== serviceSlug).map((s) => ({
      service: getServiceBySlug(s),
      path: comboPath(areaSlug, s),
    })),
    otherTowns: CORE_AREA_SLUGS.filter((s) => s !== areaSlug).map((s) => ({
      detail: getAreaDetail(s),
      path: comboPath(s, serviceSlug),
    })),
    hours: business.hours.display,
  };
}
