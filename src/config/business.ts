// Single source of truth for business facts. Every page, schema block and
// meta tag reads from here — do not hard-code these values anywhere else.

export const SITE_URL = 'https://leoluxeclean.co.uk';

export const business = {
  name: 'Leo Luxe Clean',
  url: `${SITE_URL}/`,

  phone: {
    display: '07845 239774',
    e164: '+447845239774',
    href: 'tel:+447845239774',
  },
  whatsapp: {
    href: 'https://wa.me/447845239774?text=Hi%20Leo%20Luxe%20Clean%2C%20I%27d%20like%20a%20quote%20please',
  },
  email: 'info@leoluxeclean.co.uk',

  address: {
    streetAddress: '14 Blinco Lane, George Green',
    addressLocality: 'Slough',
    postalCode: 'SL3 6RQ',
    addressCountry: 'GB',
    lines: ['14 Blinco Lane', 'George Green', 'Slough SL3 6RQ'],
    singleLine: '14 Blinco Lane, George Green, Slough SL3 6RQ',
  },

  geo: {
    latitude: 51.5215022,
    longitude: -0.5551661,
  },

  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '18:00',
    display: 'Monday to Saturday, 8am to 6pm. Closed Sunday.',
    short: 'Mon–Sat 8am–6pm',
  },

  responseTime: 'within 2 hours',

  google: {
    rating: 5.0,
    ratingDisplay: '5.0',
    reviewCount: 9,
    profileUrl: 'https://www.google.com/maps?cid=17856583976771520688',
    mapEmbedUrl: 'https://www.google.com/maps?cid=17856583976771520688&output=embed',
    summary: '5.0 on Google from 9 reviews',
  },

  instagram: 'https://www.instagram.com/leoluxeclean',

  ogImage: {
    url: '/og-image.png',
    width: 1200,
    height: 630,
  },
} as const;

export const sameAs = [business.instagram, business.google.profileUrl];

// Areas with full, indexable area x service pages. Every other area keeps its
// area page, but its area x service pages are noindex and left out of the sitemap.
export const CORE_AREA_SLUGS = ['slough', 'windsor', 'maidenhead', 'langley', 'ascot', 'eton'] as const;

export const isCoreArea = (slug: string): boolean =>
  (CORE_AREA_SLUGS as readonly string[]).includes(slug);

// Absolute URL for a site path, always with a trailing slash so it matches
// the canonical URL that Netlify serves (directory index pages).
export const absoluteUrl = (path = '/'): string => {
  let p = path.startsWith('/') ? path : `/${path}`;
  const [pathname, hash] = p.split('#');
  p = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return `${SITE_URL}${p}${hash ? `#${hash}` : ''}`;
};

export const BUSINESS_ID = `${SITE_URL}/#business`;
