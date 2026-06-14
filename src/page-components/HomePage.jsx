'use client';
import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Stats from '../components/Stats';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import Statement from '../components/Statement';
import About from '../components/About';
import Process from '../components/Process';
import Reviews from '../components/Reviews';
import HomeFaq from '../components/HomeFaq';
import CtaBand from '../components/CtaBand';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <BeforeAfter />
      <Statement />
      <About />
      <Process />
      <Reviews />
      <HomeFaq />
      <CtaBand />
      <Contact />
    </>
  );
};

export default HomePage;
