import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileCta from './MobileCta';
import BackToTop from './BackToTop';
import ScrollToTop from './ScrollToTop';
import QuoteModal from './QuoteModal';
import { QuoteModalProvider } from '../context/QuoteModalContext';

const Layout = () => {
  const { pathname } = useLocation();
  const isLanding = pathname === '/landing';

  return (
    <QuoteModalProvider>
      <div className="min-h-screen bg-surface-black text-white font-sans overflow-x-hidden">
        <ScrollToTop />
        {!isLanding && <Navbar />}
        <Outlet />
        {!isLanding && <Footer />}
        {!isLanding && <MobileCta />}
        {!isLanding && <BackToTop />}
        <QuoteModal />
      </div>
    </QuoteModalProvider>
  );
};

export default Layout;
