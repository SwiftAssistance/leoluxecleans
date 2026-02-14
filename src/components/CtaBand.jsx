import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CtaBand = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden shimmer">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10"></div>
      <div className="absolute inset-0 bg-surface-dark/90"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div>
          <h3 className="heading-serif text-3xl lg:text-4xl text-white mb-2">
            Ready for a spotless space?
          </h3>
          <p className="text-neutral-400 text-sm">
            Free quote. No obligation. Response within 2 hours.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            to="/contact"
            className="btn-gold label-caps px-8 py-4 rounded-lg whitespace-nowrap"
          >
            Free Quote
          </Link>
          <a
            href="tel:01753000000"
            className="btn-outline-gold label-caps px-8 py-4 rounded-lg whitespace-nowrap flex items-center gap-2"
          >
            <Phone size={14} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
