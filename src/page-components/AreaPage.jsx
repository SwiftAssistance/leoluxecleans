import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, MapPin, ChevronRight, Clock, Car } from 'lucide-react';
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
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24">
        <HeroImage photo={page.photo} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb name={detail.name} />
          <h1 className="heading-serif text-4xl sm:text-5xl lg:text-7xl text-white max-w-3xl leading-[1.05]">{page.h1}</h1>
          <p className="text-neutral-200 text-lg max-w-xl mt-6 leading-relaxed">{page.lede}</p>
          <Postcodes detail={detail} />
          <HeroActions area={detail.name} />
        </div>
      </section>
    );
  }
  if (page.hero === 'split') {
    return (
      <section className="pt-28 pb-14 lg:pt-36 lg:pb-20 bg-surface-dark border-b border-surface-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Breadcrumb name={detail.name} />
            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">{page.h1}</h1>
            <p className="text-neutral-300 text-lg mt-6 leading-relaxed">{page.lede}</p>
            <Postcodes detail={detail} />
            <HeroActions area={detail.name} />
          </div>
          <div className="lg:col-span-6">
            <HeroImage
              photo={page.photo}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-gold/20"
              alt={page.photo === 'team' ? 'Leo Luxe Clean team cleaning a bathroom' : 'A Leo Luxe Clean cleaner wiping a kitchen worktop'}
            />
          </div>
        </div>
      </section>
    );
  }
  // 'panel': text-led hero with a facts panel, no photo.
  return (
    <section className="pt-28 pb-14 lg:pt-36 lg:pb-20 bg-gradient-to-br from-surface-dark via-surface-black to-surface-black border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <Breadcrumb name={detail.name} />
          <h1 className="heading-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.02]">{page.h1}</h1>
          <p className="text-neutral-300 text-lg mt-6 leading-relaxed max-w-xl">{page.lede}</p>
          <HeroActions area={detail.name} />
        </div>
        <dl className="lg:col-span-5 grid grid-cols-2 gap-px bg-gold/15 rounded-2xl overflow-hidden border border-gold/20">
          {[
            ['Postcodes', detail.postcodeDistricts.join(', ')],
            ['From our base', capitalise(detail.travel.time)],
            ['Home cleaning', 'From £60'],
            ['On Google', `${business.google.ratingDisplay} from ${business.google.reviewCount} reviews`],
          ].map(([k, v]) => (
            <div key={k} className="bg-surface-black p-5">
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
      <div className="overflow-x-auto rounded-xl border border-surface-border/40">
        <table className="w-full text-sm">
          <caption className="sr-only">Cleaning services and starting prices in {detail.name}</caption>
          <thead>
            <tr className="text-left text-neutral-400 label-caps text-[10px] border-b border-surface-border/40">
              <th scope="col" className="px-5 py-3 font-normal">Service</th>
              <th scope="col" className="px-5 py-3 font-normal hidden md:table-cell">In {detail.name}</th>
              <th scope="col" className="px-5 py-3 font-normal text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {c.services.map((s) => (
              <tr key={s.slug} className="border-b border-surface-border/30 last:border-0 align-top">
                <th scope="row" className="px-5 py-5 text-left font-normal">
                  <Link href={`/services/${s.slug}/`} className="text-white font-medium hover:text-gold transition-colors">{s.title}</Link>
                  <p className="text-neutral-400 text-sm mt-2 leading-relaxed md:hidden">{s.note}</p>
                </th>
                <td className="px-5 py-5 text-neutral-400 leading-relaxed hidden md:table-cell">{s.note}</td>
                <td className="px-5 py-5 text-right heading-serif text-xl text-gold whitespace-nowrap">{priceLabel(s)}</td>
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {c.services.map((s) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}/`}
          className="group rounded-xl border border-surface-border/40 hover:border-gold/30 p-6 flex flex-col transition-colors"
        >
          <div className="flex items-baseline justify-between gap-3 mb-3">
            <h3 className="text-white font-semibold group-hover:text-gold transition-colors">{s.title}</h3>
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
                <li key={t} className="flex gap-2">
                  <CheckCircle2 size={14} className="text-gold flex-shrink-0 mt-1" />
                  <span>{capitalise(t)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="label-caps text-[11px] text-gold mb-3">Neighbourhoods</h3>
            <ul className="flex flex-wrap gap-2">
              {detail.neighbourhoods.map((n) => (
                <li key={n} className="rounded-full border border-surface-border/50 px-3 py-1 text-xs text-neutral-300">{capitalise(n)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),

    why: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {detail.why.map((w, i) => (
          <div key={w.title} className="rounded-xl border border-surface-border/40 p-6">
            <span className="heading-serif text-3xl text-gold/40">{i + 1}</span>
            <h3 className="text-white font-semibold mt-2 mb-2">{w.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{w.text}</p>
          </div>
        ))}
      </div>
    ),

    visit: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="rounded-xl border border-surface-border/40 p-6">
          <Car size={18} className="text-gold mb-3" />
          <h3 className="text-white font-semibold mb-2">{capitalise(detail.travel.time)} away</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">{capitalise(detail.travel.route)}.</p>
        </div>
        <div className="rounded-xl border border-surface-border/40 p-6">
          <MapPin size={18} className="text-gold mb-3" />
          <h3 className="text-white font-semibold mb-2">Parking and access</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">{detail.access}</p>
        </div>
        <div className="rounded-xl border border-surface-border/40 p-6">
          <Clock size={18} className="text-gold mb-3" />
          <h3 className="text-white font-semibold mb-2">When we work</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {business.hours.display} We reply to quote requests {business.responseTime}.
          </p>
        </div>
      </div>
    ),

    reviews: (
      <>
        <div className="mb-6"><RatingSummary /></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {c.reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </>
    ),

    faq: (
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
    ),
  };

  return (
    <>
      <Hero detail={detail} />

      {page.order.map((key, i) => (
        <section key={key} className={`py-14 lg:py-20 ${i % 2 === 0 ? 'bg-surface-black' : 'bg-surface-dark'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-8">{h[key]}</h2>
            {sections[key]}
          </div>
        </section>
      ))}

      {/* One call-to-action row */}
      <section className="py-12 bg-surface-dark border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <p className="heading-serif text-2xl lg:text-3xl text-white">
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
              className="label-caps px-6 py-3.5 rounded-lg inline-flex items-center justify-center gap-2 border border-[#25a244]/40 text-[#4ade80] hover:bg-[#25a244]/15 transition-colors"
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
          <ul className="flex flex-wrap gap-3">
            {c.nearby.map((n) => (
              <li key={n.slug}>
                <Link href={`/areas/${n.slug}/`} className="rounded-lg border border-surface-border/40 px-4 py-2.5 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-gold hover:border-gold/30 transition-colors">
                  <MapPin size={14} className="text-gold" /> Cleaners in {n.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/areas/" className="rounded-lg border border-surface-border/40 px-4 py-2.5 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-gold hover:border-gold/30 transition-colors">
                All areas we cover
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AreaPage;
