import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileCta from './MobileCta';
import BackToTop from './BackToTop';
import ScrollToTop from './ScrollToTop';
import QuoteModal from './QuoteModal';
import { QuoteModalProvider } from '../context/QuoteModalContext';

const Layout = () => {
  return (
    <QuoteModalProvider>
      <div className="min-h-screen bg-surface-black text-white font-sans overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
        <MobileCta />
        <BackToTop />
        <QuoteModal />
      </div>
    </QuoteModalProvider>
  );
};

export default Layout;
