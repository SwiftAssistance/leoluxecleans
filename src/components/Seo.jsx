import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Leo Luxe Clean';
const BASE_URL = 'https://leoluxeclean.co.uk';
const DEFAULT_DESCRIPTION =
  'Professional cleaning services in Berkshire & West London. Serving Slough, Windsor, Maidenhead, Hayes, Uxbridge, Ealing, Hounslow & more. Home cleaning, deep cleans, end of tenancy, office cleaning. Local, independent team. Fully insured, DBS checked, eco-friendly. Free quotes.';
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;

const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  type = 'website',
  image = DEFAULT_IMAGE,
  schema,
  noindex = false,
}) => {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Professional Cleaning in Berkshire & West London`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;
  const schemaString = Array.isArray(schema)
    ? JSON.stringify(schema)
    : schema
    ? JSON.stringify(schema)
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="GB-BRK" />
      <meta name="geo.placename" content="Slough" />
      <meta name="geo.position" content="51.5105;-0.5950" />
      <meta name="ICBM" content="51.5105, -0.5950" />

      {/* JSON-LD Structured Data */}
      {schemaString && (
        <script type="application/ld+json">{schemaString}</script>
      )}
    </Helmet>
  );
};

// ============================================================
// SCHEMA GENERATORS
// ============================================================

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HousekeepingBusiness', 'CleaningService'],
  '@id': `${BASE_URL}/#business`,
  name: 'Leo Luxe Clean',
  description: DEFAULT_DESCRIPTION,
  url: BASE_URL,
  telephone: '+441753257118',
  email: 'info@leoluxeclean.co.uk',
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
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
  openingHours: 'Mo-Sa 08:00-19:00',
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '200',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Tom Richards' },
      reviewBody: "Found Leo Luxe through a neighbour's recommendation and I'm so glad I did. You can tell they genuinely care about doing a good job. My house has never been cleaner.",
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Priya Sharma' },
      reviewBody: 'Had them do a deep clean before our baby arrived. They got into every nook and cranny. Brilliant service from start to finish.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'James Taylor' },
      reviewBody: 'End of tenancy clean was perfect. Got our full deposit back. They even cleaned inside the oven which I thought was a lost cause!',
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
    // 'https://www.facebook.com/leoluxeclean',
    // 'https://www.google.com/maps/place/Leo+Luxe+Clean',
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
    url: `${BASE_URL}/logo.png`,
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
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'GBP',
        price: service.priceFrom,
        description: `Starting from £${service.priceFrom}`,
      },
    },
  }),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '200',
    bestRating: '5',
  },
});

export const createLocationSchema = (location) => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HousekeepingBusiness', 'CleaningService'],
  '@id': `${BASE_URL}/areas/${location.slug}#business`,
  name: `Leo Luxe Clean — ${location.name}`,
  description: location.metaDescription,
  url: `${BASE_URL}/areas/${location.slug}`,
  telephone: '+441753257118',
  email: 'info@leoluxeclean.co.uk',
  logo: `${BASE_URL}/logo.png`,
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '200',
    bestRating: '5',
    worstRating: '1',
  },
  ...(location.reviews.length > 0 && {
    review: location.reviews.map((r) => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: r.author },
      reviewBody: r.text,
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
