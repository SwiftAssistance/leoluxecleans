import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import {
  Phone, Mail, ShieldCheck, CheckCircle2, Star,
  Leaf, Shield, Home, Building2, Sparkles, Key,
  ArrowRight, MapPin, Zap, Clock, ChevronDown, Users, BadgeCheck,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// ── static data ───────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: Home, name: 'Home Cleaning', price: 'From £60', benefit: 'Regular or one-off — always held to the same high standard' },
  { icon: Sparkles, name: 'Deep Cleaning', price: 'From £120', benefit: 'Inside ovens, behind furniture, every neglected corner covered' },
  { icon: Key, name: 'End of Tenancy', price: 'From £150', benefit: 'Landlord-approved standard — maximise your deposit return' },
  { icon: Building2, name: 'Office Cleaning', price: 'POA', benefit: 'Flexible scheduling, evenings and weekends available' },
  { icon: Zap, name: 'After Event Cleaning', price: 'From £80', benefit: 'Same-day and next-day availability across Berkshire' },
];

const WHY_US = [
  { icon: ShieldCheck, title: 'DBS-Checked Team', desc: 'Every cleaner is background-checked and identity verified before entering your home.' },
  { icon: Shield, title: 'Fully Insured', desc: 'Public liability insurance as standard — complete peace of mind, every visit.' },
  { icon: CheckCircle2, title: 'No Lock-In Contracts', desc: 'Book once or regularly. No hidden fees, no tie-ins. Cancel any time.' },
  { icon: Star, title: '100% Satisfaction Guarantee', desc: "Not happy? We return and re-clean for free until it's right." },
];

const STEPS = [
  { n: '01', title: 'Request a Free Quote', desc: 'Fill in the form or call us. We reply within 1 hour.' },
  { n: '02', title: 'We Confirm & Schedule', desc: 'Choose your date and time — same-week slots available.' },
  { n: '03', title: 'Sit Back & Relax', desc: 'Our team arrives, cleans to our high standard, and you come home to spotless.' },
];

const REVIEWS = [
  { name: 'Sarah M.', location: 'Slough', rating: 5, text: "Amazing service — my flat was spotless for the end of tenancy inspection. Booked with 2 days' notice. Will definitely use again." },
  { name: 'James T.', location: 'Windsor', rating: 5, text: 'Punctual, professional, and brilliant deep clean on our kitchen and bathrooms. Highly recommend to anyone in Windsor.' },
  { name: 'Priya K.', location: 'Maidenhead', rating: 5, text: "We use Leo Luxe for our weekly home clean. Reliable, thorough, and always leave the place looking incredible. Couldn't be happier." },
  { name: 'David R.', location: 'Ealing', rating: 5, text: "Best cleaning company I've used in West London. Turned up on time, worked incredibly hard, and the place was immaculate. Booked them again already." },
];

const FAQS = [
  {
    q: 'How quickly can you book me in?',
    a: 'We offer same-week bookings across Slough, Berkshire, and West London. For urgent cleans, call us on 01753 257118 and we\'ll do our best to accommodate you.',
  },
  {
    q: 'Are your cleaners vetted and insured?',
    a: 'Yes — every member of our team is DBS (criminal record) checked, identity verified, and covered by full public liability insurance. You\'ll never have to worry.',
  },
  {
    q: 'Do I need to be home during the clean?',
    a: 'No. Many of our clients give us a key or door code. We\'re a trusted local team — your security is taken seriously.',
  },
  {
    q: 'What\'s included in a standard clean?',
    a: 'All rooms: vacuuming, mopping, dusting, sanitising bathrooms and kitchen surfaces, and tidying throughout. Deep cleans go further — inside appliances, behind furniture, skirting boards, and more.',
  },
  {
    q: 'Is there a minimum contract?',
    a: 'None at all. Whether it\'s a one-off clean or a weekly regular, there\'s no tie-in and no cancellation fee.',
  },
];

const AREAS = [
  'Slough', 'Windsor', 'Langley', 'Maidenhead', 'Eton', 'Burnham',
  'Ascot', 'Bracknell', 'Hayes', 'Southall', 'Uxbridge', 'Ealing',
  'Greenford', 'Northolt', 'West Drayton', 'Hounslow',
];

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: 'DBS Checked' },
  { icon: Shield, label: 'Fully Insured' },
  { icon: Star, label: '5-Star Rated' },
  { icon: Users, label: '200+ Customers' },
  { icon: Leaf, label: 'Eco-Friendly' },
  { icon: Clock, label: 'Reply in 1 Hour' },
];

// ── sub-components ────────────────────────────────────────────────────────────

function StarRow({ count = 5, size = 13 }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${count} stars`}>
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={size} fill="#C8A94E" strokeWidth={0} />
      ))}
    </span>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-surface-border/40 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-white font-medium text-sm leading-snug group-hover:text-gold transition-colors">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`text-gold flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
        aria-hidden={!open}
      >
        <p className="text-neutral-400 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

// ── main component ────────────────────────────────────────────────────────────

const LandingPage = () => {
  const [searchParams] = useSearchParams();

  const areaName = (() => {
    const raw = searchParams.get('area');
    if (!raw) return 'Slough & Berkshire';
    try {
      return decodeURIComponent(raw).replace(/\b\w/g, (c) => c.toUpperCase());
    } catch {
      return 'Slough & Berkshire';
    }
  })();

  const utmSource = searchParams.get('utm_source') || '';
  const utmCampaign = searchParams.get('utm_campaign') || '';
  const utmTerm = searchParams.get('utm_term') || '';

  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', service: searchParams.get('service') || '', email: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const formRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);
      setShowMobileCta(window.scrollY > 220);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      // if (typeof gtag !== 'undefined') {
      //   gtag('event', 'conversion', { send_to: 'AW-XXXXXXXX/XXXXXXXX' });
      // }
    }, 800);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const [stepsRef, stepsVisible] = useScrollReveal({ threshold: 0.05 });
  const [servicesRef, servicesVisible] = useScrollReveal({ threshold: 0.05 });
  const [whyRef, whyVisible] = useScrollReveal({ threshold: 0.05 });
  const [reviewsRef, reviewsVisible] = useScrollReveal({ threshold: 0.05 });
  const [faqRef, faqVisible] = useScrollReveal({ threshold: 0.05 });
  const [areasRef, areasVisible] = useScrollReveal({ threshold: 0.05 });

  const inputClass =
    'w-full bg-surface-black border border-surface-border rounded-lg px-4 py-3 text-white text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-neutral-600';

  const QuoteForm = ({ id, compact = false }) => (
    <div
      id={id}
      ref={id === 'form' ? formRef : undefined}
      className="rounded-2xl bg-surface-card border border-surface-border/60 p-6 lg:p-8 shadow-gold-sm"
    >
      {formSubmitted ? (
        <div className="flex flex-col items-center justify-center text-center py-10">
          <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5">
            <CheckCircle2 size={28} className="text-gold" aria-hidden="true" />
          </div>
          <h3 className="heading-serif text-2xl text-white mb-2">
            Thanks{formData.name ? ` ${formData.name.split(' ')[0]}` : ''}!
          </h3>
          <p className="text-neutral-400 text-sm mb-4 max-w-xs">
            We'll call you back within the hour. Or reach us right now on{' '}
            <a href="tel:01753257118" className="text-gold hover:text-gold-light transition-colors font-medium">
              01753 257118
            </a>
            .
          </p>
          <div className="flex gap-1 mt-2">
            <StarRow count={5} size={16} />
          </div>
          <p className="text-neutral-500 text-xs mt-2">Trusted by 200+ customers across Berkshire</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {/* Urgency eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-[10px] font-semibold tracking-wide uppercase">Slots available this week</span>
            </span>
          </div>

          <h2 className="heading-serif text-2xl text-white mb-1 leading-tight">
            Get Your Free Quote
          </h2>
          <p className="text-neutral-400 text-xs mb-5">We reply within 60 minutes — no obligation.</p>

          <div className="space-y-3 mb-4">
            <div>
              <label htmlFor={`${id}-name`} className="label-caps text-neutral-400 text-[10px] block mb-1.5">
                Your Name *
              </label>
              <input
                id={`${id}-name`}
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass}
                placeholder="e.g. Sarah Mitchell"
              />
            </div>

            <div>
              <label htmlFor={`${id}-phone`} className="label-caps text-neutral-400 text-[10px] block mb-1.5">
                Phone Number * <span className="text-gold normal-case font-normal">(we'll call you back fast)</span>
              </label>
              <input
                id={`${id}-phone`}
                type="tel"
                required
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={inputClass}
                placeholder="e.g. 07700 000 000"
              />
            </div>

            <div>
              <label htmlFor={`${id}-service`} className="label-caps text-neutral-400 text-[10px] block mb-1.5">
                Service Needed *
              </label>
              <select
                id={`${id}-service`}
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className={`${inputClass} appearance-none`}
              >
                <option value="">Choose a service…</option>
                <option value="home-cleaning">Home Cleaning — from £60</option>
                <option value="deep-clean">Deep Cleaning — from £120</option>
                <option value="end-of-tenancy">End of Tenancy — from £150</option>
                <option value="office-cleaning">Office Cleaning — POA</option>
                <option value="after-event">After Event — from £80</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            {!compact && (
              <div>
                <label htmlFor={`${id}-email`} className="label-caps text-neutral-400 text-[10px] block mb-1.5">
                  Email <span className="normal-case font-normal">(optional)</span>
                </label>
                <input
                  id={`${id}-email`}
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  placeholder="you@email.com"
                />
              </div>
            )}
          </div>

          {/* Hidden UTM / tracking fields */}
          <input type="hidden" name="utm_source" value={utmSource} />
          <input type="hidden" name="utm_campaign" value={utmCampaign} />
          <input type="hidden" name="utm_term" value={utmTerm} />
          <input type="hidden" name="area" value={areaName} />

          <button
            type="submit"
            disabled={submitting}
            className="w-full btn-gold label-caps py-4 rounded-lg flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            {submitting ? (
              <>
                <div className="w-4 h-4 border-2 border-surface-black/30 border-t-surface-black rounded-full animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Claim My Free Quote <ArrowRight size={14} />
              </>
            )}
          </button>

          {/* Trust micro-copy under button */}
          <div className="mt-4 flex flex-col gap-1.5">
            <div className="flex items-center justify-center gap-4 text-[10px] text-neutral-500">
              <span className="flex items-center gap-1">
                <ShieldCheck size={10} className="text-gold" /> No obligation
              </span>
              <span className="flex items-center gap-1">
                <Clock size={10} className="text-gold" /> Reply in 60 mins
              </span>
              <span className="flex items-center gap-1">
                <BadgeCheck size={10} className="text-gold" /> DBS checked team
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 mt-1">
              <StarRow count={5} size={10} />
              <span className="text-[10px] text-neutral-500">Rated 5.0 by 200+ customers</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Professional Cleaners in {areaName} | Leo Luxe Clean</title>
        <meta
          name="description"
          content={`DBS-checked, fully insured cleaners in ${areaName}. Home cleaning from £60. Same-week bookings. Free quote — reply in 1 hour. Call 01753 257118.`}
        />
        <link rel="canonical" href="https://leoluxeclean.co.uk/landing" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-surface-black text-white font-sans overflow-x-hidden">

        {/* ── STICKY HEADER ────────────────────────────────────────────────── */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? 'bg-surface-black border-b border-surface-border/50 py-3'
              : 'bg-surface-black/95 backdrop-blur-sm py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
            <a href="https://leoluxeclean.co.uk" aria-label="Leo Luxe Clean — back to main site">
              <img src="/logo.svg" alt="Leo Luxe Clean" width={160} height={50} className="h-10 w-auto" />
            </a>
            <div className="flex items-center gap-3">
              <a
                href="tel:01753257118"
                className="hidden sm:flex items-center gap-1.5 text-neutral-300 hover:text-gold transition-colors text-sm font-medium"
                aria-label="Call 01753 257118"
              >
                <Phone size={13} className="text-gold" /> 01753 257118
              </a>
              <a
                href="#form"
                className="btn-gold label-caps px-4 sm:px-6 py-2.5 rounded-lg flex items-center gap-1.5 text-xs"
                aria-label="Get a free cleaning quote"
              >
                <span className="hidden sm:inline">Claim </span>Free Quote
              </a>
            </div>
          </div>
        </header>

        {/* ── HERO + FORM SPLIT ─────────────────────────────────────────────── */}
        <section className="relative pt-20 min-h-screen overflow-hidden" aria-labelledby="hero-heading">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60 lg:to-black/40" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-5rem)]">

            {/* Left: copy */}
            <div>
              {/* Urgency badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-emerald-400 text-xs font-semibold">Limited slots left this week in {areaName}</span>
              </div>

              <h1
                id="hero-heading"
                className="heading-serif text-[clamp(2.2rem,5vw,4.2rem)] text-white leading-[1.06] mb-5"
              >
                Your Home,{' '}
                <span className="text-gold-gradient">Spotlessly Clean</span>
                <br />— Guaranteed.
              </h1>

              <p className="text-neutral-200 text-lg leading-relaxed font-light mb-3 max-w-md">
                Trusted by <strong className="text-white font-semibold">200+ homeowners</strong> across {areaName}.
                DBS-checked, fully insured, and obsessed with getting it right.
              </p>

              {/* Mini hero review */}
              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-8 max-w-md">
                <StarRow count={5} size={12} />
                <p className="text-neutral-300 text-xs leading-relaxed">
                  <span className="text-white font-medium">"Amazing — booked with 2 days' notice, flat was spotless."</span>
                  {' '}— Sarah M., Slough
                </p>
              </div>

              {/* Benefit bullets */}
              <ul className="space-y-3 mb-8">
                {[
                  'Prices from £60 — transparent, no hidden fees',
                  'Same-week & weekend slots available',
                  '100% satisfaction guarantee — we re-clean free if needed',
                  'No long-term contracts — cancel any time',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral-200 text-sm">
                    <CheckCircle2 size={16} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Phone + trust row */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm mb-8">
                <a
                  href="tel:01753257118"
                  className="flex items-center gap-2 text-white font-semibold hover:text-gold transition-colors text-base"
                  aria-label="Call 01753 257118"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                    <Phone size={14} className="text-gold" />
                  </div>
                  01753 257118
                </a>
                <span className="text-neutral-600">·</span>
                <span className="flex items-center gap-1.5 text-neutral-400">
                  <StarRow count={5} size={11} />
                  <span className="text-white font-medium ml-0.5">5.0</span>
                  <span className="text-neutral-400">Google</span>
                </span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-400 text-xs">DBS checked &amp; insured</span>
              </div>

              {/* Mobile: dual CTA */}
              <div className="flex gap-3 lg:hidden">
                <button
                  onClick={scrollToForm}
                  className="btn-gold glow-pulse label-caps flex-1 py-4 rounded-xl flex items-center justify-center gap-2 text-xs"
                >
                  Claim Free Quote <ArrowRight size={13} />
                </button>
                <a
                  href="tel:01753257118"
                  className="btn-outline-gold label-caps px-5 py-4 rounded-xl flex items-center justify-center gap-2 text-xs"
                  aria-label="Call now"
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="hidden lg:block">
              <QuoteForm id="hero-form" compact />
              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="h-px flex-1 bg-surface-border/30" />
                <span className="text-neutral-500 text-xs">or call us directly</span>
                <div className="h-px flex-1 bg-surface-border/30" />
              </div>
              <a
                href="tel:01753257118"
                className="mt-3 flex items-center justify-center gap-2 text-white font-semibold text-lg hover:text-gold transition-colors"
              >
                <Phone size={18} className="text-gold" /> 01753 257118
              </a>
              <p className="text-center text-neutral-500 text-xs mt-2 flex items-center justify-center gap-1.5">
                <Clock size={11} /> Mon–Sat 08:00–19:00 · We answer fast
              </p>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
        <div className="bg-surface-dark border-y border-surface-border/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
            <ul className="flex flex-wrap justify-center gap-x-7 gap-y-3" aria-label="Key credentials">
              {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-neutral-400">
                  <Icon size={14} className="text-gold flex-shrink-0" aria-hidden="true" />
                  <span className="label-caps text-[10px]">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── URGENCY STRIP ────────────────────────────────────────────────── */}
        <div className="bg-gold/10 border-b border-gold/20 py-3">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-gold flex-shrink-0" />
              <span className="text-white text-sm font-medium">
                Booking fast in {areaName} — secure your slot before it's gone
              </span>
            </div>
            <a
              href="#form"
              className="sm:ml-4 label-caps text-gold text-xs border border-gold/50 hover:bg-gold/10 rounded-full px-4 py-1.5 transition-colors whitespace-nowrap"
            >
              Check Availability →
            </a>
          </div>
        </div>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-surface-black" aria-labelledby="steps-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div
              ref={stepsRef}
              className={`transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="text-center mb-12">
                <p className="label-caps text-gold mb-3">Simple Process</p>
                <h2 id="steps-heading" className="heading-serif text-4xl lg:text-5xl text-white mb-4">
                  Booked & Cleaned in 3 Steps
                </h2>
                <div className="divider-gold mx-auto mt-5" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-gold/20" aria-hidden="true" />
                {STEPS.map(({ n, title, desc }) => (
                  <div key={n} className="flex flex-col items-center text-center relative">
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-5 relative z-10">
                      <span className="heading-serif text-gold text-xl">{n}</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">{title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#form"
                  className="btn-gold label-caps px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2 group"
                >
                  Claim My Free Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:01753257118"
                  className="btn-outline-gold label-caps px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2"
                >
                  <Phone size={14} /> Call 01753 257118
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────────────────── */}
        <section id="services" className="py-16 lg:py-24 bg-surface-dark" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div
              ref={servicesRef}
              className={`transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="text-center mb-12">
                <p className="label-caps text-gold mb-3">What We Offer</p>
                <h2 id="services-heading" className="heading-serif text-4xl lg:text-5xl text-white mb-4">
                  Our Cleaning Services
                </h2>
                <div className="divider-gold mx-auto mt-5" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {SERVICES.map(({ icon: Icon, name, price, benefit }) => (
                  <a
                    key={name}
                    href="#form"
                    className="rounded-2xl bg-surface-card border border-surface-border/50 p-7 hover:border-gold/40 transition-all duration-300 hover:shadow-gold-sm group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/20 transition-colors">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-white text-base mb-1">{name}</h3>
                    <p className="text-gold label-caps text-[10px] mb-3">{price}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{benefit}</p>
                  </a>
                ))}

                <div className="rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/30 p-7 flex flex-col justify-center items-start">
                  <p className="label-caps text-gold text-[10px] mb-3">Not Sure?</p>
                  <p className="text-white font-medium mb-5 leading-snug">
                    Tell us what you need — we'll recommend the right clean.
                  </p>
                  <a href="#form" className="btn-gold label-caps px-5 py-2.5 rounded-lg text-xs flex items-center gap-2">
                    Get a Quote <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY US ───────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-surface-black" aria-labelledby="why-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div
              ref={whyRef}
              className={`transition-all duration-700 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="text-center mb-12">
                <p className="label-caps text-gold mb-3">Why Choose Us</p>
                <h2 id="why-heading" className="heading-serif text-4xl lg:text-5xl text-white mb-4">
                  The Leo Luxe Difference
                </h2>
                <div className="divider-gold mx-auto mt-5" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                {WHY_US.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-5 p-6 rounded-2xl bg-surface-card border border-surface-border/50 hover:border-gold/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{title}</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social proof stats bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {[
                  { value: '200+', label: 'Customers Served' },
                  { value: '5.0', label: 'Google Rating' },
                  { value: '100%', label: 'Satisfaction Rate' },
                  { value: '1hr', label: 'Average Reply Time' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center bg-surface-card border border-surface-border/50 rounded-2xl py-5 px-4">
                    <p className="heading-serif text-3xl text-gold mb-1">{value}</p>
                    <p className="label-caps text-neutral-400 text-[10px]">{label}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="inline-flex flex-col items-center gap-3 bg-surface-card rounded-2xl border border-gold/25 px-10 py-7">
                  <StarRow count={5} size={22} />
                  <p className="heading-serif text-3xl text-white">5.0 on Google</p>
                  <p className="label-caps text-neutral-400 text-[10px]">Rated by homeowners across {areaName}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
        <section id="reviews" className="py-16 lg:py-24 bg-surface-dark" aria-labelledby="reviews-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div
              ref={reviewsRef}
              className={`transition-all duration-700 ${reviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="text-center mb-12">
                <p className="label-caps text-gold mb-3">Real Customers, Real Results</p>
                <h2 id="reviews-heading" className="heading-serif text-4xl lg:text-5xl text-white mb-2">
                  What Our Customers Say
                </h2>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <StarRow count={5} size={16} />
                  <span className="text-white font-semibold">5.0</span>
                  <span className="text-neutral-400 text-sm">· 200+ verified reviews</span>
                </div>
                <div className="divider-gold mx-auto mt-5" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {REVIEWS.map(({ name, location, rating, text }) => (
                  <article
                    key={name}
                    className="rounded-2xl bg-surface-card border border-surface-border/50 p-7 hover:border-gold/30 transition-colors flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <StarRow count={rating} size={14} />
                      <span className="label-caps text-[9px] text-neutral-500 bg-surface-dark px-2 py-1 rounded-full border border-surface-border/40">
                        Google
                      </span>
                    </div>
                    <blockquote className="text-neutral-300 text-sm leading-relaxed mb-6 flex-1">
                      &ldquo;{text}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3 pt-4 border-t border-surface-border/50">
                      <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-gold text-sm font-semibold" aria-hidden="true">
                          {name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{name}</p>
                        <p className="text-neutral-500 text-xs flex items-center gap-1">
                          <MapPin size={10} aria-hidden="true" /> {location}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-8">
                <a
                  href="#form"
                  className="btn-gold label-caps px-8 py-4 rounded-lg inline-flex items-center gap-2 group"
                >
                  Join 200+ Happy Customers <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── INLINE CTA BAND ──────────────────────────────────────────────── */}
        <div className="bg-surface-black border-y border-gold/20 py-12 lg:py-16" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1400 50%, #0a0a0a 100%)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap size={14} className="text-gold" />
              <span className="label-caps text-gold text-xs">Limited availability — {areaName}</span>
            </div>
            <h2 className="heading-serif text-3xl lg:text-5xl text-white mb-3">
              Ready for a Spotless Home?
            </h2>
            <p className="text-neutral-400 mb-8 text-base">
              Slots are filling fast this week. Get your free quote now — we reply in under 60 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#form"
                className="btn-gold label-caps px-8 py-4 rounded-lg flex items-center justify-center gap-2 group text-sm"
              >
                Claim My Free Quote{' '}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:01753257118"
                className="btn-outline-gold label-caps px-8 py-4 rounded-lg flex items-center justify-center gap-2 text-sm"
              >
                <Phone size={15} /> Call 01753 257118
              </a>
            </div>
            <p className="text-neutral-600 text-xs mt-5">No contracts · No hidden fees · 100% satisfaction guarantee</p>
          </div>
        </div>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-surface-dark" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div
              ref={faqRef}
              className={`transition-all duration-700 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="text-center mb-10">
                <p className="label-caps text-gold mb-3">Got Questions?</p>
                <h2 id="faq-heading" className="heading-serif text-4xl lg:text-5xl text-white mb-4">
                  Frequently Asked
                </h2>
                <div className="divider-gold mx-auto mt-5" />
              </div>

              <div className="rounded-2xl bg-surface-card border border-surface-border/50 px-7 py-2">
                {FAQS.map((faq) => (
                  <FaqItem key={faq.q} {...faq} />
                ))}
              </div>

              <p className="text-center text-neutral-500 text-sm mt-8">
                Still have a question?{' '}
                <a href="tel:01753257118" className="text-gold hover:text-gold-light transition-colors">
                  Call us on 01753 257118
                </a>{' '}
                — we're happy to chat.
              </p>
            </div>
          </div>
        </section>

        {/* ── AREAS ────────────────────────────────────────────────────────── */}
        <section id="areas" className="py-16 lg:py-24 bg-surface-black" aria-labelledby="areas-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div
              ref={areasRef}
              className={`transition-all duration-700 ${areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="text-center mb-10">
                <p className="label-caps text-gold mb-3">Coverage Area</p>
                <h2 id="areas-heading" className="heading-serif text-4xl lg:text-5xl text-white mb-4">
                  We Cover Slough, Windsor<br className="hidden sm:block" /> &amp; Across West London
                </h2>
                <div className="divider-gold mx-auto mt-5" />
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {AREAS.map((area) => (
                  <span
                    key={area}
                    className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                      area === areaName
                        ? 'bg-gold/20 border-gold/60 text-gold font-medium'
                        : 'bg-surface-card border-surface-border/60 text-neutral-400 hover:border-gold/30 hover:text-white'
                    }`}
                  >
                    {area}
                  </span>
                ))}
              </div>

              <p className="text-center text-neutral-500 text-sm mt-8">
                Not sure if we cover your area?{' '}
                <a href="tel:01753257118" className="text-gold hover:text-gold-light transition-colors">
                  Give us a call
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── LEAD CAPTURE FORM ────────────────────────────────────────────── */}
        <section id="form" className="py-16 lg:py-24 bg-surface-dark" aria-labelledby="form-heading">
          <div className="max-w-xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-5">
                <Zap size={12} className="text-gold" />
                <span className="label-caps text-gold text-xs">Slots filling fast — secure yours now</span>
              </div>
              <h2 id="form-heading" className="heading-serif text-4xl lg:text-5xl text-white mb-3">
                Book Your Clean Today
              </h2>
              <p className="text-neutral-400 text-sm">
                Free quote · No obligation · We reply in under 60 minutes
              </p>
              <div className="divider-gold mx-auto mt-5" />
            </div>

            <QuoteForm id="form" />

            <div className="mt-5 grid grid-cols-2 gap-4">
              <a
                href="tel:01753257118"
                className="flex items-center gap-3 p-4 rounded-xl bg-surface-card border border-surface-border/50 hover:border-gold/30 transition-colors group"
                aria-label="Call 01753 257118"
              >
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <Phone size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="label-caps text-neutral-400 text-[10px] mb-0.5">Call direct</p>
                  <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">01753 257118</p>
                </div>
              </a>
              <a
                href="mailto:info@leoluxeclean.co.uk"
                className="flex items-center gap-3 p-4 rounded-xl bg-surface-card border border-surface-border/50 hover:border-gold/30 transition-colors group"
                aria-label="Email info@leoluxeclean.co.uk"
              >
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <Mail size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="label-caps text-neutral-400 text-[10px] mb-0.5">Email us</p>
                  <p className="text-white text-sm font-medium group-hover:text-gold transition-colors truncate">
                    info@leoluxeclean.co.uk
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <footer className="bg-surface-black border-t border-surface-border/30 py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
              <p>© 2025 Leo Luxe Clean | Slough, Berkshire</p>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                <a href="tel:01753257118" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <Phone size={12} /> 01753 257118
                </a>
                <a href="mailto:info@leoluxeclean.co.uk" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <Mail size={12} /> info@leoluxeclean.co.uk
                </a>
                <a href="https://leoluxeclean.co.uk" className="hover:text-gold transition-colors">
                  Back to main site →
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* ── MOBILE STICKY CTA ────────────────────────────────────────────── */}
        <div
          className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
            showMobileCta ? 'translate-y-0' : 'translate-y-full'
          }`}
          aria-hidden={!showMobileCta}
        >
          <div className="bg-surface-dark border-t border-gold/20 px-4 py-3 flex gap-3 safe-area-inset-bottom">
            <a
              href="#form"
              className="btn-gold label-caps flex-1 py-4 rounded-xl flex items-center justify-center gap-2 text-xs"
            >
              Claim Free Quote <ArrowRight size={13} />
            </a>
            <a
              href="tel:01753257118"
              className="btn-outline-gold label-caps px-5 py-4 rounded-xl flex items-center justify-center gap-2 text-xs whitespace-nowrap"
              aria-label="Call now"
            >
              <Phone size={14} /> Call
            </a>
          </div>
        </div>

      </div>
    </>
  );
};

export default LandingPage;
