import ServicesPage from '../../../src/page-components/ServicesPage';
import JsonLd from '../../../src/components/JsonLd';
import { createItemListSchema, breadcrumbSchema } from '../../../src/components/Seo';
import { services } from '../../../src/data/services';
import { absoluteUrl } from '../../../src/config/business';

export const metadata = {
  title: 'Cleaning Services in Slough, Windsor & Berkshire',
  description: 'Home cleaning from £60, deep cleans from £120, end of tenancy from £150, office cleaning and more. DBS-checked, eco-friendly, 5-star rated team serving Slough, Windsor, Langley, Maidenhead & surrounding areas. Free quotes.',
  alternates: { canonical: absoluteUrl('/services/') },
  openGraph: {
    title: 'Cleaning Services in Slough, Windsor & Berkshire | Leo Luxe Clean',
    description: 'Home cleaning from £60, deep cleans from £120, end of tenancy from £150, office cleaning and more. DBS-checked, eco-friendly, 5-star rated team. Free quotes.',
    url: absoluteUrl('/services/'),
  },
};

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
