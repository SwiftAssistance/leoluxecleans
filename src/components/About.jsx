import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { useScrollReveal, useCounter } from '../hooks/useScrollReveal';

const features = [
  { icon: <ShieldCheck size={16} />, text: 'Fully Insured & DBS Checked' },
  { icon: <Sparkles size={16} />, text: 'Eco-Friendly Products' },
  { icon: <Award size={16} />, text: 'Uniformed, Trained Team' },
  { icon: <CheckCircle2 size={16} />, text: 'Not Happy? We Come Back Free' },
];

const About = () => {
  const [imageRef, imageVisible] = useScrollReveal({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.2 });
  const [counterRef, yearsCount] = useCounter(12);

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-surface-black relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left image stack */}
          <div
            ref={imageRef}
            className={`lg:col-span-6 relative transition-all duration-1000 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581578731117-104f2a8d275d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our cleaning team at work"
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Animated experience badge */}
              <div
                ref={counterRef}
                className={`absolute -bottom-6 -right-4 lg:-right-8 btn-gold rounded-2xl p-6 shadow-gold-lg z-10 transition-all duration-700 ${
                  imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <span className="heading-serif text-5xl block text-surface-black leading-none">
                  {yearsCount}+
                </span>
                <span className="label-caps text-[10px] text-surface-black/60 mt-1 block">
                  Years
                </span>
              </div>

              {/* Overlapping small image */}
              <div
                className={`hidden lg:block absolute -left-8 bottom-24 w-40 h-48 rounded-xl overflow-hidden border-4 border-surface-black shadow-2xl z-10 transition-all duration-700 ${
                  imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Cleaning detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right content */}
          <div
            ref={contentRef}
            className={`lg:col-span-6 lg:pl-8 transition-all duration-1000 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <p className="label-caps text-gold mb-4">About Us</p>
            <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-6">
              Local Team.
              <br />
              Proper Standards.
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-10 font-light text-[15px]">
              We started Leo Luxe because we got tired of hearing about cleaners
              who rush in, do the bare minimum, and disappear. That's not us. Our
              team is based right here in Slough — we know the area, we know our
              clients, and we take genuine pride in the work. Every member is DBS
              checked, trained by us, and held to the same standard: if you
              wouldn't be happy with it, neither are we.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg bg-surface-dark/60 border border-surface-border/50 hover:border-gold/20 hover:bg-surface-dark transition-all duration-300 ${
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <span className="text-gold">{f.icon}</span>
                  <span className="text-neutral-300 text-sm">{f.text}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="btn-gold label-caps px-8 py-3.5 rounded-lg inline-flex items-center gap-2 group"
            >
              More About Us{' '}
              <ArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
