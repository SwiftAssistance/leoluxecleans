import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import QuoteButton from '../components/QuoteButton';
import GoogleReviews from '../components/GoogleReviews';
import { business } from '../config/business';
import { getComboContent } from '../lib/comboContent';

const capitalise = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// One service in one town, e.g. "End of Tenancy Cleaning in Windsor".
const ComboPage = ({ area, service: serviceSlug }) => {
  const c = getComboContent(area, serviceSlug);
  if (!c) return null;
  const { detail, service } = c;
  const town = detail.name;

  return (
    <>
      <PageHero
        kicker={`${detail.postcodeDistricts.join(' · ')} · ${capitalise(detail.travel.time)} from our base`}
        title={
          <>
            {service.title} in <span className="text-gold-gradient">{town}</span>
          </>
        }
        subtitle={`${capitalise(c.price)}. DBS checked, fully insured, and a fixed price before we start.`}
        breadcrumb={service.title}
        parents={[
          { name: 'Areas', to: '/areas/' },
          { name: town, to: `/areas/${detail.slug}/` },
        ]}
        image={{ src: service.image, alt: `${service.title} by Leo Luxe Clean in ${town}` }}
      />

      {/* Local note + booking panel */}
      <section className="py-16 lg:py-20 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="section-mark mb-6">(01) In {town}</p>
            <h2 className="display text-4xl lg:text-5xl text-white mb-8">
              Your {c.job} in {town}
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed">{c.note}</p>

            <h3 className="label-caps text-[11px] text-gold mt-12 mb-4">{town} homes we know</h3>
            <ul className="rule-list">
              {detail.propertyTypes.map((t) => (
                <li key={t} className="py-3 flex gap-4 text-neutral-300 text-[15px]">
                  <span className="text-gold" aria-hidden="true">—</span>
                  {capitalise(t)}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 border-t-2 border-gold pt-8">
              <p className="label-caps text-[10px] text-neutral-500">{service.title} in {town}</p>
              <p className="display text-5xl text-gold mt-3">{service.pricing}</p>
              <dl className="mt-8 rule-list text-sm">
                {[
                  ['Postcodes', detail.postcodeDistricts.join(', ')],
                  ['From our base', capitalise(detail.travel.time)],
                  ['Hours', business.hours.short],
                  ['Reply', capitalise(business.responseTime)],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 py-3">
                    <dt className="text-neutral-500">{k}</dt>
                    <dd className="text-white text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-col gap-3 mt-8">
                <QuoteButton className="btn-gold label-caps px-6 py-4 rounded-lg inline-flex items-center justify-center gap-2">
                  Free quote in {town} <ArrowRight size={14} />
                </QuoteButton>
                <a
                  href={business.phone.href}
                  className="btn-outline-gold label-caps px-6 py-4 rounded-lg inline-flex items-center justify-center gap-2"
                  aria-label={`Call us on ${business.phone.display}`}
                >
                  <Phone size={14} /> {business.phone.display}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 lg:py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="section-mark mb-6">(02) Included</p>
            <h2 className="display text-4xl lg:text-5xl text-white mb-4">What&apos;s included</h2>
            <p className="text-neutral-400 text-sm max-w-xs">
              Standard on every {c.job} in {town}. <Link href={`/services/${service.slug}/`} className="text-gold hover:underline">More about {service.title.toLowerCase()}</Link>.
            </p>
          </div>
          <ol className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 border-t border-surface-border/70">
            {service.features.map((f, i) => (
              <li key={f} className="flex items-baseline gap-4 py-4 border-b border-surface-border/70">
                <span className="font-mono text-[11px] text-gold/70 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-neutral-200 text-[15px]">{f}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <GoogleReviews reviews={c.reviews} heading={`What customers say`} className="bg-surface-black" />

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="section-mark mb-6">(03) Questions</p>
            <h2 className="display text-4xl lg:text-5xl text-white">
              {service.title} in {town}: questions
            </h2>
          </div>
          <div className="lg:col-span-8 rule-list">
            {c.faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="heading-serif text-2xl text-white mb-2">{f.q}</h3>
                <p className="text-neutral-400 text-[15px] leading-relaxed max-w-2xl">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting to you */}
      <section className="py-16 lg:py-20 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="section-mark mb-6">(04) Getting to you</p>
            <h2 className="display text-4xl lg:text-5xl text-white">Across {town}</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="label-caps text-[11px] text-gold mb-3">Neighbourhoods</h3>
              <p className="text-neutral-300 text-[15px] leading-relaxed">
                {detail.neighbourhoods.map(capitalise).join(' · ')}
              </p>
              <h3 className="label-caps text-[11px] text-gold mt-8 mb-3">Travel</h3>
              <p className="text-neutral-300 text-[15px] leading-relaxed">{capitalise(detail.travel.route)}.</p>
            </div>
            <div>
              <h3 className="label-caps text-[11px] text-gold mb-3">Parking and access</h3>
              <p className="text-neutral-300 text-[15px] leading-relaxed">{detail.access}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-16 lg:py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="label-caps text-[11px] text-neutral-500 border-b border-surface-border pb-3 mb-2">More in {town}</h2>
            <ul>
              {c.otherServices.map(({ service: s, path }) => (
                <li key={s.slug} className="border-b border-surface-border/60">
                  <Link href={path} className="group flex items-baseline justify-between gap-4 py-3">
                    <span className="heading-serif text-2xl text-white group-hover:text-gold transition-colors">
                      {s.title}<span className="sr-only"> in {town}</span>
                    </span>
                    <span className="text-neutral-500 text-sm">{s.pricing}</span>
                  </Link>
                </li>
              ))}
              <li className="border-b border-surface-border/60">
                <Link href={`/areas/${detail.slug}/`} className="group flex items-baseline justify-between gap-4 py-3">
                  <span className="heading-serif text-2xl text-white group-hover:text-gold transition-colors">All cleaning in {town}</span>
                  <ArrowRight size={14} className="text-gold" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="label-caps text-[11px] text-neutral-500 border-b border-surface-border pb-3 mb-2">{service.title} nearby</h2>
            <ul>
              {c.otherTowns.map(({ detail: d, path }) => (
                <li key={d.slug} className="border-b border-surface-border/60">
                  <Link href={path} className="group flex items-baseline justify-between gap-4 py-3">
                    <span className="heading-serif text-2xl text-white group-hover:text-gold transition-colors">
                      <span className="sr-only">{service.title} in </span>{d.name}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-500">{d.postcodeDistricts.join(' ')}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="theme-dark py-16 lg:py-20 bg-surface-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="display text-4xl lg:text-5xl text-white mb-4">
            Book your {c.job} in {town}
          </h2>
          <p className="text-neutral-400 mb-8">
            Free quote, no obligation. We reply {business.responseTime}, {business.hours.short}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <QuoteButton className="btn-gold label-caps px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2">
              Get a free quote <ArrowRight size={14} />
            </QuoteButton>
            <a
              href={business.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold label-caps px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComboPage;
