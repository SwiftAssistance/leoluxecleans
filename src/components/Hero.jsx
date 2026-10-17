'use client';
import React from 'react';
import HeroImage from './HeroImage';
import { ArrowRight, Phone, Star, ShieldCheck, Leaf } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { business } from '../config/business';
import { getReview } from '../data/reviews';

const heroReview = getReview('linda-willis');

const Hero = () => {
  const { openModal } = useQuoteModal();

  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroImage className="absolute inset-0 w-full h-full object-cover object-[70%_center]" />

      {/* Multi-layer overlay for depth */}
      {/* Solid dark panel behind the copy on the left, fading out over the photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(11,11,11,0.96) 0%, rgba(11,11,11,0.9) 38%, rgba(11,11,11,0.55) 62%, rgba(11,11,11,0.2) 100%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
      {/* Extra shade on small screens, where the copy sits over the bright side of the photo */}
      <div className="absolute inset-0 bg-black/60 lg:hidden" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-end pb-20 lg:pb-28 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">

          {/* Left content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-black/40 border border-gold/30 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <span className="text-gold text-xs font-semibold">Local cleaners based in Slough</span>
              <span className="text-neutral-600 text-xs">·</span>
              <span className="text-neutral-400 text-xs">Windsor, Ascot & Berkshire</span>
            </div>

            <h1 className="heading-serif text-[clamp(3.2rem,8.5vw,8rem)] text-white leading-[0.88] mb-8 max-w-4xl">
              Clean Done
              <br />
              <span className="text-gold-gradient">Properly.</span>
            </h1>

            <p className="text-neutral-400 text-lg max-w-lg leading-relaxed font-light mb-10">
              Home, deep, end of tenancy and office cleaning across Slough, Windsor,
              Ascot &amp; Berkshire. DBS-checked, fully insured, and the same team
              each visit, so your home is in hands you know and trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => openModal()}
                className="btn-gold glow-pulse label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2 group"
              >
                Get a Free Quote{' '}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={business.phone.href}
                className="btn-outline-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2"
                aria-label={`Call us on ${business.phone.display}`}
              >
                <Phone size={16} /> {business.phone.display}
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <span className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#C8A94E" strokeWidth={0} />
                  ))}
                </div>
                <a href={business.google.profileUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-gold">
                  {business.google.summary}
                </a>
              </span>
              <span className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-neutral-400">
                <ShieldCheck size={13} className="text-gold/70" /> DBS checked & fully insured
              </span>
              <span className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-neutral-400">
                <Leaf size={13} className="text-gold/70" /> Eco-friendly products
              </span>
            </div>
          </div>

          {/* Right — floating cards, desktop only */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-end gap-4 pb-2">

            {/* Pull-quote on a gold rule — no card */}
            <figure className="ml-auto w-full max-w-[360px] border-l-2 border-gold pl-6 [text-shadow:0_1px_12px_rgba(0,0,0,0.9)]">
              <blockquote className="heading-serif text-2xl text-white" style={{ lineHeight: 1.3, fontWeight: 400 }}>
                &ldquo;{heroReview.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="label-caps text-[10px] text-white">{heroReview.displayName}</span>
                <span className="h-px w-6 bg-gold/60" aria-hidden="true" />
                <span className="flex gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="#C8A94E" strokeWidth={0} />
                  ))}
                </span>
                <span className="sr-only">Google review</span>
              </figcaption>
            </figure>

            {/* Quick facts — a ruled row */}
            <div className="ml-auto w-full max-w-[360px] grid grid-cols-3 divide-x divide-white/20 border-t border-white/20 pt-5 mt-6 [text-shadow:0_1px_12px_rgba(0,0,0,0.9)]">
              {[
                { val: business.google.ratingDisplay, label: 'On Google' },
                { val: String(business.google.reviewCount), label: 'Reviews' },
                { val: 'DBS', label: 'Checked' },
              ].map((s) => (
                <div key={s.label} className="px-4 first:pl-0 last:pr-0">
                  <p className="heading-serif text-3xl text-gold">{s.val}</p>
                  <p className="text-neutral-300 text-[10px] label-caps mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
