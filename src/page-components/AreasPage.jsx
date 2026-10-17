import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import QuoteButton from '../components/QuoteButton';
import { RatingSummary } from '../components/GoogleReviews';
import { areas } from '../data/areas';
import { locations } from '../data/locations';
import { business, isCoreArea } from '../config/business';

// Towns we also cover that don't have their own page.
const otherAreas = locations.filter((l) => !isCoreArea(l.slug));
const groups = [
  { title: 'Berkshire & Buckinghamshire', items: otherAreas.filter((l) => l.county !== 'West London') },
  { title: 'West London', items: otherAreas.filter((l) => l.county === 'West London') },
];

const AreasPage = () => (
  <>
    <PageHero
      title={<>Areas We <span className="text-gold-gradient">Cover</span></>}
      subtitle="Based in George Green, Slough. Our core areas are Slough, Windsor, Maidenhead, Langley, Ascot and Eton, and we also cover nearby towns across Berkshire, Buckinghamshire and West London."
      breadcrumb="Areas"
    />

    <section className="py-6 bg-surface-dark border-b border-surface-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-center">
        <RatingSummary />
      </div>
    </section>

    {/* Core areas */}
    <section className="py-16 lg:py-24 bg-surface-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-2">Our core areas</h2>
        <p className="text-neutral-400 text-sm mb-10">Where most of our work is, each with its own local guide.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((a) => (
            <Link
              key={a.slug}
              href={`/areas/${a.slug}/`}
              className="group block rounded-xl border border-surface-border/40 hover:border-gold/30 p-6 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={14} className="text-gold flex-shrink-0" />
                <h3 className="text-white font-semibold group-hover:text-gold transition-colors">{a.name}</h3>
                <span className="text-neutral-500 text-xs ml-auto">{a.postcodeDistricts.join(', ')}</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mt-3">{a.page.lede}</p>
              <span className="label-caps text-[10px] text-gold mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Cleaners in {a.name} <ArrowRight size={11} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Other towns */}
    <section className="py-16 lg:py-24 bg-surface-dark border-y border-surface-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-2">Other areas we cover</h2>
        <p className="text-neutral-400 text-sm mb-10 max-w-2xl">
          We also clean homes and businesses in these towns. Visits here are planned around our routes, so call
          or send a quote request and we will confirm availability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="label-caps text-[11px] text-gold mb-4">{g.title}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {g.items.map((l) => (
                  <li key={l.slug} className="flex items-baseline justify-between gap-3 border-b border-surface-border/30 pb-2">
                    <span className="text-neutral-200">{l.name}</span>
                    <span className="text-neutral-500 text-xs">{l.postcodes}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 lg:py-20 bg-surface-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">Not sure if we cover you?</h2>
        <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
          Give us a call. If you&apos;re within range we&apos;ll tell you straight away.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <QuoteButton className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2">
            Get a Free Quote <ArrowRight size={14} />
          </QuoteButton>
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

export default AreasPage;
