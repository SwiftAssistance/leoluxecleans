import AreasPage from '../../../src/page-components/AreasPage';
import JsonLd from '../../../src/components/JsonLd';
import { breadcrumbSchema } from '../../../src/components/Seo';
import { absoluteUrl } from '../../../src/config/business';

export const metadata = {
  title: 'Areas We Cover in Berkshire & West London',
  description: 'Leo Luxe Clean covers Slough, Windsor, Langley, Maidenhead, Bracknell, Ascot, Eton, Burnham, Hayes, Southall, Uxbridge, Ealing, Greenford, Northolt, West Drayton & Hounslow. DBS-checked, fully insured. Free quote.',
  alternates: { canonical: absoluteUrl('/areas/') },
  openGraph: {
    title: 'Areas We Cover in Berkshire & West London | Leo Luxe Clean',
    description: 'Leo Luxe Clean covers Slough, Windsor, Langley, Maidenhead, Bracknell, Ascot, Eton, Burnham, Hayes, Southall, Uxbridge, Ealing, Greenford, Northolt, West Drayton & Hounslow.',
    url: absoluteUrl('/areas/'),
  },
};

export default function Page() {
  const schemas = [breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Areas', url: '/areas/' }])];
  return (
    <>
      <JsonLd schema={schemas} />
      <AreasPage />
    </>
  );
}
