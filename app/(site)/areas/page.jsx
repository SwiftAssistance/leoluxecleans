import AreasPage from '../../../src/page-components/AreasPage';
import JsonLd from '../../../src/components/JsonLd';
import { breadcrumbSchema } from '../../../src/components/Seo';
import { pageMeta } from '../../../src/lib/meta';

export const metadata = pageMeta({
  title: 'Areas We Cover: Berkshire & West London | Leo Luxe Clean',
  description:
    'Based in Slough, covering Windsor, Maidenhead, Langley, Ascot, Eton and nearby Berkshire, Buckinghamshire and West London towns. DBS checked, insured.',
  path: '/areas/',
});

export default function Page() {
  const schemas = [breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Areas', url: '/areas/' }])];
  return (
    <>
      <JsonLd schema={schemas} />
      <AreasPage />
    </>
  );
}
