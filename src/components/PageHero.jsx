import React from 'react';
import Link from 'next/link';
import HeroImage from './HeroImage';

// Inner-page header: oversized title on ivory, intro set to the right, and a
// wide photo strip underneath.
const PageHero = ({ title, subtitle, breadcrumb, parentBreadcrumb }) => {
  return (
    <section className="relative bg-surface-black pt-32 lg:pt-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <nav
          className="flex items-center gap-3 label-caps text-[10px] mb-10 lg:mb-14 border-b border-surface-border/70 pb-4"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="text-neutral-500 hover:text-gold transition-colors">
            Home
          </Link>
          <span className="text-neutral-700" aria-hidden="true">/</span>
          {parentBreadcrumb && (
            <>
              {parentBreadcrumb.to ? (
                <Link href={parentBreadcrumb.to} className="text-neutral-500 hover:text-gold transition-colors">
                  {parentBreadcrumb.name}
                </Link>
              ) : (
                <span className="text-neutral-500">{parentBreadcrumb.name}</span>
              )}
              <span className="text-neutral-700" aria-hidden="true">/</span>
            </>
          )}
          <span className="text-gold">{breadcrumb}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 lg:pb-16">
          <h1 className="lg:col-span-8 display text-6xl sm:text-7xl lg:text-[8.5rem] text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="lg:col-span-4 text-neutral-400 text-lg leading-relaxed lg:pb-3 border-l border-gold pl-6">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
        <HeroImage className="absolute inset-0 w-full h-full object-cover object-[center_40%]" />
      </div>
    </section>
  );
};

export default PageHero;
