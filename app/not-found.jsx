import Link from 'next/link';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import QuoteModal from '../src/components/QuoteModal';
import { QuoteModalProvider } from '../src/context/QuoteModalContext';
import { business } from '../src/config/business';

export const metadata = {
  title: { absolute: 'Page not found | Leo Luxe Clean' },
  description: 'The page you were looking for does not exist.',
  robots: { index: false, follow: true },
};

const links = [
  { href: '/services/', label: 'Cleaning services' },
  { href: '/areas/', label: 'Areas we cover' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/contact/', label: 'Contact us' },
];

export default function NotFound() {
  return (
    <QuoteModalProvider>
      <div className="min-h-screen bg-surface-black text-white font-sans overflow-x-hidden flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-24">
          <div className="text-center max-w-lg">
            <p className="label-caps text-gold mb-6">Error 404</p>
            <h1 className="heading-serif text-5xl sm:text-6xl text-white mb-6">Page not found</h1>
            <p className="text-neutral-400 text-lg mb-10">
              This page doesn&apos;t exist or has moved. Try one of these instead, or call us on{' '}
              <a href={business.phone.href} className="text-gold hover:underline">
                {business.phone.display}
              </a>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/" className="btn-gold label-caps px-8 py-3.5 rounded-lg inline-flex items-center justify-center">
                Go to the homepage
              </Link>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-400 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <Footer />
        <QuoteModal />
      </div>
    </QuoteModalProvider>
  );
}
