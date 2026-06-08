'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Home, Layers, Key, Building2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    slug: 'home-cleaning',
    num: '01',
    icon: Home,
    title: 'Home Cleaning',
    desc: 'Weekly, fortnightly, or one-off. We treat your place like our own — every room done properly, nothing rushed.',
    tag: 'Most Popular',
  },
  {
    slug: 'deep-clean',
    num: '02',
    icon: Layers,
    title: 'Deep Clean',
    desc: 'Behind the fridge, inside the oven, on top of the cabinets. All the bits you keep putting off.',
  },
  {
    slug: 'end-of-tenancy',
    num: '03',
    icon: Key,
    title: 'End of Tenancy',
    desc: "Moving out? We'll leave it landlord-ready. We know exactly what they look for.",
  },
  {
    slug: 'office-cleaning',
    num: '04',
    icon: Building2,
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
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group block border-b border-surface-border/60 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative py-7 lg:py-9 flex items-center gap-5 lg:gap-8 px-3 -mx-3 rounded-lg group-hover:bg-surface-dark/60 transition-colors duration-300">

                  {/* Icon circle */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-surface-dark border border-surface-border/60 group-hover:border-gold/30 group-hover:bg-gold/5 flex items-center justify-center text-neutral-500 group-hover:text-gold transition-all duration-300">
                    <Icon size={18} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-5">
                      <h3 className="heading-serif text-2xl lg:text-4xl text-white group-hover:text-gold transition-colors duration-300">
                        {s.title}
                      </h3>
                      {s.tag && (
                        <span className="text-[10px] label-caps text-gold/50 group-hover:text-gold/80 border border-gold/20 group-hover:border-gold/40 px-2.5 py-1 rounded-full self-start lg:self-auto transition-colors">
                          {s.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-neutral-500 text-sm mt-1.5 max-w-lg">
                      {s.desc}
                    </p>
                  </div>

                  <span className="hidden lg:block text-neutral-700 text-sm font-mono flex-shrink-0">
                    {s.num}
                  </span>

                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-surface-border/60 flex items-center justify-center text-neutral-600 group-hover:border-gold/50 group-hover:text-gold transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight size={16} />
                  </div>
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
