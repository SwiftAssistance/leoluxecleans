// JSON-LD generators. Every business fact comes from src/config/business.ts.
// No Review or AggregateRating markup: reviews are shown to visitors only.
import { business, sameAs, absoluteUrl, BUSINESS_ID, SITE_URL, CORE_AREA_SLUGS } from '../config/business';
import { getLocationBySlug } from '../data/locations';

const DESCRIPTION =
  'Local cleaning company based in Slough. Home cleaning, deep cleans, end of tenancy, office and specialist cleaning across Slough, Windsor, Maidenhead, Langley, Ascot and Eton.';

const coreAreasServed = CORE_AREA_SLUGS.map((slug) => ({
  '@type': 'City',
  name: getLocationBySlug(slug).name,
}));

const provider = { '@id': BUSINESS_ID };

// The one LocalBusiness entity, output on the homepage only.
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BUSINESS_ID,
  name: business.name,
  description: DESCRIPTION,
  url: business.url,
  telephone: business.phone.e164,
  email: business.email,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}${business.ogImage.url}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.streetAddress,
    addressLocality: business.address.addressLocality,
    postalCode: business.address.postalCode,
    addressCountry: business.address.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.geo.latitude,
    longitude: business.geo.longitude,
  },
  hasMap: business.google.profileUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: business.hours.days,
      opens: business.hours.opens,
      closes: business.hours.closes,
    },
  ],
  areaServed: coreAreasServed,
  sameAs,
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: business.name,
  url: business.url,
  publisher: provider,
};

export const createItemListSchema = (services) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `Cleaning services from ${business.name}`,
  numberOfItems: services.length,
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: absoluteUrl(`/services/${s.slug}/`),
  })),
});

const offer = (service) =>
  service.priceFrom && {
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: service.priceFrom,
      description: `From £${service.priceFrom}`,
    },
  };

export const createServiceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': absoluteUrl(`/services/${service.slug}/#service`),
  name: service.title,
  serviceType: service.title,
  description: service.metaDescription,
  url: absoluteUrl(`/services/${service.slug}/`),
  ...(service.image && { image: `${SITE_URL}${service.image}` }),
  provider,
  areaServed: coreAreasServed,
  ...offer(service),
});

// Area page: the cleaning service offered in that area, provided by the one
// homepage business (no per-area LocalBusiness).
export const createLocationSchema = (location) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': absoluteUrl(`/areas/${location.slug}/#service`),
  name: `Cleaning services in ${location.name}`,
  serviceType: 'Cleaning',
  url: absoluteUrl(`/areas/${location.slug}/`),
  provider,
  areaServed: { '@type': 'City', name: location.name },
});


// Only use where the same questions and answers are visible in the page body.
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
    ...(item.url && { item: absoluteUrl(item.url) }),
  })),
});
