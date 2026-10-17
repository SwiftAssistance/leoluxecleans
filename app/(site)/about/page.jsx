import AboutPage from '../../../src/page-components/AboutPage';
import JsonLd from '../../../src/components/JsonLd';
import { breadcrumbSchema } from '../../../src/components/Seo';
import { pageMeta } from '../../../src/lib/meta';

export const metadata = pageMeta({
  title: 'About Leo Luxe Clean | Local Cleaners in Slough',
  description:
    'Leo Luxe Clean is a small, local cleaning team based in Slough. DBS checked, fully insured, and serving homes and businesses across Berkshire.',
  path: '/about/',
});

export default function Page() {
  const schemas = [breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/about/' }])];
  return (
    <>
      <JsonLd schema={schemas} />
      <AboutPage />
    </>
  );
}
