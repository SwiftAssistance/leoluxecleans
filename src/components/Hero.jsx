'use client';
import React from 'react';
import { ArrowRight, Phone, Star, ShieldCheck, Leaf } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';

const Hero = () => {
  const { openModal } = useQuoteModal();

  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src="/hero.png"
        alt=""
        role="presentation"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        decoding="async"
        width={1920}
        height={1080}
      />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/97 via-black/80 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-end pb-20 lg:pb-28 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">

          {/* Left content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span className="text-neutral-300 text-xs">Taking bookings this week</span>
              <span className="text-neutral-600 text-xs">·</span>
              <span className="text-neutral-400 text-xs">Slough, Windsor & Berkshire</span>
            </div>

            <h1 className="heading-serif text-[clamp(3.2rem,8.5vw,8rem)] text-white leading-[0.88] mb-8 max-w-4xl">
              Clean Done
              <br />
              <span className="text-gold-gradient">Properly.</span>
            </h1>

            <p className="text-neutral-400 text-lg max-w-lg leading-relaxed font-light mb-10">
              Leo Luxe is a small cleaning team based in Slough. We work across
              Berkshire and West London — every job held to the same high standard,
              whether it's a weekly clean or a one-off.
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
                href="tel:01753257118"
                className="btn-outline-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2"
                aria-label="Call us at 01753 257118"
              >
                <Phone size={16} /> 01753 257118
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
                <span className="text-white font-medium">5.0</span>
                <span className="text-neutral-500">on Google</span>
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
                  Google Review
                </span>
              </div>
              <p className="text-neutral-200 text-sm leading-relaxed mb-5">
                "They cleaned our whole house before we moved in and it was absolutely
                spotless. The attention to detail was incredible."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-sm font-semibold">S</span>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Sarah Mitchell</p>
                  <p className="text-neutral-500 text-xs">Homeowner · Slough</p>
                </div>
              </div>
            </div>

            {/* Quick stats card */}
            <div className="ml-auto w-full max-w-[340px] bg-gold/8 backdrop-blur-md border border-gold/20 rounded-2xl px-6 py-5 shadow-2xl">
              <div className="grid grid-cols-3 divide-x divide-gold/20">
                {[
                  { val: '75+', label: 'Homes Cleaned' },
                  { val: '5.0', label: 'Google Rating' },
                  { val: '100%', label: 'Satisfaction' },
                ].map((s, i) => (
                  <div key={i} className="text-center px-4 first:pl-0 last:pr-0">
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
