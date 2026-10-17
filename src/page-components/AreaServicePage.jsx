import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, MapPin, ChevronRight } from 'lucide-react';
import QuoteButton from '../components/QuoteButton';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { ReviewCard, RatingSummary } from '../components/GoogleReviews';
import { business } from '../config/business';
import { getAreaServiceContent } from '../lib/areaServiceContent';

const sectionBg = (i) => (i % 2 === 0 ? 'bg-surface-black' : 'bg-surface-dark');

const AreaServicePage = ({ areaSlug, serviceSlug }) => {
  const c = getAreaServiceContent(areaSlug, serviceSlug);
  if (!c) return null;
  const { location, service, detail, layout } = c;
  const area = location.name;
  const h = layout.headings;

  const sections = {
    local: (
      <>
        <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-6">{h.local(area)}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-4 text-neutral-300 leading-relaxed">
            {c.serviceNote ? <p>{c.serviceNote}</p> : <p>{service.heroDesc}</p>}
            {detail ? <p className="text-neutral-400">{detail.intro}</p> : location.intro.map((p, i) => <p key={i} className="text-neutral-400">{p}</p>)}
          </div>
          {detail && (
            <div className="lg:col-span-5 rounded-xl border border-surface-border/40 p-6">
              <h3 className="text-white font-semibold text-sm mb-4">Typical {area} properties</h3>
              <ul className="space-y-2 text-neutral-400 text-sm">
                {detail.propertyTypes.map((t) => (
                  <li key={t} className="flex gap-2">
                    <CheckCircle2 size={14} className="text-gold flex-shrink-0 mt-1" />
                    <span>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                  </li>
                ))}
              </ul>
              <p className="text-neutral-500 text-xs mt-5 leading-relaxed">
                Neighbourhoods we cover: {detail.neighbourhoods.join(', ')}.
              </p>
            </div>
          )}
        </div>
      </>
    ),

    pricing: (
      <>
        <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-6">{h.pricing(area)}</h2>
        <div className="max-w-3xl overflow-x-auto rounded-xl border border-surface-border/40">
          <table className="w-full text-sm">
            <caption className="sr-only">{service.title} prices in {area}</caption>
            <thead>
              <tr className="text-left text-neutral-500 label-caps text-[10px] border-b border-surface-border/40">
                <th scope="col" className="px-5 py-3 font-normal">Service</th>
                <th scope="col" className="px-5 py-3 font-normal text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {c.pricing.map((row) => (
                <tr key={row.label} className={`border-b border-surface-border/30 last:border-0 ${row.current ? 'bg-gold/5' : ''}`}>
                  <th scope="row" className="px-5 py-4 text-left font-normal">
                    {row.current ? (
                      <span className="text-white font-medium">{row.label}</span>
                    ) : (
                      <Link href={row.href} className="text-neutral-300 hover:text-gold transition-colors">{row.label}</Link>
                    )}
                  </th>
                  <td className={`px-5 py-4 text-right heading-serif text-xl ${row.current ? 'text-gold' : 'text-neutral-300'}`}>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-neutral-500 text-sm mt-4 max-w-3xl">
          Prices are starting points. We confirm a fixed price for your {area} property before any work starts, with no contract and no hidden extras.
        </p>
      </>
    ),

    why: c.why && (
      <>
        <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-8">
          Why {area} {service.slug === 'office-cleaning' ? 'businesses' : 'customers'} choose us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {c.why.map((w) => (
            <div key={w.title} className="rounded-xl border border-surface-border/40 p-6">
              <h3 className="text-white font-semibold mb-2">{w.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>
      </>
    ),

    included: (
      <>
        <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-6">{h.included(area)}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-4xl">
          {service.features.slice(0, 6).map((f) => (
            <li key={f} className="flex items-start gap-3 text-neutral-300 text-sm">
              <CheckCircle2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <Link href={`/services/${service.slug}/`} className="inline-flex items-center gap-1.5 label-caps text-gold text-[11px] mt-6 hover:gap-3 transition-all">
          Full {service.title.toLowerCase()} details <ArrowRight size={12} />
        </Link>
      </>
    ),

    faq: (
      <>
        <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-6">{h.faq(area)}</h2>
        <div className="space-y-3 max-w-4xl">
          {c.faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-surface-border/40 bg-surface-dark/40 open:border-gold/20">
              <summary className="cursor-pointer list-none px-6 py-5 text-white text-sm font-medium flex justify-between gap-4">
                <span>{f.q}</span>
                <span className="text-gold transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="px-6 pb-5 text-neutral-400 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </>
    ),

    reviews: c.reviews.length > 0 && (
      <>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
          <h2 className="heading-serif text-3xl lg:text-4xl text-white">{h.reviews(area)}</h2>
          <RatingSummary />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {c.reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </>
    ),
  };

  const ordered = layout.order.filter((k) => sections[k]);

  return (
    <>
      {/* Compact hero */}
      <section className="relative pt-28 pb-10 lg:pt-36 lg:pb-14 bg-gradient-to-b from-surface-dark to-surface-black border-b border-surface-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <nav className="flex flex-wrap items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="text-neutral-500 hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} className="text-neutral-700" />
            <Link href="/areas/" className="text-neutral-500 hover:text-gold transition-colors">Areas</Link>
            <ChevronRight size={14} className="text-neutral-700" />
            <Link href={`/areas/${location.slug}/`} className="text-neutral-500 hover:text-gold transition-colors">{area}</Link>
            <ChevronRight size={14} className="text-neutral-700" />
            <span className="text-gold">{service.title}</span>
          </nav>
          <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            {service.title} in <span className="text-gold-gradient">{area}</span>
          </h1>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-neutral-300">
            <span className="inline-flex items-center gap-1.5"><MapPin size={15} className="text-gold" /> {area}, {c.postcodes}</span>
            <span className="text-gold heading-serif text-xl">{c.priceLine}</span>
          </p>
        </div>
      </section>

      {ordered.map((key, i) => (
        <section key={key} className={`py-14 lg:py-20 ${sectionBg(i)}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">{sections[key]}</div>
        </section>
      ))}

      {/* One call-to-action row */}
      <section className="py-12 bg-surface-dark border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <p className="heading-serif text-2xl lg:text-3xl text-white">
            Book {service.title.toLowerCase()} in {area}
            <span className="block text-neutral-400 text-sm font-sans mt-1">We reply {business.responseTime}, {business.hours.short}.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={business.phone.href} className="btn-gold label-caps px-6 py-3.5 rounded-lg inline-flex items-center justify-center gap-2">
              <Phone size={14} /> Call {business.phone.display}
            </a>
            <a
              href={business.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps px-6 py-3.5 rounded-lg inline-flex items-center justify-center gap-2 border border-[#25a244]/40 text-[#4ade80] hover:bg-[#25a244]/15 transition-colors"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
            <QuoteButton service={service.slug} className="btn-outline-gold label-caps px-6 py-3.5 rounded-lg inline-flex items-center justify-center gap-2">
              Get a quote <ArrowRight size={14} />
            </QuoteButton>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-12 lg:py-16 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="heading-serif text-2xl lg:text-3xl text-white mb-6">Near {area}</h2>
          <ul className="flex flex-wrap gap-3">
            {c.nearby.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="rounded-lg border border-surface-border/40 px-4 py-2.5 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-gold hover:border-gold/30 transition-colors">
                  <MapPin size={14} className="text-gold" /> {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={`/areas/${location.slug}/`} className="rounded-lg border border-surface-border/40 px-4 py-2.5 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-gold hover:border-gold/30 transition-colors">
                All services in {area}
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AreaServicePage;
