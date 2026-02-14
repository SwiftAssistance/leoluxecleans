import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHero = ({ title, subtitle, breadcrumb, parentBreadcrumb }) => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-surface-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
          <ChevronRight size={14} className="text-neutral-600" />
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
              <ChevronRight size={14} className="text-neutral-600" />
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
