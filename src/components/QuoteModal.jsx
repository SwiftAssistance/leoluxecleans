import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, ArrowRight, Phone, Loader2 } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { services } from '../data/services';

const QuoteModal = () => {
  const { isOpen, closeModal, preselectedService } = useQuoteModal();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const firstInputRef = useRef(null);
  const modalRef = useRef(null);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setForm((f) => ({ ...f, service: preselectedService || '' }));
      setSubmitted(false);
      setSubmitting(false);
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
    setSubmitting(true);
    // Replace with your real form handler (e.g. fetch to API, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
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
