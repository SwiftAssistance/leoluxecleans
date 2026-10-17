import React from 'react';
import { business } from '../config/business';

// Static, server-rendered values from the business config (no animated
// counters, so the HTML never shows placeholder numbers).
const stats = [
  {
    value: business.google.ratingDisplay,
    label: 'Rating on Google',
    sub: `From ${business.google.reviewCount} reviews`,
    href: business.google.profileUrl,
  },
  { value: 'Free', label: 'No-obligation quotes', sub: `Response ${business.responseTime}` },
  { value: 'DBS', label: 'Checked team', sub: 'Fully insured' },
  { value: '6 days', label: 'Open each week', sub: business.hours.short },
];

const Stats = () => (
  <section className="relative py-16 lg:py-20 bg-surface-dark border-y border-surface-border/50 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-surface-border/40">
        {stats.map((stat) => {
          const body = (
            <>
              <div className="w-8 h-px bg-gold/50 mx-auto mb-5" />
              <span className="heading-serif text-4xl sm:text-5xl text-white block mb-1.5">{stat.value}</span>
              <span className="label-caps text-[11px] text-gold/80 block mb-1">{stat.label}</span>
              <span className="text-neutral-500 text-xs">{stat.sub}</span>
            </>
          );
          return (
            <li key={stat.label} className="text-center lg:px-10">
              {stat.href ? (
                <a href={stat.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90">
                  {body}
                </a>
              ) : (
                body
              )}
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Stats;
