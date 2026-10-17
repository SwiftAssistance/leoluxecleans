'use client';
import React from 'react';
import Link from 'next/link';
import { useQuoteModal } from '../context/QuoteModalContext';
import { ArrowRight, Star, CheckCircle2, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import { services } from '../data/services';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { business } from '../config/business';

const ServicesPage = () => {
  const { openModal } = useQuoteModal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });
  const [processRef, processVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <PageHero
        title={<>Our <span className="text-gold-gradient">Services</span></>}
        subtitle="From regular home cleans to specialist work — honest pricing, no hidden fees, and a team that actually cares about the result."
        breadcrumb="Services"
      />

      {/* Trust bar */}
      <section className="py-6 bg-surface-dark border-b border-surface-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-neutral-400">
            <span className="flex items-center gap-2">
              <Star size={14} fill="#C8A94E" strokeWidth={0} />
              {business.google.summary}
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-gold" />
              DBS Checked & Insured
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-gold" />
              Eco-Friendly Products
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-gold" />
              Same Week Availability
            </span>
          </div>
        </div>
      </section>

      {/* Services index — numbered rows on hairlines, price on the right */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div ref={gridRef} className="rule-list">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group grid grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-4 py-10 lg:py-14 transition-all duration-500 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="col-span-2 lg:col-span-1 heading-serif text-3xl lg:text-5xl text-gold/30 group-hover:text-gold transition-colors leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="col-span-10 lg:col-span-8">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                    <h2 className="heading-serif text-3xl lg:text-5xl text-white group-hover:text-gold transition-colors">
                      {s.title}
                    </h2>
                    {i === 0 && <span className="label-caps text-[10px] text-gold/70">— Most Popular</span>}
                  </div>
                  <p className="text-neutral-400 text-[15px] leading-relaxed mb-4 max-w-xl">{s.heroDesc}</p>
                  <p className="text-neutral-600 text-xs leading-relaxed max-w-xl">
                    {s.features.slice(0, 4).map((f) => f.split(' — ')[0].split(' and ')[0]).join('  ·  ')}
                    {s.features.length > 4 && <span className="text-gold/70">  ·  +{s.features.length - 4} more</span>}
                  </p>
                </div>

                <div className="col-start-3 col-span-10 lg:col-start-auto lg:col-span-3 flex lg:flex-col items-baseline lg:items-end justify-between gap-3">
                  {s.pricing && <span className="heading-serif text-2xl lg:text-4xl text-gold">{s.pricing}</span>}
                  <span className="label-caps text-[10px] text-neutral-500 group-hover:text-gold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-surface-dark border-y border-surface-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="display text-5xl lg:text-7xl text-white mb-4">How It Works</h2>
            <p className="text-neutral-400 text-sm max-w-xs">
              From first contact to finished clean — we keep it straightforward.
            </p>
          </div>

          <ol ref={processRef} className="lg:col-span-8 rule-list">
            {[
              {
                step: '01',
                title: 'Tell Us What You Need',
                desc: "Fill in the form or call us. Tell us about your space and what you need. We'll give you a clear quote — no surprises.",
              },
              {
                step: '02',
                title: 'We Show Up On Time',
                desc: 'Your DBS-checked, insured team arrives fully equipped with eco-friendly products. Same faces every time.',
              },
              {
                step: '03',
                title: 'Enjoy the Result',
                desc: "We don't leave until it's done properly. Not happy? We come back and sort it for free. That's our guarantee.",
              },
            ].map((item, i) => (
              <li
                key={item.step}
                className={`grid grid-cols-12 gap-4 lg:gap-8 py-8 items-baseline transition-all duration-500 ${
                  processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="col-span-3 lg:col-span-2 heading-serif text-5xl lg:text-6xl text-gold/25 leading-none">
                  {item.step}
                </span>
                <div className="col-span-9 lg:col-span-10">
                  <h3 className="heading-serif text-2xl lg:text-3xl text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed max-w-md">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What every clean includes */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="display text-5xl lg:text-7xl text-white mb-4">Every Clean Includes</h2>
            <p className="text-neutral-400 text-sm max-w-xs">
              These aren't add-ons. They're standard with every single booking.
            </p>
          </div>

          <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 border-t border-surface-border/45">
            {[
              'Fully DBS-checked, insured team',
              'Eco-friendly, professional-grade products',
              'All equipment brought by us',
              '100% satisfaction guarantee',
              'No contracts or hidden fees',
              'Free re-clean if anything is missed',
            ].map((item) => (
              <li key={item} className="flex items-baseline gap-4 py-5 border-b border-surface-border/45">
                <span className="text-gold" aria-hidden="true">—</span>
                <span className="text-neutral-200 text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-14 bg-surface-dark border-y border-surface-border/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <a href={business.google.profileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center gap-2 hover:opacity-90">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} fill="#C8A94E" strokeWidth={0} />
              ))}
            </span>
            <span className="heading-serif text-3xl text-white">{business.google.summary}</span>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-surface-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="display text-5xl lg:text-7xl text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            No worries — give us a call or drop us a message. We'll figure out
            the right clean for your space together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal()}
              className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight size={14} />
            </button>
            <a
              href={business.phone.href}
              className="btn-outline-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
              aria-label={`Call us on ${business.phone.display}`}
            >
              <Phone size={16} /> {business.phone.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
