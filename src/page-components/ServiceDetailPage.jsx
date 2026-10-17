'use client';
import React from 'react';
import Link from 'next/link';
import { useQuoteModal } from '../context/QuoteModalContext';
import {
  ArrowRight,
  Phone,
  Star,
  ShieldCheck,
  Clock,
  Leaf,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { getServiceBySlug, services } from '../data/services';
import { areas } from '../data/areas';
import { hasCombo, comboPath } from '../lib/comboContent';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { reviewsForService } from '../data/reviews';
import { ReviewCard } from '../components/GoogleReviews';
import { business } from '../config/business';


const ServiceDetailPage = ({ slug }) => {
  const service = getServiceBySlug(slug);
  const { openModal } = useQuoteModal();

  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.1 });
  const [featuresRef, featuresVisible] = useScrollReveal({ threshold: 0.05 });

  if (!service) return null;

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);
  const serviceReviews = reviewsForService(slug, services.findIndex((s) => s.slug === slug), 1);

  return (
    <>
      <PageHero
        title={
          <>
            {service.title.split(' ')[0]}{' '}
            <span className="text-gold-gradient">
              {service.title.split(' ').slice(1).join(' ')}
            </span>
          </>
        }
        kicker={`${service.title} in Slough & Berkshire`}
        subtitle={service.heroDesc}
        breadcrumb={service.title}
        parentBreadcrumb={{ name: 'Services', to: '/services' }}
        image={service.image ? { src: service.image, alt: service.imageAlt } : undefined}
      />

      {/* Trust bar */}
      <section className="py-5 bg-surface-dark border-b border-surface-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-neutral-400">
            <span className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-gold" />
              Fully Insured & DBS Checked
            </span>
            <span className="flex items-center gap-2">
              <Leaf size={14} className="text-gold" />
              Eco-Friendly Products
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-gold" />
              Same Week Availability
            </span>
            <span className="flex items-center gap-2">
              <Star size={14} fill="#C8A94E" strokeWidth={0} />
              {business.google.summary}
            </span>
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div
              ref={contentRef}
              className={`lg:col-span-7 transition-all duration-500 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="display text-[2rem] lg:text-[2.75rem] text-white mb-8">
                {service.tagline}
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed font-light">
                {service.longDesc.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {service.pricing && (
                <div className="mt-10 flex items-baseline gap-5 py-5 border-y border-surface-border/45">
                  <span className="label-caps text-neutral-500 text-[10px]">Starting from</span>
                  <span className="heading-serif text-4xl lg:text-5xl text-gold">{service.pricing}</span>
                </div>
              )}

              {/* Real Google review for this service */}
              {serviceReviews.map((r) => (
                <div key={r.id} className="mt-10">
                  <ReviewCard review={r} />
                </div>
              ))}
            </div>

            {/* Sticky sidebar */}
            <div className="lg:col-span-5">
              <div className="border-t-2 border-gold pt-8 lg:sticky lg:top-28">
                <h3 className="heading-serif text-2xl text-white mb-2">
                  Get a free quote
                </h3>
                <p className="text-neutral-400 text-sm mb-6">
                  No obligation. We usually reply {business.responseTime}.
                </p>
                <button
                  onClick={() => openModal()}
                  className="btn-gold label-caps px-6 py-3.5 rounded-lg w-full text-center flex items-center justify-center gap-2 group mb-4"
                >
                  Get Your Quote{' '}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href={business.phone.href}
                  className="btn-outline-gold label-caps px-6 py-3.5 rounded-lg w-full text-center flex items-center justify-center gap-2"
                  aria-label={`Call us on ${business.phone.display}`}
                >
                  <Phone size={14} /> {business.phone.display}
                </a>

                <div className="mt-6 pt-6 border-t border-surface-border/30 space-y-3">
                  {[
                    'Fully insured & DBS checked',
                    'Eco-friendly products',
                    '100% satisfaction guarantee',
                    'No contracts or hidden fees',
                  ].map((item) => (
                    <div key={item} className="flex items-baseline gap-3 text-neutral-400 text-xs">
                      <span className="text-gold" aria-hidden="true">—</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 lg:py-24 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            ref={featuresRef}
            className={`transition-all duration-500 ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <h2 className="display text-4xl lg:text-5xl text-white mb-4">
                  What&apos;s Included
                </h2>
                <p className="text-neutral-400 text-sm max-w-xs">
                  Everything listed below comes as standard — no add-ons, no extras.
                </p>
              </div>

              <ol className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 border-t border-surface-border/45">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-baseline gap-4 py-5 border-b border-surface-border/45">
                    <span className="font-mono text-[11px] text-gold/60 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-neutral-200 text-[15px]">{feature}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="display text-4xl lg:text-5xl text-white mb-4">
              {service.title} FAQ
            </h2>
            <p className="text-neutral-400 text-sm max-w-xs">
              Got questions? Here are the ones we get asked most.
            </p>
          </div>

          <div className="lg:col-span-8 rule-list">
            {service.faqs.map((faq, i) => (
              <div key={i} className="py-7">
                <h3 className="heading-serif text-2xl text-white mb-3">{faq.q}</h3>
                <p className="text-neutral-400 text-[15px] leading-relaxed max-w-2xl">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas we cover */}
      <section className="py-16 lg:py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="display text-[2rem] lg:text-[2.75rem] text-white mb-3">
              {service.title} Near You
            </h2>
            <p className="text-neutral-400 text-sm">
              Our core areas, plus <Link href="/areas/" className="text-gold hover:underline">nearby towns</Link> across Berkshire and West London.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-4xl mx-auto">
            {areas.map((loc) => (
              <Link
                key={loc.slug}
                href={hasCombo(loc.slug, service.slug) ? comboPath(loc.slug, service.slug) : `/areas/${loc.slug}/`}
                className="heading-serif text-2xl text-neutral-300 hover:text-gold border-b border-transparent hover:border-gold/50 transition-colors"
              >
                <span className="sr-only">{hasCombo(loc.slug, service.slug) ? `${service.title} in ` : 'Cleaners in '}</span>{loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 lg:py-20 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="display text-[2rem] lg:text-[2.75rem] text-white mb-8">
            Other Services
          </h2>

          <div className="rule-list">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group grid grid-cols-12 gap-4 py-6 items-baseline"
              >
                <h3 className="col-span-12 md:col-span-4 heading-serif text-2xl lg:text-3xl text-white group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="col-span-12 md:col-span-6 text-neutral-500 text-sm line-clamp-2">{s.heroDesc}</p>
                <span className="col-span-12 md:col-span-2 md:text-right heading-serif text-xl text-gold flex md:justify-end items-baseline gap-2">
                  {s.pricing}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="btn-outline-gold label-caps px-8 py-3.5 rounded-lg inline-flex items-center gap-2 group"
            >
              View All Services{' '}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-surface-dark border-y border-surface-border/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="display text-4xl lg:text-5xl text-white mb-4">
            Ready to book your {service.title.toLowerCase()}?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote today. We usually reply within a couple of hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal()}
              className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight size={14} />
            </button>
            <a
              href={business.phone.href}
              className="btn-outline-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
              aria-label={`Call us on ${business.phone.display}`}
            >
              <Phone size={16} /> {business.phone.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
