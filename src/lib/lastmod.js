import { execFileSync } from 'child_process';

// Last git commit date (ISO 8601) touching any of the given source paths.
// Returns undefined when git history is unavailable, so the sitemap omits
// <lastmod> rather than publishing an invented date.
export function gitLastModified(paths) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...paths], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out || undefined;
  } catch {
    return undefined;
  }
}
