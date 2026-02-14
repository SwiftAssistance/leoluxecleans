import React from 'react';
import { useScrollReveal, useCounter } from '../hooks/useScrollReveal';

const Stats = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });
  const [homesRef, homesCount] = useCounter(500);
  const [yearsRef, yearsCount] = useCounter(10);
  const [reviewsRef, reviewsCount] = useCounter(200);
  const [ratingRef, ratingDisplay] = useCounter(50);

  const stats = [
    { ref: homesRef, value: `${homesCount}+`, label: 'Homes Cleaned' },
    { ref: yearsRef, value: `${yearsCount}+`, label: 'Years Experience' },
    { ref: reviewsRef, value: `${reviewsCount}+`, label: '5-Star Reviews' },
    { ref: ratingRef, value: `${(ratingDisplay / 10).toFixed(1)}`, label: 'Google Rating' },
  ];

  return (
    <section
      ref={ref}
      className="relative py-14 lg:py-16 bg-surface-dark border-y border-surface-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={stat.ref}
              className={`text-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="heading-serif text-4xl sm:text-5xl lg:text-6xl text-gold block mb-1">
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
