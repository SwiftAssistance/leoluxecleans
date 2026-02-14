import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Star,
  MapPin,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import Seo, { createServiceSchema, createFaqSchema, breadcrumbSchema } from '../components/Seo';
import { getServiceBySlug, services } from '../data/services';
import { locations } from '../data/locations';
import { useScrollReveal } from '../hooks/useScrollReveal';

const StarRating = ({ size = 12 }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, j) => (
      <Star key={j} size={size} fill="#C8A94E" strokeWidth={0} />
    ))}
  </div>
);

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.1 });
  const [featuresRef, featuresVisible] = useScrollReveal({ threshold: 0.1 });
  const [faqRef, faqVisible] = useScrollReveal({ threshold: 0.1 });
  const [locRef, locVisible] = useScrollReveal({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.3 });

  if (!service) return <Navigate to="/services" replace />;

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  const combinedSchema = [
    createServiceSchema(service),
    createFaqSchema(service.faqs),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: service.title },
    ]),
  ];

  return (
    <>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`/services/${service.slug}`}
        schema={combinedSchema}
      />

      <PageHero
        title={
          <>
            {service.title.split(' ')[0]}{' '}
            <span className="text-gold-gradient">
              {service.title.split(' ').slice(1).join(' ')}
            </span>
          </>
        }
        subtitle={service.heroDesc}
        breadcrumb={service.title}
        parentBreadcrumb={{ name: 'Services', to: '/services' }}
      />

      {/* Main content */}
      <section className="py-16 lg:py-24 bg-surface-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left content */}
            <div
              ref={contentRef}
              className={`lg:col-span-7 transition-all duration-700 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-8">
                {service.tagline}
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed font-light">
                {service.longDesc.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {service.pricing && (
                <div className="mt-8 inline-flex items-center gap-3 glass-card rounded-xl px-6 py-4">
                  <span className="label-caps text-neutral-400 text-[10px]">Starting from</span>
                  <span className="heading-serif text-3xl text-gold">{service.pricing}</span>
                </div>
              )}
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-5">
              {/* Quick quote card */}
              <div className="glass-card rounded-2xl p-8 border-gold/20 lg:sticky lg:top-28">
                <h3 className="heading-serif text-2xl text-white mb-2">
                  Get a free quote
                </h3>
                <p className="text-neutral-400 text-sm mb-6">
                  No obligation. We usually reply within 2 hours.
                </p>
                <Link
                  to="/contact"
                  className="btn-gold label-caps px-6 py-3.5 rounded-lg w-full text-center flex items-center justify-center gap-2 group mb-4"
                >
                  Get Your Quote{' '}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:01753000000"
                  className="btn-outline-gold label-caps px-6 py-3.5 rounded-lg w-full text-center flex items-center justify-center gap-2"
                >
                  <Phone size={14} /> 01753 000 000
                </a>

                <div className="mt-6 pt-6 border-t border-surface-border/50 space-y-3">
                  <div className="flex items-center gap-3 text-neutral-400 text-xs">
                    <CheckCircle2 size={14} className="text-gold" />
                    <span>Fully insured & DBS checked</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-400 text-xs">
                    <CheckCircle2 size={14} className="text-gold" />
                    <span>Eco-friendly products</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-400 text-xs">
                    <CheckCircle2 size={14} className="text-gold" />
                    <span>100% satisfaction guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark to-surface-black"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div
            ref={featuresRef}
            className={`transition-all duration-700 ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <p className="label-caps text-gold mb-4">What's Included</p>
              <h2 className="heading-serif text-4xl lg:text-5xl text-white">
                Everything We Cover
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 py-4 px-5 rounded-xl bg-surface-dark/60 border border-surface-border/50 hover:border-gold/20 transition-all duration-300 ${
                    featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <CheckCircle2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-surface-black relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="label-caps text-gold mb-4">Common Questions</p>
            <h2 className="heading-serif text-4xl lg:text-5xl text-white">
              {service.title} FAQ
            </h2>
          </div>

          <div ref={faqRef} className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className={`glass-card rounded-xl p-6 lg:p-8 transition-all duration-700 ${
                  faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas we cover */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark to-surface-black"></div>

        <div
          ref={locRef}
          className={`relative max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-700 ${
            locVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <p className="label-caps text-gold mb-4">Areas We Cover</p>
            <h2 className="heading-serif text-3xl lg:text-4xl text-white">
              {service.title} Near You
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/areas/${loc.slug}`}
                className="glass-card rounded-lg px-5 py-3 flex items-center gap-2 text-sm text-neutral-300 hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                <MapPin size={14} className="text-gold" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 lg:py-20 bg-surface-black relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="label-caps text-gold mb-4">Also Available</p>
            <h2 className="heading-serif text-3xl lg:text-4xl text-white">
              Other Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="glass-card rounded-xl p-6 group block hover:border-gold/20 transition-all duration-300"
              >
                <h3 className="heading-serif text-xl text-white mb-2 group-hover:text-gold-light transition-colors">
                  {s.title}
                </h3>
                <p className="text-neutral-500 text-sm mb-4 line-clamp-2">{s.heroDesc}</p>
                <span className="label-caps text-[10px] text-gold flex items-center gap-1">
                  Learn More <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="btn-outline-gold label-caps px-8 py-3.5 rounded-lg inline-flex items-center gap-2 group"
            >
              View All Services{' '}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden shimmer">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10"></div>
        <div className="absolute inset-0 bg-surface-dark/90"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div
          ref={ctaRef}
          className={`relative max-w-4xl mx-auto px-6 lg:px-12 text-center transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
            Ready to book your {service.title.toLowerCase()}?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote today. We usually reply within a couple of hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight size={14} />
            </Link>
            <a
              href="tel:01753000000"
              className="btn-outline-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              <Phone size={16} /> 01753 000 000
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
