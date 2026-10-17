// Checks the server-rendered HTML that crawlers see:
// - every FAQPage question and answer is visible in the page body
// - no placeholder stats ("0+", "0.0") from client-side counters
import fs from 'fs';
import { htmlFiles, routeOf, decode, fail } from './lib.mjs';

const norm = (s) => decode(s).replace(/\s+/g, ' ').trim();

function bodyText(html) {
  const body = (html.match(/<body[^>]*>([\s\S]*)<\/body>/) || [, html])[1];
  return norm(
    body
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<style[\s\S]*?<\/style>/g, ' ')
      .replace(/<[^>]+>/g, ' ')
  );
}

const errors = [];
let faqs = 0;
for (const file of htmlFiles()) {
  const html = fs.readFileSync(file, 'utf8');
  const where = routeOf(file);
  const text = bodyText(html).replace(/\s+/g, ' ');
  // Collapse text that React splits across nodes ("from <!-- -->£60").
  const flat = text.replace(/\s/g, '');

  if (/(^|[^0-9£.])0\+/.test(text)) errors.push(`${where}: placeholder "0+" in visible text`);
  if (/(^|[^0-9.£])0\.0([^0-9]|$)/.test(text)) errors.push(`${where}: placeholder "0.0" in visible text`);

  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    const items = [].concat(JSON.parse(m[1]));
    for (const item of items) {
      if (item['@type'] !== 'FAQPage') continue;
      for (const q of item.mainEntity) {
        faqs++;
        for (const part of [q.name, q.acceptedAnswer.text]) {
          if (!flat.includes(norm(part).replace(/\s/g, ''))) {
            errors.push(`${where}: FAQ text not visible in HTML: "${part.slice(0, 60)}…"`);
          }
        }
      }
    }
  }
}
fail('Visible HTML', errors);
console.log(`✓ Visible HTML: ${faqs} FAQ answers found in page bodies, no placeholder stats`);
