'use client';
import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { homeFaqs } from '../data/faqs';

const faqs = homeFaqs;

const HomeFaq = () => {
  const [open, setOpen] = useState(null);
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="py-20 lg:py-28 bg-surface-black" id="faq">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="label-caps text-gold mb-3 text-[11px]">Common Questions</p>
          <h2 className="heading-serif text-4xl lg:text-5xl text-white">
            Frequently Asked
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-500 ${
                open === i
                  ? 'border-gold/20 bg-surface-dark'
                  : 'border-surface-border/40 bg-surface-dark/50'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <button
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-white text-sm font-medium leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-gold flex-shrink-0 mt-0.5 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 label-caps text-gold text-[11px] hover:gap-3 transition-all"
          >
            Got another question? Get in touch <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
