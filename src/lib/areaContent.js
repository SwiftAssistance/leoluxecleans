// Content for the core area pages, built from src/data. The same FAQ list
// feeds the visible page and its FAQPage schema, so the two always match.
import { getAreaDetail, areas } from '../data/areas';
import { services } from '../data/services';
import { rotatingReviews } from '../data/reviews';
import { business } from '../config/business';

const listJoin = (items) =>
  items.length <= 1 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;

const capitalise = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export const priceLabel = (service) => (service.priceFrom ? `From £${service.priceFrom}` : 'Custom quote');

export function areaFaqs(detail) {
  const a = detail.name;
  return [
    detail.page.faq,
    {
      q: `How much does cleaning cost in ${a}?`,
      a: `Home cleaning starts from £60, deep cleans from £120 and end of tenancy cleans from £150. ${capitalise(
        detail.propertyTypes[0]
      )} take a different amount of time to ${detail.propertyTypes[2]}, so we give you a fixed price for your property before any work starts.`,
    },
    {
      q: `Which parts of ${a} do you cover?`,
      a: `All of ${a} in ${listJoin(detail.postcodeDistricts)}, including ${listJoin(detail.neighbourhoods)}.`,
    },
    {
      q: `How far is your team from ${a}?`,
      a: `${capitalise(detail.travel.time)}: ${detail.travel.route}. We confirm an arrival time when you book. Our hours are ${business.hours.display}`,
    },
    {
      q: `Is there anything we should know about parking or access in ${a}?`,
      a: detail.access,
    },
  ];
}

export function getAreaPageContent(slug) {
  const detail = getAreaDetail(slug);
  if (!detail) return null;
  const index = areas.findIndex((a) => a.slug === slug);
  return {
    detail,
    faqs: areaFaqs(detail),
    services: services.map((s) => ({ ...s, note: detail.serviceNotes[s.slug] })),
    reviews: rotatingReviews(index, 3),
    nearby: detail.nearby.map(getAreaDetail).filter(Boolean),
  };
}
