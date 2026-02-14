import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Star,
  ArrowRight,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import Seo, { createFaqSchema, breadcrumbSchema } from '../components/Seo';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formRef, formVisible] = useScrollReveal({ threshold: 0.05 });
  const [faqRef, faqVisible] = useScrollReveal({ threshold: 0.05 });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const faqs = [
    {
      q: 'How quickly can you start?',
      a: "We can usually book you in within the same week. For urgent jobs, we offer same-day and next-day availability where possible.",
    },
    {
      q: 'Do I need to provide cleaning products?',
      a: "No — we bring everything we need, including professional-grade eco-friendly products and all equipment. You don't need to lift a finger.",
    },
    {
      q: 'Are your team DBS checked?',
      a: "Absolutely. Every team member is fully DBS checked, insured, and trained to our high standards before they enter your home.",
    },
    {
      q: "What if I'm not happy with the clean?",
      a: "We offer a 100% satisfaction guarantee. If you're not completely happy, we'll come back and sort it at no extra charge.",
    },
  ];

  return (
    <>
      <Seo
        title="Contact Us — Free Cleaning Quote in Slough & Berkshire"
        description="Get a free cleaning quote from Leo Luxe Cleans. Call 01753 000 000 or fill in our form. We cover Slough, Windsor, Langley & Berkshire. Response within 2 hours."
        canonical="/contact"
        schema={[
          createFaqSchema(faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Contact' },
          ]),
        ]}
      />
      <PageHero
        title={<>Get a Free <span className="text-gold-gradient">Quote</span></>}
        subtitle="Tell us what you need and we'll get back to you within 2 hours with an honest price. No obligation, no hidden fees."
        breadcrumb="Contact"
      />

      {/* Quick contact options */}
      <section className="py-6 bg-surface-dark border-b border-surface-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <a
              href="tel:01753000000"
              className="flex items-center gap-3 text-white hover:text-gold transition-colors"
            >
              <Phone size={16} className="text-gold" />
              <span className="text-sm font-medium">01753 000 000</span>
              <span className="text-neutral-500 text-xs">Mon–Sat 8am–7pm</span>
            </a>
            <a
              href="mailto:info@leoluxecleans.com"
              className="flex items-center gap-3 text-white hover:text-gold transition-colors"
            >
              <Mail size={16} className="text-gold" />
              <span className="text-sm font-medium">info@leoluxecleans.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-8 bg-surface-black border-b border-surface-border/20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="flex items-start gap-5 rounded-xl border border-surface-border/30 p-6">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold heading-serif text-lg flex-shrink-0">
              S
            </div>
            <div>
              <div className="flex gap-0.5 mb-2" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} fill="#C8A94E" strokeWidth={0} />
                ))}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                "Honestly can't recommend Leo Luxe enough. They cleaned our whole house before we moved in and it was absolutely spotless. The attention to detail was incredible."
              </p>
              <p className="text-neutral-500 text-xs mt-2">
                Sarah Mitchell — Homeowner, Slough
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main form section */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div
          ref={formRef}
          className={`max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-700 ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7 order-1">
              <div className="rounded-2xl border border-surface-border/40 p-8 lg:p-10">
                <h2 className="heading-serif text-3xl text-white mb-2">
                  Tell us about your space
                </h2>
                <p className="text-neutral-500 text-sm mb-8">
                  Fill in the details below and we'll send you a clear quote — no surprises.
                </p>

                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 animate-bounce-once">
                      <CheckCircle2 size={32} className="text-gold" />
                    </div>
                    <h3 className="heading-serif text-3xl text-white mb-3">
                      Thank You!
                    </h3>
                    <p className="text-neutral-400 text-sm">
                      We'll be in touch within 2 hours with your quote.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="page-name" className="label-caps text-neutral-400 text-[10px] block mb-2">
                          Your Name
                        </label>
                        <input
                          id="page-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-surface-black border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-neutral-600"
                          placeholder="e.g. Sarah Mitchell"
                        />
                      </div>
                      <div>
                        <label htmlFor="page-phone" className="label-caps text-neutral-400 text-[10px] block mb-2">
                          Phone Number
                        </label>
                        <input
                          id="page-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-surface-black border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-neutral-600"
                          placeholder="e.g. 07700 000 000"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="page-email" className="label-caps text-neutral-400 text-[10px] block mb-2">
                          Email
                        </label>
                        <input
                          id="page-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-surface-black border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-neutral-600"
                          placeholder="you@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="page-service" className="label-caps text-neutral-400 text-[10px] block mb-2">
                          What Do You Need?
                        </label>
                        <select
                          id="page-service"
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-surface-black border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none transition-colors appearance-none"
                        >
                          <option value="">Choose a service</option>
                          <option value="home">Home Cleaning</option>
                          <option value="office">Office & Commercial</option>
                          <option value="deep">Deep Clean</option>
                          <option value="tenancy">End of Tenancy</option>
                          <option value="event">After Event Cleanup</option>
                          <option value="specialist">Specialist Cleaning</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="page-message" className="label-caps text-neutral-400 text-[10px] block mb-2">
                        Tell Us More (Optional)
                      </label>
                      <textarea
                        id="page-message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full bg-surface-black border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-neutral-600 resize-none"
                        placeholder="Any details about your space, preferred dates, or questions..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full btn-gold label-caps py-4 rounded-lg flex items-center justify-center gap-2"
                    >
                      Get My Free Quote <ArrowRight size={14} />
                    </button>
                    <p className="text-neutral-600 text-xs text-center mt-4">
                      No obligation · Free quote · Response within 2 hours
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 order-2">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Why contact us */}
                <div className="rounded-xl border border-surface-border/40 p-6">
                  <h3 className="text-white font-semibold mb-5">What happens next?</h3>
                  <div className="space-y-5">
                    {[
                      { step: '1', text: 'We review your details and prepare a clear, honest quote.' },
                      { step: '2', text: 'We get back to you within 2 hours — usually much sooner.' },
                      { step: '3', text: 'If you\'re happy, we book you in. No deposit, no contracts.' },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-4">
                        <span className="heading-serif text-2xl text-gold/30 leading-none mt-0.5">
                          {item.step}
                        </span>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust signals */}
                <div className="rounded-xl border border-surface-border/40 p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck size={16} className="text-gold flex-shrink-0" />
                      <span className="text-neutral-400 text-sm">Your details are safe — we never share your information</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-gold flex-shrink-0" />
                      <span className="text-neutral-400 text-sm">We respond to every enquiry within 2 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      <span className="text-neutral-400 text-sm">No obligation — just an honest, transparent quote</span>
                    </div>
                  </div>
                </div>

                {/* Coverage area */}
                <div className="rounded-xl border border-surface-border/40 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={16} className="text-gold" />
                    <h3 className="text-white font-semibold text-sm">Areas We Cover</h3>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Slough, Windsor, Langley, Maidenhead, Eton, Burnham and surrounding areas across Berkshire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-surface-dark">
        <iframe
          title="Leo Luxe Cleans location — Slough, Berkshire"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39792.48!2d-0.6!3d51.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767600!2sSlough!5e0!3m2!1sen!2suk!4v1"
          width="100%"
          height="300"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(0.9)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-surface-dark border-t border-surface-border/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
              Common Questions
            </h2>
            <p className="text-neutral-400 text-sm">
              Everything you need to know before booking.
            </p>
          </div>

          <div
            ref={faqRef}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl border border-surface-border/40 p-6 lg:p-8 transition-all duration-500 ${
                  faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
