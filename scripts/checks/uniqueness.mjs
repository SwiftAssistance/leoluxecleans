// Fails the build if any area page shares too much of its visible text with
// the other area pages.
//
// Method: take the visible text inside <main>, replace the page's own area
// name and postcode districts with placeholders (so "in Windsor" vs "in
// Slough" does not count as unique), split into overlapping 5-word shingles,
// and measure the share of the page's shingles that appear on none of the
// other area pages.
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
  const file = path.join(areasDir, area, 'index.html');
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, 'utf8');
  if (isNoindex(html)) continue;
  const name = decode((html.match(/<title>Cleaners in ([^|<]+)/) || [])[1] || '').trim();
  const text = mainText(html);
  const postcodes = (text.match(/\b[A-Z]{1,2}\d{1,2}\b/g) || []).filter((p, i, a) => a.indexOf(p) === i);
  const placeholders = [name, ...postcodes].filter(Boolean).sort((a, b) => b.length - a.length);
  pages.push({ area, set: shingles(text, placeholders) });
}

const errors = [];
const rows = [];
for (const p of pages) {
  const others = new Set();
  for (const o of pages) if (o.area !== p.area) for (const s of o.set) others.add(s);
  let unique = 0;
  for (const s of p.set) if (!others.has(s)) unique++;
  const ratio = p.set.size ? unique / p.set.size : 0;
  rows.push(`${(ratio * 100).toFixed(1).padStart(5)}%  /areas/${p.area}/`);
  if (ratio < MIN_UNIQUE) errors.push(`/areas/${p.area}/ is only ${(ratio * 100).toFixed(1)}% unique (min ${MIN_UNIQUE * 100}%)`);
}
if (!pages.length) errors.push('no area pages found');
if (process.env.VERBOSE) console.log(rows.sort().join('\n'));
fail('Area page uniqueness', errors);
const min = Math.min(...rows.map((r) => parseFloat(r)));
console.log(`✓ Area page uniqueness: ${pages.length} area pages, lowest ${min.toFixed(1)}% unique (min ${MIN_UNIQUE * 100}%)`);
