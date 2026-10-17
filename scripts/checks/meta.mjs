// Per-page meta checks on the built HTML:
// - <title> at most 60 characters, meta description at most 155
// - og:image and twitter:image present (the 1200x630 /og-image.png)
// - exactly one <h1>
// - canonical is the page's own slash URL (except the 404 page)
import fs from 'fs';
import { htmlFiles, routeOf, decode, fail } from './lib.mjs';

const SITE = 'https://leoluxeclean.co.uk';
const OG = `${SITE}/og-image.png`;
const meta = (html, attr, name) =>
  (html.match(new RegExp(`<meta ${attr}="${name}" content="([^"]*)"`)) || [])[1];

const errors = [];
let pages = 0;
for (const file of htmlFiles()) {
  const route = routeOf(file);
  const html = fs.readFileSync(file, 'utf8');
  const is404 = route === '/404.html' || route === '/404/';
  pages++;

  const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  if (!title) errors.push(`${route}: missing <title>`);
  else if (title.length > 60) errors.push(`${route}: title is ${title.length} chars (max 60): "${title}"`);

  const desc = decode(meta(html, 'name', 'description') || '');
  if (!desc) errors.push(`${route}: missing meta description`);
  else if (desc.length > 155) errors.push(`${route}: description is ${desc.length} chars (max 155)`);

  if (meta(html, 'property', 'og:image') !== OG) errors.push(`${route}: og:image missing or not ${OG}`);
  if (meta(html, 'property', 'og:image:width') !== '1200' || meta(html, 'property', 'og:image:height') !== '630')
    errors.push(`${route}: og:image is not declared as 1200x630`);
  if (meta(html, 'name', 'twitter:image') !== OG) errors.push(`${route}: twitter:image missing or not ${OG}`);

  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) errors.push(`${route}: ${h1s} <h1> elements (expected 1)`);

  if (!is404) {
    const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
    if (canonical !== `${SITE}${route}`) errors.push(`${route}: canonical ${canonical} is not ${SITE}${route}`);
  }
}
fail('Meta', errors);
console.log(`✓ Meta: ${pages} pages with og:image, twitter:image, one H1, titles <= 60, descriptions <= 155`);
