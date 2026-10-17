'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { business } from '../config/business';

const contactItems = [
  {
    label: 'Call us',
    value: business.phone.display,
    href: business.phone.href,
  },
  {
    label: 'Email us',
    value: business.email,
    href: `mailto:${business.email}`,
  },
  {
    label: 'Find us',
    value: business.address.singleLine,
    href: null,
  },
  {
    label: 'Response',
    value: `Reply ${business.responseTime}`,
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
            <p style="margin:0;font-size:11px;color:#aaaaaa;">${business.name} · ${business.address.singleLine} · ${business.phone.display}</p>
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
            <h2 className="display text-6xl lg:text-7xl text-white mb-8">
              Get Your Free
              <br />
              <span className="text-gold-gradient">Quote Today</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed font-light mb-10">
              Drop us your details and we'll get back to you {business.responseTime} with
              a clear, honest price. No hidden fees, no obligation.
            </p>

            <div className="rule-list mb-8">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-baseline gap-6 py-4">
                  <p className="label-caps text-neutral-500 text-[10px] w-20 flex-shrink-0">
                    {item.label}
                  </p>
                  <div>
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
            <div className="lg:pl-12 lg:border-l border-surface-border/50">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 animate-bounce-once">
                    <CheckCircle2 size={32} className="text-gold" />
                  </div>
                  <h3 className="heading-serif text-3xl text-white mb-3">
                    Thank You!
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    We'll be in touch {business.responseTime} with your quote.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 mb-7">
                    <div>
                      <label htmlFor="contact-name" className="label-caps text-neutral-500 text-[10px] block">
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
                        className="field"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="label-caps text-neutral-500 text-[10px] block">
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
                        className="field"
                        placeholder="e.g. 07700 000 000"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 mb-7">
                    <div>
                      <label htmlFor="contact-email" className="label-caps text-neutral-500 text-[10px] block">
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
                        className="field"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="label-caps text-neutral-500 text-[10px] block">
                        What Do You Need? <span className="text-neutral-600 normal-case font-normal">(optional)</span>
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="field appearance-none"
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
                  <div className="mb-8">
                    <label htmlFor="contact-postcode" className="label-caps text-neutral-500 text-[10px] block">
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
                      className="field"
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
                    No obligation — Free quote — Response {business.responseTime}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-20 overflow-hidden">
          <iframe
            src={business.google.mapEmbedUrl}
            width="100%"
            height="350"
            style={{ border: 0, filter: 'grayscale(1) sepia(0.2) contrast(0.95)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Leo Luxe Clean on Google Maps"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
