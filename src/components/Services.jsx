import React from 'react';
import {
  Home,
  Building2,
  Gem,
  Sparkles,
  Clock,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const smallServices = [
  {
    icon: <Gem size={22} />,
    title: 'Deep Clean',
    desc: "Top-to-bottom, behind-the-scenes. Every corner, every time.",
  },
  {
    icon: <Sparkles size={22} />,
    title: 'End of Tenancy',
    desc: "Moving in or out? We'll get that deposit back for you.",
  },
  {
    icon: <Clock size={22} />,
    title: 'After Events',
    desc: "Had a party? We'll make it look like nothing happened.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Specialist',
    desc: 'Carpets, upholstery, ovens, windows — the lot.',
  },
];

const Services = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-surface-black relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gold/[0.03] rounded-full blur-[150px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16 lg:mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <p className="label-caps text-gold mb-4">What We Do</p>
            <h2 className="heading-serif text-4xl lg:text-6xl text-white">
              Our Services
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
            Whatever your space needs, we've got you covered. Every job done
            properly, every time.
          </p>
        </div>

        {/* Bento grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4"
        >
          {/* FEATURED: Home Cleaning */}
          <a
            href="#contact"
            className={`lg:col-span-7 glass-card rounded-2xl p-8 lg:p-10 group relative overflow-hidden block transition-all duration-700 ${
              gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/[0.04] rounded-full blur-[80px] group-hover:bg-gold/[0.08] transition-all duration-700"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                  <Home size={28} />
                </div>
                <span className="label-caps text-[10px] text-gold/60 group-hover:text-gold transition-colors flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50 animate-pulse"></span>
                  Most Popular
                </span>
              </div>
              <h3 className="heading-serif text-3xl lg:text-4xl text-white mb-3 group-hover:text-gold-light transition-colors duration-300">
                Home Cleaning
              </h3>
              <p className="text-neutral-400 leading-relaxed max-w-md mb-8">
                Regular or one-off cleans for your home. We treat every house
                like our own — thorough, careful, and spotless. From studio flats
                to five-bed houses.
              </p>
              <span className="btn-gold label-caps px-6 py-2.5 rounded-lg inline-flex items-center gap-2 group-hover:shadow-gold-lg transition-shadow">
                Get a Quote{' '}
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </div>
          </a>

          {/* FEATURED: Office & Commercial */}
          <a
            href="#contact"
            className={`lg:col-span-5 glass-card rounded-2xl p-8 lg:p-10 group relative overflow-hidden block transition-all duration-700 ${
              gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/[0.04] rounded-full blur-[60px] group-hover:bg-gold/[0.08] transition-all duration-700"></div>
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                <Building2 size={28} />
              </div>
              <h3 className="heading-serif text-3xl lg:text-4xl text-white mb-3 group-hover:text-gold-light transition-colors duration-300">
                Office & Commercial
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-8">
                Keep your workspace looking professional. Flexible scheduling
                including evenings and weekends.
              </p>
              <span className="label-caps text-[10px] text-gold flex items-center gap-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
                Get a Quote <ChevronRight size={12} />
              </span>
            </div>
          </a>

          {/* Smaller service cards */}
          {smallServices.map((s, i) => (
            <a
              key={i}
              href="#contact"
              className={`lg:col-span-3 glass-card rounded-xl p-6 group block transition-all duration-700 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/20 group-hover:shadow-gold-sm group-hover:scale-110 transition-all duration-500">
                {s.icon}
              </div>
              <h3 className="font-sans text-white text-sm font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-neutral-500 text-xs leading-relaxed">
                {s.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
