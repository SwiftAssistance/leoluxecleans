import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const sideReviews = [
  {
    text: 'We use them for our office every week. Always on time, always thorough, and the team are really lovely. Makes such a difference to the workplace.',
    author: 'David Chen',
    role: 'Business Owner, Windsor',
    initial: 'D',
  },
  {
    text: 'Had them do a deep clean before our baby arrived. They got into every nook and cranny. Brilliant service from start to finish.',
    author: 'Priya Sharma',
    role: 'Homeowner, Langley',
    initial: 'P',
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

const StarRating = ({ size = 12 }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, j) => (
      <Star key={j} size={size} fill="#C8A94E" strokeWidth={0} />
    ))}
  </div>
);

const Reviews = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [featuredRef, featuredVisible] = useScrollReveal({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="reviews"
      className="py-24 lg:py-32 bg-surface-black relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16 lg:mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <p className="label-caps text-gold mb-4">Testimonials</p>
            <h2 className="heading-serif text-4xl lg:text-6xl text-white">
              What People Say
            </h2>
          </div>
          <div className="flex items-center gap-1 text-gold">
            <StarRating size={16} />
            <span className="text-neutral-400 text-sm ml-2">
              5.0 from 200+ reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Featured review */}
          <div
            ref={featuredRef}
            className={`lg:col-span-5 glass-card rounded-2xl p-8 lg:p-10 flex flex-col border-gold/20 hover:border-gold/30 transition-all duration-700 ${
              featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <Quote size={28} className="text-gold/40 mb-5" />
            <p className="text-white text-lg lg:text-xl leading-relaxed flex-grow mb-8 font-light">
              "Honestly can't recommend Leo Luxe enough. They cleaned our whole
              house before we moved in and it was absolutely spotless. The
              attention to detail was incredible — places I'd never even think to
              clean. Will definitely be using them regularly."
            </p>
            <div className="flex items-center gap-4 border-t border-gold/10 pt-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold heading-serif text-lg">
                S
              </div>
              <div>
                <p className="text-white text-sm font-medium">Sarah Mitchell</p>
                <p className="text-neutral-500 text-xs">Homeowner, Slough</p>
              </div>
              <div className="flex ml-auto gap-0.5">
                <StarRating />
              </div>
            </div>
          </div>

          {/* Side reviews */}
          <div ref={gridRef} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sideReviews.map((t, i) => (
              <div
                key={i}
                className={`glass-card rounded-xl p-6 flex flex-col hover:border-gold/20 transition-all duration-700 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-3">
                  <StarRating size={11} />
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed flex-grow mb-5">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 border-t border-surface-border/50 pt-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xs heading-serif">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">{t.author}</p>
                    <p className="text-neutral-600 text-[10px]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
