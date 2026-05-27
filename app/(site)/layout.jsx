import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import MobileCta from '../../src/components/MobileCta';
import BackToTop from '../../src/components/BackToTop';
import ScrollToTop from '../../src/components/ScrollToTop';
import QuoteModal from '../../src/components/QuoteModal';
import { QuoteModalProvider } from '../../src/context/QuoteModalContext';

export default function SiteLayout({ children }) {
  return (
    <QuoteModalProvider>
      <div className="min-h-screen bg-surface-black text-white font-sans overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCta />
        <BackToTop />
        <QuoteModal />
      </div>
    </QuoteModalProvider>
  );
}
