'use client';
import React from 'react';
import Link from 'next/link';
import { useQuoteModal } from '../context/QuoteModalContext';
import { ArrowRight, MapPin, Star, CheckCircle2, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import { locations } from '../data/locations';
import { useScrollReveal } from '../hooks/useScrollReveal';

const AreasPage = () => {
  const { openModal } = useQuoteModal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  const berkshire = locations.filter((l) => l.county === 'Berkshire' || l.county === 'Buckinghamshire');
  const westLondon = locations.filter((l) => l.county === 'West London');

  return (
    <>
      <PageHero
        title={<>Areas We <span className="text-gold-gradient">Cover</span></>}
        subtitle="Based in Slough, we cover Berkshire, Buckinghamshire and West London — home cleaning, deep cleans, end of tenancy and more."
        breadcrumb="Areas"
      />

      {/* Trust bar */}
      <section className="py-6 bg-surface-dark border-b border-surface-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-neutral-400">
            <span className="flex items-center gap-2">
              <Star size={14} fill="#C8A94E" strokeWidth={0} />
              <span className="text-white font-medium">5.0</span> Google Rating
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-gold" />
              DBS Checked & Insured
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-gold" />
              Same Week Availability
            </span>
          </div>
        </div>
      </section>

      {/* Berkshire & Bucks */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-2">
            Berkshire &amp; Buckinghamshire
          </h2>
          <p className="text-neutral-400 text-sm mb-10">
            Based in Slough — these are our closest service areas.
          </p>
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {berkshire.map((loc, i) => (
              <Link
                key={loc.slug}
                href={`/areas/${loc.slug}`}
                className={`group block rounded-xl border border-surface-border/40 hover:border-gold/20 p-6 transition-all duration-500 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={14} className="text-gold flex-shrink-0" />
                      <h3 className="text-white font-semibold group-hover:text-gold transition-colors">
                        {loc.name}
                      </h3>
                    </div>
                    <p className="text-neutral-500 text-xs mb-3">{loc.postcodes}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                      {loc.heroDesc}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-surface-border/30 flex items-center justify-between">
                  <span className="text-neutral-500 text-xs">From £60</span>
                  <span className="label-caps text-[10px] text-gold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View area <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* West London */}
      <section className="py-16 lg:py-24 bg-surface-dark border-y border-surface-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-2">
            West London
          </h2>
          <p className="text-neutral-400 text-sm mb-10">
            Extending our coverage across West London — same standards, same team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {westLondon.map((loc, i) => (
              <Link
                key={loc.slug}
                href={`/areas/${loc.slug}`}
                className="group block rounded-xl border border-surface-border/40 hover:border-gold/20 p-6 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={14} className="text-gold flex-shrink-0" />
                      <h3 className="text-white font-semibold group-hover:text-gold transition-colors">
                        {loc.name}
                      </h3>
                    </div>
                    <p className="text-neutral-500 text-xs mb-3">{loc.postcodes}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                      {loc.heroDesc}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-surface-border/30 flex items-center justify-between">
                  <span className="text-neutral-500 text-xs">From £60</span>
                  <span className="label-caps text-[10px] text-gold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View area <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-surface-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
            Not sure if we cover you?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            Give us a call — if you're within range we'll let you know straight away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal()}
              className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight size={14} />
            </button>
            <a
              href="tel:01753257118"
              className="btn-outline-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
              aria-label="Call our landline at 01753 257118"
            >
              <Phone size={16} /> 01753 257118
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AreasPage;
