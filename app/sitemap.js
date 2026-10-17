import { services } from '../src/data/services';
import { locations } from '../src/data/locations';
import { absoluteUrl, isCoreArea } from '../src/config/business';
import { gitLastModified } from '../src/lib/lastmod';

// Only indexable pages, each URL identical to that page's canonical
// (trailing slash). lastmod is the git commit date of the page's source.
const page = (path, sources) => {
  const lastModified = gitLastModified(sources);
  return { url: absoluteUrl(path), ...(lastModified && { lastModified }) };
};

const SERVICE_DATA = ['src/data/services.js'];
const AREA_DATA = ['src/data/locations.js', 'src/data/areas.ts'];

export default function sitemap() {
  const staticPages = [
    page('/', ['app/(site)/page.jsx', 'src/page-components/HomePage.jsx']),
    page('/services/', ['app/(site)/services/page.jsx', 'src/page-components/ServicesPage.jsx', ...SERVICE_DATA]),
    page('/areas/', ['app/(site)/areas/page.jsx', 'src/page-components/AreasPage.jsx', ...AREA_DATA]),
    page('/about/', ['app/(site)/about/page.jsx', 'src/page-components/AboutPage.jsx']),
    page('/reviews/', ['app/(site)/reviews/page.jsx', 'src/page-components/ReviewsPage.jsx']),
    page('/contact/', ['app/(site)/contact/page.jsx', 'src/page-components/ContactPage.jsx']),
  ];

  const servicePages = services.map((s) =>
    page(`/services/${s.slug}/`, ['app/(site)/services/[slug]/page.jsx', 'src/page-components/ServiceDetailPage.jsx', ...SERVICE_DATA])
  );

  const locationPages = locations.map((l) =>
    page(`/areas/${l.slug}/`, ['app/(site)/areas/[slug]/page.jsx', 'src/page-components/LocationPage.jsx', ...AREA_DATA])
  );

  const areaServicePages = locations
    .filter((l) => isCoreArea(l.slug))
    .flatMap((l) =>
      services.map((s) =>
        page(`/areas/${l.slug}/${s.slug}/`, [
          'app/(site)/areas/[slug]/[serviceSlug]/page.jsx',
          'src/page-components/AreaServicePage.jsx',
          ...AREA_DATA,
          ...SERVICE_DATA,
        ])
      )
    );

  return [...staticPages, ...servicePages, ...locationPages, ...areaServicePages];
}
