import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const allReviews = [
  {
    text: "Honestly can't recommend Leo Luxe enough. They cleaned our whole house before we moved in and it was absolutely spotless. The attention to detail was incredible — places I'd never even think to clean. Will definitely be using them regularly.",
    author: 'Sarah Mitchell',
    role: 'Homeowner, Slough',
    initial: 'S',
  },
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
  const [cardRef, cardVisible] = useScrollReveal({ threshold: 0.2 });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % allReviews.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + allReviews.length) % allReviews.length);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const review = allReviews[current];

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
            headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
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

        {/* Single review carousel */}
        <div
          ref={cardRef}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            cardVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="glass-card rounded-2xl p-8 lg:p-12 border-gold/20 relative overflow-hidden">
            <Quote size={32} className="text-gold/30 mb-6" />

            {/* Review content with crossfade */}
            <div className="relative min-h-[240px] sm:min-h-[180px] md:min-h-[140px]">
              {allReviews.map((r, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${
                    i === current
                      ? 'opacity-100 translate-x-0 relative'
                      : 'opacity-0 absolute inset-0 pointer-events-none'
                  } ${
                    i === current && direction > 0
                      ? 'animate-slide-in-right'
                      : i === current && direction < 0
                        ? 'animate-slide-in-left'
                        : ''
                  }`}
                >
                  <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed font-light mb-8">
                    "{r.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold heading-serif text-lg">
                      {r.initial}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        {r.author}
                      </p>
                      <p className="text-neutral-500 text-xs">{r.role}</p>
                    </div>
                    <div className="ml-auto">
                      <StarRating size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Prev / Next */}
            <button
              onClick={prev}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full glass-card flex items-center justify-center text-gold hover:border-gold/40 hover:shadow-gold-sm transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1">
              {allReviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="relative flex items-center justify-center w-10 h-10"
                  aria-label={`Go to review ${i + 1}`}
                >
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-8 h-2 bg-gold'
                        : 'w-2 h-2 bg-surface-border hover:bg-gold/40'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full glass-card flex items-center justify-center text-gold hover:border-gold/40 hover:shadow-gold-sm transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
