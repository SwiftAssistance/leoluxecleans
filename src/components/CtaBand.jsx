'use client';
import React from 'react';
import { Phone, ArrowRight, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useQuoteModal } from '../context/QuoteModalContext';
import { business } from '../config/business';

const CtaBand = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });
  const { openModal } = useQuoteModal();

  return (
    <section className="theme-dark relative py-16 lg:py-24 bg-surface-black overflow-hidden">
      {/* Decorative top/bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[300px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto px-6 lg:px-12 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Stars */}
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#C8A94E" strokeWidth={0} />
          ))}
        </div>

        <p className="label-caps text-gold text-[10px] mb-6 tracking-widest">Ready When You Are</p>

        <h2 className="display text-[2.75rem] sm:text-5xl lg:text-6xl text-white mb-8">
          Want your place
          <br />
          <span className="text-gold-gradient">sorted this week?</span>
        </h2>

        <p className="text-neutral-400 text-base max-w-lg mx-auto mb-10 leading-relaxed">
          Free quote, no obligation. Tell us what you need and we&apos;ll come
          back to you with a clear, fixed price.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => openModal()}
            className="btn-gold glow-pulse label-caps px-10 py-4 rounded-lg text-center flex items-center justify-center gap-2 group"
          >
            Get a Free Quote{' '}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={business.phone.href}
            className="btn-outline-gold label-caps px-10 py-4 rounded-lg text-center flex items-center justify-center gap-2"
            aria-label={`Call us on ${business.phone.display}`}
          >
            <Phone size={16} /> {business.phone.display}
          </a>
        </div>

        <p className="text-neutral-600 text-xs">
          Response {business.responseTime} · No contracts · No deposit required
        </p>
      </div>
    </section>
  );
};

export default CtaBand;
