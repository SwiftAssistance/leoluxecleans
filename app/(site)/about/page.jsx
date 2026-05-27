import AboutPage from '../../../src/page-components/AboutPage';
import JsonLd from '../../../src/components/JsonLd';
import { breadcrumbSchema } from '../../../src/components/Seo';

export const metadata = {
  title: 'About Leo Luxe Clean | Professional Cleaners in Slough',
  description: 'Meet the Leo Luxe Clean team. Local cleaners based in Slough, Berkshire. DBS checked, fully insured, with a commitment to proper cleaning standards across Berkshire and West London.',
  alternates: { canonical: 'https://leoluxeclean.co.uk/about' },
  openGraph: { url: 'https://leoluxeclean.co.uk/about' },
};

export default function Page() {
  const schemas = [breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About' }])];
  return (
    <>
      <JsonLd schema={schemas} />
      <AboutPage />
    </>
  );
}
