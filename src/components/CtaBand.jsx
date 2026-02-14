import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CtaBand = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="relative py-16 lg:py-20 bg-surface-dark border-y border-surface-border/30">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div>
          <h3 className="heading-serif text-3xl lg:text-4xl text-white mb-2">
            Want your place sorted this week?
          </h3>
          <p className="text-neutral-400 text-sm">
            Free quote, no obligation. Most people hear back within 2 hours.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/contact"
            className="btn-gold label-caps px-8 py-4 rounded-lg whitespace-nowrap text-center"
          >
            Get a Quote
          </Link>
          <a
            href="tel:01753000000"
            className="btn-outline-gold label-caps px-8 py-4 rounded-lg whitespace-nowrap flex items-center justify-center gap-2"
            aria-label="Call us at 01753 000 000"
          >
            <Phone size={14} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
