import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const contactItems = [
  {
    icon: <Phone size={18} />,
    label: 'Call us',
    value: '01753 000 000',
    href: 'tel:01753000000',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email us',
    value: 'info@leoluxecleans.com',
    href: 'mailto:info@leoluxecleans.com',
  },
  {
    icon: <MapPin size={18} />,
    label: 'We cover',
    value: 'Slough, Windsor, Langley & Berkshire',
    href: null,
  },
  {
    icon: <Clock size={18} />,
    label: 'Response time',
    value: 'Within 2 hours',
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [infoRef, infoVisible] = useScrollReveal({ threshold: 0.2 });
  const [formRef, formVisible] = useScrollReveal({ threshold: 0.2 });
  const [mapRef, mapVisible] = useScrollReveal({ threshold: 0.1 });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: '', phone: '', email: '', service: '' });
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-surface-black relative overflow-hidden"
    >
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left info */}
          <div
            ref={infoRef}
            className={`lg:col-span-5 transition-all duration-700 ${
              infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="label-caps text-gold mb-4">Get Started</p>
            <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-6">
              Get Your Free
              <br />
              <span className="text-gold-gradient">Quote Today</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed font-light mb-10">
              Drop us your details and we'll get back to you within 2 hours with
              a clear, honest price. No hidden fees, no obligation.
            </p>

            <div className="space-y-3 mb-8">
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 py-3 px-4 rounded-lg bg-surface-dark/60 border border-surface-border/40 hover:border-gold/20 transition-all duration-300 ${
                    infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-neutral-500 text-[10px] uppercase tracking-wide">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white text-sm hover:text-gold transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-neutral-500 text-xs">
              <ShieldCheck size={14} className="text-gold" />
              <span>
                Your details are safe with us. We never share your information.
              </span>
            </div>
          </div>

          {/* Right form */}
          <div
            ref={formRef}
            className={`lg:col-span-7 transition-all duration-700 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="glass-card rounded-2xl p-8 lg:p-10 border-gold/15">
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
                    <div className="group">
                      <label className="label-caps text-neutral-400 text-[10px] block mb-2 group-focus-within:text-gold transition-colors">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-surface-black/80 border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none focus:shadow-gold-sm transition-all placeholder:text-neutral-600"
                        placeholder="e.g. Sarah Mitchell"
                      />
                    </div>
                    <div className="group">
                      <label className="label-caps text-neutral-400 text-[10px] block mb-2 group-focus-within:text-gold transition-colors">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-surface-black/80 border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none focus:shadow-gold-sm transition-all placeholder:text-neutral-600"
                        placeholder="e.g. 07700 000 000"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div className="group">
                      <label className="label-caps text-neutral-400 text-[10px] block mb-2 group-focus-within:text-gold transition-colors">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-surface-black/80 border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none focus:shadow-gold-sm transition-all placeholder:text-neutral-600"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div className="group">
                      <label className="label-caps text-neutral-400 text-[10px] block mb-2 group-focus-within:text-gold transition-colors">
                        What Do You Need?
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full bg-surface-black/80 border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none focus:shadow-gold-sm transition-all appearance-none"
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
                  <button
                    type="submit"
                    className="w-full btn-gold label-caps py-4 rounded-lg mt-2 group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get My Free Quote
                      <span className="group-hover:translate-x-1 transition-transform inline-block">
                        &rarr;
                      </span>
                    </span>
                  </button>
                  <p className="text-neutral-500 text-xs text-center mt-4">
                    No obligation — Free quote — Response within 2 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div
          ref={mapRef}
          className={`mt-16 transition-all duration-700 ${
            mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="rounded-2xl overflow-hidden border border-surface-border/40 relative">
            <div className="absolute top-4 left-4 z-10 glass-card rounded-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" />
                <span className="label-caps text-[10px] text-neutral-300">Our Coverage Area</span>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39783.14812455106!2d-0.6306!3d51.5105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767a1e7e50f031%3A0xbb6e4f13d6c9d913!2sSlough!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="350"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Leo Luxe Cleans coverage area — Slough, Berkshire"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
