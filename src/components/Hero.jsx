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
      <HeroImage className="absolute inset-0 w-full h-full object-cover" />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/97 via-black/80 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      {/* Extra shade on small screens, where the copy sits over the bright side of the photo */}
      <div className="absolute inset-0 bg-black/55 lg:hidden" />

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

            {/* Testimonial card */}
            <div className="ml-auto w-full max-w-[340px] bg-black/55 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#C8A94E" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-[10px] label-caps text-gold/60 bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
                  Google review
                </span>
              </div>
              <p className="text-neutral-200 text-sm leading-relaxed mb-5">
                &ldquo;{heroReview.text}&rdquo;
              </p>
              <p className="text-white text-xs font-semibold">{heroReview.displayName}</p>
            </div>

            {/* Quick facts card */}
            <div className="ml-auto w-full max-w-[340px] bg-gold/8 backdrop-blur-md border border-gold/20 rounded-2xl px-6 py-5 shadow-2xl">
              <div className="grid grid-cols-3 divide-x divide-gold/20">
                {[
                  { val: business.google.ratingDisplay, label: 'On Google' },
                  { val: String(business.google.reviewCount), label: 'Reviews' },
                  { val: 'DBS', label: 'Checked' },
                ].map((s) => (
                  <div key={s.label} className="text-center px-4 first:pl-0 last:pr-0">
                    <p className="heading-serif text-2xl text-gold">{s.val}</p>
                    <p className="text-neutral-400 text-[10px] label-caps mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
