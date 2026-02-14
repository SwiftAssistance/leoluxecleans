import React from 'react';
import { Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Statement = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-card to-surface-dark"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/[0.05] rounded-full blur-[120px]"></div>

      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-6 lg:px-12 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Quote
          size={40}
          className={`text-gold/30 mx-auto mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ transitionDelay: '200ms' }}
        />
        <blockquote className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-8">
          If it's not spotless when we leave,
          <br className="hidden sm:block" />
          <span className="text-gold-gradient">we come back and sort it. Simple.</span>
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div
            className={`divider-gold transition-all duration-700 ${
              isVisible ? 'w-12 opacity-100' : 'w-0 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          ></div>
          <span className="label-caps text-neutral-500 text-[10px]">
            Our Promise
          </span>
          <div
            className={`divider-gold transition-all duration-700 ${
              isVisible ? 'w-12 opacity-100' : 'w-0 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
