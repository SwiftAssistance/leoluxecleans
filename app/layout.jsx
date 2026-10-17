import './globals.css';

import { business, SITE_URL } from '../src/config/business';

// Defaults for pages that don't build their own metadata (e.g. the 404 page).
// Pages use pageMeta() from src/lib/meta.js, which sets og:image explicitly.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Leo Luxe Clean | Cleaners in Slough & Berkshire', template: '%s | Leo Luxe Clean' },
  description: 'Local cleaners based in Slough, covering Windsor, Maidenhead, Langley, Ascot and Eton. Home, deep, end of tenancy and office cleaning.',
  openGraph: {
    type: 'website',
    siteName: business.name,
    images: [{ url: business.ogImage.url, width: business.ogImage.width, height: business.ogImage.height, alt: business.name }],
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    images: [business.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: {
    'geo.placename': business.address.addressLocality,
    'geo.position': `${business.geo.latitude};${business.geo.longitude}`,
    ICBM: `${business.geo.latitude}, ${business.geo.longitude}`,
  },
};

export const viewport = {
  themeColor: '#0B0B0B',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preload" href="/fonts/cormorant-300.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/cormorant-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-500.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon-512.png" />
        {/* Google Ads — inline init must come before the async library */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18156207671');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18156207671" />
      </head>
      <body>{children}</body>
    </html>
  );
}
