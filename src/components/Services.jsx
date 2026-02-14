import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
          <h2 className="heading-serif text-4xl lg:text-6xl text-white">
            What We Do
          </h2>
        </div>

        <div ref={ref} className="border-t border-surface-border/60">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className={`group block border-b border-surface-border/60 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative py-6 lg:py-8 flex items-start lg:items-center gap-4 lg:gap-8">
                <span className="text-neutral-700 text-sm font-mono w-8 flex-shrink-0 pt-1 lg:pt-0">
                  {s.num}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-6">
                    <h3 className="heading-serif text-2xl lg:text-4xl text-white group-hover:text-gold transition-colors duration-300">
                      {s.title}
                    </h3>
                    {s.tag && (
                      <span className="text-[10px] label-caps text-gold/50 group-hover:text-gold transition-colors">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-500 text-sm mt-1 lg:mt-0 lg:max-w-md">
                    {s.desc}
                  </p>
                </div>

                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-surface-border/60 flex items-center justify-center text-neutral-600 group-hover:border-gold/40 group-hover:text-gold transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </div>
              </div>

              <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-gold to-gold/0 transition-all duration-700"></div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
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
