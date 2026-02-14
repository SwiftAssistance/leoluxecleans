import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  Star,
  MapPin,
  Home,
  Gem,
  Sparkles,
  Building2,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import Seo, { createLocationSchema, breadcrumbSchema } from '../components/Seo';
import { getLocationBySlug, locations } from '../data/locations';
import { services } from '../data/services';
import { useScrollReveal } from '../hooks/useScrollReveal';

const serviceIcons = {
  'home-cleaning': <Home size={22} />,
  'office-cleaning': <Building2 size={22} />,
  'deep-clean': <Gem size={22} />,
  'end-of-tenancy': <Sparkles size={22} />,
  'after-events': <Clock size={22} />,
  'specialist-cleaning': <ShieldCheck size={22} />,
};

const LocationPage = () => {
  const { slug } = useParams();
  const location = getLocationBySlug(slug);

  const [introRef, introVisible] = useScrollReveal({ threshold: 0.1 });
  const [servicesRef, servicesVisible] = useScrollReveal({ threshold: 0.05 });

  if (!location) return <Navigate to="/" replace />;

  const otherLocations = locations.filter((l) => l.slug !== slug);

  const combinedSchema = [
    createLocationSchema(location),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Areas', url: '/' },
      { name: location.name },
    ]),
  ];

  return (
    <>
      <Seo
        title={location.metaTitle}
        description={location.metaDescription}
        canonical={`/areas/${location.slug}`}
        schema={combinedSchema}
      />

      <PageHero
        title={
          <>
            Cleaning in{' '}
            <span className="text-gold-gradient">{location.name}</span>
          </>
        }
        subtitle={location.heroDesc}
        breadcrumb={location.name}
        parentBreadcrumb={{ name: 'Areas' }}
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
              <CheckCircle2 size={14} className="text-gold" />
              DBS Checked & Insured
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-gold" />
              Same Week Availability
            </span>
          </div>
        </div>
      </section>

      {/* Intro + CTA */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div
              ref={introRef}
              className={`lg:col-span-7 transition-all duration-500 ${
                introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={18} className="text-gold" />
                <span className="label-caps text-gold text-[11px]">{location.name}, {location.county}</span>
                <span className="text-neutral-600 text-sm">— {location.postcodes}</span>
              </div>

              <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-8">
                Professional Cleaning in {location.name}
              </h2>

              <div className="space-y-4 text-neutral-400 leading-relaxed font-light">
                {location.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2 group"
                >
                  Get a Free Quote{' '}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:01753000000"
                  className="btn-outline-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2"
                  aria-label="Call us at 01753 000 000"
                >
                  <Phone size={16} /> 01753 000 000
                </a>
              </div>
            </div>

            {/* Sidebar with review + trust */}
            <div className="lg:col-span-5">
              <div className="space-y-5">
                {/* Review from this area */}
                {location.reviews.length > 0 && (
                  <div className="rounded-xl border border-surface-border/40 p-6">
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
                        <p className="text-white text-sm font-medium">{location.reviews[0].author}</p>
                        <p className="text-neutral-600 text-xs">{location.reviews[0].role}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Trust signals */}
                <div className="rounded-xl border border-surface-border/40 p-6">
                  <h3 className="text-white font-semibold text-sm mb-4">Every booking includes</h3>
                  <div className="space-y-3">
                    {[
                      'DBS checked & fully insured team',
                      'Eco-friendly, professional products',
                      'All equipment brought by us',
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
        </div>
      </section>

      {/* Services available */}
      <section className="py-16 lg:py-24 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-3">
              Our Services in {location.name}
            </h2>
            <p className="text-neutral-400 text-sm">
              All services available across {location.name} and surrounding areas.
            </p>
          </div>

          <div
            ref={servicesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`rounded-xl border border-surface-border/40 p-6 group block hover:border-gold/20 transition-all duration-500 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/20 transition-colors">
                  {serviceIcons[s.slug]}
                </div>
                <h3 className="text-white text-sm font-semibold mb-2 group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-3 line-clamp-2">
                  {s.heroDesc}
                </p>
                <div className="flex items-center justify-between">
                  {s.pricing && (
                    <span className="text-gold text-sm heading-serif">{s.pricing}</span>
                  )}
                  <span className="label-caps text-[10px] text-gold flex items-center gap-1">
                    View <ArrowRight size={10} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="py-16 lg:py-20 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-3">
              Where We Clean in {location.name}
            </h2>
            <p className="text-neutral-400 text-sm">
              Covering {location.postcodes} and surrounding postcodes.
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

      {/* More reviews */}
      {location.reviews.length > 1 && (
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl lg:text-4xl text-white">
                What {location.name} Clients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {location.reviews.slice(1).map((review, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-surface-border/40 p-7"
                >
                  <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={13} fill="#C8A94E" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3 border-t border-surface-border/30 pt-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm heading-serif">
                      {review.initial}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{review.author}</p>
                      <p className="text-neutral-600 text-xs">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/reviews"
                className="label-caps text-gold text-[11px] hover:text-gold-light transition-colors inline-flex items-center gap-1"
              >
                See All Reviews <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Other areas */}
      <section className="py-16 lg:py-20 bg-surface-black border-t border-surface-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="heading-serif text-3xl lg:text-4xl text-white">
              Other Areas We Cover
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {otherLocations.map((loc) => (
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

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-surface-dark border-y border-surface-border/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
            Need a cleaner in {location.name}?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote. We cover all of {location.name} and the surrounding areas.
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

export default LocationPage;
