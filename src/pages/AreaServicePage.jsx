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
  Home,
  Gem,
  Sparkles,
  Building2,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import Seo, { createFaqSchema, breadcrumbSchema } from '../components/Seo';
import { getServiceBySlug, services } from '../data/services';
import { getLocationBySlug, locations } from '../data/locations';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BASE_URL = 'https://leoluxeclean.co.uk';

const serviceIcons = {
  'home-cleaning': <Home size={22} />,
  'office-cleaning': <Building2 size={22} />,
  'deep-clean': <Gem size={22} />,
  'end-of-tenancy': <Sparkles size={22} />,
  'after-events': <Clock size={22} />,
  'specialist-cleaning': <ShieldCheck size={22} />,
};

const AreaServicePage = () => {
  const { areaSlug, serviceSlug } = useParams();
  const location = getLocationBySlug(areaSlug);
  const service = getServiceBySlug(serviceSlug);

  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.1 });
  const [featuresRef, featuresVisible] = useScrollReveal({ threshold: 0.05 });

  if (!location || !service) return <Navigate to="/" replace />;

  const otherServices = services.filter((s) => s.slug !== serviceSlug);
  const otherLocations = locations.filter((l) => l.slug !== areaSlug);

  // Unique, keyword-rich meta description per area+service combination
  const priceClause = service.priceFrom ? ` From £${service.priceFrom}.` : '';
  const metaTitle = `${service.title} in ${location.name} | Leo Luxe Clean`;
  const metaDescription = `Looking for ${service.title.toLowerCase()} in ${location.name}? Leo Luxe Clean covers ${location.postcodes} and all of ${location.county}.${priceClause} DBS-checked, eco-friendly, 5-star rated. Same-week availability. Free quotes — call 01753 257118.`;

  const areaServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/areas/${areaSlug}/${serviceSlug}#service`,
    name: `${service.title} in ${location.name}`,
    alternateName: service.tagline,
    description: metaDescription,
    url: `${BASE_URL}/areas/${areaSlug}/${serviceSlug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Leo Luxe Clean',
      '@id': `${BASE_URL}/#business`,
      telephone: '+441753257118',
    },
    areaServed: [
      { '@type': 'City', name: location.name },
      ...location.areas.map((a) => ({ '@type': 'Place', name: a })),
    ],
    ...(service.priceFrom && {
      offers: {
        '@type': 'Offer',
        priceCurrency: 'GBP',
        price: service.priceFrom,
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'GBP',
          price: service.priceFrom,
          description: `Starting from £${service.priceFrom}`,
        },
      },
    }),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '200',
      bestRating: '5',
      worstRating: '1',
    },
    ...(location.reviews.length > 0 && {
      review: location.reviews.map((r) => ({
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: r.author },
        reviewBody: r.text,
      })),
    }),
  };

  const combinedSchema = [
    areaServiceSchema,
    createFaqSchema(service.faqs),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: location.name, url: `/areas/${areaSlug}` },
      { name: service.title },
    ]),
  ];

  return (
    <>
      <Seo
        title={`${service.title} in ${location.name}, ${location.county}`}
        description={metaDescription}
        canonical={`/areas/${areaSlug}/${serviceSlug}`}
        schema={combinedSchema}
      />

      <PageHero
        title={
          <>
            {service.title} in{' '}
            <span className="text-gold-gradient">{location.name}</span>
          </>
        }
        subtitle={`${service.heroDesc} Covering ${location.name} and the surrounding ${location.county} area.`}
        breadcrumb={service.title}
        parentBreadcrumb={{ name: location.name, to: `/areas/${areaSlug}` }}
      />

      {/* Trust bar */}
      <section className="py-5 bg-surface-dark border-b border-surface-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-neutral-400">
            <span className="flex items-center gap-2">
              <Star size={14} fill="#C8A94E" strokeWidth={0} />
              <span className="text-white font-medium">5.0</span> Google Rating
            </span>
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
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={18} className="text-gold" />
                <span className="label-caps text-gold text-[11px]">
                  {location.name}, {location.county}
                </span>
                <span className="text-neutral-600 text-sm">— {location.postcodes}</span>
              </div>

              <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-8">
                {service.tagline}
              </h2>

              <div className="space-y-4 text-neutral-400 leading-relaxed font-light">
                {service.longDesc.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Area-specific callout */}
              <div className="mt-8 p-5 rounded-xl border border-surface-border/40 bg-surface-dark/50">
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Based in Slough, we serve all of {location.name} including{' '}
                  {location.areas.slice(0, 3).join(', ')}
                  {location.areas.length > 3 ? ' and more' : ''}. Our team is local,
                  reliable, and available for same-week bookings across {location.postcodes}.
                </p>
              </div>

              {service.pricing && (
                <div className="mt-8 inline-flex items-center gap-4 rounded-xl border border-surface-border/40 px-6 py-4">
                  <span className="label-caps text-neutral-500 text-[10px]">Starting from</span>
                  <span className="heading-serif text-3xl text-gold">{service.pricing}</span>
                </div>
              )}

              {/* Local review */}
              {location.reviews.length > 0 && (
                <div className="mt-10 rounded-xl border border-surface-border/30 p-6">
                  <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} fill="#C8A94E" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    "{location.reviews[0].text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm heading-serif">
                      {location.reviews[0].initial}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        {location.reviews[0].author}
                      </p>
                      <p className="text-neutral-600 text-xs">{location.reviews[0].role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sticky sidebar */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-gold/20 p-8 lg:sticky lg:top-28">
                <h3 className="heading-serif text-2xl text-white mb-2">
                  Get a free quote in {location.name}
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
                  href="tel:01753257118"
                  className="btn-outline-gold label-caps px-6 py-3.5 rounded-lg w-full text-center flex items-center justify-center gap-2"
                  aria-label="Call our landline at 01753 257118"
                >
                  <Phone size={14} /> 01753 257118
                </a>

                <div className="mt-6 pt-6 border-t border-surface-border/30 space-y-3">
                  {[
                    'Fully insured & DBS checked',
                    'Eco-friendly products',
                    '100% satisfaction guarantee',
                    'No contracts or hidden fees',
                    `Local to ${location.name}`,
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
                Everything listed below comes as standard for your{' '}
                {service.title.toLowerCase()} in {location.name} — no add-ons, no extras.
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
              Common questions about our {service.title.toLowerCase()} in {location.name}.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-surface-border/40 p-6 lg:p-8">
                <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas covered within this location */}
      <section className="py-16 lg:py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-3">
              Where We Cover in {location.name}
            </h2>
            <p className="text-neutral-400 text-sm">
              Postcodes: {location.postcodes} and surrounding areas.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {location.areas.map((area, i) => (
              <span
                key={i}
                className="rounded-lg border border-surface-border/40 px-5 py-3 text-sm text-neutral-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* More services in this area */}
      <section className="py-16 lg:py-20 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="heading-serif text-3xl lg:text-4xl text-white">
              More Services in {location.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/areas/${areaSlug}/${s.slug}`}
                className="rounded-xl border border-surface-border/40 p-6 group block hover:border-gold/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/20 transition-colors">
                  {serviceIcons[s.slug]}
                </div>
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
        </div>
      </section>

      {/* Same service in other areas */}
      <section className="py-16 lg:py-20 bg-surface-dark border-t border-surface-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="heading-serif text-3xl lg:text-4xl text-white">
              {service.title} in Other Areas
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/areas/${loc.slug}/${serviceSlug}`}
                className="rounded-lg border border-surface-border/40 px-5 py-3 flex items-center gap-2 text-sm text-neutral-300 hover:text-gold hover:border-gold/30 transition-colors"
              >
                <MapPin size={14} className="text-gold" />
                {service.title} in {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-surface-black border-y border-surface-border/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
            Ready to book your {service.title.toLowerCase()} in {location.name}?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote today. We cover all of {location.name} and the surrounding area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight size={14} />
            </Link>
            <a
              href="tel:01753257118"
              className="btn-outline-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
              aria-label="Call our landline at 01753 257118"
            >
              <Phone size={16} /> 01753 257118
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AreaServicePage;
