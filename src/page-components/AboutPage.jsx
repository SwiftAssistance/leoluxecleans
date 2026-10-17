'use client';
import React from 'react';
import Link from 'next/link';
import { useQuoteModal } from '../context/QuoteModalContext';
import {
  ArrowRight,
  Star,
  Leaf,
  ShieldCheck,
  Heart,
  Clock,
  Phone,
  Award,
  Handshake,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { business } from '../config/business';
import { getReview } from '../data/reviews';

const aboutReview = getReview('lucy-charge');

const values = [
  {
    icon: <Heart size={22} />,
    title: "It's Our Name On It",
    desc: "If your place isn't clean when we leave, we haven't done our job. Simple as that.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'DBS Checked, Always',
    desc: 'Every team member is DBS checked and insured. No agency staff, no strangers.',
  },
  {
    icon: <Leaf size={22} />,
    title: 'Products That Work',
    desc: "We use cleaning products that actually do the job — and won't damage your surfaces or harm your family.",
  },
  {
    icon: <Clock size={22} />,
    title: 'We Show Up',
    desc: "On time, every time. If something changes, you hear from us first — not after you've been waiting.",
  },
];

const AboutPage = () => {
  const { openModal } = useQuoteModal();
  const [storyRef, storyVisible] = useScrollReveal({ threshold: 0.1 });
  const [valuesRef, valuesVisible] = useScrollReveal({ threshold: 0.05 });
  const [teamRef, teamVisible] = useScrollReveal({ threshold: 0.1 });
  const [promiseRef, promiseVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <PageHero
        title={<>About <span className="text-gold-gradient">Leo Luxe</span></>}
        kicker="Local cleaning company in Slough, Berkshire"
        subtitle="A small cleaning team based in Slough. Not a franchise, not a call centre: a local team that does the work properly."
        breadcrumb="About"
      />

      {/* Story */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div
              ref={storyRef}
              className={`lg:col-span-7 transition-all duration-500 ${
                storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="display text-[2rem] lg:text-[2.75rem] text-white mb-8">
                Leo Luxe Clean was started by cleaners who were tired of{' '}
                <span className="text-gold-gradient">
                  how it was being done.
                </span>
              </h2>

              <div className="space-y-5 text-neutral-400 leading-relaxed font-light">
                <p>
                  Leo Luxe Clean was started by cleaners who were tired of how
                  it was being done. Across Slough and Berkshire, the jobs got
                  done, but rarely the way you&apos;d want your own home done:
                  quick in, quick out, whoever happened to be free that day.
                </p>
                <p>
                  The idea was to do it differently. Small enough that every
                  job matters. The same team on every visit where we can. The
                  people running the business close enough to the work to know
                  exactly what happened on each job.
                </p>
                <p>
                  We are still a small, local business, based in George Green on
                  the edge of Slough. Every review we get on Google matters to
                  us, and so does every repeat booking.
                </p>
              </div>

              {/* Testimonial inline */}
              <div className="mt-12 border-l-2 border-gold pl-6 lg:pl-8">
                <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} fill="#C8A94E" strokeWidth={0} />
                  ))}
                </div>
                <p className="heading-serif text-2xl lg:text-[1.75rem] text-neutral-200 mb-4" style={{ lineHeight: 1.3, fontWeight: 400 }}>
                  &ldquo;{aboutReview.text}&rdquo;
                </p>
                <p className="label-caps text-[10px] text-neutral-500">
                  {aboutReview.displayName}, Google review
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden">
                <img
                  src="/about.jpg"
                  alt="Three Leo Luxe Clean cleaners in branded uniforms cleaning a bathroom"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={800}
                />
              </div>

              <div className="grid grid-cols-3 mt-6 divide-x divide-surface-border/50">
                {[
                  { val: business.google.ratingDisplay, label: 'On Google' },
                  { val: String(business.google.reviewCount), label: 'Google reviews' },
                  { val: 'DBS', label: 'Checked' },
                ].map((s, i) => (
                  <div key={i} className="py-2 px-4 first:pl-0">
                    <span className="heading-serif text-3xl lg:text-4xl text-gold block">
                      {s.val}
                    </span>
                    <span className="text-neutral-400 text-[10px] label-caps">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise — transparency section for new business trust */}
      <section className="py-16 lg:py-24 bg-surface-dark border-y border-surface-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            ref={promiseRef}
            className={`mb-14 transition-all duration-500 ${
              promiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="display text-4xl lg:text-5xl text-white mb-4">
              What to Expect
            </h2>
            <p className="text-neutral-400 text-sm max-w-lg">
              Here's what every booking with Leo Luxe includes, no exceptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            {[
              {
                icon: <Award size={22} />,
                title: 'We Come Back If Needed',
                desc: "Not happy with something? Tell us and we'll come back and sort it. Same week, no charge. That's the deal.",
              },
              {
                icon: <ShieldCheck size={22} />,
                title: 'Clear Pricing, No Surprises',
                desc: "You get a price before we start. No contracts, no minimum term. If the job changes, we tell you first.",
              },
              {
                icon: <Handshake size={22} />,
                title: 'You Deal With Us Directly',
                desc: `If there's a problem, you call ${business.phone.display} and speak to the people who run the business, not a call centre.`,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`border-t border-gold/40 pt-6 transition-all duration-500 ${
                  promiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-gold mb-4">{item.icon}</div>
                <h3 className="heading-serif text-2xl text-white mb-2">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <h2 className="display text-4xl lg:text-5xl text-white">
              How We Work
            </h2>
          </div>

          <div
            ref={valuesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12"
          >
            {values.map((v, i) => (
              <div
                key={i}
                className={`border-t border-surface-border/60 pt-6 transition-all duration-500 ${
                  valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-gold mb-4">{v.icon}</div>
                <h3 className="heading-serif text-2xl text-white mb-2">{v.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="display text-4xl lg:text-5xl text-white mb-4">
              The Team
            </h2>
            <p className="text-neutral-400 text-sm max-w-md mx-auto">
              Local, trained in-house, and the same faces on every visit.
            </p>
          </div>

          <div
            ref={teamRef}
            className="rule-list max-w-5xl mx-auto"
          >
            {[
              {
                name: 'Who Runs It',
                role: 'Owner-Managed',
                desc: 'The business is run by people who clean themselves and are involved in the work day to day, so standards are set by people who know the job.',
                initial: 'L',
              },
              {
                name: 'The Cleaning Team',
                role: 'Trained & DBS Checked',
                desc: "Handpicked and trained to our standards. You'll get to know them by name — we don't rotate staff unless you ask us to.",
                initial: 'T',
              },
            ].map((member, i) => (
              <div
                key={i}
                className={`grid grid-cols-12 gap-4 lg:gap-8 py-10 items-baseline transition-all duration-500 ${
                  teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="col-span-3 md:col-span-2 heading-serif text-6xl lg:text-8xl text-gold/30 leading-none" aria-hidden="true">
                  {member.initial}
                </span>
                <div className="col-span-9 md:col-span-4">
                  <h3 className="heading-serif text-3xl text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold text-xs label-caps">
                    {member.role}
                  </p>
                </div>
                <p className="col-start-4 col-span-9 md:col-start-auto md:col-span-6 text-neutral-400 text-[15px] leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="display text-4xl lg:text-5xl text-white mb-4">
              Why Clients Stick Around
            </h2>
            <p className="text-neutral-400 text-sm">
              The basics done right, every time.
            </p>
          </div>

          <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 border-t border-surface-border/45">
            {[
              'DBS checked and fully insured',
              'Eco-friendly, professional-grade products',
              '100% satisfaction guarantee',
              'Consistent team — same faces every time',
              'Flexible scheduling (including weekends)',
              'No contracts or hidden fees',
              'Same-week availability',
              'We bring all our own equipment',
              'Owner-managed — direct accountability',
            ].map((item, i) => (
              <li key={i} className="flex items-baseline gap-4 py-5 border-b border-surface-border/45">
                <span className="text-gold" aria-hidden="true">—</span>
                <span className="text-neutral-200 text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-surface-dark border-y border-surface-border/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="display text-4xl lg:text-5xl text-white mb-4">
            Want to see what proper clean looks like?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote. We'll have you sorted within the week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal()}
              className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight size={14} />
            </button>
            <a
              href={business.phone.href}
              className="btn-outline-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
              aria-label={`Call us on ${business.phone.display}`}
            >
              <Phone size={16} /> {business.phone.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
