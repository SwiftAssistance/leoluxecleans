import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'How much does home cleaning cost in Slough?',
    a: 'Home cleaning in Slough starts from £60. The exact price depends on the size of your property and how often you want us. We give you a clear, fixed quote before any work starts — no hidden extras.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We\'re based in Slough (SL1) and cover Windsor, Langley, Maidenhead, Eton, Burnham, Ascot, Bracknell, and most of West London including Hayes, Southall, Uxbridge, Ealing, Greenford, Northolt, West Drayton, and Hounslow.',
  },
  {
    q: 'Are your cleaners DBS checked?',
    a: 'Yes — every member of our team is DBS checked and fully insured. We can provide documentation on request. We don\'t use agency staff or sub-contractors.',
  },
  {
    q: 'Do you bring your own products and equipment?',
    a: 'We bring everything — cleaning products, equipment, and supplies. You don\'t need to provide anything. If you have specific product preferences (for allergies or sensitivities), just let us know when booking.',
  },
  {
    q: 'How quickly can you start?',
    a: 'Most weeks we can fit a new booking within the same week. Call us on 01753 257118 or fill in the quote form and we\'ll confirm availability, usually within a couple of hours.',
  },
  {
    q: 'Do I need to be home when you clean?',
    a: 'Not at all. Most of our regular clients give us a key or leave access instructions. We\'re DBS checked and insured, so your home is in safe hands.',
  },
  {
    q: 'What does an end of tenancy clean include?',
    a: 'Everything on a standard inventory checklist: inside all cupboards and drawers, behind appliances, oven degreased, bathroom descaled, carpets vacuumed and spot-treated, windows cleaned inside, all surfaces done. If your landlord raises any cleaning issues, we come back within 48 hours at no extra charge.',
  },
  {
    q: 'What if I\'m not happy with the clean?',
    a: 'Tell us. If something\'s been missed or hasn\'t been done to standard, we\'ll come back and sort it — same week, no charge. That\'s the guarantee on every job.',
  },
];

const HomeFaq = () => {
  const [open, setOpen] = useState(null);
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="py-20 lg:py-28 bg-surface-black" id="faq">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="label-caps text-gold mb-3 text-[11px]">Common Questions</p>
          <h2 className="heading-serif text-4xl lg:text-5xl text-white">
            Frequently Asked
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-500 ${
                open === i
                  ? 'border-gold/20 bg-surface-dark'
                  : 'border-surface-border/40 bg-surface-dark/50'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <button
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-white text-sm font-medium leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-gold flex-shrink-0 mt-0.5 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 label-caps text-gold text-[11px] hover:gap-3 transition-all"
          >
            Got another question? Get in touch <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
