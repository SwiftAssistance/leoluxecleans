import ServicesPage from '../../../src/page-components/ServicesPage';
import JsonLd from '../../../src/components/JsonLd';
import { createItemListSchema, breadcrumbSchema } from '../../../src/components/Seo';
import { services } from '../../../src/data/services';
import { pageMeta } from '../../../src/lib/meta';

export const metadata = pageMeta({
  title: 'Cleaning Services in Slough & Windsor | Leo Luxe Clean',
  description:
    'Home cleaning from £60, deep cleans from £120, end of tenancy from £150, plus office, after-event and specialist cleaning across Slough and Berkshire.',
  path: '/services/',
});

export default function Page() {
  const schemas = [
    createItemListSchema(services),
    breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services/' }]),
  ];
  return (
    <>
      <JsonLd schema={schemas} />
      <ServicesPage />
    </>
  );
}
