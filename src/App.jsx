import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Statement from './components/Statement';
import About from './components/About';
import Process from './components/Process';
import Reviews from './components/Reviews';
import CtaBand from './components/CtaBand';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCta from './components/MobileCta';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <div className="min-h-screen bg-surface-black text-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Statement />
      <About />
      <Process />
      <Reviews />
      <CtaBand />
      <Contact />
      <Footer />
      <MobileCta />
      <BackToTop />
    </div>
  );
};

export default App;
