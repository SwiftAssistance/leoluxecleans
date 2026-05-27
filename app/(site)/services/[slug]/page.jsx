import { notFound } from 'next/navigation';
import ServiceDetailPage from '../../../../src/page-components/ServiceDetailPage';
import JsonLd from '../../../../src/components/JsonLd';
import { createServiceSchema, createFaqSchema, breadcrumbSchema } from '../../../../src/components/Seo';
import { getServiceBySlug, services } from '../../../../src/data/services';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://leoluxeclean.co.uk/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://leoluxeclean.co.uk/services/${service.slug}`,
    },
  };
}

export default function Page({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  const schemas = [
    createServiceSchema(service),
    createFaqSchema(service.faqs),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: service.title },
    ]),
  ];
  return (
    <>
      <JsonLd schema={schemas} />
      <ServiceDetailPage slug={params.slug} />
    </>
  );
}
