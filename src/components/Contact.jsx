'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
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
    value: '01753 257118',
    href: 'tel:01753257118',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email us',
    value: 'info@leoluxeclean.co.uk',
    href: 'mailto:info@leoluxeclean.co.uk',
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

const WEB3FORMS_KEY = '1e2d7a23-e2db-4148-ac90-c44289b4508a';

const SERVICE_LABELS = {
  home: 'Home Cleaning',
  office: 'Office & Commercial',
  deep: 'Deep Clean',
  tenancy: 'End of Tenancy',
  event: 'After Event Cleanup',
  specialist: 'Specialist Cleaning',
};

const buildEmailHtml = (data) => `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:#111111;padding:32px 40px;text-align:center;">
            <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:22px;color:#C8A94E;letter-spacing:2px;">LEO LUXE CLEAN</p>
            <p style="margin:0;font-size:12px;color:#888888;letter-spacing:1px;text-transform:uppercase;">New Quote Request</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <p style="margin:0 0 24px;font-size:16px;color:#333333;">You have received a new quote request. Here are the details:</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:12px 16px;background:#f9f9f9;border-left:3px solid #C8A94E;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:1px;width:140px;">Name</td>
                <td style="padding:12px 16px;background:#f9f9f9;font-size:15px;color:#111111;font-weight:bold;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:1px;">Phone</td>
                <td style="padding:12px 16px;font-size:15px;color:#111111;"><a href="tel:${data.phone}" style="color:#C8A94E;text-decoration:none;">${data.phone}</a></td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#f9f9f9;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:1px;">Email</td>
                <td style="padding:12px 16px;background:#f9f9f9;font-size:15px;color:#111111;"><a href="mailto:${data.email}" style="color:#C8A94E;text-decoration:none;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding:12px 16px;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:1px;">Service</td>
                <td style="padding:12px 16px;font-size:15px;color:#111111;">${SERVICE_LABELS[data.service] || data.service}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#f9f9f9;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:1px;">Postcode</td>
                <td style="padding:12px 16px;background:#f9f9f9;font-size:15px;color:#111111;">${data.postcode}</td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- CTA -->
        <tr>
          <td style="padding:0 40px 36px;text-align:center;">
            <a href="tel:${data.phone}" style="display:inline-block;background:#C8A94E;color:#111111;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:14px 32px;border-radius:4px;">Call ${data.name.split(' ')[0]}</a>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f4f4f4;padding:20px 40px;text-align:center;border-top:1px solid #eeeeee;">
            <p style="margin:0;font-size:11px;color:#aaaaaa;">Leo Luxe Clean · Slough, Berkshire · 01753 257118</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    postcode: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `✨ New Quote Request — ${formData.name} (${SERVICE_LABELS[formData.service] || formData.service})`,
          from_name: 'Leo Luxe Clean Website',
          replyto: formData.email,
          message: buildEmailHtml(formData),
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
        router.push('/thank-you');
      } else {
        setError('Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-surface-black"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Left info */}
          <div className="lg:col-span-5">
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
                  className="flex items-center gap-4 py-3 px-4 rounded-lg bg-surface-dark border border-surface-border/50 hover:border-gold/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-neutral-400 text-[10px] uppercase tracking-wide">
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
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-surface-dark border border-surface-border/50 p-8 lg:p-10">
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
                      <label htmlFor="contact-name" className="label-caps text-neutral-400 text-[10px] block mb-2">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-surface-black border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-neutral-600"
                        placeholder="e.g. Sarah Mitchell"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="label-caps text-neutral-400 text-[10px] block mb-2">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-surface-black border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-neutral-600"
                        placeholder="e.g. 07700 000 000"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="contact-email" className="label-caps text-neutral-400 text-[10px] block mb-2">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-surface-black border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-neutral-600"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="label-caps text-neutral-400 text-[10px] block mb-2">
                        What Do You Need? <span className="text-neutral-600 normal-case font-normal">(optional)</span>
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
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
                    <label htmlFor="contact-postcode" className="label-caps text-neutral-400 text-[10px] block mb-2">
                      Postcode
                    </label>
                    <input
                      id="contact-postcode"
                      type="text"
                      required
                      value={formData.postcode}
                      onChange={(e) =>
                        setFormData({ ...formData, postcode: e.target.value.toUpperCase() })
                      }
                      className="w-full bg-surface-black border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-neutral-600"
                      placeholder="e.g. SL4 1AB"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-gold label-caps py-4 rounded-lg mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending…' : 'Get My Free Quote →'}
                  </button>
                  {error && (
                    <p className="text-red-400 text-xs text-center mt-3">{error}</p>
                  )}
                  <p className="text-neutral-500 text-xs text-center mt-4">
                    No obligation — Free quote — Response within 2 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-surface-border/40">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39783.14812455106!2d-0.6306!3d51.5105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767a1e7e50f031%3A0xbb6e4f13d6c9d913!2sSlough!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
            width="100%"
            height="350"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Leo Luxe Clean coverage area — Slough, Berkshire"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
