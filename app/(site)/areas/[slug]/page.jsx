import { notFound } from 'next/navigation';
import AreaPage from '../../../../src/page-components/AreaPage';
import JsonLd from '../../../../src/components/JsonLd';
import { createLocationSchema, createFaqSchema, breadcrumbSchema } from '../../../../src/components/Seo';
import { pageMeta } from '../../../../src/lib/meta';
import { areas, getAreaDetail } from '../../../../src/data/areas';
import { getAreaPageContent } from '../../../../src/lib/areaContent';

// Only the six core areas have their own page. Other towns we cover are
// listed on /areas/, and their old URLs 301 there (see netlify.toml).
export const dynamicParams = false;

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const detail = getAreaDetail(params.slug);
  if (!detail) return {};
  return pageMeta({
    title: `Cleaners in ${detail.name} | From £60 | Leo Luxe Clean`,
    description: `Local cleaners in ${detail.name} (${detail.postcodeDistricts.join(', ')}). Home cleaning from £60, deep cleans from £120, end of tenancy from £150. Free quote.`,
    path: `/areas/${detail.slug}/`,
  });
}

export default function Page({ params }) {
  const c = getAreaPageContent(params.slug);
  if (!c) notFound();
  const { detail } = c;
  const schemas = [
    createLocationSchema(detail),
    createFaqSchema(c.faqs),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Areas', url: '/areas/' },
      { name: detail.name, url: `/areas/${detail.slug}/` },
    ]),
  ];
  return (
    <>
      <JsonLd schema={schemas} />
      <AreaPage slug={params.slug} />
    </>
  );
}
