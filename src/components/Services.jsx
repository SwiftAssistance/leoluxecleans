import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Gem, Sparkles, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: <Home size={26} />,
    title: 'Home Cleaning',
    desc: 'Weekly, fortnightly, or one-off. We treat your place like our own — every room done properly, nothing rushed, nothing missed.',
    tag: 'Most Popular',
  },
  {
    icon: <Gem size={26} />,
    title: 'Deep Clean',
    desc: 'Behind the fridge, inside the oven, on top of the cabinets — all the bits you keep putting off. We get stuck in so you don\'t have to.',
  },
  {
    icon: <Sparkles size={26} />,
    title: 'End of Tenancy',
    desc: 'Moving out? We\'ll leave it landlord-ready. We know exactly what they look for — and we\'ve never had a client lose their deposit.',
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
            Homes, offices, end of tenancy — whatever needs doing, we do it properly.
          </p>
        </div>

        {/* Service cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {services.map((s, i) => (
            <Link
              key={i}
              to="/services"
              className={`glass-card rounded-2xl p-8 lg:p-10 group relative overflow-hidden block transition-all duration-700 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/[0.04] rounded-full blur-[80px] group-hover:bg-gold/[0.08] transition-all duration-700"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                    {s.icon}
                  </div>
                  {s.tag && (
                    <span className="label-caps text-[10px] text-gold/60 group-hover:text-gold transition-colors flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/50 animate-pulse"></span>
                      {s.tag}
                    </span>
                  )}
                </div>
                <h3 className="heading-serif text-2xl lg:text-3xl text-white mb-3 group-hover:text-gold-light transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm mb-6">
                  {s.desc}
                </p>
                <span className="label-caps text-[10px] text-gold flex items-center gap-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-1 transition-all duration-500">
                  Learn More <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore all services button */}
        <div
          className={`text-center mt-14 transition-all duration-700 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <Link
            to="/services"
            className="btn-outline-gold label-caps px-10 py-4 rounded-lg inline-flex items-center gap-2 group"
          >
            Explore All Services{' '}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
