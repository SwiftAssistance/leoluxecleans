// Shared helpers for the post-build checks that run against out/.
import fs from 'fs';
import path from 'path';

export const OUT = path.resolve(process.cwd(), 'out');

export function htmlFiles(dir = OUT) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '_next') continue;
      files.push(...htmlFiles(p));
    } else if (entry.name.endsWith('.html')) {
      files.push(p);
    }
  }
  return files;
}

// URL path for an exported HTML file, e.g. out/about/index.html -> /about/
export function routeOf(file) {
  const rel = path.relative(OUT, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel}`;
}

export const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');

export const isNoindex = (html) => /<meta name="robots" content="[^"]*noindex/.test(html);

export function fail(name, errors) {
  if (errors.length) {
    console.error(`\n✗ ${name}: ${errors.length} problem(s)`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
}
