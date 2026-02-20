import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Statement = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="relative py-20 lg:py-28 bg-surface-dark border-y border-surface-border/50 overflow-hidden">
      {/* Gold ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[300px] bg-gold/6 rounded-full blur-[100px]" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-6 lg:px-12 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <blockquote className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-8">
          If it's not spotless when we leave,
          <br className="hidden sm:block" />
          <span className="text-gold-gradient"> we come back and sort it. Simple.</span>
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="divider-gold"></div>
          <span className="label-caps text-neutral-400 text-[10px]">Our Promise</span>
          <div className="divider-gold"></div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
