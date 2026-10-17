import { services } from '../src/data/services';
import { areas } from '../src/data/areas';
import { absoluteUrl } from '../src/config/business';
import { gitLastModified } from '../src/lib/lastmod';
import { allCombos, comboPath } from '../src/lib/comboContent';

// Only indexable pages, each URL identical to that page's canonical
// (trailing slash). lastmod is the git commit date of the page's source.
const page = (path, sources) => {
  const lastModified = gitLastModified(sources);
  return { url: absoluteUrl(path), ...(lastModified && { lastModified }) };
};

const SERVICE_DATA = ['src/data/services.js'];
const AREA_DATA = ['src/data/areas.ts'];

export default function sitemap() {
  const staticPages = [
    page('/', ['app/(site)/page.jsx', 'src/page-components/HomePage.jsx']),
    page('/services/', ['app/(site)/services/page.jsx', 'src/page-components/ServicesPage.jsx', ...SERVICE_DATA]),
    page('/areas/', ['app/(site)/areas/page.jsx', 'src/page-components/AreasPage.jsx', ...AREA_DATA]),
    page('/about/', ['app/(site)/about/page.jsx', 'src/page-components/AboutPage.jsx']),
    page('/reviews/', ['app/(site)/reviews/page.jsx', 'src/page-components/ReviewsPage.jsx']),
    page('/contact/', ['app/(site)/contact/page.jsx', 'src/page-components/ContactPage.jsx']),
    page('/privacy/', ['app/(site)/privacy/page.jsx', 'src/components/LegalPage.jsx']),
    page('/terms/', ['app/(site)/terms/page.jsx', 'src/components/LegalPage.jsx']),
  ];

  const servicePages = services.map((s) =>
    page(`/services/${s.slug}/`, ['app/(site)/services/[slug]/page.jsx', 'src/page-components/ServiceDetailPage.jsx', ...SERVICE_DATA])
  );

  const areaPages = areas.map((a) =>
    page(`/areas/${a.slug}/`, ['app/(site)/areas/[slug]/page.jsx', 'src/page-components/AreaPage.jsx', 'src/lib/areaContent.js', ...AREA_DATA])
  );

  const comboPages = allCombos().map(({ area, service }) =>
    page(comboPath(area, service), [
      'app/(site)/areas/[slug]/[service]/page.jsx',
      'src/page-components/ComboPage.jsx',
      'src/lib/comboContent.js',
      ...SERVICE_DATA,
      ...AREA_DATA,
    ])
  );

  return [...staticPages, ...servicePages, ...areaPages, ...comboPages];
}
