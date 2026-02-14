import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Home,
  Gem,
  Sparkles,
  Building2,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import Seo, { breadcrumbSchema } from '../components/Seo';
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

const ServicesPage = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <>
      <Seo
        title="Our Services — Professional Cleaning in Slough & Berkshire"
        description="Home cleaning, deep cleans, end of tenancy, office cleaning, and more. Fully insured, DBS checked team in Slough, Windsor & Berkshire. Free quotes."
        canonical="/services"
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services' },
        ])}
      />
      <PageHero
        title={<>Our <span className="text-gold-gradient">Services</span></>}
        subtitle="From regular home cleans to specialist work — we cover it all across Slough, Windsor & Berkshire."
        breadcrumb="Services"
      />

      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`group block rounded-xl border border-surface-border/40 p-8 hover:border-gold/20 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    {serviceIcons[s.slug]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-sans text-white text-lg font-semibold mb-2 group-hover:text-gold transition-colors">
                      {s.title}
                    </h2>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {s.heroDesc}
                    </p>
                    <div className="flex items-center justify-between">
                      {s.pricing && (
                        <span className="text-gold text-sm heading-serif">
                          From {s.pricing}
                        </span>
                      )}
                      <span className="label-caps text-[10px] text-gold flex items-center gap-1 ml-auto">
                        Learn More <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-surface-dark border-y border-surface-border/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            No worries — get in touch and we'll help you figure out the right
            clean for your space.
          </p>
          <Link
            to="/contact"
            className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center gap-2"
          >
            Get a Free Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
