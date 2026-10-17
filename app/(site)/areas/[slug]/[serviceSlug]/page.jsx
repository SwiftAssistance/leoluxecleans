import { notFound } from 'next/navigation';
import AreaServicePage from '../../../../../src/page-components/AreaServicePage';
import JsonLd from '../../../../../src/components/JsonLd';
import { breadcrumbSchema, createFaqSchema, createAreaServiceSchema } from '../../../../../src/components/Seo';
import { business } from '../../../../../src/config/business';
import { pageMeta } from '../../../../../src/lib/meta';
import { locations } from '../../../../../src/data/locations';
import { services } from '../../../../../src/data/services';
import { getAreaServiceContent } from '../../../../../src/lib/areaServiceContent';

export async function generateStaticParams() {
  const params = [];
  for (const loc of locations) {
    for (const svc of services) {
      params.push({ slug: loc.slug, serviceSlug: svc.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const c = getAreaServiceContent(params.slug, params.serviceSlug);
  if (!c) return {};
  const { location, service } = c;
  const full = `${service.title} in ${location.name} | ${business.name}`;
  const title = full.length <= 60 ? full : full.replace(' & Commercial', '');
  const price = service.priceFrom ? `from £${service.priceFrom}` : 'by custom quote';
  return pageMeta({
    title,
    description: `${service.title} in ${location.name} (${c.postcodes}), ${price}. Local, DBS-checked team based in Slough. Call ${business.phone.display} for a free quote.`,
    path: `/areas/${location.slug}/${service.slug}/`,
    // Only the core areas get indexable area x service pages; the rest stay
    // reachable for visitors but are kept out of the index and the sitemap.
    noindex: !c.indexable,
  });
}

export default function Page({ params }) {
  const c = getAreaServiceContent(params.slug, params.serviceSlug);
  if (!c) notFound();
  const { location, service } = c;
  const schemas = [
    createAreaServiceSchema(location, service),
    createFaqSchema(c.faqs),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Areas', url: '/areas/' },
      { name: location.name, url: `/areas/${location.slug}/` },
      { name: service.title, url: `/areas/${location.slug}/${service.slug}/` },
    ]),
  ];
  return (
    <>
      <JsonLd schema={schemas} />
      <AreaServicePage areaSlug={params.slug} serviceSlug={params.serviceSlug} />
    </>
  );
}
