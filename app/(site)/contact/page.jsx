import ContactPage from '../../../src/page-components/ContactPage';
import JsonLd from '../../../src/components/JsonLd';
import { createFaqSchema, breadcrumbSchema } from '../../../src/components/Seo';
import { contactFaqs } from '../../../src/data/faqs';
import { absoluteUrl } from '../../../src/config/business';


export const metadata = {
  title: 'Contact Us — Free Cleaning Quote in Slough & Berkshire',
  description: 'Get a free cleaning quote from Leo Luxe Clean. Call 07845 239774 or fill in our form. We cover Slough, Windsor, Langley & Berkshire. Response within 2 hours.',
  alternates: { canonical: absoluteUrl('/contact/') },
  openGraph: {
    title: 'Contact Us — Free Cleaning Quote in Slough & Berkshire | Leo Luxe Clean',
    description: 'Get a free cleaning quote from Leo Luxe Clean. Call 07845 239774 or fill in our form. We cover Slough, Windsor, Langley & Berkshire. Response within 2 hours.',
    url: absoluteUrl('/contact/'),
  },
};

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
