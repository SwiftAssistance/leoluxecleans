import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { areas } from '../data/areas';

// Homepage links to every area page, grouped by region, so each town page is
// one click from the homepage.
const regions = [
  { title: 'Berkshire & Buckinghamshire', items: areas.filter((a) => a.region !== 'West London') },
  { title: 'West London', items: areas.filter((a) => a.region === 'West London') },
];

const HomeAreas = () => (
  <section className="py-16 lg:py-20 bg-surface-dark" aria-labelledby="home-areas-heading">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <p className="section-mark mb-6">(05) Where We Clean</p>
        <h2 id="home-areas-heading" className="display text-[2.75rem] lg:text-5xl text-white">
          Local to
          <br />
          <span className="text-neutral-500">Slough.</span>
        </h2>
        <p className="text-neutral-400 text-[15px] leading-relaxed mt-6 max-w-xs">
          Based in George Green, cleaning homes and offices across Berkshire,
          Buckinghamshire and West London.
        </p>
        <Link
          href="/areas/"
          className="inline-flex items-center gap-2 label-caps text-gold text-[11px] mt-8 hover:gap-3 transition-all"
        >
          All areas we cover <ArrowRight size={12} />
        </Link>
      </div>

      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
        {regions.map((r) => (
          <div key={r.title}>
            <h3 className="label-caps text-[10px] text-neutral-500 border-b border-surface-border pb-3 mb-2">{r.title}</h3>
            <ul>
              {r.items.map((a) => (
                <li key={a.slug} className="border-b border-surface-border/60">
                  <Link
                    href={`/areas/${a.slug}/`}
                    className="group flex items-baseline justify-between gap-4 py-3"
                  >
                    <span className="heading-serif text-2xl text-white group-hover:text-gold transition-colors">
                      <span className="sr-only">Cleaners in </span>{a.name}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-500">{a.postcodeDistricts.join(' ')}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeAreas;
