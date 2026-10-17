import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, MapPin, ChevronRight, Clock, Car } from 'lucide-react';
import HeroImage from '../components/HeroImage';
import QuoteButton from '../components/QuoteButton';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { ReviewCard, RatingSummary } from '../components/GoogleReviews';
import { business } from '../config/business';
import { getAreaPageContent, priceLabel } from '../lib/areaContent';

const capitalise = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const Breadcrumb = ({ name }) => (
  <nav className="flex flex-wrap items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
    <Link href="/" className="text-neutral-400 hover:text-gold transition-colors">Home</Link>
    <ChevronRight size={14} className="text-neutral-600" />
    <Link href="/areas/" className="text-neutral-400 hover:text-gold transition-colors">Areas</Link>
    <ChevronRight size={14} className="text-neutral-600" />
    <span className="text-gold">{name}</span>
  </nav>
);

const HeroActions = ({ area }) => (
  <div className="flex flex-col sm:flex-row gap-3 mt-8">
    <QuoteButton className="btn-gold label-caps px-7 py-3.5 rounded-lg inline-flex items-center justify-center gap-2">
      Free quote in {area} <ArrowRight size={14} />
    </QuoteButton>
    <a href={business.phone.href} className="btn-outline-gold label-caps px-7 py-3.5 rounded-lg inline-flex items-center justify-center gap-2">
      <Phone size={14} /> {business.phone.display}
    </a>
  </div>
);

const Postcodes = ({ detail }) => (
  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-300 mt-5">
    <span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-gold" /> {detail.postcodeDistricts.join(', ')}</span>
    <span>Home cleaning from £60</span>
    <RatingSummary />
  </div>
);

// Three hero treatments so the six pages don't share one layout.
function Hero({ detail }) {
  const { page } = detail;
  if (page.hero === 'photo') {
    return (
      <section className="theme-dark relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24">
        <HeroImage photo={page.photo} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb name={detail.name} />
          <h1 className="display text-6xl sm:text-7xl lg:text-8xl text-white max-w-4xl">{page.h1}</h1>
          <p className="text-neutral-200 text-lg max-w-xl mt-6 leading-relaxed">{page.lede}</p>
          <Postcodes detail={detail} />
          <HeroActions area={detail.name} />
        </div>
      </section>
    );
  }
  if (page.hero === 'split') {
    return (
      <section className="theme-dark pt-28 pb-14 lg:pt-36 lg:pb-20 bg-surface-black border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Breadcrumb name={detail.name} />
            <h1 className="display text-6xl sm:text-7xl lg:text-8xl text-white">{page.h1}</h1>
            <p className="text-neutral-300 text-lg mt-6 leading-relaxed">{page.lede}</p>
            <Postcodes detail={detail} />
            <HeroActions area={detail.name} />
          </div>
          <div className="lg:col-span-6">
            <HeroImage
              photo={page.photo}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full aspect-[4/3] object-cover"
              alt={page.photo === 'team' ? 'Leo Luxe Clean team cleaning a bathroom' : 'A Leo Luxe Clean cleaner wiping a kitchen worktop'}
            />
          </div>
        </div>
      </section>
    );
  }
  // 'panel': text-led hero with a facts panel, no photo.
  return (
    <section className="theme-dark pt-28 pb-14 lg:pt-36 lg:pb-20 bg-gradient-to-br from-surface-dark via-surface-black to-surface-black border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <Breadcrumb name={detail.name} />
          <h1 className="display text-6xl sm:text-7xl lg:text-[7.5rem] text-white">{page.h1}</h1>
          <p className="text-neutral-300 text-lg mt-6 leading-relaxed max-w-xl">{page.lede}</p>
          <HeroActions area={detail.name} />
        </div>
        <dl className="lg:col-span-5 grid grid-cols-2 gap-x-8">
          {[
            ['Postcodes', detail.postcodeDistricts.join(', ')],
            ['From our base', capitalise(detail.travel.time)],
            ['Home cleaning', 'From £60'],
            ['On Google', `${business.google.ratingDisplay} from ${business.google.reviewCount} reviews`],
          ].map(([k, v]) => (
            <div key={k} className="border-t border-gold/30 py-5">
              <dt className="label-caps text-[10px] text-neutral-400">{k}</dt>
              <dd className="heading-serif text-xl text-white mt-1">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Services({ c }) {
  const { detail } = c;
  const layout = detail.page.servicesLayout;
  if (layout === 'table') {
    return (
      <div className="overflow-x-auto border-t border-gold/30">
        <table className="w-full text-sm">
          <caption className="sr-only">Cleaning services and starting prices in {detail.name}</caption>
          <thead>
            <tr className="text-left text-neutral-400 label-caps text-[10px] border-b border-surface-border/40">
              <th scope="col" className="pr-5 py-3 font-normal">Service</th>
              <th scope="col" className="pr-5 py-3 font-normal hidden md:table-cell">In {detail.name}</th>
              <th scope="col" className="pl-5 py-3 font-normal text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {c.services.map((s) => (
              <tr key={s.slug} className="border-b border-surface-border/30 last:border-0 align-top">
                <th scope="row" className="pr-5 py-5 text-left font-normal">
                  <Link href={`/services/${s.slug}/`} className="heading-serif text-2xl text-white hover:text-gold transition-colors">{s.title}</Link>
                  <p className="text-neutral-400 text-sm mt-2 leading-relaxed md:hidden">{s.note}</p>
                </th>
                <td className="pr-5 py-5 text-neutral-400 leading-relaxed hidden md:table-cell">{s.note}</td>
                <td className="pl-5 py-5 text-right heading-serif text-xl text-gold whitespace-nowrap">{priceLabel(s)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (layout === 'rows') {
    return (
      <div className="divide-y divide-surface-border/40 border-y border-surface-border/40">
        {c.services.map((s, i) => (
          <article key={s.slug} className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4">
              <span className="text-neutral-500 font-mono text-xs">0{i + 1}</span>
              <h3 className="heading-serif text-2xl text-white mt-1">
                <Link href={`/services/${s.slug}/`} className="hover:text-gold transition-colors">{s.title}</Link>
              </h3>
              <p className="text-gold heading-serif text-lg mt-1">{priceLabel(s)}</p>
            </div>
            <p className="md:col-span-8 text-neutral-300 leading-relaxed">{s.note}</p>
          </article>
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
      {c.services.map((s) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}/`}
          className="group border-t border-surface-border/50 hover:border-gold pt-6 flex flex-col transition-colors"
        >
          <div className="flex items-baseline justify-between gap-3 mb-3">
            <h3 className="heading-serif text-2xl text-white group-hover:text-gold transition-colors">{s.title}</h3>
            <span className="text-gold heading-serif text-lg whitespace-nowrap">{priceLabel(s)}</span>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed flex-1">{s.note}</p>
          <span className="label-caps text-[10px] text-gold mt-4 inline-flex items-center gap-1">
            Service details <ArrowRight size={11} />
          </span>
        </Link>
      ))}
    </div>
  );
}

const AreaPage = ({ slug }) => {
  const c = getAreaPageContent(slug);
  if (!c) return null;
  const { detail } = c;
  const { page } = detail;
  const h = page.headings;

  const sections = {
    services: <Services c={c} />,

    local: (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-4 text-neutral-300 leading-relaxed">
          <p>{detail.intro}</p>
          <p className="text-neutral-400">
            Landmarks you will know: {detail.landmarks.join(', ')}.
          </p>
        </div>
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h3 className="label-caps text-[11px] text-gold mb-3">Typical properties</h3>
            <ul className="space-y-2 text-neutral-300 text-sm">
              {detail.propertyTypes.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-gold flex-shrink-0" aria-hidden="true">—</span>
                  <span>{capitalise(t)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="label-caps text-[11px] text-gold mb-3">Neighbourhoods</h3>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 text-neutral-300 text-sm">
              {detail.neighbourhoods.map((n, i) => (
                <li key={n}>
                  {i > 0 && <span className="text-gold/50 mr-3" aria-hidden="true">·</span>}
                  {capitalise(n)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),

    why: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
        {detail.why.map((w, i) => (
          <div key={w.title} className="border-t border-gold/30 pt-6">
            <span className="heading-serif text-5xl text-gold/30 leading-none">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="heading-serif text-2xl text-white mt-4 mb-2">{w.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{w.text}</p>
          </div>
        ))}
      </div>
    ),

    visit: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 md:divide-x divide-surface-border/40">
        <div className="md:pr-10">
          <Car size={18} className="text-gold mb-3" />
          <h3 className="heading-serif text-2xl text-white mb-2">{capitalise(detail.travel.time)} away</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">{capitalise(detail.travel.route)}.</p>
        </div>
        <div className="md:px-10">
          <MapPin size={18} className="text-gold mb-3" />
          <h3 className="heading-serif text-2xl text-white mb-2">Parking and access</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">{detail.access}</p>
        </div>
        <div className="md:pl-10">
          <Clock size={18} className="text-gold mb-3" />
          <h3 className="heading-serif text-2xl text-white mb-2">When we work</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {business.hours.display} We reply to quote requests {business.responseTime}.
          </p>
        </div>
      </div>
    ),

    reviews: (
      <>
        <div className="mb-6"><RatingSummary /></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
          {c.reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </>
    ),

    faq: (
      <div className="rule-list max-w-4xl">
        {c.faqs.map((f) => (
          <details key={f.q} className="group">
            <summary className="cursor-pointer list-none py-6 text-white text-base lg:text-lg flex justify-between gap-4 group-open:text-gold hover:text-gold transition-colors">
              <span>{f.q}</span>
              <span className="text-gold text-xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="pb-6 pr-8 text-neutral-400 text-[15px] leading-relaxed max-w-2xl">{f.a}</p>
          </details>
        ))}
      </div>
    ),
  };

  return (
    <>
      <Hero detail={detail} />

      {page.order.map((key, i) => (
        <section key={key} className={`py-14 lg:py-20 ${i % 2 === 0 ? 'bg-surface-black' : 'bg-surface-dark'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="section-mark mb-5">({String(i + 1).padStart(2, '0')})</p>
            <h2 className="display text-5xl lg:text-7xl text-white mb-10 lg:mb-14 max-w-4xl">{h[key]}</h2>
            {sections[key]}
          </div>
        </section>
      ))}

      {/* One call-to-action row */}
      <section className="theme-dark py-14 lg:py-16 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <p className="display text-4xl lg:text-5xl text-white">
            Book a clean in {detail.name}
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
              className="label-caps px-6 py-3.5 rounded-lg inline-flex items-center justify-center gap-2 border border-[#25a244]/40 text-whatsapp hover:bg-[#25a244]/15 transition-colors"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
            <QuoteButton className="btn-outline-gold label-caps px-6 py-3.5 rounded-lg inline-flex items-center justify-center gap-2">
              Get a quote <ArrowRight size={14} />
            </QuoteButton>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-12 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="heading-serif text-2xl text-white mb-5">Also near {detail.name}</h2>
          <ul className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
            {c.nearby.map((n) => (
              <li key={n.slug}>
                <Link href={`/areas/${n.slug}/`} className="heading-serif text-2xl text-neutral-300 hover:text-gold border-b border-transparent hover:border-gold/50 transition-colors">
                  <span className="sr-only">Cleaners in </span>{n.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/areas/" className="label-caps text-[11px] text-gold inline-flex items-center gap-1.5 hover:gap-3 transition-all">
                All areas we cover <ArrowRight size={12} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AreaPage;
