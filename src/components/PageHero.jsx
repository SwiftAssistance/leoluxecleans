import React from 'react';
import Link from 'next/link';
import HeroImage from './HeroImage';

// Inner-page header: oversized title on ivory, intro set to the right, and a
// wide photo strip underneath.
// `kicker` is a short keyword line read as part of the H1 (e.g. "Cleaning services in Slough").
// `parents` is the breadcrumb trail between Home and this page ([{ name, to }]);
// `image` ({ src, alt }) replaces the default kitchen photo in the strip.
const PageHero = ({ title, kicker, subtitle, breadcrumb, parentBreadcrumb, parents, image }) => {
  const trail = parents || (parentBreadcrumb ? [parentBreadcrumb] : []);
  return (
    <section className="theme-dark relative bg-surface-black pt-28 lg:pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <nav
          className="flex flex-wrap items-center gap-3 label-caps text-[10px] mb-10 lg:mb-14 border-b border-surface-border/70 pb-4"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="text-neutral-500 hover:text-gold transition-colors">
            Home
          </Link>
          <span className="text-neutral-700" aria-hidden="true">/</span>
          {trail.map((crumb) => (
            <React.Fragment key={crumb.name}>
              {crumb.to ? (
                <Link href={crumb.to} className="text-neutral-500 hover:text-gold transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-neutral-500">{crumb.name}</span>
              )}
              <span className="text-neutral-700" aria-hidden="true">/</span>
            </React.Fragment>
          ))}
          <span className="text-gold">{breadcrumb}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-10 lg:pb-12">
          <h1 className="lg:col-span-8 display text-[2.75rem] sm:text-5xl lg:text-6xl text-white">
            {kicker && (
              <span className="block label-caps text-[11px] text-gold mb-6" style={{ letterSpacing: '0.2em', lineHeight: 1.4 }}>
                {kicker}
              </span>
            )}
            {title}
          </h1>

          {subtitle && (
            <p className="lg:col-span-4 text-neutral-400 text-base leading-relaxed lg:pb-2 border-l border-gold pl-6">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="relative h-40 sm:h-52 lg:h-64 overflow-hidden">
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            width={1200}
            height={800}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-[center_45%]"
          />
        ) : (
          <HeroImage className="absolute inset-0 w-full h-full object-cover object-[center_40%]" />
        )}
      </div>
    </section>
  );
};

export default PageHero;
