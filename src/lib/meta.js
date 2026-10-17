import { business, absoluteUrl, SITE_URL } from '../config/business';

const ogImage = {
  url: `${SITE_URL}${business.ogImage.url}`,
  width: business.ogImage.width,
  height: business.ogImage.height,
  alt: business.name,
};

// Full metadata for a page. Next.js replaces (not merges) nested objects such
// as openGraph, so every page builds them here to keep og:image and
// twitter:image present everywhere. Limits enforced by scripts/checks/meta.mjs:
// title <= 60 characters, description <= 155.
export function pageMeta({ title, description, path, noindex = false }) {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: business.name,
      locale: 'en_GB',
      title,
      description,
      url,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.url],
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}
