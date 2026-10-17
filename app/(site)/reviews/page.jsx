import ReviewsPage from '../../../src/page-components/ReviewsPage';
import JsonLd from '../../../src/components/JsonLd';
import { breadcrumbSchema } from '../../../src/components/Seo';
import { absoluteUrl } from '../../../src/config/business';

export const metadata = {
  title: { absolute: 'Customer Reviews | Leo Luxe Clean — Slough & Berkshire' },
  description: 'Read verified customer reviews for Leo Luxe Clean. 5-star rated cleaning service across Slough, Windsor, Maidenhead, Hayes and surrounding areas.',
  alternates: { canonical: absoluteUrl('/reviews/') },
  openGraph: {
    title: 'Customer Reviews | Leo Luxe Clean — Slough & Berkshire',
    description: 'Read verified customer reviews for Leo Luxe Clean. 5-star rated cleaning service across Slough, Windsor, Maidenhead, Hayes and surrounding areas.',
    url: absoluteUrl('/reviews/'),
  },
};

export default function Page() {
  const schemas = [breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Reviews', url: '/reviews/' }])];
  return (
    <>
      <JsonLd schema={schemas} />
      <ReviewsPage />
    </>
  );
}
