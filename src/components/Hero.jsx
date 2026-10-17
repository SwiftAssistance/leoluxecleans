'use client';
import React from 'react';
import HeroImage from './HeroImage';
import { ArrowRight, Phone, Star } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { business } from '../config/business';
import { getReview } from '../data/reviews';
import { ReviewCard, GoogleLogo } from './GoogleReviews';

const heroReview = getReview('linda-willis');

// Circular "5.0 on Google" seal that slowly turns.
const RatingSeal = () => (
  <a
    href={business.google.profileUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block w-32 h-32 lg:w-36 lg:h-36 rounded-full bg-surface-black"
    aria-label={business.google.summary}
  >
    <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full animate-[spin_28s_linear_infinite] motion-reduce:animate-none" aria-hidden="true">
      <defs>
        <path id="seal-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
      </defs>
      <text className="fill-current text-neutral-500" style={{ fontSize: '9.5px', letterSpacing: '0.32em', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}>
        <textPath href="#seal-circle">RATED ON GOOGLE · {business.google.reviewCount} REVIEWS · </textPath>
      </text>
    </svg>
    <span className="absolute inset-0 flex flex-col items-center justify-center">
      <GoogleLogo size={16} className="mb-1" />
      <span className="heading-serif text-4xl text-white leading-none group-hover:text-gold transition-colors">
        {business.google.ratingDisplay}
      </span>
      <span className="flex gap-px mt-1" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={8} fill="#FBBC05" strokeWidth={0} />
        ))}
      </span>
    </span>
  </a>
);

const Hero = () => {
  const { openModal } = useQuoteModal();

  return (
    <section className="theme-dark relative bg-surface-black pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Masthead line */}
        <div className="flex items-center justify-between gap-6 border-b border-surface-border/70 pb-4 mb-10 lg:mb-14">
          <span className="label-caps text-[10px] text-neutral-500">Home · Deep · End of tenancy · Office</span>
          <span className="hidden sm:inline label-caps text-[10px] text-neutral-500">DBS checked · Fully insured</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-end">
          {/* Left — oversized staggered headline */}
          <div className="lg:col-span-7 relative z-10">
            <h1 className="display text-white text-[clamp(4.25rem,12vw,10.5rem)]">
              <span className="block label-caps text-[11px] text-gold mb-8" style={{ letterSpacing: '0.2em', lineHeight: 1.4 }}>
                Cleaners in Slough, Windsor &amp; Berkshire
              </span>
              <span className="block">Clean</span>
              <span className="block pl-[14%]">Done</span>
              <span className="block text-gold">Properly.</span>
            </h1>

            <div className="mt-10 lg:mt-12 grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-start lg:pl-[14%]">
              <span className="hidden sm:block w-12 h-px bg-gold mt-3" aria-hidden="true" />
              <div>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-sm">
                  Home, deep, end of tenancy and office cleaning. The same trusted
                  team each visit, so your home is in hands you know.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <button
                    onClick={() => openModal()}
                    className="btn-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2 group"
                  >
                    Get a Free Quote{' '}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href={business.phone.href}
                    className="btn-outline-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2"
                    aria-label={`Call us on ${business.phone.display}`}
                  >
                    <Phone size={14} /> {business.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — arched photo with an overlapping quote and seal */}
          <div className="lg:col-span-5 relative">
            <div className="relative ml-auto w-[88%] sm:w-[70%] lg:w-full">
              <div className="absolute -inset-3 lg:-inset-4 rounded-t-full border border-gold/50 pointer-events-none" aria-hidden="true" />
              <div className="relative rounded-t-full overflow-hidden aspect-[3/4] bg-surface-dark">
                <HeroImage
                  className="absolute inset-0 w-full h-full object-cover object-[62%_center] scale-[1.15]"
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  alt="A Leo Luxe Clean cleaner wiping down a kitchen worktop"
                />
              </div>

              <div className="absolute -top-6 -left-10 lg:-left-16">
                <RatingSeal />
              </div>
            </div>

            <div className="relative lg:absolute lg:-left-8 lg:-bottom-8 -mt-12 lg:mt-0 mr-auto w-[88%] sm:w-[60%] lg:w-[74%] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] rounded-xl">
              <ReviewCard review={heroReview} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
