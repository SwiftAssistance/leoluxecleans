import ReviewsPage from '../../../src/page-components/ReviewsPage';
import JsonLd from '../../../src/components/JsonLd';
import { breadcrumbSchema } from '../../../src/components/Seo';

export const metadata = {
  title: 'Customer Reviews | Leo Luxe Clean — Slough & Berkshire',
  description: 'Read verified customer reviews for Leo Luxe Clean. 5-star rated cleaning service across Slough, Windsor, Maidenhead, Hayes and surrounding areas.',
  alternates: { canonical: 'https://leoluxeclean.co.uk/reviews' },
  openGraph: { url: 'https://leoluxeclean.co.uk/reviews' },
};

export default function Page() {
  const schemas = [breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Reviews' }])];
  return (
    <>
      <JsonLd schema={schemas} />
      <ReviewsPage />
    </>
  );
}
