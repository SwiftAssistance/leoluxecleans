import AboutPage from '../../../src/page-components/AboutPage';
import JsonLd from '../../../src/components/JsonLd';
import { breadcrumbSchema } from '../../../src/components/Seo';
import { absoluteUrl } from '../../../src/config/business';

export const metadata = {
  title: { absolute: 'About Leo Luxe Clean | Professional Cleaners in Slough' },
  description: 'Meet the Leo Luxe Clean team. Local cleaners based in Slough, Berkshire. DBS checked, fully insured, with a commitment to proper cleaning standards across Berkshire and West London.',
  alternates: { canonical: absoluteUrl('/about/') },
  openGraph: {
    title: 'About Leo Luxe Clean | Professional Cleaners in Slough',
    description: 'Meet the Leo Luxe Clean team. Local cleaners based in Slough, Berkshire. DBS checked, fully insured, with a commitment to proper cleaning standards across Berkshire and West London.',
    url: absoluteUrl('/about/'),
  },
};

export default function Page() {
  const schemas = [breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/about/' }])];
  return (
    <>
      <JsonLd schema={schemas} />
      <AboutPage />
    </>
  );
}
