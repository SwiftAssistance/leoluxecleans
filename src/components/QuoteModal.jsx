'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { X, CheckCircle2, ArrowRight, Phone, Loader2 } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { services } from '../data/services';

const QuoteModal = () => {
  const { isOpen, closeModal, preselectedService } = useQuoteModal();
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    postcode: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const firstInputRef = useRef(null);
  const modalRef = useRef(null);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setForm((f) => ({ ...f, service: preselectedService || '' }));
      setSubmitted(false);
      setSubmitting(false);
      setError('');
      setTimeout(() => firstInputRef.current?.focus(), 200);
    }
  }, [isOpen, preselectedService]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, closeModal]);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.postcode.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '1e2d7a23-e2db-4148-ac90-c44289b4508a',
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          postcode: form.postcode,
          message: form.message,
          subject: `New quote request from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-18156207671/w1VoCJrk-7AcELf8xtFD',
            value: 1.0,
            currency: 'GBP',
          });
        }
        closeModal();
        router.push('/thank-you');
      } else {
        setError('Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setError('Something went wrong. Please try again or call us on 01753 257118.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        ref={modalRef}
        className="
          relative w-full sm:max-w-lg
          bg-[#161616] border border-gold/25
          rounded-t-3xl sm:rounded-2xl
          shadow-[0_0_80px_rgba(200,169,78,0.12)]
          animate-modal-enter
          flex flex-col
          max-h-[92vh] sm:max-h-[88vh]
          overflow-hidden
        "
      >
        {/* Gold shimmer line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

        {/* Mobile drag handle */}
        <div className="sm:hidden flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-10 h-1 rounded-full bg-surface-border/60" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-4 pb-0 flex-shrink-0">
          <div>
            <p className="label-caps text-gold text-[10px] mb-1">Leo Luxe Clean</p>
            <h2
              id="quote-modal-title"
              className="heading-serif text-[1.75rem] sm:text-3xl text-white leading-tight"
            >
              Get a Free Quote
            </h2>
            <p className="text-neutral-400 text-xs mt-1">
              No obligation — we reply within 2 hours.
            </p>
          </div>
          <button
            onClick={closeModal}
            className="text-neutral-500 hover:text-white transition-colors p-1.5 -mr-1.5 rounded-lg hover:bg-white/5 flex-shrink-0"
            aria-label="Close quote form"
          >
            <X size={18} />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 mt-4 mb-0 h-px bg-surface-border/30 flex-shrink-0" />

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-6 py-5">
          {submitted ? (
            <div className="text-center py-10">
              <div className="animate-bounce-once inline-block mb-5">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} className="text-gold" />
                </div>
              </div>
              <h3 className="heading-serif text-2xl text-white mb-2">Quote Sent!</h3>
              <p className="text-neutral-400 text-sm max-w-xs mx-auto leading-relaxed">
                We've got your request. Expect a reply within 2 hours — usually sooner.
              </p>
              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-neutral-500">
                <Phone size={12} />
                <span>Or call us now: </span>
                <a href="tel:01753257118" className="text-gold hover:underline">
                  01753 257118
                </a>
              </div>
              <button
                onClick={closeModal}
                className="mt-8 btn-gold label-caps px-10 py-3 rounded-lg"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="qm-name"
                    className="block label-caps text-[10px] text-neutral-400 mb-1.5"
                  >
                    Your Name <span className="text-gold">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    id="qm-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="
                      w-full bg-surface-black border border-surface-border/60
                      focus:border-gold/60 focus:outline-none
                      rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-600
                      transition-colors duration-200
                    "
                  />
                </div>
                <div>
                  <label
                    htmlFor="qm-phone"
                    className="block label-caps text-[10px] text-neutral-400 mb-1.5"
                  >
                    Phone <span className="text-gold">*</span>
                  </label>
                  <input
                    id="qm-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="07700 900000"
                    className="
                      w-full bg-surface-black border border-surface-border/60
                      focus:border-gold/60 focus:outline-none
                      rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-600
                      transition-colors duration-200
                    "
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="qm-email"
                  className="block label-caps text-[10px] text-neutral-400 mb-1.5"
                >
                  Email Address <span className="text-gold">*</span>
                </label>
                <input
                  id="qm-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="
                    w-full bg-surface-black border border-surface-border/60
                    focus:border-gold/60 focus:outline-none
                    rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-600
                    transition-colors duration-200
                  "
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="qm-service"
                  className="block label-caps text-[10px] text-neutral-400 mb-1.5"
                >
                  Service Needed
                </label>
                <select
                  id="qm-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="
                    appearance-none w-full bg-surface-black border border-surface-border/60
                    focus:border-gold/60 focus:outline-none
                    rounded-lg px-4 py-3 text-sm
                    transition-colors duration-200
                    text-white
                  "
                >
                  <option value="" className="text-neutral-500 bg-surface-black">
                    Select a service…
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug} className="bg-surface-black text-white">
                      {s.title}
                      {s.pricing ? ` — ${s.pricing}` : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Postcode */}
              <div>
                <label
                  htmlFor="qm-postcode"
                  className="block label-caps text-[10px] text-neutral-400 mb-1.5"
                >
                  Postcode <span className="text-gold">*</span>
                </label>
                <input
                  id="qm-postcode"
                  name="postcode"
                  type="text"
                  required
                  autoComplete="postal-code"
                  value={form.postcode}
                  onChange={(e) => setForm((f) => ({ ...f, postcode: e.target.value.toUpperCase() }))}
                  placeholder="e.g. SL4 1AB"
                  className="
                    w-full bg-surface-black border border-surface-border/60
                    focus:border-gold/60 focus:outline-none
                    rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-600
                    transition-colors duration-200
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="qm-message"
                  className="block label-caps text-[10px] text-neutral-400 mb-1.5"
                >
                  Anything else? <span className="text-neutral-600">(optional)</span>
                </label>
                <textarea
                  id="qm-message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Property size, specific requirements, preferred dates…"
                  className="
                    w-full bg-surface-black border border-surface-border/60
                    focus:border-gold/60 focus:outline-none
                    rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-600
                    transition-colors duration-200 resize-none
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="
                  w-full btn-gold label-caps py-4 rounded-lg
                  flex items-center justify-center gap-2
                  disabled:opacity-70 disabled:cursor-not-allowed
                "
              >
                {submitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Get My Free Quote
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {error && (
                <p className="text-red-400 text-xs text-center bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                  {error}{' '}
                  <a href="tel:01753257118" className="text-red-300 underline font-medium">
                    01753 257118
                  </a>
                </p>
              )}

              <div className="flex items-center gap-2 my-1">
                <div className="h-px flex-1 bg-surface-border/30" />
                <span className="text-neutral-600 text-[10px]">or</span>
                <div className="h-px flex-1 bg-surface-border/30" />
              </div>
              <a
                href="https://wa.me/447845239774?text=Hi%20Leo%20Luxe%20Clean%2C%20I%27d%20like%20a%20quote%20please"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25a244]/10 hover:bg-[#25a244]/20 border border-[#25a244]/40 hover:border-[#25a244]/70 text-[#4ade80] label-caps py-3 rounded-lg text-[10px] transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message us on WhatsApp
              </a>

              {/* Trust line */}
              <p className="text-center text-neutral-600 text-[11px] leading-relaxed">
                DBS checked &amp; fully insured · Eco-friendly products · No obligation
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
