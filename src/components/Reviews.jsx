import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const reviews = [
  {
    text: "Honestly can't recommend Leo Luxe enough. They cleaned our whole house before we moved in and it was absolutely spotless. The attention to detail was incredible — places I'd never even think to clean.",
    author: 'Sarah Mitchell',
    role: 'Homeowner, Slough',
    initial: 'S',
  },
  {
    text: 'We use them for our office every week. Always on time, always thorough, and the team are really lovely.',
    author: 'David Chen',
    role: 'Business Owner, Windsor',
    initial: 'D',
  },
  {
    text: 'End of tenancy clean was perfect. Got our full deposit back. They even cleaned inside the oven which I thought was a lost cause!',
    author: 'James Taylor',
    role: 'Tenant, Slough',
    initial: 'J',
  },
  {
    text: "After our daughter's birthday party the place was a state. Leo Luxe came next morning and had it spotless by lunchtime. Absolute lifesaver.",
    author: 'Rebecca Osei',
    role: 'Homeowner, Windsor',
    initial: 'R',
  },
];

const Reviews = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark to-surface-black"></div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <div>
            <h2 className="heading-serif text-4xl lg:text-6xl text-white">
              What People Say
            </h2>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="#C8A94E" strokeWidth={0} />
                ))}
              </div>
              <span className="text-neutral-500 text-sm">
                5.0 from 200+ reviews
              </span>
            </div>
          </div>
          <Link
            to="/reviews"
            className="label-caps text-gold text-[11px] flex items-center gap-1.5 hover:gap-3 transition-all"
          >
            All reviews <ArrowRight size={12} />
          </Link>
        </div>

        {/* Staggered review grid — different sizes, not identical */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Featured large review */}
          <div
            className={`md:row-span-2 border border-surface-border/40 rounded-2xl p-8 lg:p-10 flex flex-col justify-between transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div>
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} fill="#C8A94E" strokeWidth={0} />
                ))}
              </div>
              <p className="text-white text-lg lg:text-xl leading-relaxed font-light">
                "{reviews[0].text}"
              </p>
            </div>
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-surface-border/30">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm heading-serif">
                {reviews[0].initial}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{reviews[0].author}</p>
                <p className="text-neutral-600 text-xs">{reviews[0].role}</p>
              </div>
            </div>
          </div>

          {/* Smaller reviews */}
          {reviews.slice(1).map((r, i) => (
            <div
              key={i}
              className={`border border-surface-border/40 rounded-2xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} fill="#C8A94E" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  "{r.text}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-surface-border/30">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xs heading-serif">
                  {r.initial}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{r.author}</p>
                  <p className="text-neutral-600 text-xs">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
