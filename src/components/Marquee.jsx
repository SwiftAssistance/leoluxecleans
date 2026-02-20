import React from 'react';

const marqueeItems = [
  'Fully Insured',
  'DBS Checked',
  'Eco-Friendly Products',
  '5-Star Rated on Google',
  'Free Quotes',
  'Slough & Berkshire',
  'Same Week Booking',
  '100% Satisfaction Guarantee',
  'No Contracts',
  'Local & Independent',
];

const Marquee = () => {
  return (
    <section className="relative z-20 py-5 bg-surface-dark border-y border-gold/20 overflow-hidden">
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-8 text-neutral-300 text-sm whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-gold/70 flex-shrink-0"></span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
