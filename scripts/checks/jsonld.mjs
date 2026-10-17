// Parses every JSON-LD block in every built page and fails on invalid JSON,
// an entity without @type, or any Review / AggregateRating markup.
import fs from 'fs';
import { htmlFiles, routeOf, fail } from './lib.mjs';

const BANNED_TYPES = new Set(['Review', 'AggregateRating', 'Rating']);
const BANNED_KEYS = new Set(['review', 'reviews', 'aggregateRating', 'reviewRating']);

function walk(node, where, errors, topLevel) {
  if (Array.isArray(node)) {
    for (const n of node) walk(n, where, errors, topLevel);
    return;
  }
  if (!node || typeof node !== 'object') return;
  const keys = Object.keys(node);
  const isReference = keys.length === 1 && keys[0] === '@id';
  if (!isReference && !('@type' in node)) {
    errors.push(`${where}: ${topLevel ? 'top-level entity' : 'nested object'} without @type (${keys.slice(0, 4).join(', ')})`);
  }
  const types = [].concat(node['@type'] || []);
  for (const t of types) if (BANNED_TYPES.has(t)) errors.push(`${where}: banned @type ${t}`);
  for (const k of keys) {
    if (BANNED_KEYS.has(k)) errors.push(`${where}: banned property "${k}"`);
    if (k === '@graph') walk(node[k], where, errors, true);
    else if (typeof node[k] === 'object') walk(node[k], where, errors, false);
  }
}

const errors = [];
let blocks = 0;
const files = htmlFiles();
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const where = routeOf(file);
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    blocks++;
    let data;
    try {
      data = JSON.parse(m[1]);
    } catch (e) {
      errors.push(`${where}: invalid JSON-LD (${e.message})`);
      continue;
    }
    walk(data, where, errors, true);
  }
}
fail('JSON-LD', errors);
console.log(`✓ JSON-LD: ${blocks} blocks in ${files.length} pages parsed, all typed, no Review/AggregateRating`);
