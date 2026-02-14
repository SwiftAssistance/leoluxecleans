import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MessageSquare,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import Seo, { createFaqSchema, breadcrumbSchema } from '../components/Seo';
import { useScrollReveal } from '../hooks/useScrollReveal';

const contactItems = [
  {
    icon: <Phone size={20} />,
    label: 'Call us',
    value: '01753 000 000',
    href: 'tel:01753000000',
    desc: 'Mon–Sat, 8am–7pm',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email us',
    value: 'info@leoluxecleans.com',
    href: 'mailto:info@leoluxecleans.com',
    desc: 'We reply within 2 hours',
  },
  {
    icon: <MapPin size={20} />,
    label: 'We cover',
    value: 'Slough, Windsor, Langley & Berkshire',
    href: null,
    desc: 'Surrounding areas available on request',
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

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
        title={<>Get In <span className="text-gold-gradient">Touch</span></>}
        subtitle="Ready for a spotless space? Drop us a message or give us a ring — we'll get back to you within 2 hours with a clear, honest quote."
        breadcrumb="Contact"
      />

      {/* Contact form section */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Left info */}
            <div className="lg:col-span-5">
              <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-6">
                We'd Love to
                <br />
                <span className="text-gold-gradient">Hear From You</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed font-light mb-10">
                Whether you need a regular clean, a one-off deep clean, or
                something specialist — we're here to help. No hidden fees, no
                obligation.
              </p>

              <div className="space-y-4 mb-8">
                {contactItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-4 px-5 rounded-xl border border-surface-border/40 hover:border-gold/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-neutral-500 text-[10px] uppercase tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white text-sm hover:text-gold transition-colors font-medium block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-medium">{item.value}</p>
                      )}
                      <p className="text-neutral-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-neutral-500 text-xs">
                  <ShieldCheck size={14} className="text-gold" />
                  <span>Your details are safe. We never share your information.</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-500 text-xs">
                  <Clock size={14} className="text-gold" />
                  <span>We respond to every enquiry within 2 hours.</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-500 text-xs">
                  <MessageSquare size={14} className="text-gold" />
                  <span>No obligation — just an honest, transparent quote.</span>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-surface-border/40 p-8 lg:p-10">
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
                    <div className="mb-5">
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
                      className="w-full btn-gold label-caps py-4 rounded-lg mt-2"
                    >
                      Get My Free Quote &rarr;
                    </button>
                    <p className="text-neutral-500 text-xs text-center mt-4">
                      No obligation — Free quote — Response within 2 hours
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-surface-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-4xl lg:text-5xl text-white">
              Frequently Asked
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-surface-border/40 p-6 lg:p-8"
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
