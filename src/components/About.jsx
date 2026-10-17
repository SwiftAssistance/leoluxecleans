'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { business } from '../config/business';

const About = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark to-surface-black"></div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — large typographic statement */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="heading-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.1] mb-10">
              We started because we knew cleaning could be{' '}
              <span className="text-gold-gradient">
                done better.
              </span>
            </h2>

            <div className="space-y-5 text-neutral-400 leading-relaxed font-light text-[15px] max-w-xl">
              <p>
                Leo Luxe Clean is a small team based in Slough. Everyone who
                cleans for us is trained in-house to the same standard, and the
                people who run the business are involved in the work day to day.
              </p>
              <p>
                Everyone who comes to your home is DBS checked. We bring all
                our own equipment and products. If something gets missed, we
                come back and sort it — no charge, no back and forth.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-gold label-caps text-[11px] mt-10 hover:gap-3 transition-all"
            >
              Our full story <ArrowRight size={12} />
            </Link>
          </div>

          {/* Right — image with stats overlay */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="overflow-hidden">
              <img
                src="/about.jpg"
                alt="Three Leo Luxe Clean cleaners in branded uniforms cleaning a bathroom"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
              />
            </div>

            {/* Stats as text, not badges */}
            <div className="grid grid-cols-3 mt-6 divide-x divide-surface-border/50">
              {[
                { val: business.google.ratingDisplay, label: 'On Google' },
                { val: String(business.google.reviewCount), label: 'Google reviews' },
                { val: 'DBS', label: 'Checked' },
              ].map((s) => (
                <div key={s.label} className="py-2 px-4 first:pl-0">
                  <span className="heading-serif text-3xl lg:text-4xl text-gold block">
                    {s.val}
                  </span>
                  <span className="text-neutral-400 text-[10px] label-caps">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
