import { notFound } from 'next/navigation';
import AreaServicePage from '../../../../../src/page-components/AreaServicePage';
import JsonLd from '../../../../../src/components/JsonLd';
import { breadcrumbSchema } from '../../../../../src/components/Seo';
import { getLocationBySlug, locations } from '../../../../../src/data/locations';
import { getServiceBySlug, services } from '../../../../../src/data/services';

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
  const location = getLocationBySlug(params.slug);
  const service = getServiceBySlug(params.serviceSlug);
  if (!location || !service) return {};
  const priceClause = service.priceFrom ? ` From £${service.priceFrom}.` : '';
  const title = `${service.title} in ${location.name} | Leo Luxe Clean`;
  const description = `Looking for ${service.title.toLowerCase()} in ${location.name}? Leo Luxe Clean covers ${location.postcodes} and all of ${location.county}.${priceClause} DBS-checked, eco-friendly, 5-star rated. Same-week availability. Free quotes — call 01753 257118.`;
  return {
    title,
    description,
    alternates: { canonical: `https://leoluxeclean.co.uk/areas/${location.slug}/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `https://leoluxeclean.co.uk/areas/${location.slug}/${service.slug}`,
    },
  };
}

export default function Page({ params }) {
  const location = getLocationBySlug(params.slug);
  const service = getServiceBySlug(params.serviceSlug);
  if (!location || !service) notFound();
  const schemas = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: location.name, url: `/areas/${location.slug}` },
      { name: service.title },
    ]),
  ];
  return (
    <>
      <JsonLd schema={schemas} />
      <AreaServicePage areaSlug={params.slug} serviceSlug={params.serviceSlug} />
    </>
  );
}
