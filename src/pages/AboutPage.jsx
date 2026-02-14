import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Leaf,
  ShieldCheck,
  Heart,
  Clock,
  Phone,
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

const team = [
  {
    name: 'Leo',
    role: 'Founder & Lead',
    desc: 'Started Leo Luxe over 10 years ago. Still personally oversees every team and every clean.',
    initial: 'L',
  },
  {
    name: 'The Cleaning Team',
    role: 'Trained & DBS Checked',
    desc: "Handpicked and trained to our standards. They're the ones who make your space shine.",
    initial: 'T',
  },
];

const AboutPage = () => {
  const [storyRef, storyVisible] = useScrollReveal({ threshold: 0.1 });
  const [valuesRef, valuesVisible] = useScrollReveal({ threshold: 0.05 });
  const [teamRef, teamVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <Seo
        title="About Us — Leo Luxe Cleans | Slough & Berkshire"
        description="Meet the team behind Leo Luxe Cleans. 10+ years of professional cleaning in Slough, Windsor & Berkshire. DBS checked, fully insured, eco-friendly."
        canonical="/about"
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'About' },
        ])}
      />
      <PageHero
        title={<>About <span className="text-gold-gradient">Leo Luxe</span></>}
        subtitle="We're a small, local cleaning team in Slough. We've been at this for over a decade — and we're still obsessed with getting it right."
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
                We started because we kept hearing the same thing —{' '}
                <span className="text-gold-gradient">
                  "they rushed in, did the bare minimum, and left."
                </span>
              </h2>

              <div className="space-y-5 text-neutral-400 leading-relaxed font-light">
                <p>
                  That's not us. Leo Luxe has been cleaning homes and businesses
                  across Slough, Windsor, and Berkshire for over ten years.
                  Our team is local, DBS checked, and trained by us — not
                  pulled from a database.
                </p>
                <p>
                  We bring our own products (eco-friendly), our own equipment,
                  and our own standards. If you wouldn't be happy with it,
                  neither are we.
                </p>
                <p>
                  We're not trying to be the biggest cleaning company in
                  Berkshire. We're trying to be the one people actually
                  recommend to their friends.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581578731117-104f2a8d275d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our cleaning team at work"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="grid grid-cols-3 gap-px mt-px">
                {[
                  { val: '10+', label: 'Years' },
                  { val: '500+', label: 'Homes' },
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

      {/* Values */}
      <section className="py-16 lg:py-24 bg-surface-dark">
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
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="heading-serif text-4xl lg:text-5xl text-white">
              The People Behind the Clean
            </h2>
          </div>

          <div
            ref={teamRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {team.map((member, i) => (
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
      <section className="py-16 lg:py-24 bg-surface-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="heading-serif text-4xl lg:text-5xl text-white">
              Why People Choose Us
            </h2>
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
            <Link
              to="/contact"
              className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight size={14} />
            </Link>
            <a
              href="tel:01753000000"
              className="btn-outline-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
              aria-label="Call us at 01753 000 000"
            >
              <Phone size={16} /> 01753 000 000
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
