import ContactPage from '../../../src/page-components/ContactPage';
import JsonLd from '../../../src/components/JsonLd';
import { createFaqSchema, breadcrumbSchema } from '../../../src/components/Seo';

const faqs = [
  { q: 'How quickly can you start?', a: "We can usually book you in within the same week. For urgent jobs, we offer same-day and next-day availability where possible." },
  { q: 'Do I need to provide cleaning products?', a: "No — we bring everything we need, including professional-grade eco-friendly products and all equipment." },
  { q: 'Are your team DBS checked?', a: "Absolutely. Every team member is fully DBS checked, insured, and trained to our high standards." },
  { q: "What if I'm not happy with the clean?", a: "We offer a 100% satisfaction guarantee. If you're not completely happy, we'll come back and sort it at no extra charge." },
];

export const metadata = {
  title: 'Contact Us — Free Cleaning Quote in Slough & Berkshire',
  description: 'Get a free cleaning quote from Leo Luxe Clean. Call 01753 257118 or fill in our form. We cover Slough, Windsor, Langley & Berkshire. Response within 2 hours.',
  alternates: { canonical: 'https://leoluxeclean.co.uk/contact' },
  openGraph: { url: 'https://leoluxeclean.co.uk/contact' },
};

export default function Page() {
  const schemas = [
    createFaqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Contact' }]),
  ];
  return (
    <>
      <JsonLd schema={schemas} />
      <ContactPage />
    </>
  );
}
