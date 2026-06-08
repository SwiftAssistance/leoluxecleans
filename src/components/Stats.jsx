'use client';
import React from 'react';
import { useScrollReveal, useCounter } from '../hooks/useScrollReveal';

const Stats = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });
  const [homesRef, homesCount] = useCounter(75);
  const [clientsRef, clientsCount] = useCounter(30);
  const [ratingRef, ratingDisplay] = useCounter(50);

  const stats = [
    {
      ref: homesRef,
      value: `${homesCount}+`,
      label: 'Homes Cleaned',
      sub: 'Across Slough & Berkshire',
    },
    {
      ref: clientsRef,
      value: `${clientsCount}+`,
      label: 'Happy Clients',
      sub: 'And growing every month',
    },
    {
      ref: ratingRef,
      value: `${(ratingDisplay / 10).toFixed(1)}`,
      label: 'Google Rating',
      sub: 'Based on verified reviews',
    },
    {
      ref: null,
      value: '100%',
      label: 'Satisfaction Rate',
      sub: 'We come back if needed',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-16 lg:py-20 bg-surface-dark border-y border-surface-border/50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gold/3 via-transparent to-gold/3 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-surface-border/40">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={stat.ref || undefined}
              className={`text-center lg:px-10 group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-8 h-px bg-gold/50 mx-auto mb-5 group-hover:w-16 transition-all duration-500" />
              <span className="heading-serif text-5xl sm:text-6xl text-white block mb-1.5">
                {stat.value}
              </span>
              <span className="label-caps text-[11px] text-gold/80 block mb-1">
                {stat.label}
              </span>
              <span className="text-neutral-600 text-xs">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
