import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { homeFaqs as faqs } from '../data/faqs';

// Server-rendered: every answer is in the HTML, expandable with <details>.
const HomeFaq = () => (
  <section className="py-20 lg:py-28 bg-surface-black" id="faq">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <p className="section-mark mb-6">(06) Common Questions</p>
          <h2 className="display text-6xl lg:text-7xl text-white">
            Before you
            <br />
            <span className="text-neutral-500">ask.</span>
          </h2>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 label-caps text-gold text-[11px] mt-8 hover:gap-3 transition-all"
          >
            Got another question? Get in touch <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      <div className="lg:col-span-8 rule-list">
        {faqs.map((faq, i) => (
          <details key={faq.q} className="group">
            <summary className="cursor-pointer list-none flex items-baseline gap-5 lg:gap-8 py-6 text-white">
              <span className="font-mono text-[11px] text-neutral-600 w-6 flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 text-base lg:text-lg leading-snug group-hover:text-gold group-open:text-gold transition-colors">
                {faq.q}
              </span>
              <span className="text-gold text-xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="pl-11 lg:pl-14 pr-8 pb-7 -mt-1 text-neutral-400 text-[15px] leading-relaxed max-w-2xl">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default HomeFaq;
