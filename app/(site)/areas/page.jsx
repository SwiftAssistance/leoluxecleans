import AreasPage from '../../../src/page-components/AreasPage';
import JsonLd from '../../../src/components/JsonLd';
import { breadcrumbSchema } from '../../../src/components/Seo';

export const metadata = {
  title: 'Areas We Cover in Berkshire & West London',
  description: 'Leo Luxe Clean covers Slough, Windsor, Langley, Maidenhead, Bracknell, Ascot, Eton, Burnham, Hayes, Southall, Uxbridge, Ealing, Greenford, Northolt, West Drayton & Hounslow. DBS-checked, fully insured. Free quote.',
  alternates: { canonical: 'https://leoluxeclean.co.uk/areas' },
  openGraph: {
    title: 'Areas We Cover in Berkshire & West London | Leo Luxe Clean',
    description: 'Leo Luxe Clean covers Slough, Windsor, Langley, Maidenhead, Bracknell, Ascot, Eton, Burnham, Hayes, Southall, Uxbridge, Ealing, Greenford, Northolt, West Drayton & Hounslow.',
    url: 'https://leoluxeclean.co.uk/areas',
  },
};

export default function Page() {
  const schemas = [breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Areas' }])];
  return (
    <>
      <JsonLd schema={schemas} />
      <AreasPage />
    </>
  );
}
