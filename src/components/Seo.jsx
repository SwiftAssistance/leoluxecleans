const BASE_URL = 'https://leoluxeclean.co.uk';
const SITE_NAME = 'Leo Luxe Clean';
const DEFAULT_DESCRIPTION =
  'Local cleaners based in Slough, covering Windsor, Maidenhead, Hayes, Uxbridge, Ealing, Hounslow & surrounding areas. Home cleaning, deep cleans, end of tenancy, office cleaning. DBS checked, fully insured. Free quotes.';

// Seo is no longer used directly — metadata is handled by Next.js generateMetadata.
// This file is kept as a schema utility module.
const Seo = () => null;

// ============================================================
// SCHEMA GENERATORS
// ============================================================

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HousekeepingBusiness'],
  '@id': `${BASE_URL}/#business`,
  name: 'Leo Luxe Clean',
  description: DEFAULT_DESCRIPTION,
  url: BASE_URL,
  telephone: '+441753257118',
  email: 'info@leoluxeclean.co.uk',
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/favicon-512.png`,
    width: 512,
    height: 512,
  },
  image: `${BASE_URL}/og-image.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Slough',
    addressLocality: 'Slough',
    addressRegion: 'Berkshire',
    postalCode: 'SL1',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5105,
    longitude: -0.595,
  },
  areaServed: [
    { '@type': 'City', name: 'Slough', containedInPlace: { '@type': 'AdministrativeArea', name: 'Berkshire' } },
    { '@type': 'City', name: 'Windsor', containedInPlace: { '@type': 'AdministrativeArea', name: 'Berkshire' } },
    { '@type': 'City', name: 'Langley', containedInPlace: { '@type': 'AdministrativeArea', name: 'Berkshire' } },
    { '@type': 'City', name: 'Maidenhead', containedInPlace: { '@type': 'AdministrativeArea', name: 'Berkshire' } },
    { '@type': 'City', name: 'Ascot', containedInPlace: { '@type': 'AdministrativeArea', name: 'Berkshire' } },
    { '@type': 'City', name: 'Bracknell', containedInPlace: { '@type': 'AdministrativeArea', name: 'Berkshire' } },
    { '@type': 'City', name: 'Eton', containedInPlace: { '@type': 'AdministrativeArea', name: 'Berkshire' } },
    { '@type': 'City', name: 'Burnham', containedInPlace: { '@type': 'AdministrativeArea', name: 'Buckinghamshire' } },
    { '@type': 'City', name: 'Hayes', containedInPlace: { '@type': 'AdministrativeArea', name: 'West London' } },
    { '@type': 'City', name: 'Southall', containedInPlace: { '@type': 'AdministrativeArea', name: 'West London' } },
    { '@type': 'City', name: 'Uxbridge', containedInPlace: { '@type': 'AdministrativeArea', name: 'West London' } },
    { '@type': 'City', name: 'Ealing', containedInPlace: { '@type': 'AdministrativeArea', name: 'West London' } },
    { '@type': 'City', name: 'Greenford', containedInPlace: { '@type': 'AdministrativeArea', name: 'West London' } },
    { '@type': 'City', name: 'Northolt', containedInPlace: { '@type': 'AdministrativeArea', name: 'West London' } },
    { '@type': 'City', name: 'West Drayton', containedInPlace: { '@type': 'AdministrativeArea', name: 'West London' } },
    { '@type': 'City', name: 'Hounslow', containedInPlace: { '@type': 'AdministrativeArea', name: 'West London' } },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:00',
    },
  ],
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '3',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
      author: { '@type': 'Person', name: 'Tom Richards' },
      reviewBody: "Found Leo Luxe through a neighbour's recommendation and I'm so glad I did. You can tell they genuinely care about doing a good job. My house has never been cleaner.",
      datePublished: '2024-11-01',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
      author: { '@type': 'Person', name: 'Priya Sharma' },
      reviewBody: 'Had them do a deep clean before our baby arrived. They got into every nook and cranny. Brilliant service from start to finish.',
      datePublished: '2024-12-15',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
      author: { '@type': 'Person', name: 'James Taylor' },
      reviewBody: 'End of tenancy clean was perfect. Got our full deposit back. They even cleaned inside the oven which I thought was a lost cause!',
      datePublished: '2025-01-20',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cleaning Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Cleaning', url: `${BASE_URL}/services/home-cleaning` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deep Cleaning', url: `${BASE_URL}/services/deep-clean` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'End of Tenancy Cleaning', url: `${BASE_URL}/services/end-of-tenancy` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office & Commercial Cleaning', url: `${BASE_URL}/services/office-cleaning` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'After Event Cleaning', url: `${BASE_URL}/services/after-events` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Specialist Cleaning', url: `${BASE_URL}/services/specialist-cleaning` } },
    ],
  },
  sameAs: [
    'https://www.instagram.com/leoluxeclean',
    // Add your Google Business Profile URL here once confirmed, e.g.:
    // 'https://g.page/leoluxeclean',
    // 'https://www.facebook.com/leoluxeclean',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: SITE_NAME,
  url: BASE_URL,
  description: DEFAULT_DESCRIPTION,
  publisher: {
    '@id': `${BASE_URL}/#business`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/services/{search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: SITE_NAME,
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/favicon-512.png`,
    width: 512,
    height: 512,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+441753257118',
    contactType: 'customer service',
    email: 'info@leoluxeclean.co.uk',
    areaServed: 'GB',
    availableLanguage: 'English',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:00',
    },
  },
};

export const createItemListSchema = (services) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Cleaning Services — Leo Luxe Clean',
  description: 'Professional cleaning services available in Berkshire and West London — Slough, Windsor, Maidenhead, Hayes, Uxbridge, Ealing, Hounslow and surrounding areas.',
  numberOfItems: services.length,
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    description: s.metaDescription,
    url: `${BASE_URL}/services/${s.slug}`,
    ...(s.priceFrom && {
      offers: {
        '@type': 'Offer',
        priceCurrency: 'GBP',
        price: s.priceFrom,
        availability: 'https://schema.org/InStock',
      },
    }),
  })),
});

export const createServiceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/services/${service.slug}#service`,
  name: service.title,
  alternateName: service.tagline,
  description: service.metaDescription,
  url: `${BASE_URL}/services/${service.slug}`,
  ...(service.image && { image: `${BASE_URL}${service.image}` }),
  provider: {
    '@type': 'LocalBusiness',
    name: 'Leo Luxe Clean',
    '@id': `${BASE_URL}/#business`,
    telephone: '+441753257118',
  },
  areaServed: [
    { '@type': 'City', name: 'Slough' },
    { '@type': 'City', name: 'Windsor' },
    { '@type': 'City', name: 'Langley' },
    { '@type': 'City', name: 'Maidenhead' },
    { '@type': 'City', name: 'Eton' },
    { '@type': 'City', name: 'Burnham' },
    { '@type': 'City', name: 'Ascot' },
    { '@type': 'City', name: 'Bracknell' },
    { '@type': 'City', name: 'Hayes' },
    { '@type': 'City', name: 'Southall' },
    { '@type': 'City', name: 'Uxbridge' },
    { '@type': 'City', name: 'Ealing' },
    { '@type': 'City', name: 'Greenford' },
    { '@type': 'City', name: 'Northolt' },
    { '@type': 'City', name: 'West Drayton' },
    { '@type': 'City', name: 'Hounslow' },
    { '@type': 'AdministrativeArea', name: 'Berkshire' },
    { '@type': 'AdministrativeArea', name: 'West London' },
  ],
  ...(service.priceFrom && {
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: service.priceFrom,
      availability: 'https://schema.org/InStock',
    },
  }),
  ...(service.review && {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '1',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
        author: { '@type': 'Person', name: service.review.author },
        reviewBody: service.review.text,
        datePublished: service.review.date,
      },
    ],
  }),
});

export const createLocationSchema = (location) => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HousekeepingBusiness'],
  '@id': `${BASE_URL}/areas/${location.slug}#business`,
  name: `Leo Luxe Clean — ${location.name}`,
  description: location.metaDescription,
  url: `${BASE_URL}/areas/${location.slug}`,
  telephone: '+441753257118',
  email: 'info@leoluxeclean.co.uk',
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/favicon-512.png`,
    width: 512,
    height: 512,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: location.name,
    addressRegion: location.county || 'Berkshire',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'City', name: location.name },
    ...location.areas.map((a) => ({ '@type': 'Place', name: a })),
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:00',
    },
  ],
  priceRange: '££',
  ...(location.reviews.length > 0 && {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: String(location.reviews.length),
      bestRating: '5',
      worstRating: '1',
    },
    review: location.reviews.map((r) => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
      author: { '@type': 'Person', name: r.author },
      reviewBody: r.text,
      datePublished: r.date || '2025-01-01',
    })),
  }),
});

export const createFaqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
});

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url ? `${BASE_URL}${item.url}` : undefined,
  })),
});

export default Seo;
