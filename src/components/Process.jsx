'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useQuoteModal } from '../context/QuoteModalContext';
import { business } from '../config/business';

const steps = [
  {
    num: '01',
    title: 'Get in Touch',
    desc: `Drop us a message or call. We'll get back ${business.responseTime} with an honest quote — no hard sell, no obligation.`,
  },
  {
    num: '02',
    title: 'We Get to Work',
    desc: "Our team arrives on time with everything needed. You don't lift a finger — just let us in and leave the rest to us.",
  },
  {
    num: '03',
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

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Section header */}
          <div className="lg:col-span-4">
            <p className="label-caps text-gold text-[10px] mb-4">How It Works</p>
            <h2 className="heading-serif text-4xl lg:text-6xl text-white">
              Three steps.
              <br />
              <span className="text-neutral-500">That's it.</span>
            </h2>
          </div>

          {/* Steps — a numbered sequence, not cards */}
          <ol className="lg:col-span-8 rule-list">
            {steps.map((step, i) => (
              <li
                key={step.num}
                className={`grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 items-baseline transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 180}ms` }}
              >
                <span className="col-span-3 lg:col-span-2 heading-serif text-6xl lg:text-8xl text-gold/25 leading-none">
                  {step.num}
                </span>
                <div className="col-span-9 lg:col-span-10">
                  <h3 className="heading-serif text-3xl lg:text-4xl text-white mb-3">{step.title}</h3>
                  <p className="text-neutral-400 text-[15px] leading-relaxed max-w-md">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div
          className={`mt-14 lg:mt-16 lg:pl-[calc(33.333%+4rem)] transition-all duration-700 ${
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
          <p className="text-neutral-600 text-xs mt-4">Free quote · No commitment · Response {business.responseTime}</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
