import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHero = ({ title, subtitle, breadcrumb }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-black to-surface-black"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/[0.03] rounded-full blur-[150px]"></div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,169,78,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,78,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <nav
          className={`flex items-center gap-2 text-sm mb-8 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link
            to="/"
            className="text-neutral-500 hover:text-gold transition-colors"
          >
            Home
          </Link>
          <ChevronRight size={14} className="text-neutral-600" />
          <span className="text-gold">{breadcrumb}</span>
        </nav>

        <h1
          className={`heading-serif text-5xl sm:text-6xl lg:text-7xl text-white mb-6 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`text-neutral-400 text-lg max-w-xl leading-relaxed font-light transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            {subtitle}
          </p>
        )}

        {/* Decorative divider */}
        <div
          className={`mt-12 flex items-center gap-3 transition-all duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="divider-gold"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gold/40"></div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
