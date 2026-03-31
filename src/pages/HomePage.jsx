import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Statement from '../components/Statement';
import About from '../components/About';
import Process from '../components/Process';
import Reviews from '../components/Reviews';
import HomeFaq from '../components/HomeFaq';
import CtaBand from '../components/CtaBand';
import Contact from '../components/Contact';
import Seo, { localBusinessSchema, websiteSchema, organizationSchema, createFaqSchema } from '../components/Seo';

const HOME_META_DESCRIPTION =
  'Local cleaners based in Slough. Home cleaning from £60, deep cleans, end of tenancy, office cleaning across Windsor, Berkshire & West London. DBS checked, fully insured. Same-week bookings. Free quote.';

const homeFaqSchema = createFaqSchema([
  { q: 'How much does home cleaning cost in Slough?', a: 'Home cleaning in Slough starts from £60. The exact price depends on the size of your property and how often you want us. We give you a clear, fixed quote before any work starts.' },
  { q: 'What areas do you cover?', a: "We're based in Slough (SL1) and cover Windsor, Langley, Maidenhead, Eton, Burnham, Ascot, Bracknell, and West London including Hayes, Southall, Uxbridge, Ealing, Greenford, Northolt, West Drayton, and Hounslow." },
  { q: 'Are your cleaners DBS checked?', a: "Yes — every team member is DBS checked and fully insured. We don't use agency staff or sub-contractors." },
  { q: 'Do you bring your own products and equipment?', a: "We bring everything — products, equipment, and supplies. You don't need to provide anything." },
  { q: 'How quickly can you start?', a: 'Most weeks we can fit a new booking within the same week. Call us on 01753 257118 or fill in the quote form and we\'ll confirm availability within a couple of hours.' },
  { q: "What if I'm not happy with the clean?", a: "Tell us. If something's been missed or not done to standard, we'll come back and sort it — same week, no charge." },
]);

const HomePage = () => {
  return (
    <>
      <Seo
        description={HOME_META_DESCRIPTION}
        canonical="/"
        schema={[localBusinessSchema, websiteSchema, organizationSchema, homeFaqSchema]}
      />
      <Hero />
      <Marquee />
      <Stats />
      <Services />
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
