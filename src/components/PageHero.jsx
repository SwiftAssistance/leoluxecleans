import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHero = ({ title, subtitle, breadcrumb, parentBreadcrumb }) => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-surface-black overflow-hidden">
      {/* Gold ambient glow — top right */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[280px] bg-gold/6 rounded-full blur-[120px] pointer-events-none" />
      {/* Subtle gradient fill */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/30 to-transparent pointer-events-none" />
      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <nav
          className="flex items-center gap-2 text-sm mb-8"
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="text-neutral-500 hover:text-gold transition-colors"
          >
            Home
          </Link>
          <ChevronRight size={14} className="text-neutral-700" />
          {parentBreadcrumb && (
            <>
              {parentBreadcrumb.to ? (
                <Link
                  to={parentBreadcrumb.to}
                  className="text-neutral-500 hover:text-gold transition-colors"
                >
                  {parentBreadcrumb.name}
                </Link>
              ) : (
                <span className="text-neutral-500">{parentBreadcrumb.name}</span>
              )}
              <ChevronRight size={14} className="text-neutral-700" />
            </>
          )}
          <span className="text-gold">{breadcrumb}</span>
        </nav>

        <h1 className="heading-serif text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
          {title}
        </h1>

        {subtitle && (
          <p className="text-neutral-400 text-lg max-w-xl leading-relaxed font-light">
            {subtitle}
          </p>
        )}

        <div className="mt-12 divider-gold"></div>
      </div>
    </section>
  );
};

export default PageHero;
