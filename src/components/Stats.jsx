import React from 'react';
import { useScrollReveal, useCounter } from '../hooks/useScrollReveal';

const Stats = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });
  const [homesRef, homesCount] = useCounter(75);
  const [clientsRef, clientsCount] = useCounter(30);
  const [ratingRef, ratingDisplay] = useCounter(50);

  const stats = [
    { ref: homesRef, value: `${homesCount}+`, label: 'Homes Cleaned' },
    { ref: clientsRef, value: `${clientsCount}+`, label: 'Happy Clients' },
    { ref: ratingRef, value: `${(ratingDisplay / 10).toFixed(1)}`, label: 'Google Rating' },
    { ref: null, value: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section
      ref={ref}
      className="relative py-14 lg:py-16 bg-surface-dark border-y border-surface-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-surface-border/50">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={stat.ref || undefined}
              className={`text-center lg:px-12 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="heading-serif text-4xl sm:text-5xl lg:text-6xl text-gold block mb-1">
                {stat.value}
              </span>
              <span className="label-caps text-[10px] text-neutral-400">
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
