import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Leo Luxe Cleans';
const BASE_URL = 'https://leoluxecleans.co.uk';
const DEFAULT_DESCRIPTION =
  'Professional cleaning services in Slough, Windsor & Berkshire. Home cleaning, deep cleans, end of tenancy, office cleaning. Fully insured, DBS checked, eco-friendly. Free quotes.';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  type = 'website',
  image = DEFAULT_IMAGE,
  schema,
  noindex = false,
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Professional Cleaning in Slough & Berkshire`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

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
      <meta property="og:site_name" content={SITE_NAME} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="GB-BKM" />
      <meta name="geo.placename" content="Slough" />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

// Reusable schema generators
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#business`,
  name: 'Leo Luxe Cleans',
  description: DEFAULT_DESCRIPTION,
  url: BASE_URL,
  telephone: '+441753000000',
  email: 'info@leoluxecleans.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Slough',
    addressRegion: 'Berkshire',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5105,
    longitude: -0.5950,
  },
  areaServed: [
    { '@type': 'City', name: 'Slough' },
    { '@type': 'City', name: 'Windsor' },
    { '@type': 'City', name: 'Langley' },
    { '@type': 'City', name: 'Maidenhead' },
    { '@type': 'City', name: 'Eton' },
    { '@type': 'AdministrativeArea', name: 'Berkshire' },
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
  },
  sameAs: [],
};

export const createServiceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.metaDescription,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Leo Luxe Cleans',
    '@id': `${BASE_URL}/#business`,
  },
  areaServed: [
    { '@type': 'City', name: 'Slough' },
    { '@type': 'City', name: 'Windsor' },
    { '@type': 'City', name: 'Langley' },
    { '@type': 'City', name: 'Maidenhead' },
    { '@type': 'City', name: 'Eton' },
    { '@type': 'AdministrativeArea', name: 'Berkshire' },
  ],
  ...(service.pricing && {
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: service.priceFrom,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'GBP',
        price: service.priceFrom,
      },
    },
  }),
});

export const createLocationSchema = (location) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: `Leo Luxe Cleans — ${location.name}`,
  description: location.metaDescription,
  url: `${BASE_URL}/areas/${location.slug}`,
  telephone: '+441753000000',
  email: 'info@leoluxecleans.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: location.name,
    addressRegion: 'Berkshire',
    addressCountry: 'GB',
  },
  areaServed: {
    '@type': 'City',
    name: location.name,
  },
  priceRange: '££',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '200',
    bestRating: '5',
  },
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
