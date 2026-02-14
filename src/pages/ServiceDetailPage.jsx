import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Star,
  MapPin,
  ShieldCheck,
  Clock,
  Leaf,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import Seo, { createServiceSchema, createFaqSchema, breadcrumbSchema } from '../components/Seo';
import { getServiceBySlug, services } from '../data/services';
import { locations } from '../data/locations';
import { useScrollReveal } from '../hooks/useScrollReveal';

const serviceReviews = {
  'home-cleaning': {
    text: "I've tried several cleaning companies in the Slough area and Leo Luxe is by far the best. Consistent quality every single time.",
    author: 'Tom Richards',
    role: 'Homeowner, Slough',
    initial: 'T',
  },
  'office-cleaning': {
    text: 'Booked a regular weekly clean for our dental practice. The difference is night and day. Patients have commented on how clean everything feels.',
    author: 'Dr. Fatima Ali',
    role: 'Business Owner, Slough',
    initial: 'F',
  },
  'deep-clean': {
    text: 'Had them do a deep clean before our baby arrived. They got into every nook and cranny. Brilliant service from start to finish.',
    author: 'Priya Sharma',
    role: 'Homeowner, Langley',
    initial: 'P',
  },
  'end-of-tenancy': {
    text: 'End of tenancy clean was perfect. Got our full deposit back. They even cleaned inside the oven which I thought was a lost cause!',
    author: 'James Taylor',
    role: 'Tenant, Slough',
    initial: 'J',
  },
  'after-events': {
    text: "After our daughter's birthday party the place was a state. Leo Luxe came next morning and had it spotless by lunchtime. Absolute lifesaver.",
    author: 'Rebecca Osei',
    role: 'Homeowner, Windsor',
    initial: 'R',
  },
  'specialist-cleaning': {
    text: 'Had the full specialist treatment — oven, carpets, and windows. Everything looks incredible. Genuinely worth every penny and then some.',
    author: 'Nikhil Patel',
    role: 'Homeowner, Slough',
    initial: 'N',
  },
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.1 });
  const [featuresRef, featuresVisible] = useScrollReveal({ threshold: 0.05 });

  if (!service) return <Navigate to="/services" replace />;

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);
  const review = serviceReviews[slug];

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
              <span className="text-white font-medium">5.0</span> Google Rating
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
              <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-8">
                {service.tagline}
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed font-light">
                {service.longDesc.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {service.pricing && (
                <div className="mt-10 inline-flex items-center gap-4 rounded-xl border border-surface-border/40 px-6 py-4">
                  <span className="label-caps text-neutral-500 text-[10px]">Starting from</span>
                  <span className="heading-serif text-3xl text-gold">{service.pricing}</span>
                </div>
              )}

              {/* Customer review for this service */}
              {review && (
                <div className="mt-10 rounded-xl border border-surface-border/30 p-6">
                  <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} fill="#C8A94E" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm heading-serif">
                      {review.initial}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{review.author}</p>
                      <p className="text-neutral-600 text-xs">{review.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sticky sidebar */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-gold/20 p-8 lg:sticky lg:top-28">
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
                  aria-label="Call us at 01753 000 000"
                >
                  <Phone size={14} /> 01753 000 000
                </a>

                <div className="mt-6 pt-6 border-t border-surface-border/30 space-y-3">
                  {[
                    'Fully insured & DBS checked',
                    'Eco-friendly products',
                    '100% satisfaction guarantee',
                    'No contracts or hidden fees',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-neutral-400 text-xs">
                      <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
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
            <div className="text-center mb-12">
              <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
                What's Included
              </h2>
              <p className="text-neutral-400 text-sm">
                Everything listed below comes as standard — no add-ons, no extras.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-4 px-5 rounded-xl border border-surface-border/40"
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
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
              {service.title} FAQ
            </h2>
            <p className="text-neutral-400 text-sm">
              Got questions? Here are the ones we get asked most.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-surface-border/40 p-6 lg:p-8"
              >
                <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas we cover */}
      <section className="py-16 lg:py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-3">
              {service.title} Near You
            </h2>
            <p className="text-neutral-400 text-sm">
              We cover all of these areas and more across Berkshire.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/areas/${loc.slug}`}
                className="rounded-lg border border-surface-border/40 px-5 py-3 flex items-center gap-2 text-sm text-neutral-300 hover:text-gold hover:border-gold/30 transition-colors"
              >
                <MapPin size={14} className="text-gold" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 lg:py-20 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="heading-serif text-3xl lg:text-4xl text-white">
              Other Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="rounded-xl border border-surface-border/40 p-6 group block hover:border-gold/20 transition-colors"
              >
                <h3 className="heading-serif text-xl text-white mb-2 group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-neutral-500 text-sm mb-4 line-clamp-2">{s.heroDesc}</p>
                <div className="flex items-center justify-between">
                  {s.pricing && (
                    <span className="text-gold text-sm heading-serif">{s.pricing}</span>
                  )}
                  <span className="label-caps text-[10px] text-gold flex items-center gap-1">
                    Learn More <ArrowRight size={12} />
                  </span>
                </div>
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
      <section className="py-16 lg:py-20 bg-surface-dark border-y border-surface-border/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
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
              aria-label="Call us at 01753 000 000"
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
