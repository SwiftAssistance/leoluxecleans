import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Statement from '../components/Statement';
import About from '../components/About';
import Process from '../components/Process';
import Reviews from '../components/Reviews';
import CtaBand from '../components/CtaBand';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Statement />
      <About />
      <Process />
      <Reviews />
      <CtaBand />
      <Contact />
    </>
  );
};

export default HomePage;
