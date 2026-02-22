import React from 'react';
import { Link } from 'react-router-dom';
import { useQuoteModal } from '../context/QuoteModalContext';
import {
  ArrowRight,
  CheckCircle2,
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
import Seo, { breadcrumbSchema } from '../components/Seo';
import { useScrollReveal } from '../hooks/useScrollReveal';

const values = [
  {
    icon: <Heart size={22} />,
    title: 'We Actually Care',
    desc: "It's our name on the door. If your place isn't spotless, we haven't done our job.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Trusted & Vetted',
    desc: 'Every team member is DBS checked, fully insured, and trained by us. No agency staff.',
  },
  {
    icon: <Leaf size={22} />,
    title: 'Eco-Friendly',
    desc: 'Professional-grade products that are tough on dirt but gentle on the environment.',
  },
  {
    icon: <Clock size={22} />,
    title: 'Reliable & Punctual',
    desc: 'We show up on time, every time. And if anything changes, we let you know first.',
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
      <Seo
        title="About Us — Leo Luxe Clean | Slough & Berkshire"
        description="Meet the team behind Leo Luxe Clean. A new, independent cleaning company in Slough, Windsor & Berkshire. DBS checked, fully insured, eco-friendly. Built on trust."
        canonical="/about"
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'About' },
        ])}
      />
      <PageHero
        title={<>About <span className="text-gold-gradient">Leo Luxe</span></>}
        subtitle="We're a small, independent cleaning team based in Slough. New to the name, but not to the craft — and already trusted by families and businesses across Berkshire."
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
              <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-8">
                We started Leo Luxe because we believed cleaning could be{' '}
                <span className="text-gold-gradient">
                  done properly.
                </span>
              </h2>

              <div className="space-y-5 text-neutral-400 leading-relaxed font-light">
                <p>
                  Before Leo Luxe, we spent years cleaning for other companies —
                  and we kept seeing the same problems. Rushed jobs, inconsistent
                  teams, clients who felt like just another booking on a list.
                  We knew we could do better, so we started our own company.
                </p>
                <p>
                  Leo Luxe is built on a simple idea: treat every home like it's
                  your own. We're a small team, which means you'll see the same
                  familiar faces each visit. We bring our own eco-friendly
                  products, our own equipment, and standards we're genuinely
                  proud of.
                </p>
                <p>
                  We're growing steadily through word of mouth — and that's
                  exactly how we want it. Every client who recommends us proves
                  we're doing something right.
                </p>
              </div>

              {/* Testimonial inline */}
              <div className="mt-10 rounded-xl border border-surface-border/30 p-6">
                <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} fill="#C8A94E" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                  "Found Leo Luxe through a neighbour's recommendation and I'm so glad I did. You can tell they genuinely care about doing a good job. My house has never been cleaner."
                </p>
                <p className="text-neutral-500 text-xs">
                  Tom Richards — Homeowner, Slough
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/about.svg"
                  alt="Our cleaning team at work"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={800}
                />
              </div>

              <div className="grid grid-cols-3 gap-px mt-px">
                {[
                  { val: '75+', label: 'Homes' },
                  { val: '5.0', label: 'Rating' },
                  { val: '100%', label: 'Insured' },
                ].map((s, i) => (
                  <div key={i} className="bg-surface-dark py-5 text-center">
                    <span className="heading-serif text-2xl lg:text-3xl text-white block">
                      {s.val}
                    </span>
                    <span className="text-neutral-600 text-[10px] label-caps">
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
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div
            ref={promiseRef}
            className={`text-center mb-14 transition-all duration-500 ${
              promiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
              Our Promise to You
            </h2>
            <p className="text-neutral-400 text-sm max-w-lg mx-auto">
              We're a new company earning your trust from day one. Here's how we hold ourselves accountable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Award size={22} />,
                title: 'Satisfaction Guarantee',
                desc: "Not happy with any part of the clean? We'll come back and redo it at no extra charge. No questions, no fuss.",
              },
              {
                icon: <ShieldCheck size={22} />,
                title: 'Fully Transparent',
                desc: 'Clear pricing upfront, no hidden fees, no contracts. You know exactly what you\'re paying for before we start.',
              },
              {
                icon: <Handshake size={22} />,
                title: 'Personally Accountable',
                desc: "Leo personally oversees every job. If there's ever an issue, you speak directly to the owner — not a call centre.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-xl border border-surface-border/40 p-6 text-center hover:border-gold/20 transition-all duration-500 ${
                  promiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
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
          <div className="text-center mb-14">
            <h2 className="heading-serif text-4xl lg:text-5xl text-white">
              What We Stand For
            </h2>
          </div>

          <div
            ref={valuesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v, i) => (
              <div
                key={i}
                className={`rounded-xl border border-surface-border/40 p-6 text-center hover:border-gold/20 transition-all duration-500 ${
                  valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
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
            <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
              The People Behind the Clean
            </h2>
            <p className="text-neutral-400 text-sm max-w-md mx-auto">
              Not a franchise. Not a platform. A real, local team that takes pride in their work.
            </p>
          </div>

          <div
            ref={teamRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {[
              {
                name: 'Leo',
                role: 'Founder & Lead Cleaner',
                desc: 'Years of hands-on cleaning experience before starting Leo Luxe. Still personally involved in every job — because standards start at the top.',
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
                className={`rounded-xl border border-surface-border/40 p-8 text-center transition-all duration-500 ${
                  teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center text-gold heading-serif text-3xl mx-auto mb-5">
                  {member.initial}
                </div>
                <h3 className="text-white text-lg font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-gold text-xs label-caps mb-3">
                  {member.role}
                </p>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
              Why People Choose Us
            </h2>
            <p className="text-neutral-400 text-sm">
              We might be new, but we've built our reputation on the things that matter most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              'Growing through recommendations, not ads',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-3 px-4 rounded-lg border border-surface-border/40"
              >
                <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                <span className="text-neutral-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-surface-dark border-y border-surface-border/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
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
              href="tel:01753257118"
              className="btn-outline-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
              aria-label="Call our landline at 01753 257118"
            >
              <Phone size={16} /> 01753 257118
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
