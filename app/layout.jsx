import './globals.css';

const BASE_URL = 'https://leoluxeclean.co.uk';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Leo Luxe Clean | Cleaners in Slough, Windsor & Berkshire',
    template: '%s | Leo Luxe Clean',
  },
  description: 'Premium home cleaning across Windsor, Berkshire & Surrey. DBS-checked, fully insured — the same trusted cleaner every visit. Home cleaning, deep cleans, end of tenancy. Free quotes.',
  openGraph: {
    type: 'website',
    siteName: 'Leo Luxe Clean',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Leo Luxe Clean' }],
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'GB-BRK',
    'geo.placename': 'Slough',
    'geo.position': '51.5105;-0.5950',
    'ICBM': '51.5105, -0.5950',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preload" href="/fonts/cormorant-300.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/cormorant-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-500.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
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
