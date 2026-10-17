import HomePage from '../../src/page-components/HomePage';
import JsonLd from '../../src/components/JsonLd';
import { localBusinessSchema, websiteSchema, createFaqSchema } from '../../src/components/Seo';
import { homeFaqs } from '../../src/data/faqs';
import { pageMeta } from '../../src/lib/meta';

export const metadata = pageMeta({
  title: 'Leo Luxe Clean | Slough Cleaners, Rated 5.0 on Google',
  description:
    'Local cleaners based in Slough. Home cleaning from £60, deep cleans, end of tenancy and office cleaning across Windsor, Maidenhead and Berkshire.',
  path: '/',
});

export default function Page() {
  return (
    <>
      <JsonLd schema={[localBusinessSchema, websiteSchema, createFaqSchema(homeFaqs)]} />
      <HomePage />
    </>
  );
}
