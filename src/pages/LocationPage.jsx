import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Star,
  MapPin,
  Home,
  Gem,
  Sparkles,
  Building2,
  Clock,
  ShieldCheck,
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

const StarRating = ({ size = 12 }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, j) => (
      <Star key={j} size={size} fill="#C8A94E" strokeWidth={0} />
    ))}
  </div>
);

const LocationPage = () => {
  const { slug } = useParams();
  const location = getLocationBySlug(slug);

  const [introRef, introVisible] = useScrollReveal({ threshold: 0.1 });
  const [servicesRef, servicesVisible] = useScrollReveal({ threshold: 0.05 });
  const [areasRef, areasVisible] = useScrollReveal({ threshold: 0.1 });
  const [reviewsRef, reviewsVisible] = useScrollReveal({ threshold: 0.1 });
  const [otherRef, otherVisible] = useScrollReveal({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.3 });

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

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-surface-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div
            ref={introRef}
            className={`max-w-3xl transition-all duration-700 ${
              introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={20} className="text-gold" />
              <span className="label-caps text-gold">{location.name}, {location.county}</span>
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

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2 group"
              >
                Get a Free Quote in {location.name}{' '}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:01753000000"
                className="btn-outline-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2"
              >
                <Phone size={16} /> 01753 000 000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark to-surface-black"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="label-caps text-gold mb-4">Available in {location.name}</p>
            <h2 className="heading-serif text-4xl lg:text-5xl text-white">
              Our Services
            </h2>
          </div>

          <div
            ref={servicesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`glass-card rounded-xl p-6 group block transition-all duration-700 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                  {serviceIcons[s.slug]}
                </div>
                <h3 className="font-sans text-white text-sm font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-3 line-clamp-2">
                  {s.heroDesc}
                </p>
                {s.pricing && (
                  <span className="text-gold text-sm heading-serif">{s.pricing}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="py-16 lg:py-20 bg-surface-black relative overflow-hidden">
        <div
          ref={areasRef}
          className={`relative max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-700 ${
            areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-10">
            <p className="label-caps text-gold mb-4">Areas in {location.name}</p>
            <h2 className="heading-serif text-3xl lg:text-4xl text-white">
              Where We Clean
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {location.areas.map((area, i) => (
              <span
                key={i}
                className="glass-card rounded-lg px-5 py-3 text-sm text-neutral-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews from this area */}
      {location.reviews.length > 0 && (
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark to-surface-black"></div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <p className="label-caps text-gold mb-4">Local Reviews</p>
              <h2 className="heading-serif text-3xl lg:text-4xl text-white">
                What {location.name} Clients Say
              </h2>
            </div>

            <div
              ref={reviewsRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {location.reviews.map((review, i) => (
                <div
                  key={i}
                  className={`glass-card rounded-xl p-7 transition-all duration-700 ${
                    reviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <StarRating size={13} />
                  <p className="text-neutral-300 text-sm leading-relaxed my-4">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3 border-t border-surface-border/50 pt-4">
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
      <section className="py-16 lg:py-20 bg-surface-black relative overflow-hidden">
        <div
          ref={otherRef}
          className={`relative max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-700 ${
            otherVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-10">
            <p className="label-caps text-gold mb-4">Also Serving</p>
            <h2 className="heading-serif text-3xl lg:text-4xl text-white">
              Other Areas We Cover
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {otherLocations.map((loc) => (
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
