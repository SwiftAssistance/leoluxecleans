import React from 'react';
import { ArrowRight, Phone, Star } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';

const Hero = () => {
  const { openModal } = useQuoteModal();
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <img
        src="/hero.svg"
        alt=""
        role="presentation"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        decoding="async"
        width={1920}
        height={1080}
      />

      {/* Single combined overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-end min-h-screen pb-24 lg:pb-32 pt-32">
        {/* Availability line */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-neutral-400 text-sm">
            Taking bookings this week across Slough & Berkshire
          </span>
        </div>

        <h1 className="heading-serif text-[clamp(3rem,8vw,7.5rem)] text-white leading-[0.9] mb-8 max-w-4xl">
          Professional Cleaning
          <br />
          in Slough &amp; <span className="text-gold-gradient">Berkshire.</span>
        </h1>

        <p className="text-neutral-400 text-lg max-w-md leading-relaxed font-light mb-10">
          Clean done properly. A small, local team based in Slough — every home
          we clean gets the same care and attention, because our reputation depends on it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            onClick={() => openModal()}
            className="btn-gold glow-pulse label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2 group"
          >
            Get a Free Quote{' '}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <a
            href="tel:01753257118"
            className="btn-outline-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2"
            aria-label="Call our landline at 01753 257118"
          >
            <Phone size={16} /> 01753 257118
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span className="flex items-center gap-1.5 text-neutral-400">
            <Star size={14} fill="#C8A94E" strokeWidth={0} />
            <span className="text-white font-medium">5.0</span> on Google
          </span>
          <span className="text-neutral-600">·</span>
          <span className="text-neutral-400">DBS checked & fully insured</span>
          <span className="text-neutral-600">·</span>
          <span className="text-neutral-400">Eco-friendly products</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
