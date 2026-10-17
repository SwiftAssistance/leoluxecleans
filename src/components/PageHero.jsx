import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import HeroImage from './HeroImage';
import QuoteButton from './QuoteButton';
import { business } from '../config/business';

// Inner-page header, matching the homepage hero: title and intro on the left,
// photo in a gold-outlined arch on the right (desktop only, so phones get the
// text without a cropped photo).
// `kicker` is a short keyword line read as part of the H1 (e.g. "Cleaning services in Slough").
// `parents` is the breadcrumb trail between Home and this page ([{ name, to }]).
// `photo` picks a stock hero photo ('kitchen' | 'team'); `image` ({ src, alt })
// uses a specific photo instead.
const PageHero = ({ title, kicker, subtitle, breadcrumb, parentBreadcrumb, parents, photo = 'kitchen', image, actions = true }) => {
  const trail = parents || (parentBreadcrumb ? [parentBreadcrumb] : []);
  return (
    <section className="theme-dark relative bg-surface-black pt-28 lg:pt-32 pb-14 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <Breadcrumb trail={trail} current={breadcrumb} />

          <h1 className="display text-[2.75rem] sm:text-5xl lg:text-6xl text-white">
            {kicker && (
              <span className="block label-caps text-[11px] text-gold mb-5" style={{ letterSpacing: '0.2em', lineHeight: 1.4 }}>
                {kicker}
              </span>
            )}
            {title}
          </h1>

          {subtitle && (
            <p className="text-neutral-400 text-base lg:text-lg leading-relaxed mt-6 max-w-xl">{subtitle}</p>
          )}

          {actions && (
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <QuoteButton className="btn-gold label-caps px-7 py-4 rounded-lg inline-flex items-center justify-center gap-2">
                Get a free quote <ArrowRight size={14} />
              </QuoteButton>
              <a
                href={business.phone.href}
                className="btn-outline-gold label-caps px-7 py-4 rounded-lg inline-flex items-center justify-center gap-2"
                aria-label={`Call us on ${business.phone.display}`}
              >
                <Phone size={14} /> {business.phone.display}
              </a>
            </div>
          )}
        </div>

        <div className="hidden lg:block lg:col-span-5">
          <div className="relative ml-auto w-[80%]">
            <div className="absolute -inset-3 rounded-t-full border border-gold/50 pointer-events-none" aria-hidden="true" />
            <div className="relative rounded-t-full overflow-hidden aspect-[4/5] bg-surface-dark">
              {image ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={1000}
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <HeroImage
                  photo={photo}
                  sizes="(min-width: 1024px) 30vw, 1px"
                  className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Breadcrumb = ({ trail = [], current }) => (
  <nav className="flex flex-wrap items-center gap-x-3 gap-y-1 label-caps text-[10px] mb-8" aria-label="Breadcrumb">
    <Link href="/" className="text-neutral-500 hover:text-gold transition-colors">
      Home
    </Link>
    {trail.map((crumb) => (
      <React.Fragment key={crumb.name}>
        <span className="text-neutral-700" aria-hidden="true">/</span>
        {crumb.to ? (
          <Link href={crumb.to} className="text-neutral-500 hover:text-gold transition-colors">
            {crumb.name}
          </Link>
        ) : (
          <span className="text-neutral-500">{crumb.name}</span>
        )}
      </React.Fragment>
    ))}
    <span className="text-neutral-700" aria-hidden="true">/</span>
    <span className="text-gold">{current}</span>
  </nav>
);

export default PageHero;
