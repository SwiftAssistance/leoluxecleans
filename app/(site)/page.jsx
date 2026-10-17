import HomePage from '../../src/page-components/HomePage';
import JsonLd from '../../src/components/JsonLd';
import { localBusinessSchema, websiteSchema, createFaqSchema } from '../../src/components/Seo';
import { homeFaqs } from '../../src/data/faqs';
import { absoluteUrl } from '../../src/config/business';

export const metadata = {
  title: { absolute: 'Leo Luxe Clean | Cleaners in Slough, Windsor & Berkshire' },
  description: 'Local cleaners based in Slough. Home cleaning from £60, deep cleans, end of tenancy, office cleaning across Windsor, Berkshire & West London. DBS checked, fully insured. Same-week bookings. Free quote.',
  alternates: { canonical: absoluteUrl('/') },
  openGraph: {
    title: 'Leo Luxe Clean | Cleaners in Slough, Windsor & Berkshire',
    description: 'Local cleaners based in Slough. Home cleaning from £60, deep cleans, end of tenancy, office cleaning across Windsor, Berkshire & West London. DBS checked, fully insured.',
    url: absoluteUrl('/'),
  },
};

export default function Page() {
  return (
    <>
      <JsonLd schema={[localBusinessSchema, websiteSchema, createFaqSchema(homeFaqs)]} />
      <HomePage />
    </>
  );
}
