// Fails the build if any area page shares too much of its visible text with
// the other area pages, or any service x town page (/areas/<town>/<service>/)
// with the other service x town pages and the town pages.
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
const MIN_COMBO_UNIQUE = 0.3;
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

function load(file, name, extra = []) {
  const html = fs.readFileSync(file, 'utf8');
  if (isNoindex(html)) return null;
  const text = mainText(html);
  const postcodes = (text.match(/\b[A-Z]{1,2}\d{1,2}\b/g) || []).filter((p, i, a) => a.indexOf(p) === i);
  const placeholders = [name, ...extra, ...postcodes].filter(Boolean).sort((a, b) => b.length - a.length);
  return shingles(text, placeholders);
}

const pages = [];
const combos = [];
for (const area of fs.readdirSync(areasDir)) {
  const dir = path.join(areasDir, area);
  const file = path.join(dir, 'index.html');
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, 'utf8');
  const name = decode((html.match(/<title>Cleaners in ([^|<]+)/) || [])[1] || '').trim();
  const set = load(file, name);
  if (set) pages.push({ route: `/areas/${area}/`, set });
  for (const sub of fs.readdirSync(dir)) {
    const subFile = path.join(dir, sub, 'index.html');
    if (!fs.existsSync(subFile)) continue;
    const title = decode((fs.readFileSync(subFile, 'utf8').match(/<title>([^|<]+)/) || [])[1] || '').trim();
    const [service, town] = title.split(' in ');
    const subSet = load(subFile, (town || '').trim(), [(service || '').trim()]);
    if (subSet) combos.push({ route: `/areas/${area}/${sub}/`, set: subSet });
  }
}

// Share of each page's shingles found on none of the `against` pages.
function check(label, group, against, min, required = true) {
  const errors = [];
  const rows = [];
  for (const p of group) {
    const others = new Set();
    for (const o of against) if (o.route !== p.route) for (const s of o.set) others.add(s);
    let unique = 0;
    for (const s of p.set) if (!others.has(s)) unique++;
    const ratio = p.set.size ? unique / p.set.size : 0;
    rows.push({ ratio, line: `${(ratio * 100).toFixed(1).padStart(5)}%  ${p.route}` });
    if (ratio < min) errors.push(`${p.route} is only ${(ratio * 100).toFixed(1)}% unique (min ${min * 100}%)`);
  }
  if (!group.length) {
    if (!required) return console.log(`- ${label}: no pages yet`);
    errors.push(`no ${label.toLowerCase()} found`);
  }
  if (process.env.VERBOSE) console.log(rows.map((r) => r.line).sort().join('\n'));
  fail(label, errors);
  const lowest = Math.min(...rows.map((r) => r.ratio)) * 100;
  console.log(`✓ ${label}: ${group.length} pages, lowest ${lowest.toFixed(1)}% unique (min ${min * 100}%)`);
}

check('Area page uniqueness', pages, pages, MIN_UNIQUE);
check('Service x town page uniqueness', combos, [...combos, ...pages], MIN_COMBO_UNIQUE, false);
