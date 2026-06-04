import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import {
  Phone, Mail, ShieldCheck, CheckCircle2, Star,
  Leaf, Shield, Home, Building2, Sparkles, Key,
  ArrowRight, MapPin, Zap,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// ── static data ───────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Home,
    name: 'Home Cleaning',
    price: 'From £60',
    benefit: 'Regular or one-off — always held to the same high standard',
  },
  {
    icon: Sparkles,
    name: 'Deep Cleaning',
    price: 'From £120',
    benefit: 'Inside ovens, behind furniture, every neglected corner covered',
  },
  {
    icon: Key,
    name: 'End of Tenancy',
    price: 'From £150',
    benefit: 'Landlord-approved standard — maximise your deposit return',
  },
  {
    icon: Building2,
    name: 'Office Cleaning',
    price: 'POA',
    benefit: 'Flexible scheduling, evenings and weekends available',
  },
  {
    icon: Zap,
    name: 'After Event Cleaning',
    price: 'From £80',
    benefit: 'Same-day and next-day availability across Berkshire',
  },
];

const WHY_US = [
  {
    icon: ShieldCheck,
    title: 'Background-Checked Team',
    desc: 'Every cleaner is DBS checked and identity verified before entering your home.',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    desc: 'Public liability insurance as standard — complete peace of mind, every visit.',
  },
  {
    icon: CheckCircle2,
    title: 'Flexible, No-Contract Bookings',
    desc: 'Book once or regularly. No lock-in, no hidden fees. Cancel any time.',
  },
  {
    icon: Star,
    title: '100% Satisfaction Guarantee',
    desc: "Not happy? We return for free and re-clean until it's right. Every time.",
  },
];

// Replace with real Google reviews when available
const REVIEWS = [
  {
    name: 'Sarah M.',
    location: 'Slough',
    rating: 5,
    text: "Amazing service — my flat was spotless for the end of tenancy inspection. Booked with 2 days' notice. Will definitely use again.",
  },
  {
    name: 'James T.',
    location: 'Windsor',
    rating: 5,
    text: 'The team were punctual, professional, and did a brilliant deep clean on our kitchen and bathrooms. Highly recommend to anyone in Windsor.',
  },
  {
    name: 'Priya K.',
    location: 'Maidenhead',
    rating: 5,
    text: "We use Leo Luxe for our weekly home clean. Reliable, thorough, and always leave the place looking incredible. Couldn't be happier.",
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
  { icon: CheckCircle2, label: 'No Contracts' },
  { icon: Leaf, label: 'Eco-Friendly' },
];

// ── component ─────────────────────────────────────────────────────────────────

const LandingPage = () => {
  const [searchParams] = useSearchParams();

  // ?area=Windsor → "Windsor"; ?area=west+drayton → "West Drayton"
  const areaName = (() => {
    const raw = searchParams.get('area');
    if (!raw) return 'Slough & Berkshire';
    try {
      return decodeURIComponent(raw).replace(/\b\w/g, (c) => c.toUpperCase());
    } catch {
      return 'Slough & Berkshire';
    }
  })();

  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', date: '', message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      // TODO: Fire Google Ads conversion event here
      // gtag('event', 'conversion', { 'send_to': 'AW-XXXXXXXXX/XXXXXXXXX' });
    }, 800);
  };

  const [servicesRef, servicesVisible] = useScrollReveal({ threshold: 0.05 });
  const [whyRef, whyVisible] = useScrollReveal({ threshold: 0.08 });
  const [reviewsRef, reviewsVisible] = useScrollReveal({ threshold: 0.05 });
  const [areasRef, areasVisible] = useScrollReveal({ threshold: 0.1 });
  const [formRef, formVisible] = useScrollReveal({ threshold: 0.05 });

  const inputClass =
    'w-full bg-surface-black border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-neutral-600';

  return (
    <>
      <Helmet>
        <title>Home Cleaners in Slough &amp; Berkshire | Leo Luxe Clean</title>
        <meta
          name="description"
          content="Professional, DBS-checked cleaners in Slough, Windsor &amp; Berkshire. Home cleaning from £60. Same-week bookings. Call 01753 257118."
        />
        <link rel="canonical" href="https://leoluxeclean.co.uk/landing" />
      </Helmet>

      <div className="min-h-screen bg-surface-black text-white font-sans overflow-x-hidden">

        {/* ── 1. STICKY HEADER ───────────────────────────────────────────────── */}
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
            <a
              href="tel:01753257118"
              className="btn-gold label-caps px-4 sm:px-6 py-2.5 rounded-lg flex items-center gap-2"
              aria-label="Call Leo Luxe Clean on 01753 257118"
            >
              <Phone size={13} />
              <span className="hidden sm:inline">Call Now: </span>01753 257118
            </a>
          </div>
        </header>

        {/* ── 2. HERO ────────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen overflow-hidden" aria-labelledby="hero-heading">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/78 to-black/45" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-end min-h-screen pb-28 lg:pb-36 pt-36">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-neutral-400 text-sm">
                Taking bookings this week — same-week availability
              </span>
            </div>

            <h1
              id="hero-heading"
              className="heading-serif text-[clamp(2.5rem,7vw,5.75rem)] text-white leading-[1.05] mb-6 max-w-4xl"
            >
              Professional Cleaners in{' '}
              <span className="text-gold-gradient">{areaName}</span>
            </h1>

            <p className="text-neutral-300 text-lg max-w-lg leading-relaxed font-light mb-10">
              DBS-checked, fully insured. From £60. Same-week availability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#form"
                className="btn-gold glow-pulse label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2 group"
                aria-label="Get a free cleaning quote"
              >
                Get a Free Quote{' '}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:01753257118"
                className="btn-outline-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2"
                aria-label="Call us at 01753 257118"
              >
                <Phone size={15} /> Call 01753 257118
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <span className="flex items-center gap-1.5 text-neutral-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#C8A94E" strokeWidth={0} />
                ))}
                <span className="text-white font-medium ml-1">5.0</span> on Google
              </span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400">DBS checked &amp; fully insured</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400">No contracts</span>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ──────────────────────────────────────────────────────── */}
        <div className="bg-surface-dark border-y border-surface-border/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3" aria-label="Key credentials">
              {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-neutral-400">
                  <Icon size={15} className="text-gold flex-shrink-0" aria-hidden="true" />
                  <span className="label-caps text-[10px]">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── 3. SERVICES ────────────────────────────────────────────────────── */}
        <section id="services" className="py-20 lg:py-28 bg-surface-black" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div
              ref={servicesRef}
              className={`transition-all duration-700 ${
                servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
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
                  <div
                    key={name}
                    className="rounded-2xl bg-surface-card border border-surface-border/50 p-7 hover:border-gold/40 transition-all duration-300 hover:shadow-gold-sm"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-white text-base mb-1">{name}</h3>
                    <p className="text-gold label-caps text-[10px] mb-3">{price}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}

                {/* Quote prompt card */}
                <div className="rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/30 p-7 flex flex-col justify-center items-start">
                  <p className="label-caps text-gold text-[10px] mb-3">Not Sure?</p>
                  <p className="text-white font-medium mb-5 leading-snug">
                    Tell us what you need — we'll recommend the right clean.
                  </p>
                  <a
                    href="#form"
                    className="btn-gold label-caps px-5 py-2.5 rounded-lg text-xs flex items-center gap-2"
                  >
                    Get a Quote <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. WHY US ──────────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-surface-dark" aria-labelledby="why-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div
              ref={whyRef}
              className={`transition-all duration-700 ${
                whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-12">
                <p className="label-caps text-gold mb-3">Why Choose Us</p>
                <h2 id="why-heading" className="heading-serif text-4xl lg:text-5xl text-white mb-4">
                  The Leo Luxe Difference
                </h2>
                <div className="divider-gold mx-auto mt-5" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {WHY_US.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-5 p-7 rounded-2xl bg-surface-card border border-surface-border/50 hover:border-gold/30 transition-colors"
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

              <div className="text-center">
                <div className="inline-flex flex-col items-center gap-3 bg-surface-card rounded-2xl border border-gold/25 px-10 py-7">
                  <div className="flex gap-1" aria-label="5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={22} fill="#C8A94E" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="heading-serif text-3xl text-white">5.0 ★ on Google</p>
                  <p className="label-caps text-neutral-400 text-[10px]">
                    Rated by homeowners across Slough &amp; Berkshire
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. REVIEWS ─────────────────────────────────────────────────────── */}
        <section id="reviews" className="py-20 lg:py-28 bg-surface-black" aria-labelledby="reviews-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div
              ref={reviewsRef}
              className={`transition-all duration-700 ${
                reviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-12">
                <p className="label-caps text-gold mb-3">What Customers Say</p>
                <h2 id="reviews-heading" className="heading-serif text-4xl lg:text-5xl text-white mb-4">
                  Customer Reviews
                </h2>
                <div className="divider-gold mx-auto mt-5" />
              </div>

              {/* Replace with real Google reviews */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {REVIEWS.map(({ name, location, rating, text }) => (
                  <article
                    key={name}
                    className="rounded-2xl bg-surface-card border border-surface-border/50 p-7 hover:border-gold/30 transition-colors flex flex-col"
                  >
                    <div className="flex items-center gap-1 mb-4" aria-label={`${rating} stars`}>
                      {[...Array(rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#C8A94E" strokeWidth={0} />
                      ))}
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
            </div>
          </div>
        </section>

        {/* ── MID-PAGE CTA BAND ──────────────────────────────────────────────── */}
        <div className="bg-surface-dark border-y border-surface-border/40 py-14 lg:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="label-caps text-gold mb-4">Ready for a spotless home?</p>
            <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-6">
              Get a Free Quote — We Reply Within 1 Hour
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#form"
                className="btn-gold label-caps px-8 py-4 rounded-lg flex items-center justify-center gap-2 group"
              >
                Request My Free Quote{' '}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:01753257118"
                className="btn-outline-gold label-caps px-8 py-4 rounded-lg flex items-center justify-center gap-2"
                aria-label="Call us at 01753 257118"
              >
                <Phone size={15} /> 01753 257118
              </a>
            </div>
          </div>
        </div>

        {/* ── 6. AREAS ───────────────────────────────────────────────────────── */}
        <section id="areas" className="py-20 lg:py-28 bg-surface-black" aria-labelledby="areas-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div
              ref={areasRef}
              className={`transition-all duration-700 ${
                areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-10">
                <p className="label-caps text-gold mb-3">Coverage Area</p>
                <h2 id="areas-heading" className="heading-serif text-4xl lg:text-5xl text-white mb-4">
                  We Cover Slough, Windsor
                  <br className="hidden sm:block" /> &amp; Across West London
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

        {/* ── 7. LEAD CAPTURE FORM ───────────────────────────────────────────── */}
        <section id="form" className="py-20 lg:py-28 bg-surface-dark" aria-labelledby="form-heading">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div
              ref={formRef}
              className={`transition-all duration-700 ${
                formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-10">
                <p className="label-caps text-gold mb-3">Free Quote</p>
                <h2 id="form-heading" className="heading-serif text-4xl lg:text-5xl text-white mb-3">
                  Get Your Free Quote Today
                </h2>
                <p className="text-neutral-400 text-sm">
                  We reply within 1 hour during business hours (Mon–Sat, 08:00–19:00).
                </p>
                <div className="divider-gold mx-auto mt-5" />
              </div>

              <div className="rounded-2xl bg-surface-card border border-surface-border/50 p-8 lg:p-10">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 animate-bounce-once">
                      <CheckCircle2 size={32} className="text-gold" aria-hidden="true" />
                    </div>
                    <h3 className="heading-serif text-3xl text-white mb-3">
                      Thanks{formData.name ? ` ${formData.name.split(' ')[0]}` : ''}!
                    </h3>
                    <p className="text-neutral-400 text-sm max-w-xs">
                      We'll call you back shortly. In the meantime you can always reach us on{' '}
                      <a href="tel:01753257118" className="text-gold hover:text-gold-light transition-colors">
                        01753 257118
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="ld-name" className="label-caps text-neutral-400 text-[10px] block mb-2">
                          Your Name *
                        </label>
                        <input
                          id="ld-name"
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
                        <label htmlFor="ld-phone" className="label-caps text-neutral-400 text-[10px] block mb-2">
                          Phone Number *
                        </label>
                        <input
                          id="ld-phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={inputClass}
                          placeholder="e.g. 07700 000 000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="ld-email" className="label-caps text-neutral-400 text-[10px] block mb-2">
                          Email Address *
                        </label>
                        <input
                          id="ld-email"
                          type="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass}
                          placeholder="you@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="ld-service" className="label-caps text-neutral-400 text-[10px] block mb-2">
                          Service Needed *
                        </label>
                        <select
                          id="ld-service"
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
                          <option value="after-event">After Event Cleaning — from £80</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-5">
                      <label htmlFor="ld-date" className="label-caps text-neutral-400 text-[10px] block mb-2">
                        Preferred Date
                      </label>
                      <input
                        id="ld-date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        style={{ colorScheme: 'dark' }}
                        className={inputClass}
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="ld-message" className="label-caps text-neutral-400 text-[10px] block mb-2">
                        Message (optional)
                      </label>
                      <textarea
                        id="ld-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                        placeholder="Any extra details — property size, specific requirements, access instructions…"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full btn-gold label-caps py-4 rounded-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-surface-black/30 border-t-surface-black rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Request My Free Quote <ArrowRight size={14} />
                        </>
                      )}
                    </button>

                    <p className="text-neutral-500 text-xs text-center mt-4 flex items-center justify-center gap-1.5">
                      <ShieldCheck size={12} className="text-gold flex-shrink-0" aria-hidden="true" />
                      No spam. Your details are never shared.
                    </p>

                    <noscript>
                      <p className="mt-4 text-sm text-center text-neutral-400">
                        JavaScript is disabled. Please{' '}
                        <a
                          href="mailto:info@leoluxeclean.co.uk?subject=Quote%20Request"
                          className="text-gold underline"
                        >
                          email us directly
                        </a>{' '}
                        or call{' '}
                        <a href="tel:01753257118" className="text-gold underline">
                          01753 257118
                        </a>
                        .
                      </p>
                    </noscript>
                  </form>
                )}
              </div>

              {/* Contact alternatives */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:01753257118"
                  className="flex items-center gap-4 p-5 rounded-xl bg-surface-card border border-surface-border/50 hover:border-gold/30 transition-colors group"
                  aria-label="Call us on 01753 257118"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                    <Phone size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="label-caps text-neutral-400 text-[10px] mb-0.5">Call us direct</p>
                    <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">
                      01753 257118
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:info@leoluxeclean.co.uk"
                  className="flex items-center gap-4 p-5 rounded-xl bg-surface-card border border-surface-border/50 hover:border-gold/30 transition-colors group"
                  aria-label="Email us at info@leoluxeclean.co.uk"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                    <Mail size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="label-caps text-neutral-400 text-[10px] mb-0.5">Email us</p>
                    <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">
                      info@leoluxeclean.co.uk
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. MINIMAL FOOTER ──────────────────────────────────────────────── */}
        <footer className="bg-surface-black border-t border-surface-border/30 py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
              <p>© 2025 Leo Luxe Clean | Slough, Berkshire</p>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                <a
                  href="tel:01753257118"
                  className="hover:text-gold transition-colors flex items-center gap-1.5"
                  aria-label="Call 01753 257118"
                >
                  <Phone size={13} aria-hidden="true" /> 01753 257118
                </a>
                <a
                  href="mailto:info@leoluxeclean.co.uk"
                  className="hover:text-gold transition-colors flex items-center gap-1.5"
                  aria-label="Email info@leoluxeclean.co.uk"
                >
                  <Mail size={13} aria-hidden="true" /> info@leoluxeclean.co.uk
                </a>
                <a
                  href="https://leoluxeclean.co.uk"
                  className="hover:text-gold transition-colors"
                >
                  Back to main site →
                </a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default LandingPage;
