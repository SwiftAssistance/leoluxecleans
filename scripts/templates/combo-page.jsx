// Template for app/(site)/areas/[slug]/[service]/page.jsx. See PUBLISHED_COMBOS
// in src/lib/comboContent.js before copying it into place.
import { notFound } from 'next/navigation';
import ComboPage from '../../../../../src/page-components/ComboPage';
import JsonLd from '../../../../../src/components/JsonLd';
import { createComboSchema, createFaqSchema, breadcrumbSchema } from '../../../../../src/components/Seo';
import { pageMeta } from '../../../../../src/lib/meta';
import { allCombos, comboPath, getComboContent } from '../../../../../src/lib/comboContent';

// Four main services in the six core towns. Any other /areas/<town>/<x>/ URL
// is not generated and 301s to the town page (see netlify.toml).
export const dynamicParams = false;

export async function generateStaticParams() {
  return allCombos().map(({ area, service }) => ({ slug: area, service }));
}

export async function generateMetadata({ params }) {
  const c = getComboContent(params.slug, params.service);
  if (!c) return {};
  const { detail, service } = c;
  const price = service.priceFrom ? `From £${service.priceFrom}. ` : 'Free quote. ';
  return pageMeta({
    title: `${service.title} in ${detail.name} | Leo Luxe Clean`,
    description: `${service.title} in ${detail.name} (${detail.postcodeDistricts.join(', ')}). ${price}Local, DBS-checked team ${detail.travel.time} away. Fixed price before we start.`,
    path: comboPath(detail.slug, service.slug),
  });
}

export default function Page({ params }) {
  const c = getComboContent(params.slug, params.service);
  if (!c) notFound();
  const { detail, service } = c;
  const schemas = [
    createComboSchema(detail, service),
    createFaqSchema(c.faqs),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Areas', url: '/areas/' },
      { name: detail.name, url: `/areas/${detail.slug}/` },
      { name: service.title, url: comboPath(detail.slug, service.slug) },
    ]),
  ];
  return (
    <>
      <JsonLd schema={schemas} />
      <ComboPage area={params.slug} service={params.service} />
    </>
  );
}
