import React from 'react';

const marqueeItems = [
  'Fully Insured',
  'DBS Checked',
  'Eco-Friendly Products',
  '500+ Homes Cleaned',
  '5-Star Rated',
  'Free Quotes',
  'Slough & Berkshire',
  'Same Week Booking',
  'Satisfaction Guaranteed',
  '12+ Years Experience',
];

const Marquee = () => {
  return (
    <section className="relative z-20 py-5 bg-surface-dark border-y border-gold/10 overflow-hidden">
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-8 text-neutral-400 text-sm whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
