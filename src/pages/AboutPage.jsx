import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowRight,
  Heart,
  Users,
  Leaf,
  Clock,
  Star,
  Phone,
} from 'lucide-react';
import Seo, { breadcrumbSchema } from '../components/Seo';
import PageHero from '../components/PageHero';
import { useScrollReveal, useCounter } from '../hooks/useScrollReveal';

const values = [
  {
    icon: <Heart size={24} />,
    title: 'Genuine Care',
    desc: 'We treat every home like our own. Your space matters to us, and it shows in the results.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Trust & Safety',
    desc: 'Fully insured and DBS checked. Every team member is vetted so you can feel completely safe.',
  },
  {
    icon: <Leaf size={24} />,
    title: 'Eco-Friendly',
    desc: 'We use environmentally responsible products that are tough on dirt but gentle on the planet.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Reliable & Punctual',
    desc: 'We turn up on time, every time. No-shows and last-minute cancellations aren\'t in our vocabulary.',
  },
];

const stats = [
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Homes Cleaned' },
  { value: 200, suffix: '+', label: 'Five-Star Reviews' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate' },
];

const team = [
  {
    name: 'Leo',
    role: 'Founder & Lead',
    initial: 'L',
    desc: 'Started Leo Luxe Cleans over 12 years ago with a simple mission: deliver cleaning services that actually meet people\'s standards.',
  },
  {
    name: 'Maria',
    role: 'Operations Manager',
    initial: 'M',
    desc: 'Keeps everything running smoothly behind the scenes. Maria ensures every booking, team, and schedule is perfectly coordinated.',
  },
  {
    name: 'James',
    role: 'Senior Cleaner',
    initial: 'J',
    desc: 'Eight years with the team. James leads our specialist cleaning services and trains every new team member.',
  },
];

const AboutPage = () => {
  const [storyRef, storyVisible] = useScrollReveal({ threshold: 0.2 });
  const [valuesRef, valuesVisible] = useScrollReveal({ threshold: 0.1 });
  const [statsRef, statsVisible] = useScrollReveal({ threshold: 0.2 });
  const [teamRef, teamVisible] = useScrollReveal({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.3 });

  const [counter1Ref, count1] = useCounter(stats[0].value);
  const [counter2Ref, count2] = useCounter(stats[1].value);
  const [counter3Ref, count3] = useCounter(stats[2].value);
  const [counter4Ref, count4] = useCounter(stats[3].value);
  const counts = [count1, count2, count3, count4];
  const counterRefs = [counter1Ref, counter2Ref, counter3Ref, counter4Ref];

  return (
    <>
      <Seo
        title="About Us — Local Cleaners in Slough & Berkshire"
        description="Meet the Leo Luxe Cleans team. 12+ years of professional cleaning in Slough, Windsor & Berkshire. Fully insured, DBS checked, eco-friendly. Learn our story."
        canonical="/about"
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'About' },
        ])}
      />
      <PageHero
        title={
          <>
            About <span className="text-gold-gradient">Leo Luxe</span>
          </>
        }
        subtitle="We're not just another cleaning company. We're a team that genuinely cares about doing a brilliant job — every single time."
        breadcrumb="About"
      />

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-surface-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div
            ref={storyRef}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
            {/* Image */}
            <div
              className={`lg:col-span-6 relative transition-all duration-1000 ${
                storyVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1581578731117-104f2a8d275d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Our cleaning team at work"
                    className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

                <div className="hidden lg:block absolute -left-8 bottom-24 w-40 h-48 rounded-xl overflow-hidden border-4 border-surface-black shadow-2xl z-10">
                  <img
                    src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Cleaning detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className={`lg:col-span-6 lg:pl-8 transition-all duration-1000 ${
                storyVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-12'
              }`}
            >
              <p className="label-caps text-gold mb-4">Our Story</p>
              <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-6">
                Built on Standards,
                <br />
                Driven by Pride
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed font-light text-[15px]">
                <p>
                  Leo Luxe Cleans was founded over 12 years ago in Slough with a
                  simple belief: cleaning should be done properly, or not at all.
                  What started as a one-person operation has grown into a trusted
                  team serving hundreds of homes and businesses across Berkshire.
                </p>
                <p>
                  We've never cut corners, never used cheap products, and never
                  left a job half done. That's why our clients keep coming back —
                  and why the vast majority of our new business comes from word
                  of mouth.
                </p>
                <p>
                  Every member of our team is fully trained, DBS checked, and
                  shares the same commitment to excellence. Whether it's a
                  studio flat or a five-bedroom house, we give it the same
                  attention to detail.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
                {[
                  {
                    icon: <ShieldCheck size={16} />,
                    text: 'Fully Insured & DBS Checked',
                  },
                  { icon: <Sparkles size={16} />, text: 'Eco-Friendly Products' },
                  {
                    icon: <Award size={16} />,
                    text: 'Uniformed, Professional Team',
                  },
                  {
                    icon: <CheckCircle2 size={16} />,
                    text: '100% Satisfaction Guarantee',
                  },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-3 px-4 rounded-lg bg-surface-dark/60 border border-surface-border/50 hover:border-gold/20 transition-all duration-300"
                  >
                    <span className="text-gold">{f.icon}</span>
                    <span className="text-neutral-300 text-sm">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-card to-surface-dark"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>

        <div
          ref={statsRef}
          className="relative max-w-7xl mx-auto px-6 lg:px-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                ref={counterRefs[i]}
                className={`text-center transition-all duration-700 ${
                  statsVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="heading-serif text-5xl lg:text-6xl text-gold-gradient block mb-2">
                  {counts[i]}
                  {stat.suffix}
                </span>
                <span className="label-caps text-neutral-400 text-[10px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-surface-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/[0.03] rounded-full blur-[150px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="label-caps text-gold mb-4">What Drives Us</p>
            <h2 className="heading-serif text-4xl lg:text-6xl text-white">
              Our Values
            </h2>
          </div>

          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className={`glass-card rounded-xl p-8 group transition-all duration-700 ${
                  valuesVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                  {v.icon}
                </div>
                <h3 className="font-sans text-white text-lg font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark to-surface-black"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="label-caps text-gold mb-4">The People</p>
            <h2 className="heading-serif text-4xl lg:text-6xl text-white">
              Meet the Team
            </h2>
          </div>

          <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl p-8 text-center group transition-all duration-700 ${
                  teamVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center text-gold heading-serif text-3xl mx-auto mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                  {member.initial}
                </div>
                <h3 className="font-sans text-white text-lg font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="label-caps text-gold text-[10px] mb-4">
                  {member.role}
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden shimmer">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10"></div>
        <div className="absolute inset-0 bg-surface-dark/90"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div
          ref={ctaRef}
          className={`relative max-w-4xl mx-auto px-6 lg:px-12 text-center transition-all duration-700 ${
            ctaVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
            Ready to experience the difference?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            Join hundreds of happy customers across Berkshire who trust Leo Luxe
            with their spaces.
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
            >
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
