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
  Star,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import Seo, { breadcrumbSchema } from '../components/Seo';
import { services } from '../data/services';
import { useScrollReveal } from '../hooks/useScrollReveal';

const serviceIcons = {
  'home-cleaning': <Home size={24} />,
  'office-cleaning': <Building2 size={24} />,
  'deep-clean': <Gem size={24} />,
  'end-of-tenancy': <Sparkles size={24} />,
  'after-events': <Clock size={24} />,
  'specialist-cleaning': <ShieldCheck size={24} />,
};

const ServicesPage = () => {
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });
  const [processRef, processVisible] = useScrollReveal({ threshold: 0.1 });

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
        subtitle="From regular home cleans to specialist work — honest pricing, no hidden fees, and a team that actually cares about the result."
        breadcrumb="Services"
      />

      {/* Trust bar */}
      <section className="py-6 bg-surface-dark border-b border-surface-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-neutral-400">
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
              Eco-Friendly Products
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-gold" />
              Same Week Availability
            </span>
          </div>
        </div>
      </section>

      {/* Services grid — each service is a proper card with pricing + features */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div ref={gridRef} className="space-y-6">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`group block rounded-xl border border-surface-border/40 hover:border-gold/20 transition-all duration-500 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                    {/* Icon + title + desc */}
                    <div className="flex items-start gap-5 flex-1 min-w-0">
                      <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        {serviceIcons[s.slug]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-white text-xl font-semibold group-hover:text-gold transition-colors">
                            {s.title}
                          </h2>
                          {i === 0 && (
                            <span className="label-caps text-[9px] text-gold bg-gold/10 px-2.5 py-1 rounded-full">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4 max-w-lg">
                          {s.heroDesc}
                        </p>
                        {/* Quick features */}
                        <div className="flex flex-wrap gap-2">
                          {s.features.slice(0, 4).map((f, j) => (
                            <span
                              key={j}
                              className="text-[11px] text-neutral-500 border border-surface-border/40 rounded-md px-2.5 py-1"
                            >
                              {f.split(' — ')[0].split(' and ')[0]}
                            </span>
                          ))}
                          {s.features.length > 4 && (
                            <span className="text-[11px] text-gold">
                              +{s.features.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Pricing + CTA */}
                    <div className="flex flex-row lg:flex-col items-center lg:items-end gap-4 lg:gap-3 flex-shrink-0 lg:text-right lg:min-w-[140px]">
                      {s.pricing && (
                        <span className="heading-serif text-2xl lg:text-3xl text-gold">
                          {s.pricing}
                        </span>
                      )}
                      <span className="label-caps text-[10px] text-gold flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-surface-dark border-y border-surface-border/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
              How It Works
            </h2>
            <p className="text-neutral-400 text-sm max-w-md mx-auto">
              From first contact to finished clean — we keep it straightforward.
            </p>
          </div>

          <div
            ref={processRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            {[
              {
                step: '01',
                title: 'Tell Us What You Need',
                desc: "Fill in the form or call us. Tell us about your space and what you need. We'll give you a clear quote — no surprises.",
              },
              {
                step: '02',
                title: 'We Show Up On Time',
                desc: 'Your DBS-checked, insured team arrives fully equipped with eco-friendly products. Same faces every time.',
              },
              {
                step: '03',
                title: 'Enjoy the Result',
                desc: "We don't leave until it's done properly. Not happy? We come back and sort it for free. That's our guarantee.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`text-center transition-all duration-500 ${
                  processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="heading-serif text-5xl text-gold/20 block mb-4">
                  {item.step}
                </span>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What every clean includes */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
              Every Clean Includes
            </h2>
            <p className="text-neutral-400 text-sm max-w-md mx-auto">
              These aren't add-ons. They're standard with every single booking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Fully DBS-checked, insured team',
              'Eco-friendly, professional-grade products',
              'All equipment brought by us',
              '100% satisfaction guarantee',
              'No contracts or hidden fees',
              'Free re-clean if anything is missed',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-4 px-5 rounded-xl border border-surface-border/40"
              >
                <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                <span className="text-neutral-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-14 bg-surface-dark border-y border-surface-border/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
            <div>
              <span className="heading-serif text-4xl text-gold block">500+</span>
              <span className="label-caps text-[10px] text-neutral-500">Homes Cleaned</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-surface-border/40"></div>
            <div>
              <span className="heading-serif text-4xl text-gold block">10+</span>
              <span className="label-caps text-[10px] text-neutral-500">Years Experience</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-surface-border/40"></div>
            <div>
              <div className="flex gap-0.5 justify-center mb-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="#C8A94E" strokeWidth={0} />
                ))}
              </div>
              <span className="label-caps text-[10px] text-neutral-500">200+ 5-Star Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-surface-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            No worries — give us a call or drop us a message. We'll figure out
            the right clean for your space together.
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

export default ServicesPage;
