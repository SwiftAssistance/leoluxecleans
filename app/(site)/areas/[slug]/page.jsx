import { notFound } from 'next/navigation';
import LocationPage from '../../../../src/page-components/LocationPage';
import JsonLd from '../../../../src/components/JsonLd';
import { createLocationSchema, createFaqSchema, breadcrumbSchema } from '../../../../src/components/Seo';
import { getLocationBySlug, locations } from '../../../../src/data/locations';

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }) {
  const location = getLocationBySlug(params.slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `https://leoluxeclean.co.uk/areas/${location.slug}` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://leoluxeclean.co.uk/areas/${location.slug}`,
    },
  };
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
      { name: 'Areas', url: '/' },
      { name: location.name },
    ]),
  ];
  return (
    <>
      <JsonLd schema={schemas} />
      <LocationPage slug={params.slug} />
    </>
  );
}
