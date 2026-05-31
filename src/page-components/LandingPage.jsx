'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Phone, Mail, ShieldCheck, CheckCircle2, Star,
  Leaf, Shield, Home, Building2, Sparkles, Key,
  ArrowRight, MapPin, Zap, Clock, ChevronDown, Users, BadgeCheck, X,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ── static data ───────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: Home, name: 'Regular Domestic Cleaning', price: 'From £60', benefit: 'The same trusted cleaner every visit — weekly, fortnightly, or monthly.' },
  { icon: Sparkles, name: 'Deep Cleaning', price: 'From £180', benefit: 'Inside ovens, behind furniture, every neglected corner. A thorough reset for your home.' },
  { icon: Key, name: 'End of Tenancy', price: 'From £200', benefit: 'Landlord-approved standard — give yourself the best chance of a full deposit return.' },
  { icon: Building2, name: 'After Builders Clean', price: 'From £200', benefit: 'Dust, debris, and residue removed. Your new space handed over spotless.' },
  { icon: Zap, name: 'Airbnb & Holiday Let', price: 'From £80', benefit: 'Fast turnovers between guests. Linen-ready, guest-ready, every time.' },
];

const WHY_US = [
  { icon: ShieldCheck, title: 'DBS-Checked & Referenced', desc: 'Every cleaner is DBS (criminal record) checked, identity verified, and personally referenced before entering your home.' },
  { icon: Shield, title: 'Fully Insured', desc: 'Full public liability insurance as standard — complete peace of mind, every single visit.' },
  { icon: Users, title: 'Same Cleaner Every Time', desc: 'No strangers in your home. We assign you a dedicated cleaner so you always know exactly who to expect.' },
  { icon: CheckCircle2, title: 'No Contracts, No Lock-In', desc: 'Book once or weekly. No hidden fees, no tie-ins, no cancellation charges. Ever.' },
];

const STEPS = [
  { n: '01', title: 'Request a Free Quote', desc: 'Fill in the form or call us. We reply within 1 hour, 7 days a week.' },
  { n: '02', title: 'We Match & Schedule', desc: 'We assign your dedicated cleaner and confirm a time that suits you — same-week slots available.' },
  { n: '03', title: 'Sit Back & Relax', desc: 'Your cleaner arrives, works to our exacting standard, and you come home to a spotless house.' },
];

const REVIEWS = [
  { name: 'Charlotte W.', location: 'Windsor', rating: 5, text: "We've had the same cleaner for six months now. She knows exactly how we like things — the house is always perfect. Wouldn't use anyone else." },
  { name: 'James T.', location: 'Ascot', rating: 5, text: 'Booked a deep clean before putting our house on the market. Absolutely immaculate result — the estate agent actually commented on how clean it was.' },
  { name: 'Priya K.', location: 'Maidenhead', rating: 5, text: "We use Leo Luxe for our weekly home clean. Reliable, thorough, and always leave the place looking incredible. The same cleaner every time makes such a difference." },
  { name: 'Richard H.', location: 'Virginia Water', rating: 5, text: "Used them for an end of tenancy clean on our rental property. Tenant got their full deposit back and the new tenants were delighted. Professional from start to finish." },
];

const FAQS = [
  {
    q: 'How quickly can you book me in?',
    a: 'We offer same-week bookings across Windsor, Ascot, Maidenhead, Bracknell, Wokingham, and the wider Berkshire and Surrey area. For urgent cleans, call us on 01753 257118 and we\'ll do our best to accommodate you.',
  },
  {
    q: 'Will I get the same cleaner each time?',
    a: 'Yes. We assign you a dedicated cleaner so you always know who to expect. No strangers in your home, no retraining, no explaining your preferences from scratch.',
  },
  {
    q: 'Are your cleaners vetted and insured?',
    a: 'Every cleaner is DBS (criminal record) checked, identity verified, personally referenced, and covered by full public liability insurance. Your home and peace of mind are protected.',
  },
  {
    q: 'Do I need to be home during the clean?',
    a: 'No. Many of our clients in Windsor, Ascot, and Maidenhead provide a key or door code. We\'re a trusted local team — your security is taken very seriously.',
  },
  {
    q: 'Is there a minimum contract or tie-in?',
    a: 'None at all. Whether it\'s a one-off deep clean or a weekly regular, there\'s no tie-in and no cancellation charge. Book with complete confidence.',
  },
];

const AREAS = [
  'Windsor', 'Ascot', 'Maidenhead', 'Bracknell', 'Wokingham',
  'Virginia Water', 'Egham', 'Sunningdale', 'Sunninghill', 'Marlow',
  'Henley-on-Thames', 'Staines-upon-Thames', 'Slough', 'Eton', 'Burnham',
  'Taplow', 'Cookham', 'Twyford',
];

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: 'DBS Checked' },
  { icon: Shield, label: 'Fully Insured' },
  { icon: Star, label: '5-Star Rated' },
  { icon: Users, label: 'Same Cleaner Always' },
  { icon: CheckCircle2, label: 'No Contracts' },
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

// ── quote form (must be defined outside LandingPage to avoid remount on state change) ──

const inputClass =
  'w-full bg-surface-black border border-surface-border rounded-lg px-4 py-3 text-white text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-neutral-600';

const QuoteForm = ({ id, compact = false, formRef, formData, setFormData, formSubmitted, submitting, formError, onSubmit }) => (
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
          We'll call you back within the hour to arrange your clean. Or reach us right now on{' '}
          <a href="tel:01753257118" className="text-gold hover:text-gold-light transition-colors font-medium">
            01753 257118
          </a>
          . We'll match you with a dedicated cleaner from your very first visit.
        </p>
        <div className="flex gap-1 mt-2">
          <StarRow count={5} size={16} />
        </div>
        <p className="text-neutral-500 text-xs mt-2">Trusted by 200+ customers across Berkshire</p>
      </div>
    ) : (
      <form onSubmit={onSubmit} noValidate>
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
              onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
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
              onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))}
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
              onChange={(e) => setFormData((f) => ({ ...f, service: e.target.value }))}
              className={`${inputClass} appearance-none`}
            >
              <option value="">Choose a service…</option>
              <option value="regular-domestic">Regular Domestic Cleaning — from £60</option>
              <option value="deep-clean">Deep Cleaning — from £180</option>
              <option value="end-of-tenancy">End of Tenancy — from £200</option>
              <option value="after-builders">After Builders Clean — from £200</option>
              <option value="airbnb-holiday-let">Airbnb & Holiday Let — from £80</option>
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
                onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
                className={inputClass}
                placeholder="you@email.com"
              />
            </div>
          )}
        </div>

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
        {formError && (
          <p className="text-red-400 text-xs text-center mt-3">{formError}</p>
        )}

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

// ── main component ────────────────────────────────────────────────────────────

const LandingPage = ({
  areaName = 'Windsor & Berkshire',
  utmSource = '',
  utmCampaign = '',
  utmTerm = '',
}) => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', service: '', email: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const formRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setShowModal(false); };
    if (showModal) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [showModal]);

  const openModal = () => setShowModal(true);

  const [formError, setFormError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '1e2d7a23-e2db-4148-ac90-c44289b4508a',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          area: areaName,
          utm_source: utmSource,
          utm_campaign: utmCampaign,
          utm_term: utmTerm,
          subject: `New quote request from ${formData.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setFormSubmitted(true);
        window.gtag('event', 'conversion', {
          send_to: 'AW-18156207671/w1VoCJrk-7AcELf8xtFD',
          value: 1.0,
          currency: 'GBP',
        });
      } else {
        setFormError('Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setFormError('Something went wrong. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const [stepsRef, stepsVisible] = useScrollReveal({ threshold: 0.05 });
  const [servicesRef, servicesVisible] = useScrollReveal({ threshold: 0.05 });
  const [whyRef, whyVisible] = useScrollReveal({ threshold: 0.05 });
  const [reviewsRef, reviewsVisible] = useScrollReveal({ threshold: 0.05 });
  const [faqRef, faqVisible] = useScrollReveal({ threshold: 0.05 });
  const [areasRef, areasVisible] = useScrollReveal({ threshold: 0.05 });


  return (
    <>
      <div className="min-h-screen bg-surface-black text-white font-sans overflow-x-hidden">

        {/* ── STICKY HEADER ────────────────────────────────────────────────── */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? 'bg-surface-black border-b border-gold/20 py-3 shadow-[0_1px_0_0_rgba(200,169,78,0.15)]'
              : 'bg-surface-black/95 backdrop-blur-sm py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
            <a href="https://leoluxeclean.co.uk" aria-label="Leo Luxe Clean — back to main site">
              <img src="/logo.svg" alt="Leo Luxe Clean" width={160} height={50} className="h-10 w-auto" />
            </a>
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:01753257118"
                className="hidden sm:flex items-center gap-1.5 text-neutral-300 hover:text-gold transition-colors text-sm font-medium"
                aria-label="Call 01753 257118"
              >
                <Phone size={13} className="text-gold" /> 01753 257118
              </a>
              <button
                onClick={openModal}
                className="btn-gold label-caps px-4 sm:px-6 py-2.5 rounded-lg text-xs"
              >
                <span className="hidden sm:inline">Claim </span>Free Quote
              </button>
            </div>
          </div>
        </header>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative pt-20 lg:pt-24 min-h-screen overflow-hidden flex items-center" aria-labelledby="hero-heading">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/80 to-black/50" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-10 pb-28 lg:pb-16 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">

            {/* Left: copy */}
            <div>
              {/* Urgency badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-emerald-400 text-xs font-semibold">Limited slots left this week in {areaName}</span>
              </div>

              <h1
                id="hero-heading"
                className="heading-serif text-[clamp(2.4rem,5vw,4.4rem)] text-white leading-[1.06] mb-5"
              >
                The Same Trusted Cleaner,{' '}
                <span className="text-gold-gradient">Every Single Visit</span>
                <br />— Guaranteed.
              </h1>

              <p className="text-neutral-200 text-lg leading-relaxed font-light mb-5 max-w-lg">
                Trusted by <strong className="text-white font-semibold">200+ homeowners</strong> across {areaName}.
                DBS-checked, fully insured, no contracts — and always the same cleaner you know and trust.
              </p>

              {/* Benefit bullets */}
              <ul className="space-y-3 mb-6">
                {[
                  'Same trusted cleaner every visit — no strangers in your home',
                  'DBS-checked, fully insured, and referenced',
                  '100% satisfaction guarantee — we re-clean free if needed',
                  'No contracts, no lock-in — cancel any time',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral-200 text-sm">
                    <CheckCircle2 size={16} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Mini hero review */}
              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-6 max-w-lg">
                <StarRow count={5} size={12} />
                <p className="text-neutral-300 text-xs leading-relaxed">
                  <span className="text-white font-medium">"We've had the same cleaner for six months — the house is always perfect."</span>
                  {' '}— Charlotte W., Windsor
                </p>
              </div>

              {/* Phone + trust */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <a
                  href="tel:01753257118"
                  className="flex items-center gap-2 text-white font-semibold hover:text-gold transition-colors"
                  aria-label="Call 01753 257118"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                    <Phone size={14} className="text-gold" />
                  </div>
                  01753 257118
                </a>
                <span className="text-neutral-600">·</span>
                <span className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <StarRow count={5} size={11} /><span className="text-white font-medium ml-0.5">5.0</span> Google
                </span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-400 text-xs">DBS checked &amp; insured</span>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <QuoteForm id="hero-form" compact formRef={formRef} formData={formData} setFormData={setFormData} formSubmitted={formSubmitted} submitting={submitting} formError={formError} onSubmit={handleSubmit} />
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
            <button
              onClick={openModal}
              className="sm:ml-4 label-caps text-gold text-xs border border-gold/50 hover:bg-gold/10 rounded-full px-4 py-1.5 transition-colors whitespace-nowrap"
            >
              Check Availability →
            </button>
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
                <button
                  onClick={openModal}
                  className="btn-gold label-caps px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2 group"
                >
                  Claim My Free Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
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
                  <button
                    key={name}
                    onClick={openModal}
                    className="rounded-2xl bg-surface-card border border-surface-border/50 p-7 hover:border-gold/40 transition-all duration-300 hover:shadow-gold-sm group text-left w-full"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/20 transition-colors">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-white text-base mb-1">{name}</h3>
                    <p className="text-gold label-caps text-[10px] mb-3">{price}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{benefit}</p>
                  </button>
                ))}

                <div className="rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/30 p-7 flex flex-col justify-center items-start">
                  <p className="label-caps text-gold text-[10px] mb-3">Not Sure?</p>
                  <p className="text-white font-medium mb-5 leading-snug">
                    Tell us what you need — we'll recommend the right clean.
                  </p>
                  <button onClick={openModal} className="btn-gold label-caps px-5 py-2.5 rounded-lg text-xs flex items-center gap-2">
                    Get a Quote <ArrowRight size={12} />
                  </button>
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
                <button
                  onClick={openModal}
                  className="btn-gold label-caps px-8 py-4 rounded-lg inline-flex items-center gap-2 group"
                >
                  Join 200+ Happy Customers <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
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
              <button
                onClick={openModal}
                className="btn-gold label-caps px-8 py-4 rounded-lg flex items-center justify-center gap-2 group text-sm"
              >
                Claim My Free Quote{' '}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
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
                  We Cover Windsor, Ascot, Maidenhead<br className="hidden sm:block" /> &amp; Across Berkshire &amp; Surrey
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
            <QuoteForm id="form" formRef={formRef} formData={formData} setFormData={setFormData} formSubmitted={formSubmitted} submitting={submitting} formError={formError} onSubmit={handleSubmit} />
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
                  <p className="text-white text-sm font-medium group-hover:text-gold transition-colors truncate">info@leoluxeclean.co.uk</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <footer className="bg-surface-black border-t border-surface-border/30 py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
              <p>© 2025 Leo Luxe Clean | Berkshire &amp; Surrey</p>
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
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
          <div className="bg-surface-dark border-t border-gold/20 px-4 py-3 safe-area-inset-bottom">
            <button
              onClick={openModal}
              className="btn-gold glow-pulse label-caps w-full py-4 rounded-xl flex items-center justify-center gap-2 text-xs"
            >
              Claim Free Quote <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* ── FLOATING WHATSAPP ────────────────────────────────────────────── */}
        <a
          href="https://wa.me/441753257118?text=Hi%20Leo%20Luxe%20Clean%2C%20I%27d%20like%20a%20quote%20please"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-[72px] right-4 z-[60] flex items-center gap-2.5 bg-[#25a244] hover:bg-[#1e9138] text-white rounded-full shadow-[0_4px_24px_rgba(37,162,68,0.55)] transition-all duration-300 hover:scale-105 animate-pulse-slow group pr-4 pl-3.5 py-3 lg:bottom-8 lg:right-8"
        >
          <WhatsAppIcon size={22} />
          <span className="label-caps text-[11px] font-semibold tracking-wide whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 ease-out">
            Chat with us
          </span>
        </a>

      </div>

      {/* ── QUOTE MODAL ──────────────────────────────────────────────────── */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Get a free quote"
        >
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="relative w-full sm:max-w-md animate-modal-enter">
            <button
              onClick={() => setShowModal(false)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-surface-dark border border-surface-border flex items-center justify-center text-neutral-400 hover:text-white hover:border-gold/40 transition-colors"
            >
              <X size={14} />
            </button>
            <QuoteForm
              id="modal-form"
              formRef={formRef}
              formData={formData}
              setFormData={setFormData}
              formSubmitted={formSubmitted}
              submitting={submitting}
              formError={formError}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
