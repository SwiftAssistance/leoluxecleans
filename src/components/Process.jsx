'use client';
import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useQuoteModal } from '../context/QuoteModalContext';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Get in Touch',
    desc: "Drop us a message or call. We'll get back within 2 hours with an honest quote — no hard sell, no obligation.",
  },
  {
    num: '02',
    icon: Sparkles,
    title: 'We Get to Work',
    desc: "Our team arrives on time with everything needed. You don't lift a finger — just let us in and leave the rest to us.",
  },
  {
    num: '03',
    icon: CheckCircle2,
    title: 'Walk Into Spotless',
    desc: "Your space, done properly. Not happy with anything? We come back and fix it — free, no questions asked.",
  },
];

const Process = () => {
  const { openModal } = useQuoteModal();
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-surface-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="label-caps text-gold text-[10px] mb-4">How It Works</p>
          <h2 className="heading-serif text-4xl lg:text-6xl text-white">
            Three steps.{' '}
            <span className="text-neutral-500">That's it.</span>
          </h2>
        </div>

        {/* Steps — horizontal on desktop */}
        <div
          ref={ref}
          className="relative grid grid-cols-1 lg:grid-cols-3 gap-0"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-gradient-to-r from-gold/30 via-gold/15 to-gold/30 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className={`relative z-10 flex flex-col items-start lg:items-center lg:text-center px-0 lg:px-10 transition-all duration-700 ${
                  i > 0 ? 'mt-12 pt-12 lg:mt-0 lg:pt-0 border-t border-surface-border/40 lg:border-t-0' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 180}ms` }}
              >
                {/* Number circle */}
                <div className="relative mb-7">
                  <div className="w-24 h-24 rounded-full border border-gold/25 bg-surface-dark flex items-center justify-center group-hover:border-gold/50 transition-colors">
                    <Icon size={28} className="text-gold/70" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-surface-black border border-surface-border/60 flex items-center justify-center">
                    <span className="text-[10px] font-mono text-neutral-500">{step.num}</span>
                  </span>
                </div>

                <h3 className="text-white font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 lg:mt-20 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <button
            onClick={() => openModal()}
            className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center gap-2 group"
          >
            Start with Step One{' '}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-neutral-600 text-xs mt-4">Free quote · No commitment · Response within 2 hours</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
