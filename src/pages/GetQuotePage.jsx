import React, { useState, useRef, useEffect } from 'react';
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  Clock,
  Sparkles,
  Loader2,
  BadgeCheck,
  Leaf,
  MapPin,
} from 'lucide-react';
import Seo from '../components/Seo';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SERVICE_OPTIONS = [
  { value: 'home-cleaning', label: 'Home Cleaning — from £60' },
  { value: 'deep-clean', label: 'Deep Cleaning — from £120' },
  { value: 'end-of-tenancy', label: 'End of Tenancy — from £150' },
  { value: 'office-cleaning', label: 'Office / Commercial — custom quote' },
  { value: 'after-events', label: 'After Event — from £80' },
  { value: 'specialist-cleaning', label: 'Specialist (carpets, ovens…) — from £70' },
  { value: 'not-sure', label: "Not sure — help me choose" },
];

const TRUST_ICONS = [
  { Icon: Star, label: '5.0 on Google' },
  { Icon: ShieldCheck, label: 'DBS checked' },
  { Icon: BadgeCheck, label: 'Fully insured' },
  { Icon: Leaf, label: 'Eco-friendly' },
];

const WHATS_INCLUDED = [
  'Same-week availability across Slough, Windsor & Berkshire',
  'Honest, fixed price — no hidden fees, no surprises',
  '100% satisfaction guarantee — free re-clean if anything is missed',
  'DBS-checked, fully insured, owner-managed team',
  'Eco-friendly products brought by us — no need to supply anything',
  'No contracts, no deposits, cancel anytime',
];

const REVIEWS = [
  {
    name: 'Tom Richards',
    location: 'Slough',
    text: "Found Leo Luxe through a neighbour. You can tell they genuinely care. My house has never been cleaner.",
  },
  {
    name: 'Priya Sharma',
    location: 'Windsor',
    text: 'Had them do a deep clean before our baby arrived. They got into every nook and cranny. Brilliant from start to finish.',
  },
  {
    name: 'James Taylor',
    location: 'Maidenhead',
    text: 'End of tenancy clean was perfect. Got our full deposit back. They even cleaned inside the oven which I thought was a lost cause.',
  },
];

const FAQS = [
  {
    q: 'How quickly can you start?',
    a: 'We usually book you in the same week. For end-of-tenancy or after-event cleans we offer same-day and next-day slots where possible.',
  },
  {
    q: 'How much will it cost?',
    a: 'Home cleaning starts at £60, deep cleans from £120, end of tenancy from £150. You get a fixed price up front — no hourly surprises.',
  },
  {
    q: 'What if I\'m not happy with the clean?',
    a: "We offer a 100% satisfaction guarantee. If anything's missed, tell us and we come back within 48 hours and sort it free of charge.",
  },
  {
    q: 'Are your cleaners DBS checked and insured?',
    a: 'Yes — every team member is DBS checked, fully insured (public liability + employer\'s liability), and trained before entering your home.',
  },
  {
    q: 'Do I need to provide products or equipment?',
    a: "No. We bring professional-grade, eco-friendly products and everything we need. Just unlock the door.",
  },
  {
    q: 'Which areas do you cover?',
    a: 'Slough, Windsor, Langley, Maidenhead, Eton, Burnham, Ascot, Bracknell and across West London — Hayes, Uxbridge, Ealing, Hounslow, Southall, Greenford, Northolt and West Drayton.',
  },
];

const GetQuotePage = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    service: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);
  const [reviewsRef, reviewsVisible] = useScrollReveal({ threshold: 0.1 });
  const [faqRef, faqVisible] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'generate_lead',
        form_name: 'get_quote_landing',
        service: form.service,
      });
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', { send_to: 'AW-UNSET/UNSET' });
      }
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-surface-black text-white font-sans overflow-x-hidden">
      <Seo
        title="Free Cleaning Quote in Slough, Windsor & Berkshire — Reply in 2 Hours"
        description="Get a free cleaning quote in 2 hours. Home cleaning from £60, deep cleans from £120, end of tenancy from £150. DBS-checked, fully insured, 100% satisfaction guarantee. Slough, Windsor, Berkshire & West London."
        canonical="/get-quote"
        noindex
      />

      {/* Minimal conversion-focused header — logo + phone, no nav */}
      <header className="sticky top-0 z-40 bg-surface-black/95 backdrop-blur border-b border-surface-border/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2" aria-label="Leo Luxe Clean">
            <img src="/logo.svg" alt="Leo Luxe Clean" width="140" height="44" className="h-10 w-auto" />
          </a>
          <a
            href="tel:01753257118"
            className="flex items-center gap-2 text-white hover:text-gold transition-colors"
            aria-label="Call 01753 257118"
          >
            <Phone size={16} className="text-gold" />
            <span className="hidden sm:inline text-sm font-medium">01753 257118</span>
            <span className="sm:hidden label-caps text-gold text-xs">Call now</span>
          </a>
        </div>
      </header>

      {/* HERO + FORM */}
      <section className="relative overflow-hidden">
        <img
          src="/hero.svg"
          alt=""
          role="presentation"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 pt-10 lg:pt-16 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Value prop */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 rounded-full px-3 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="label-caps text-gold text-[10px]">Slots this week — Slough, Windsor &amp; Berkshire</span>
              </div>

              <h1 className="heading-serif text-[clamp(2.5rem,6vw,5rem)] text-white leading-[0.95] mb-5">
                Free Cleaning Quote in{' '}
                <span className="text-gold-gradient">2 Hours</span>
              </h1>

              <p className="text-neutral-300 text-base lg:text-lg leading-relaxed max-w-xl mb-8">
                Honest, fixed prices from a local 5-star team. Home cleaning from{' '}
                <span className="text-white font-semibold">£60</span>, deep cleans from{' '}
                <span className="text-white font-semibold">£120</span>, end of tenancy from{' '}
                <span className="text-white font-semibold">£150</span>. DBS-checked, fully insured, 100% satisfaction guarantee.
              </p>

              {/* Trust row */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-8">
                {TRUST_ICONS.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 text-sm text-neutral-300">
                    <Icon size={14} className="text-gold" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              {/* What's included checklist */}
              <ul className="space-y-3 mb-8 max-w-xl">
                {WHATS_INCLUDED.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-300">
                    <CheckCircle2 size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Inline review — social proof above the fold */}
              <div className="hidden lg:flex items-start gap-4 rounded-xl border border-gold/20 bg-black/40 p-5 max-w-xl">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold heading-serif flex-shrink-0">
                  S
                </div>
                <div>
                  <div className="flex gap-0.5 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="#C8A94E" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-neutral-200 text-sm leading-relaxed italic">
                    "Honestly can't recommend Leo Luxe enough. The attention to detail was incredible."
                  </p>
                  <p className="text-neutral-500 text-xs mt-1.5">Sarah Mitchell — Homeowner, Slough</p>
                </div>
              </div>
            </div>

            {/* Right: Lead form */}
            <div className="lg:col-span-5 order-1 lg:order-2 w-full">
              <div
                ref={formRef}
                id="quote-form"
                className="rounded-2xl border border-gold/30 bg-[#141414] shadow-[0_0_80px_rgba(200,169,78,0.15)] p-6 lg:p-7"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles size={14} className="text-gold" />
                  <span className="label-caps text-gold text-[10px]">Free · No obligation</span>
                </div>
                <h2 className="heading-serif text-2xl lg:text-[1.75rem] text-white leading-tight mb-1.5">
                  Get Your Quote
                </h2>
                <p className="text-neutral-400 text-xs mb-5">
                  Takes 30 seconds. We reply within 2 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="animate-bounce-once inline-block mb-4">
                      <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                        <CheckCircle2 size={30} className="text-gold" />
                      </div>
                    </div>
                    <h3 className="heading-serif text-2xl text-white mb-2">Quote on its way</h3>
                    <p className="text-neutral-400 text-sm max-w-xs mx-auto leading-relaxed">
                      We've got your request. Expect a reply within 2 hours — usually sooner.
                    </p>
                    <a
                      href="tel:01753257118"
                      className="mt-5 inline-flex items-center gap-2 btn-gold label-caps px-6 py-3 rounded-lg"
                    >
                      <Phone size={14} /> Or call now
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="gq-name" className="block label-caps text-[10px] text-neutral-400 mb-1.5">
                          Name <span className="text-gold">*</span>
                        </label>
                        <input
                          id="gq-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full bg-surface-black border border-surface-border/60 focus:border-gold focus:outline-none rounded-lg px-3.5 py-3 text-white text-sm placeholder-neutral-600 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="gq-postcode" className="block label-caps text-[10px] text-neutral-400 mb-1.5">
                          Postcode <span className="text-gold">*</span>
                        </label>
                        <input
                          id="gq-postcode"
                          name="postcode"
                          type="text"
                          required
                          autoComplete="postal-code"
                          value={form.postcode}
                          onChange={handleChange}
                          placeholder="SL1 2AB"
                          className="w-full bg-surface-black border border-surface-border/60 focus:border-gold focus:outline-none rounded-lg px-3.5 py-3 text-white text-sm placeholder-neutral-600 transition-colors uppercase"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="gq-phone" className="block label-caps text-[10px] text-neutral-400 mb-1.5">
                        Phone <span className="text-gold">*</span>
                      </label>
                      <input
                        id="gq-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="07700 900000"
                        className="w-full bg-surface-black border border-surface-border/60 focus:border-gold focus:outline-none rounded-lg px-3.5 py-3 text-white text-sm placeholder-neutral-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="gq-email" className="block label-caps text-[10px] text-neutral-400 mb-1.5">
                        Email <span className="text-gold">*</span>
                      </label>
                      <input
                        id="gq-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full bg-surface-black border border-surface-border/60 focus:border-gold focus:outline-none rounded-lg px-3.5 py-3 text-white text-sm placeholder-neutral-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="gq-service" className="block label-caps text-[10px] text-neutral-400 mb-1.5">
                        Service Needed <span className="text-gold">*</span>
                      </label>
                      <select
                        id="gq-service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="appearance-none w-full bg-surface-black border border-surface-border/60 focus:border-gold focus:outline-none rounded-lg px-3.5 py-3 text-sm text-white transition-colors"
                      >
                        <option value="">Choose a service…</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full btn-gold glow-pulse label-caps py-4 rounded-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={14} className="animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          Get My Free Quote <ArrowRight size={14} />
                        </>
                      )}
                    </button>

                    <p className="text-center text-neutral-500 text-[11px] leading-relaxed pt-1">
                      <Clock size={10} className="inline mr-1 -mt-0.5 text-gold" />
                      Average reply: 47 minutes · We never share your details
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-surface-dark border-y border-surface-border/40 py-6">
        <div className="max-w-6xl mx-auto px-5 lg:px-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#C8A94E" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm text-white font-medium">5.0</span>
            <span className="text-sm text-neutral-400">on Google</span>
          </div>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <span className="text-sm text-neutral-400"><span className="text-white font-medium">500+</span> homes cleaned</span>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <span className="text-sm text-neutral-400">Trusted across <span className="text-white font-medium">Berkshire &amp; West London</span></span>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <span className="text-sm text-neutral-400">Public liability <span className="text-white font-medium">insured to £2M</span></span>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 lg:py-20 bg-surface-black">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <span className="label-caps text-gold text-[11px]">What you get</span>
            <h2 className="heading-serif text-3xl lg:text-4xl text-white mt-2 mb-4">
              Everything included. No upsells.
            </h2>
            <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">
              One fixed price. The team that quotes you is the team that cleans for you. If anything isn't right, we come back and fix it free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-3 py-3 border-b border-surface-border/30">
                <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-neutral-200 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={scrollToForm}
              className="btn-gold label-caps px-8 py-4 rounded-lg inline-flex items-center gap-2"
            >
              Get My Free Quote <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Transparent pricing */}
      <section className="py-16 lg:py-20 bg-surface-dark border-y border-surface-border/40">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <span className="label-caps text-gold text-[11px]">Transparent pricing</span>
            <h2 className="heading-serif text-3xl lg:text-4xl text-white mt-2 mb-3">
              Honest prices, no hourly surprises
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Final quote depends on property size and scope. These are our starting prices — what you're quoted is what you pay.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Home Cleaning', price: 'from £60', note: 'Weekly, fortnightly or one-off' },
              { title: 'Deep Clean', price: 'from £120', note: 'Behind appliances, inside ovens, grout' },
              { title: 'End of Tenancy', price: 'from £150', note: 'Inventory standard — get your deposit back' },
              { title: 'Office & Commercial', price: 'Custom', note: 'Evenings and weekends available' },
              { title: 'After Event', price: 'from £80', note: 'Same-day & next-day availability' },
              { title: 'Specialist', price: 'from £70', note: 'Carpets, ovens, upholstery, windows' },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-surface-border/40 p-5 hover:border-gold/40 transition-colors bg-surface-black"
              >
                <h3 className="text-white font-semibold text-base mb-1">{s.title}</h3>
                <p className="heading-serif text-gold text-2xl mb-2">{s.price}</p>
                <p className="text-neutral-500 text-xs leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 lg:py-20 bg-surface-black">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/5 to-transparent p-8 lg:p-12 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-5">
              <ShieldCheck size={28} className="text-gold" />
            </div>
            <span className="label-caps text-gold text-[11px]">The Leo Luxe Guarantee</span>
            <h2 className="heading-serif text-3xl lg:text-4xl text-white mt-2 mb-4">
              100% satisfaction — or we re-clean free
            </h2>
            <p className="text-neutral-300 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
              If anything is missed or you're not happy, just tell us within 48 hours. We come back and sort it at no extra cost. No arguments, no paperwork — that's the deal.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-20 bg-surface-dark border-y border-surface-border/40">
        <div
          ref={reviewsRef}
          className={`max-w-6xl mx-auto px-5 lg:px-10 transition-all duration-700 ${
            reviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="text-center mb-12">
            <span className="label-caps text-gold text-[11px]">Real customers</span>
            <h2 className="heading-serif text-3xl lg:text-4xl text-white mt-2 mb-3">
              5.0 on Google — and we've earned every star
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-xl border border-surface-border/40 p-6 bg-surface-black">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#C8A94E" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-neutral-200 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-surface-border/30">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold heading-serif text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium leading-tight">{r.name}</p>
                    <p className="text-neutral-500 text-xs">{r.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="py-12 bg-surface-black border-b border-surface-border/40">
        <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <MapPin size={14} className="text-gold" />
            <span className="label-caps text-gold text-[11px]">Areas we cover</span>
          </div>
          <p className="text-neutral-300 text-sm lg:text-base leading-relaxed max-w-3xl mx-auto">
            Slough · Windsor · Langley · Maidenhead · Eton · Burnham · Ascot · Bracknell · Hayes · Uxbridge · Ealing · Hounslow · Southall · Greenford · Northolt · West Drayton
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-surface-dark">
        <div
          ref={faqRef}
          className={`max-w-3xl mx-auto px-5 lg:px-10 transition-all duration-700 ${
            faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="text-center mb-10">
            <span className="label-caps text-gold text-[11px]">Common questions</span>
            <h2 className="heading-serif text-3xl lg:text-4xl text-white mt-2">
              Before you book
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-surface-border/40 bg-surface-black p-5 open:border-gold/40 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none text-white font-medium text-sm lg:text-base">
                  {f.q}
                  <span className="ml-4 text-gold text-xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-neutral-400 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 lg:py-28 bg-surface-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Ready for a clean, <span className="text-gold-gradient">done properly?</span>
          </h2>
          <p className="text-neutral-300 text-base lg:text-lg mb-8 max-w-xl mx-auto">
            Get your free quote in 2 hours. No obligation, no hidden fees, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="btn-gold glow-pulse label-caps px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              Get My Free Quote <ArrowRight size={14} />
            </button>
            <a
              href="tel:01753257118"
              className="btn-outline-gold label-caps px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              <Phone size={16} /> 01753 257118
            </a>
          </div>
        </div>
      </section>

      {/* Minimal footer — no nav links to preserve conversion focus */}
      <footer className="bg-surface-black border-t border-surface-border/40 py-8">
        <div className="max-w-6xl mx-auto px-5 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Leo Luxe Clean" width="120" height="36" className="h-8 w-auto opacity-80" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-neutral-500">
            <span>© {new Date().getFullYear()} Leo Luxe Clean</span>
            <span>·</span>
            <span>Slough, Berkshire</span>
            <span>·</span>
            <a href="tel:01753257118" className="hover:text-gold transition-colors">01753 257118</a>
            <span>·</span>
            <a href="mailto:info@leoluxeclean.co.uk" className="hover:text-gold transition-colors">info@leoluxeclean.co.uk</a>
          </div>
        </div>
      </footer>

      {/* Sticky mobile conversion bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-surface-black/95 backdrop-blur border-t border-gold/30 safe-bottom">
        <div className="flex gap-2 p-3">
          <a
            href="tel:01753257118"
            className="btn-outline-gold label-caps flex-1 py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <Phone size={14} /> Call
          </a>
          <button
            onClick={scrollToForm}
            className="btn-gold label-caps flex-[2] py-3 rounded-lg flex items-center justify-center gap-2"
          >
            Free Quote <ArrowRight size={14} />
          </button>
        </div>
      </div>
      {/* Spacer so mobile sticky bar doesn't overlap final content */}
      <div className="h-20 lg:hidden" aria-hidden="true" />
    </div>
  );
};

export default GetQuotePage;
