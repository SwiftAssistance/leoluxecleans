import ContactPage from '../../../src/page-components/ContactPage';
import JsonLd from '../../../src/components/JsonLd';
import { createFaqSchema, breadcrumbSchema } from '../../../src/components/Seo';
import { contactFaqs } from '../../../src/data/faqs';
import { business } from '../../../src/config/business';
import { pageMeta } from '../../../src/lib/meta';


export const metadata = pageMeta({
  title: 'Contact Leo Luxe Clean | Free Cleaning Quote',
  description: `Get a free cleaning quote from Leo Luxe Clean. Call ${business.phone.display} or use our form. Based in Slough, covering Windsor and Berkshire.`,
  path: '/contact/',
});

export default function Page() {
  const schemas = [
    createFaqSchema(contactFaqs),
    breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact/' }]),
  ];
  return (
    <>
      <JsonLd schema={schemas} />
      <ContactPage />
    </>
  );
}
