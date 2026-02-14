import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark to-surface-black"></div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — large typographic statement */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="heading-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.1] mb-10">
              We started because we kept hearing the same thing —{' '}
              <span className="text-gold-gradient">
                "they rushed in, did the bare minimum, and left."
              </span>
            </h2>

            <div className="space-y-5 text-neutral-400 leading-relaxed font-light text-[15px] max-w-xl">
              <p>
                That's not us. Leo Luxe has been cleaning homes and businesses
                across Slough, Windsor, and Berkshire for over twelve years.
                Our team is local, DBS checked, and trained by us — not
                pulled from a database.
              </p>
              <p>
                We bring our own products (eco-friendly), our own equipment,
                and our own standards. If you wouldn't be happy with it,
                neither are we. If something's missed, we come back and sort
                it for free.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold label-caps text-[11px] mt-10 hover:gap-3 transition-all"
            >
              Our full story <ArrowRight size={12} />
            </Link>
          </div>

          {/* Right — image with stats overlay */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581578731117-104f2a8d275d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our cleaning team at work"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>

            {/* Stats as text, not badges */}
            <div className="grid grid-cols-3 gap-px mt-px">
              {[
                { val: '12+', label: 'Years' },
                { val: '500+', label: 'Homes' },
                { val: '100%', label: 'Insured' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-surface-dark/80 py-5 text-center"
                >
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
  );
};

export default About;
