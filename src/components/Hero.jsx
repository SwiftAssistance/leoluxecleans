import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Phone,
  Star,
  Home,
  ShieldCheck,
} from 'lucide-react';
import { useParallax } from '../hooks/useScrollReveal';

const badges = [
  {
    icon: <Star size={18} fill="#C8A94E" strokeWidth={0} />,
    value: '5.0',
    label: 'Average Rating',
    sub: '200+ reviews',
  },
  {
    icon: <Home size={18} />,
    value: '500+',
    label: 'Homes Cleaned',
    sub: 'across Berkshire',
  },
  {
    icon: <ShieldCheck size={18} />,
    value: '100%',
    label: 'Satisfaction',
    sub: 'guaranteed',
  },
];

const Hero = () => {
  const parallaxRef = useParallax(0.25);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen clip-diagonal overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0" ref={parallaxRef}>
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Beautiful clean interior"
          className="w-full h-[120%] object-cover"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-1/3 w-[700px] h-[500px] bg-gold/5 rounded-full blur-[140px]"></div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(200,169,78,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,78,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full pt-24 pb-32 lg:pb-40">
          {/* Left CTA */}
          <div className="lg:col-span-7">
            <div
              className={`inline-flex items-center gap-3 glass-card rounded-full px-5 py-2.5 mb-8 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-neutral-300 text-sm">
                Now taking bookings across Berkshire
              </span>
            </div>

            <h1
              className={`heading-serif text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] text-white mb-6 leading-[0.95] transition-all duration-1000 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              Your Space,
              <br />
              <span className="text-gold-gradient">Our Standard</span>
            </h1>

            <p
              className={`text-neutral-400 text-lg leading-relaxed max-w-lg mb-10 font-light transition-all duration-1000 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Professional cleaning across Slough, Windsor & Berkshire. Reliable,
              thorough, and always to the highest standard.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-1000 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              <a
                href="#contact"
                className="btn-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2 group"
              >
                Get Your Free Quote{' '}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="tel:01753000000"
                className="btn-outline-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2"
              >
                <Phone size={16} /> Call Us Now
              </a>
            </div>

            <p
              className={`text-neutral-600 text-xs transition-all duration-1000 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              No obligation. Free quotes. We respond within 2 hours.
            </p>
          </div>

          {/* Right floating badges */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-4 items-end">
            {badges.map((badge, i) => (
              <div
                key={i}
                className={`glass-card rounded-xl px-6 py-4 flex items-center gap-5 w-72 transition-all duration-700 hover:border-gold/30 ${
                  loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
                style={{
                  transform: loaded ? `translateX(${i * -20}px)` : undefined,
                  transitionDelay: `${400 + i * 150}ms`,
                }}
              >
                <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  {badge.icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="heading-serif text-2xl text-white">
                      {badge.value}
                    </span>
                    <span className="text-neutral-400 text-xs">
                      {badge.label}
                    </span>
                  </div>
                  <span className="text-neutral-600 text-[11px]">
                    {badge.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-24 lg:bottom-32 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1000ms' }}
      >
        <span className="text-neutral-500 text-[10px] label-caps">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
