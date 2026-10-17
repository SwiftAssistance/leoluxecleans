import { notFound } from 'next/navigation';
import LocationPage from '../../../../src/page-components/LocationPage';
import JsonLd from '../../../../src/components/JsonLd';
import { createLocationSchema, createFaqSchema, breadcrumbSchema } from '../../../../src/components/Seo';
import { getLocationBySlug, locations } from '../../../../src/data/locations';
import { pageMeta } from '../../../../src/lib/meta';

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }) {
  const location = getLocationBySlug(params.slug);
  if (!location) return {};
  return pageMeta({
    title: `Cleaners in ${location.name} | From £60 | Leo Luxe Clean`,
    description: `Local cleaners covering ${location.name} (${location.postcodes}). Home cleaning from £60, deep cleans from £120, end of tenancy from £150. Free quote.`,
    path: `/areas/${location.slug}/`,
  });
}

export default function Page({ params }) {
  const location = getLocationBySlug(params.slug);
  if (!location) notFound();
  const faqs = location.faqs || [];
  const schemas = [
    createLocationSchema(location),
    ...(faqs.length > 0 ? [createFaqSchema(faqs)] : []),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Areas', url: '/areas/' },
      { name: location.name, url: `/areas/${location.slug}/` },
    ]),
  ];
  return (
    <>
      <JsonLd schema={schemas} />
      <LocationPage slug={params.slug} />
    </>
  );
}
