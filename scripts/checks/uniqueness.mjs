// Fails the build if any indexable area x service page shares too much of its
// visible text with the same service's pages for other areas.
//
// Method: take the visible text inside <main>, replace the page's own area
// name and postcode districts with placeholders (so "in Windsor" vs "in
// Slough" does not count as unique), split into overlapping 5-word shingles,
// and measure the share of the page's shingles that appear on none of the
// other areas' pages for the same service.
import fs from 'fs';
import path from 'path';
import { OUT, decode, isNoindex, fail } from './lib.mjs';

const MIN_UNIQUE = 0.4;
const SHINGLE = 5;

function mainText(html) {
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  return decode(
    (m ? m[1] : html)
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<style[\s\S]*?<\/style>/g, ' ')
      .replace(/<[^>]+>/g, ' ')
  );
}

function shingles(text, placeholders) {
  let t = text.toLowerCase();
  for (const p of placeholders) t = t.split(p.toLowerCase()).join(' __area__ ');
  const words = t.replace(/[^a-z0-9£_'\s-]/g, ' ').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + SHINGLE <= words.length; i++) set.add(words.slice(i, i + SHINGLE).join(' '));
  return set;
}

const areasDir = path.join(OUT, 'areas');
const pages = [];
for (const area of fs.readdirSync(areasDir)) {
  const dir = path.join(areasDir, area);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const service of fs.readdirSync(dir)) {
    const file = path.join(dir, service, 'index.html');
    if (!fs.existsSync(file)) continue;
    const html = fs.readFileSync(file, 'utf8');
    if (isNoindex(html)) continue;
    const h1 = decode((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '').replace(/<[^>]+>/g, '');
    const name = h1.split(' in ').pop().trim();
    const postcodes = (mainText(html).match(new RegExp(`${name}, ((?:[A-Z]{1,2}\\d{1,2}(?:, )?)+)`)) || [])[1] || '';
    const placeholders = [name, ...postcodes.split(', ').filter(Boolean)].sort((a, b) => b.length - a.length);
    pages.push({ area, service, set: shingles(mainText(html), placeholders) });
  }
}

const errors = [];
const rows = [];
for (const p of pages) {
  const others = new Set();
  for (const o of pages) if (o.service === p.service && o.area !== p.area) for (const s of o.set) others.add(s);
  let unique = 0;
  for (const s of p.set) if (!others.has(s)) unique++;
  const ratio = p.set.size ? unique / p.set.size : 0;
  rows.push(`${(ratio * 100).toFixed(1).padStart(5)}%  /areas/${p.area}/${p.service}/`);
  if (ratio < MIN_UNIQUE) errors.push(`/areas/${p.area}/${p.service}/ is only ${(ratio * 100).toFixed(1)}% unique (min ${MIN_UNIQUE * 100}%)`);
}
if (!pages.length) errors.push('no indexable area x service pages found');
if (process.env.VERBOSE) console.log(rows.sort().join('\n'));
fail('Area x service uniqueness', errors);
const min = Math.min(...rows.map((r) => parseFloat(r)));
console.log(`✓ Area x service uniqueness: ${pages.length} indexable pages, lowest ${min.toFixed(1)}% unique (min ${MIN_UNIQUE * 100}%)`);
