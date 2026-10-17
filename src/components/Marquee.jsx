import React from 'react';

const marqueeItems = [
  'Fully Insured',
  'DBS Checked',
  'Eco-Friendly Products',
  'Rated 5.0 on Google',
  'Free Quotes',
  'Slough & Berkshire',
  'Same-Week Bookings',
  'Satisfaction Guaranteed',
  'No Contracts',
  'Local & Independent',
  'From £60',
  'Same Team Every Visit',
];

const Marquee = () => {
  return (
    <section className="theme-dark relative z-20 py-4 lg:py-5 bg-surface-black border-y border-gold/25 overflow-hidden" aria-label="Why choose us">
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 heading-serif text-lg lg:text-2xl text-white whitespace-nowrap"
            aria-hidden={i >= marqueeItems.length ? 'true' : undefined}
          >
            {item}
            <span className="text-gold text-xl lg:text-2xl" aria-hidden="true">&#10022;</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
