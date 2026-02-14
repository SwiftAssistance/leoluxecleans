import React from 'react';
import { useScrollReveal, useCounter } from '../hooks/useScrollReveal';

const Stats = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });
  const [homesRef, homesCount] = useCounter(500);
  const [yearsRef, yearsCount] = useCounter(10);
  const [reviewsRef, reviewsCount] = useCounter(200);
  const [ratingRef, ratingDisplay] = useCounter(50); // 50 = 5.0

  const stats = [
    { ref: homesRef, value: `${homesCount}+`, label: 'Homes Cleaned' },
    { ref: yearsRef, value: `${yearsCount}+`, label: 'Years Experience' },
    { ref: reviewsRef, value: `${reviewsCount}+`, label: '5-Star Reviews' },
    { ref: ratingRef, value: `${(ratingDisplay / 10).toFixed(1)}`, label: 'Google Rating' },
  ];

  return (
    <section
      ref={ref}
      className="relative py-14 lg:py-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-card to-surface-dark"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={stat.ref}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="heading-serif text-4xl sm:text-5xl lg:text-6xl text-gold-gradient block mb-1">
                {stat.value}
              </span>
              <span className="label-caps text-[10px] text-neutral-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
