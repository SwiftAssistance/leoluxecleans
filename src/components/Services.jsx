'use client';
import React, { useRef, useState } from 'react';
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
  // Desktop: a photo of the hovered service follows the cursor over the list.
  const listRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const onMove = (e) => {
    const box = listRef.current?.getBoundingClientRect();
    if (box) setPos({ x: e.clientX - box.left, y: e.clientY - box.top });
  };

  return (
    <section className="py-20 lg:py-28 bg-surface-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <p className="section-mark mb-6">(01) What We Do</p>
            <h2 className="display text-6xl lg:text-8xl text-white">
              Every job,
              <br />
              <span className="text-neutral-500">done properly.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-end">
            <p className="text-neutral-400 text-base leading-relaxed max-w-lg lg:pb-2">
              Whether it's a regular weekly clean or a demanding end-of-tenancy job, we hold every visit to the
              same high standard. No shortcuts, no rushing — just spotless results.
            </p>
          </div>
        </div>

        <div ref={listRef} onMouseMove={onMove} onMouseLeave={() => setHovered(null)} className="relative">
        <div
          className={`hidden lg:block pointer-events-none absolute z-20 w-60 aspect-[4/5] overflow-hidden transition-opacity duration-300 ${
            hovered === null ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%) rotate(-3deg)' }}
          aria-hidden="true"
        >
          {services.map((s, i) => (
            <img
              key={s.slug}
              src={`/service-${s.slug}.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hovered === i ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
        <div ref={ref} className="border-t border-surface-border/60">
          {services.map((s, i) => {
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onMouseEnter={() => setHovered(i)}
                className={`group block border-b border-surface-border/60 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative py-8 lg:py-12 grid grid-cols-12 gap-4 lg:gap-8 items-baseline">
                  <span className="col-span-2 lg:col-span-1 font-mono text-xs text-neutral-500 group-hover:text-gold transition-colors duration-300">
                    {s.num}
                  </span>

                  <div className="col-span-10 lg:col-span-6">
                    <h3 className="display text-4xl lg:text-7xl text-white group-hover:text-gold group-hover:translate-x-3 transition-all duration-500">
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
