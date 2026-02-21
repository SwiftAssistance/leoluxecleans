import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Statement from '../components/Statement';
import About from '../components/About';
import Process from '../components/Process';
import Reviews from '../components/Reviews';
import CtaBand from '../components/CtaBand';
import Contact from '../components/Contact';
import Seo, { localBusinessSchema, websiteSchema, organizationSchema } from '../components/Seo';

const HOME_META_DESCRIPTION =
  'Leo Luxe Cleans — professional, DBS-checked cleaners in Slough, Windsor, Langley, Maidenhead, Eton & Burnham. Home cleaning from £60. Deep cleans, end of tenancy, office cleaning. 5-star rated. Free quotes.';

const HomePage = () => {
  return (
    <>
      <Seo
        description={HOME_META_DESCRIPTION}
        canonical="/"
        schema={[localBusinessSchema, websiteSchema, organizationSchema]}
      />
      <Hero />
      <Marquee />
      <Stats />
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
