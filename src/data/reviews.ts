// Real Google reviews for Leo Luxe Clean, copied exactly as they appear on the
// Google Business Profile (including Google's own truncation, shown with "…").
// Do not edit the wording, and do not add Review or AggregateRating schema for
// these: they are displayed for visitors only.

export type GoogleReview = {
  id: string;
  author: string;
  // Shown on the site: first name plus surname initial (a business keeps its name).
  displayName: string;
  text: string | null;
  // Service slugs the review is about; empty means a general review.
  services: string[];
};

export const reviews: GoogleReview[] = [
  {
    id: 'stefania-pascaru',
    author: 'Stefania Pascaru',
    displayName: 'Stefania P.',
    text: "I used this cleaning company services for a few months now and I can say I'm very happy. They are reliable and delivers a great service. I run a few properties on short term Lettings and they have been excellent at helping me to keep my…",
    services: ['home-cleaning'],
  },
  {
    id: 'digital-mart',
    author: 'Digital Mart Ltd',
    displayName: 'Digital Mart Ltd',
    text: 'Really pleased with the office clean and window clean from Leo Luxe Clean. The team turned up on time, were professional throughout, and the office looked spotless afterwards - windows were left completely streak-free too. Great attention…',
    services: ['office-cleaning'],
  },
  {
    id: 'lucy-charge',
    author: 'Lucy Charge',
    displayName: 'Lucy C.',
    text: 'Kelly and Stacey are excellent, they provide a high quality service and attention to detail.',
    services: [],
  },
  {
    id: 'linda-willis',
    author: 'Linda Willis',
    displayName: 'Linda W.',
    text: 'Not had time to clean properly as always at work so I called these guys, did an amazing job, house so fresh and clean.',
    services: ['home-cleaning'],
  },
  {
    id: 'reece-lane',
    author: 'Reece Lane',
    displayName: 'Reece L.',
    text: 'Clean, professional and very tidy. Could t recommend a better cleaning service. Thank you guys for this.',
    services: [],
  },
  {
    id: 'simone-oleary',
    author: "Simone Keelie O'Leary",
    displayName: 'Simone O.',
    text: "I booked Leo Lux Cleans for a deep clean of my house and I honestly couldn't be happier with the service! Two lovely girls came and did a brilliant job. They were here for around 3 hours and worked so hard, leaving my house looking and…",
    services: ['deep-clean'],
  },
  {
    id: 'onika-edwards',
    author: 'Onika Edwards',
    displayName: 'Onika E.',
    text: 'Amazing service would highly recommend!',
    services: [],
  },
  {
    id: 'susan-jones',
    author: 'Susan Jones',
    displayName: 'Susan J.',
    text: 'Very reliable, always to a high standard 10/10',
    services: ['home-cleaning'],
  },
  {
    // Star rating only, no written review. Counted in the total, never displayed.
    id: 'dean-hosking',
    author: 'Dean Hosking',
    displayName: 'Dean H.',
    text: null,
    services: [],
  },
];

export const writtenReviews = reviews.filter((r) => r.text);

export const getReview = (id: string) => reviews.find((r) => r.id === id);

// The review each service page leads with (as agreed with the business).
const SERVICE_LEAD: Record<string, string> = {
  'home-cleaning': 'stefania-pascaru',
  'office-cleaning': 'digital-mart',
  'deep-clean': 'simone-oleary',
};

const GENERAL_ROTATION = ['lucy-charge', 'reece-lane', 'onika-edwards', 'linda-willis', 'susan-jones'];

// Reviews for a service page, rotated by `seed` (e.g. the area's index) so
// that no single general review appears on every page.
export function reviewsForService(serviceSlug: string, seed = 0, count = 2) {
  const lead = SERVICE_LEAD[serviceSlug] ? [getReview(SERVICE_LEAD[serviceSlug])] : [];
  const sameService = writtenReviews.filter(
    (r) => r.services.includes(serviceSlug) && r.id !== SERVICE_LEAD[serviceSlug]
  );
  const general = GENERAL_ROTATION.map(getReview).filter(
    (r) => r.text && !sameService.includes(r) && r.services.length === 0
  );
  const pool = [...sameService, ...general];
  const picked = [];
  for (let i = 0; picked.length < count - lead.length && i < pool.length; i++) {
    picked.push(pool[(seed + i) % pool.length]);
  }
  return [...lead, ...picked];
}

// A rotating selection of general reviews for home, area and reviews pages.
export function rotatingReviews(seed = 0, count = 3) {
  const pool = writtenReviews.filter((r) => !SERVICE_LEAD_IDS.has(r.id));
  return Array.from({ length: Math.min(count, pool.length) }, (_, i) => pool[(seed + i) % pool.length]);
}

const SERVICE_LEAD_IDS = new Set(Object.values(SERVICE_LEAD));
