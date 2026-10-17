import ReviewsPage from '../../../src/page-components/ReviewsPage';
import JsonLd from '../../../src/components/JsonLd';
import { breadcrumbSchema } from '../../../src/components/Seo';
import { pageMeta } from '../../../src/lib/meta';

export const metadata = pageMeta({
  title: 'Customer Reviews | Leo Luxe Clean, Slough',
  description:
    'Read what customers say about Leo Luxe Clean on Google: home, deep, office and short-let cleaning across Slough, Windsor and Berkshire.',
  path: '/reviews/',
});

export default function Page() {
  const schemas = [breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Reviews', url: '/reviews/' }])];
  return (
    <>
      <JsonLd schema={schemas} />
      <ReviewsPage />
    </>
  );
}
