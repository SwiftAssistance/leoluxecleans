'use client';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { business } from '../config/business';

const Statement = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });
  const { openModal } = useQuoteModal();

  return (
    <section className="theme-dark relative py-28 lg:py-44 bg-surface-black overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Giant decorative quotation mark */}
      <div className="absolute top-8 left-8 lg:left-16 text-[180px] lg:text-[260px] leading-none text-gold/5 heading-serif select-none pointer-events-none">
        &ldquo;
      </div>

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto px-6 lg:px-12 text-center transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="section-mark mb-10">(02) Our Promise</p>

        <blockquote className="display text-5xl sm:text-6xl lg:text-[5.5rem] text-white mb-12 lg:mb-16">
          If it's not spotless when we leave,
          <br className="hidden sm:block" />
          <span className="text-gold-gradient"> we come back and sort it.</span>
          <br className="hidden sm:block" />
          <span className="text-neutral-400"> Simple.</span>
        </blockquote>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openModal()}
            className="btn-gold label-caps px-8 py-4 rounded-lg inline-flex items-center gap-2 group"
          >
            Hold Us to That{' '}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center gap-3 text-neutral-500 text-xs">
            <div className="h-px w-8 bg-surface-border" />
            No obligation · Response {business.responseTime}
            <div className="h-px w-8 bg-surface-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
