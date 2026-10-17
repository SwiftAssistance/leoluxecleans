import { business, absoluteUrl, CORE_AREA_SLUGS } from '../../src/config/business';
import { services } from '../../src/data/services';
import { getLocationBySlug } from '../../src/data/locations';

// /llms.txt: a short, plain-text summary of the business for AI assistants,
// built from the same config and data as the site.
export const dynamic = 'force-static';

export function GET() {
  const areas = CORE_AREA_SLUGS.map(getLocationBySlug);
  const body = `# ${business.name}

> Local cleaning company based in Slough, Berkshire. Home cleaning, deep cleans, end of tenancy, office and commercial, after-event and specialist cleaning for homes and businesses across Slough, Windsor, Maidenhead, Langley, Ascot and Eton. DBS-checked, insured team. Rated ${business.google.summary}.

## Contact

- Phone: ${business.phone.display} (${business.phone.e164})
- Email: ${business.email}
- Address: ${business.address.singleLine}, United Kingdom
- Hours: ${business.hours.display}
- Response time: we reply to quote requests ${business.responseTime}
- Google Business Profile: ${business.google.profileUrl}
- Instagram: ${business.instagram}

## Services

${services
  .map((s) => `- [${s.title}](${absoluteUrl(`/services/${s.slug}/`)}): ${s.priceFrom ? `from £${s.priceFrom}` : 'custom quote'}`)
  .join('\n')}

## Core areas

${areas.map((a) => `- [${a.name}](${absoluteUrl(`/areas/${a.slug}/`)}) (${a.postcodes})`).join('\n')}

## Key pages

- [Home](${absoluteUrl('/')})
- [All services](${absoluteUrl('/services/')})
- [Areas we cover](${absoluteUrl('/areas/')})
- [Reviews](${absoluteUrl('/reviews/')})
- [About](${absoluteUrl('/about/')})
- [Contact and free quote](${absoluteUrl('/contact/')})
- [Privacy policy](${absoluteUrl('/privacy/')})
- [Terms of service](${absoluteUrl('/terms/')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
