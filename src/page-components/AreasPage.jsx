import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import QuoteButton from '../components/QuoteButton';
import { RatingSummary } from '../components/GoogleReviews';
import { areas } from '../data/areas';
import { business } from '../config/business';

const groups = [
  { title: 'Berkshire & Buckinghamshire', intro: 'Slough and the towns around it, closest to our base.', items: areas.filter((a) => a.region !== 'West London') },
  { title: 'West London', intro: 'Across Hillingdon, Ealing and Hounslow, planned around our routes.', items: areas.filter((a) => a.region === 'West London') },
];

const AreasPage = () => (
  <>
    <PageHero
      title={<>Areas We <span className="text-gold-gradient">Cover</span></>}
      kicker="Cleaners across Berkshire, Bucks & West London"
      subtitle="Based in George Green, Slough, we clean homes and businesses across Berkshire, Buckinghamshire and West London. Each town has its own local guide."
      breadcrumb="Areas"
    />

    <section className="py-6 bg-surface-dark border-b border-surface-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-center">
        <RatingSummary />
      </div>
    </section>

    {groups.map((g, i) => (
      <section key={g.title} className={`py-16 lg:py-24 ${i % 2 === 0 ? 'bg-surface-black' : 'bg-surface-dark border-y border-surface-border/30'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="display text-[2rem] lg:text-[2.75rem] text-white mb-2">{g.title}</h2>
          <p className="text-neutral-400 text-sm mb-10">{g.intro}</p>
          <div className="rule-list">
            {g.items.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}/`}
                className="group grid grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-2 py-7 items-baseline"
              >
                <h3 className="col-span-8 lg:col-span-3 display text-[2rem] lg:text-[2.75rem] text-white group-hover:text-gold transition-colors">
                  {a.name}
                </h3>
                <span className="col-span-4 lg:col-span-2 lg:order-last text-right font-mono text-xs text-neutral-500">
                  {a.postcodeDistricts.join(', ')}
                </span>
                <p className="col-span-12 lg:col-span-6 text-neutral-400 text-sm leading-relaxed">{a.page.lede}</p>
                <span className="col-span-12 lg:col-span-1 label-caps text-[10px] text-gold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span className="sr-only">Cleaners in {a.name}</span> <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="py-16 lg:py-20 bg-surface-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="display text-4xl lg:text-5xl text-white mb-4">Not sure if we cover you?</h2>
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
