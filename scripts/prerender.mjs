/**
 * Post-build prerender script
 * Generates static HTML files for every route so Google gets real content
 * without needing to execute JavaScript.
 *
 * Run after `vite build` — reads dist/index.html as a template and produces
 * one HTML file per route with correct <title>, <meta>, <link rel=canonical>,
 * JSON-LD structured data and semantic <noscript> content.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const BASE_URL = 'https://leoluxeclean.co.uk';

// ── service & location data (duplicated from src/data to avoid bundling) ──

const services = [
  { slug: 'home-cleaning', title: 'Home Cleaning', metaTitle: 'Home Cleaning Services in Slough & Berkshire', metaDescription: 'Professional home cleaning in Slough, Windsor & Berkshire. Weekly, fortnightly or one-off cleans. Fully insured, DBS checked team. Free quotes, no contracts.', priceFrom: 60 },
  { slug: 'office-cleaning', title: 'Office & Commercial Cleaning', metaTitle: 'Office & Commercial Cleaning in Slough & Berkshire', metaDescription: 'Professional office cleaning in Slough, Windsor & Berkshire. Flexible scheduling, evenings and weekends available. Fully insured team. Keep your workspace spotless.', priceFrom: null },
  { slug: 'deep-clean', title: 'Deep Cleaning', metaTitle: 'Deep Cleaning Services in Slough & Berkshire', metaDescription: 'Professional deep cleaning in Slough, Windsor & Berkshire. Behind the fridge, inside the oven, on top of the cabinets. Fully insured, eco-friendly products. Free quotes.', priceFrom: 120 },
  { slug: 'end-of-tenancy', title: 'End of Tenancy Cleaning', metaTitle: 'End of Tenancy Cleaning in Slough & Berkshire', metaDescription: 'Professional end of tenancy cleaning in Slough, Windsor & Berkshire. Landlord-approved standards. Get your full deposit back. Fully insured, DBS checked. Free quotes.', priceFrom: 150 },
  { slug: 'after-events', title: 'After Event Cleaning', metaTitle: 'After Event & Party Cleaning in Slough & Berkshire', metaDescription: 'After event and party cleaning in Slough, Windsor & Berkshire. Same-day and next-day availability. Spill treatment, waste removal, full restoration. Free quotes.', priceFrom: 80 },
  { slug: 'specialist-cleaning', title: 'Specialist Cleaning', metaTitle: 'Specialist Cleaning Services in Slough & Berkshire', metaDescription: 'Specialist cleaning in Slough, Windsor & Berkshire. Carpets, upholstery, ovens, windows, hard floors, mattresses. Professional equipment, visible results. Free quotes.', priceFrom: 70 },
];

const locations = [
  { slug: 'slough', name: 'Slough', county: 'Berkshire', metaTitle: 'Cleaning Services in Slough', metaDescription: 'Professional cleaning services in Slough, Berkshire. Home cleaning, deep cleans, end of tenancy, office cleaning. Local team, DBS checked, fully insured. Free quotes.' },
  { slug: 'windsor', name: 'Windsor', county: 'Berkshire', metaTitle: 'Cleaning Services in Windsor', metaDescription: 'Professional cleaning services in Windsor, Berkshire. Home cleaning, deep cleans, end of tenancy, office cleaning. Trusted local team, fully insured. Free quotes.' },
  { slug: 'langley', name: 'Langley', county: 'Berkshire', metaTitle: 'Cleaning Services in Langley', metaDescription: 'Professional cleaning services in Langley, Slough. Home cleaning, deep cleans, end of tenancy, office cleaning. Local team, DBS checked, fully insured. Free quotes.' },
  { slug: 'maidenhead', name: 'Maidenhead', county: 'Berkshire', metaTitle: 'Cleaning Services in Maidenhead', metaDescription: 'Professional cleaning services in Maidenhead, Berkshire. Home cleaning, deep cleans, end of tenancy, office cleaning. Fully insured, DBS checked. Free quotes.' },
  { slug: 'eton', name: 'Eton', county: 'Berkshire', metaTitle: 'Cleaning Services in Eton', metaDescription: 'Professional cleaning services in Eton, Berkshire. Home cleaning, deep cleans, end of tenancy. Trusted local team, eco-friendly products, fully insured. Free quotes.' },
  { slug: 'burnham', name: 'Burnham', county: 'Buckinghamshire', metaTitle: 'Cleaning Services in Burnham', metaDescription: 'Professional cleaning services in Burnham, Buckinghamshire. Home cleaning, deep cleans, end of tenancy, office cleaning. Local team, fully insured. Free quotes.' },
  { slug: 'ascot', name: 'Ascot', county: 'Berkshire', metaTitle: 'Cleaning Services in Ascot, Berkshire', metaDescription: 'Professional cleaning services in Ascot, Berkshire (SL5). Home cleaning, deep cleans, end of tenancy. Discreet, fully insured team. Trusted by homeowners across Ascot, Sunninghill & Sunningdale.' },
  { slug: 'bracknell', name: 'Bracknell', county: 'Berkshire', metaTitle: 'Cleaning Services in Bracknell, Berkshire', metaDescription: 'Professional cleaning services in Bracknell, Berkshire (RG12). Home cleaning, deep cleans, end of tenancy, office cleaning. Local, DBS-checked team. Fully insured. Free quotes.' },
  { slug: 'hayes', name: 'Hayes', county: 'West London', metaTitle: 'Cleaning Services in Hayes, West London', metaDescription: 'Professional cleaning services in Hayes, West London (UB3, UB4). Home cleaning, deep cleans, end of tenancy, office cleaning. Local team, DBS checked, fully insured. Free quotes.' },
  { slug: 'southall', name: 'Southall', county: 'West London', metaTitle: 'Cleaning Services in Southall, West London', metaDescription: 'Professional cleaning services in Southall, West London (UB1, UB2). Home cleaning, deep cleans, end of tenancy, office cleaning. DBS checked, eco-friendly. Free quotes.' },
  { slug: 'uxbridge', name: 'Uxbridge', county: 'West London', metaTitle: 'Cleaning Services in Uxbridge, West London', metaDescription: 'Professional cleaning services in Uxbridge, West London (UB8, UB10). Home cleaning, deep cleans, end of tenancy, office cleaning. Fully insured, DBS checked. Free quotes.' },
  { slug: 'ealing', name: 'Ealing', county: 'West London', metaTitle: 'Cleaning Services in Ealing, West London', metaDescription: 'Professional cleaning services in Ealing, West London (W5, W13). Home cleaning, deep cleans, end of tenancy, office cleaning. DBS checked, fully insured. Free quotes.' },
  { slug: 'greenford', name: 'Greenford', county: 'West London', metaTitle: 'Cleaning Services in Greenford, West London', metaDescription: 'Professional cleaning services in Greenford, West London (UB6). Home cleaning, deep cleans, end of tenancy, office cleaning. Local team, DBS checked. Free quotes.' },
  { slug: 'northolt', name: 'Northolt', county: 'West London', metaTitle: 'Cleaning Services in Northolt, West London', metaDescription: 'Professional cleaning services in Northolt, West London (UB5). Home cleaning, deep cleans, end of tenancy, office cleaning. Fully insured, DBS checked. Free quotes.' },
  { slug: 'west-drayton', name: 'West Drayton', county: 'West London', metaTitle: 'Cleaning Services in West Drayton, West London', metaDescription: 'Professional cleaning services in West Drayton (UB7). Home cleaning, deep cleans, end of tenancy, office cleaning. Local team based nearby. Fully insured. Free quotes.' },
  { slug: 'hounslow', name: 'Hounslow', county: 'West London', metaTitle: 'Cleaning Services in Hounslow, West London', metaDescription: 'Professional cleaning services in Hounslow, West London (TW3, TW4, TW5). Home cleaning, deep cleans, end of tenancy, office cleaning. DBS checked, eco-friendly. Free quotes.' },
];

// ── helpers ──

function escHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HousekeepingBusiness'],
    '@id': `${BASE_URL}/#business`,
    name: 'Leo Luxe Clean',
    url: BASE_URL,
    telephone: '+441753257118',
    email: 'info@leoluxeclean.co.uk',
    logo: `${BASE_URL}/favicon-512.png`,
    image: `${BASE_URL}/og-image.png`,
    address: { '@type': 'PostalAddress', streetAddress: 'Slough', addressLocality: 'Slough', addressRegion: 'Berkshire', postalCode: 'SL1', addressCountry: 'GB' },
    geo: { '@type': 'GeoCoordinates', latitude: 51.5105, longitude: -0.595 },
    priceRange: '££',
    openingHours: 'Mo-Sa 08:00-19:00',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '3', bestRating: '5', worstRating: '1' },
  };
}

function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: `${BASE_URL}${item.url}` } : {}),
    })),
  };
}

// ── route definitions ──

function buildRoutes() {
  const routes = [];

  // Homepage
  routes.push({
    path: '/',
    title: 'Leo Luxe Clean | Cleaners in Slough, Windsor & Berkshire',
    description: 'Local cleaners based in Slough. Home cleaning from £60, deep cleans, end of tenancy, office cleaning across Windsor, Berkshire & West London. DBS checked, fully insured. Same-week bookings. Free quote.',
    schemas: [localBusinessJsonLd()],
    noscriptContent: `<h1>Leo Luxe Clean — Cleaners in Slough, Windsor &amp; Berkshire</h1>
      <p>Local, DBS-checked cleaners based in Slough. Home cleaning from &pound;60. Deep cleans, end of tenancy, office cleaning across Berkshire &amp; West London. 5-star rated on Google. Free quotes — call <a href="tel:01753257118">01753 257118</a>.</p>
      <h2>Our Services</h2>
      <ul>${services.map(s => `<li><a href="/services/${s.slug}">${s.title}</a>${s.priceFrom ? ` — from &pound;${s.priceFrom}` : ''}</li>`).join('')}</ul>
      <h2>Areas We Cover</h2>
      <ul>${locations.map(l => `<li><a href="/areas/${l.slug}">${l.name}, ${l.county}</a></li>`).join('')}</ul>
      <p>Contact us: <a href="mailto:info@leoluxeclean.co.uk">info@leoluxeclean.co.uk</a> | <a href="tel:01753257118">01753 257118</a> | Slough, Berkshire</p>`,
  });

  // Services listing
  routes.push({
    path: '/services',
    title: 'Cleaning Services in Slough, Windsor & Berkshire | Leo Luxe Clean',
    description: 'Professional cleaning services by Leo Luxe Clean. Home cleaning, deep cleans, end of tenancy, office cleaning, after event and specialist cleaning across Slough, Windsor & Berkshire.',
    schemas: [breadcrumbJsonLd([{ name: 'Home', url: '/' }, { name: 'Services' }])],
    noscriptContent: `<h1>Cleaning Services in Slough, Windsor &amp; Berkshire</h1>
      <p>Leo Luxe Clean offers a full range of professional cleaning services across Slough, Windsor, Langley, Maidenhead and the wider Berkshire area.</p>
      <ul>${services.map(s => `<li><a href="/services/${s.slug}">${s.title}</a> — ${s.metaDescription}</li>`).join('')}</ul>
      <p><a href="tel:01753257118">Call 01753 257118</a> for a free quote.</p>`,
  });

  // Individual service pages
  for (const s of services) {
    routes.push({
      path: `/services/${s.slug}`,
      title: `${s.metaTitle} | Leo Luxe Clean`,
      description: s.metaDescription,
      schemas: [
        { '@context': 'https://schema.org', '@type': 'Service', name: s.title, description: s.metaDescription, url: `${BASE_URL}/services/${s.slug}`, provider: { '@type': 'LocalBusiness', name: 'Leo Luxe Clean', '@id': `${BASE_URL}/#business` }, ...(s.priceFrom ? { offers: { '@type': 'Offer', priceCurrency: 'GBP', price: s.priceFrom } } : {}) },
        breadcrumbJsonLd([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: s.title }]),
      ],
      noscriptContent: `<h1>${escHtml(s.title)} — Leo Luxe Clean</h1>
        <p>${escHtml(s.metaDescription)}</p>
        ${s.priceFrom ? `<p>Starting from &pound;${s.priceFrom}.</p>` : ''}
        <p><a href="tel:01753257118">Call 01753 257118</a> for a free quote. <a href="/contact">Contact us online</a>.</p>
        <nav><a href="/">Home</a> &rsaquo; <a href="/services">Services</a> &rsaquo; ${escHtml(s.title)}</nav>`,
    });
  }

  // Location pages
  for (const l of locations) {
    routes.push({
      path: `/areas/${l.slug}`,
      title: `${l.metaTitle} | Leo Luxe Clean`,
      description: l.metaDescription,
      schemas: [
        { '@context': 'https://schema.org', '@type': ['LocalBusiness', 'HousekeepingBusiness'], '@id': `${BASE_URL}/areas/${l.slug}#business`, name: `Leo Luxe Clean — ${l.name}`, description: l.metaDescription, url: `${BASE_URL}/areas/${l.slug}`, telephone: '+441753257118', address: { '@type': 'PostalAddress', addressLocality: l.name, addressRegion: l.county, addressCountry: 'GB' } },
        breadcrumbJsonLd([{ name: 'Home', url: '/' }, { name: l.name }]),
      ],
      noscriptContent: `<h1>Cleaning Services in ${escHtml(l.name)}, ${escHtml(l.county)}</h1>
        <p>${escHtml(l.metaDescription)}</p>
        <h2>Services Available in ${escHtml(l.name)}</h2>
        <ul>${services.map(s => `<li><a href="/areas/${l.slug}/${s.slug}">${s.title} in ${escHtml(l.name)}</a></li>`).join('')}</ul>
        <p><a href="tel:01753257118">Call 01753 257118</a> for a free quote.</p>
        <nav><a href="/">Home</a> &rsaquo; ${escHtml(l.name)}</nav>`,
    });
  }

  // Area + Service combo pages
  for (const l of locations) {
    for (const s of services) {
      routes.push({
        path: `/areas/${l.slug}/${s.slug}`,
        title: `${s.title} in ${l.name}, ${l.county} | Leo Luxe Clean`,
        description: `Professional ${s.title.toLowerCase()} in ${l.name}, ${l.county}. ${s.metaDescription}`,
        schemas: [
          breadcrumbJsonLd([{ name: 'Home', url: '/' }, { name: l.name, url: `/areas/${l.slug}` }, { name: s.title }]),
        ],
        noscriptContent: `<h1>${escHtml(s.title)} in ${escHtml(l.name)}, ${escHtml(l.county)}</h1>
          <p>Professional ${escHtml(s.title.toLowerCase())} in ${escHtml(l.name)}, ${escHtml(l.county)}. ${escHtml(s.metaDescription)}</p>
          ${s.priceFrom ? `<p>Starting from &pound;${s.priceFrom}.</p>` : ''}
          <p><a href="tel:01753257118">Call 01753 257118</a> for a free quote.</p>
          <nav><a href="/">Home</a> &rsaquo; <a href="/areas/${l.slug}">${escHtml(l.name)}</a> &rsaquo; ${escHtml(s.title)}</nav>`,
      });
    }
  }

  // About
  routes.push({
    path: '/about',
    title: 'About Us — Leo Luxe Clean | Slough & Berkshire',
    description: 'Learn about Leo Luxe Clean — a local, independent cleaning company in Slough, Berkshire. DBS-checked team, eco-friendly products, fully insured. Meet the team behind your clean.',
    schemas: [breadcrumbJsonLd([{ name: 'Home', url: '/' }, { name: 'About Us' }])],
    noscriptContent: `<h1>About Leo Luxe Clean</h1>
      <p>Leo Luxe Clean is a local, independent cleaning company based in Slough, Berkshire. We provide professional cleaning services across Slough, Windsor, Langley, Maidenhead and the wider Berkshire and West London area.</p>
      <p>Our team is DBS checked, fully insured, and uses eco-friendly products. We are a small, owner-managed business focused on quality over volume.</p>
      <p><a href="tel:01753257118">Call 01753 257118</a> | <a href="mailto:info@leoluxeclean.co.uk">info@leoluxeclean.co.uk</a></p>`,
  });

  // Reviews
  routes.push({
    path: '/reviews',
    title: 'Reviews — 5-Star Cleaning Service in Slough & Berkshire | Leo Luxe Clean',
    description: 'Read reviews from Leo Luxe Clean customers across Slough, Windsor & Berkshire. 5-star rated on Google with 200+ reviews. See why our clients trust us with their homes and businesses.',
    schemas: [breadcrumbJsonLd([{ name: 'Home', url: '/' }, { name: 'Reviews' }])],
    noscriptContent: `<h1>Customer Reviews — Leo Luxe Clean</h1>
      <p>We are rated 5 stars on Google with over 200 reviews. Read what our customers across Slough, Windsor, and Berkshire have to say about our cleaning services.</p>
      <p><a href="tel:01753257118">Call 01753 257118</a> for a free quote.</p>`,
  });

  // Contact
  routes.push({
    path: '/contact',
    title: 'Contact Us — Free Cleaning Quote in Slough & Berkshire | Leo Luxe Clean',
    description: 'Get in touch with Leo Luxe Clean for a free cleaning quote. Call 01753 257118 or email info@leoluxeclean.co.uk. Based in Slough, serving Berkshire & West London.',
    schemas: [breadcrumbJsonLd([{ name: 'Home', url: '/' }, { name: 'Contact' }])],
    noscriptContent: `<h1>Contact Leo Luxe Clean</h1>
      <p>Get a free cleaning quote today.</p>
      <ul>
        <li>Phone: <a href="tel:01753257118">01753 257118</a></li>
        <li>Mobile: <a href="tel:07845239774">07845 239774</a></li>
        <li>Email: <a href="mailto:info@leoluxeclean.co.uk">info@leoluxeclean.co.uk</a></li>
        <li>Location: Slough, Berkshire</li>
        <li>Hours: Monday–Saturday 08:00–19:00</li>
      </ul>`,
  });

  return routes;
}

// ── main ──

function run() {
  const templatePath = path.join(DIST, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found — run `vite build` first');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const routes = buildRoutes();
  let count = 0;

  for (const route of routes) {
    let html = template;

    // Replace <title>
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${escHtml(route.title)}</title>`);

    // Replace meta description
    html = html.replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${escHtml(route.description)}"`
    );

    // Replace canonical
    html = html.replace(
      /<link rel="canonical" href="[^"]*"/,
      `<link rel="canonical" href="${BASE_URL}${route.path === '/' ? '/' : route.path}"`
    );

    // Replace OG tags
    html = html.replace(
      /<meta property="og:title" content="[^"]*"/,
      `<meta property="og:title" content="${escHtml(route.title)}"`
    );
    html = html.replace(
      /<meta property="og:description" content="[^"]*"/,
      `<meta property="og:description" content="${escHtml(route.description)}"`
    );
    html = html.replace(
      /<meta property="og:url" content="[^"]*"/,
      `<meta property="og:url" content="${BASE_URL}${route.path === '/' ? '/' : route.path}"`
    );

    // Replace Twitter tags
    html = html.replace(
      /<meta name="twitter:title" content="[^"]*"/,
      `<meta name="twitter:title" content="${escHtml(route.title)}"`
    );
    html = html.replace(
      /<meta name="twitter:description" content="[^"]*"/,
      `<meta name="twitter:description" content="${escHtml(route.description)}"`
    );

    // Inject JSON-LD schemas (before </head>)
    if (route.schemas && route.schemas.length > 0) {
      const schemaScripts = route.schemas
        .map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
        .join('\n    ');
      html = html.replace('</head>', `    ${schemaScripts}\n  </head>`);
    }

    // Inject noscript content (after <div id="root">)
    if (route.noscriptContent) {
      html = html.replace(
        '<div id="root"></div>',
        `<div id="root"></div>\n    <noscript>${route.noscriptContent}</noscript>`
      );
    }

    // Write file
    const routePath = route.path === '/' ? '/index.html' : `${route.path}/index.html`;
    const fullPath = path.join(DIST, routePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, html, 'utf-8');
    count++;
  }

  console.log(`Prerendered ${count} routes into dist/`);
}

run();
