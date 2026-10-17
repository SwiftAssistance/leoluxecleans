import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { homeFaqs as faqs } from '../data/faqs';

// Server-rendered: every answer is in the HTML, expandable with <details>.
const HomeFaq = () => (
  <section className="py-20 lg:py-28 bg-surface-black" id="faq">
    <div className="max-w-4xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-12">
        <p className="label-caps text-gold mb-3 text-[11px]">Common Questions</p>
        <h2 className="heading-serif text-4xl lg:text-5xl text-white">Frequently Asked</h2>
      </div>

      <div className="space-y-2">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-xl border border-surface-border/40 bg-surface-dark/50 open:border-gold/20 open:bg-surface-dark transition-colors"
          >
            <summary className="cursor-pointer list-none flex items-start justify-between gap-4 px-6 py-5 text-white text-sm font-medium leading-snug">
              <span>{faq.q}</span>
              <span className="text-gold text-lg leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="px-6 pb-5 text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/contact/"
          className="inline-flex items-center gap-2 label-caps text-gold text-[11px] hover:gap-3 transition-all"
        >
          Got another question? Get in touch <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  </section>
);

export default HomeFaq;
