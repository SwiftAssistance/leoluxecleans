import { notFound } from 'next/navigation';
import AreaServicePage from '../../../../../src/page-components/AreaServicePage';
import JsonLd from '../../../../../src/components/JsonLd';
import { breadcrumbSchema, createFaqSchema } from '../../../../../src/components/Seo';
import { absoluteUrl, business } from '../../../../../src/config/business';
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
  const url = absoluteUrl(`/areas/${location.slug}/${service.slug}/`);
  const title = `${service.title} in ${location.name} | ${business.name}`;
  const price = service.priceFrom ? `from £${service.priceFrom}` : 'by custom quote';
  const description = `${service.title} in ${location.name} (${c.postcodes}), ${price}. Local, DBS-checked team based in Slough. Call ${business.phone.display} for a free quote.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    // Only the core areas get indexable area x service pages; the rest stay
    // reachable for visitors but are kept out of the index and the sitemap.
    ...(!c.indexable && { robots: { index: false, follow: true } }),
    openGraph: { title, description, url },
  };
}

export default function Page({ params }) {
  const c = getAreaServiceContent(params.slug, params.serviceSlug);
  if (!c) notFound();
  const { location, service } = c;
  const schemas = [
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
