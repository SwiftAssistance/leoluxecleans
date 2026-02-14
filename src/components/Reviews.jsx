import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
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
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goTo = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  // Swipe handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

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

        {/* Single review carousel */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div
            className="border border-surface-border/40 rounded-2xl p-8 lg:p-12 relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Quote size={32} className="text-gold/20 mb-6" />

            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-surface-border/30">
              <div
                className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500"
                style={{ width: `${((current + 1) / reviews.length) * 100}%` }}
              />
            </div>

            {/* Review content with crossfade */}
            <div className="relative min-h-[220px] sm:min-h-[160px] md:min-h-[140px]">
              {reviews.map((r, i) => (
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
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} size={13} fill="#C8A94E" strokeWidth={0} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-surface-border/60 flex items-center justify-center text-gold hover:border-gold/40 transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-1">
              {reviews.map((_, i) => (
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

            <button
              onClick={next}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-surface-border/60 flex items-center justify-center text-gold hover:border-gold/40 transition-all duration-300"
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
