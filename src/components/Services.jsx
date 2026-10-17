'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    slug: 'home-cleaning',
    num: '01',
    title: 'Home Cleaning',
    desc: 'Weekly, fortnightly, or one-off. We treat your place like our own — every room done properly, nothing rushed.',
    tag: 'Most Popular',
  },
  {
    slug: 'deep-clean',
    num: '02',
    title: 'Deep Clean',
    desc: 'Behind the fridge, inside the oven, on top of the cabinets. All the bits you keep putting off.',
  },
  {
    slug: 'end-of-tenancy',
    num: '03',
    title: 'End of Tenancy',
    desc: "Moving out? We'll leave it landlord-ready. We know exactly what they look for.",
  },
  {
    slug: 'office-cleaning',
    num: '04',
    title: 'Office & Commercial',
    desc: 'Keep your workspace spotless. Flexible scheduling — mornings, evenings, weekends.',
  },
];

const Services = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="py-20 lg:py-28 bg-surface-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-16 lg:mb-20">
          <div className="lg:col-span-5">
            <p className="label-caps text-gold text-[10px] mb-4">What We Do</p>
            <h2 className="heading-serif text-4xl lg:text-6xl text-white leading-tight">
              Every job,
              <br />
              <span className="text-neutral-500">done properly.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:flex lg:items-end">
            <p className="text-neutral-400 text-base leading-relaxed max-w-lg lg:pb-2">
              Whether it's a regular weekly clean or a demanding end-of-tenancy job, we hold every visit to the
              same high standard. No shortcuts, no rushing — just spotless results.
            </p>
          </div>
        </div>

        <div ref={ref} className="border-t border-surface-border/60">
          {services.map((s, i) => {
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group block border-b border-surface-border/60 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative py-8 lg:py-12 grid grid-cols-12 gap-4 lg:gap-8 items-baseline">
                  <span className="col-span-2 lg:col-span-1 heading-serif text-3xl lg:text-5xl text-gold/30 group-hover:text-gold transition-colors duration-300">
                    {s.num}
                  </span>

                  <div className="col-span-10 lg:col-span-6">
                    <h3 className="heading-serif text-3xl lg:text-6xl text-white group-hover:translate-x-2 transition-transform duration-500">
                      {s.title}
                    </h3>
                    {s.tag && (
                      <span className="label-caps text-[10px] text-gold/70 mt-2 inline-block">— {s.tag}</span>
                    )}
                  </div>

                  <p className="col-start-3 col-span-10 lg:col-start-auto lg:col-span-4 text-neutral-500 group-hover:text-neutral-300 text-sm leading-relaxed transition-colors">
                    {s.desc}
                  </p>

                  <ArrowRight
                    size={20}
                    className="hidden lg:block lg:col-span-1 justify-self-end text-neutral-700 group-hover:text-gold -rotate-45 group-hover:rotate-0 transition-all duration-300"
                  />
                </div>

                <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-gold/60 to-gold/0 transition-all duration-700" />
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="btn-outline-gold label-caps px-8 py-4 rounded-lg inline-flex items-center gap-2 group"
          >
            Explore All Services{' '}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
