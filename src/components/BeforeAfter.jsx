'use client';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PAIRS = [
  {
    before: '/before-kitchen.jpg',
    after: '/after-kitchen.jpg',
    label: 'Kitchen Deep Clean',
    location: 'Windsor',
  },
  {
    before: '/before-bathroom.jpg',
    after: '/after-bathroom.jpg',
    label: 'Bathroom Clean',
    location: 'Ascot',
  },
  {
    before: '/before-lounge.jpg',
    after: '/after-lounge.jpg',
    label: 'Living Room Clean',
    location: 'Maidenhead',
  },
];

function Slider({ before, after, label, location }) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const getPositionFromEvent = useCallback((e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  }, []);

  const onMove = useCallback((e) => {
    if (!dragging) return;
    e.preventDefault();
    setPosition(getPositionFromEvent(e));
  }, [dragging, getPositionFromEvent]);

  const onUp = useCallback(() => setDragging(false), []);

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
      window.addEventListener('touchmove', onMove, { passive: false });
      window.addEventListener('touchend', onUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [dragging, onMove, onUp]);

  return (
    <div className="rounded-2xl overflow-hidden border border-surface-border/50 bg-surface-dark">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] select-none cursor-ew-resize touch-none"
        onMouseDown={(e) => { setDragging(true); setPosition(getPositionFromEvent(e)); }}
        onTouchStart={(e) => { setDragging(true); setPosition(getPositionFromEvent(e)); }}
      >
        {/* After image — full width underneath */}
        <div className="absolute inset-0">
          <Image src={after} alt={`After — ${label}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute top-3 right-3 bg-gold/90 text-surface-black label-caps text-[9px] px-2.5 py-1 rounded-full font-semibold">
            After
          </div>
        </div>

        {/* Before image — clipped to left of handle */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image src={before} alt={`Before — ${label}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute top-3 left-3 bg-surface-black/80 border border-white/10 text-white label-caps text-[9px] px-2.5 py-1 rounded-full">
            Before
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/70 pointer-events-none"
          style={{ left: `${position}%` }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none z-10"
          style={{ left: `${position}%` }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B0B0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" style={{ transform: 'scaleX(-1)', transformOrigin: '6px 12px' }} />
          </svg>
        </div>

        {/* Drag hint — fades after first interaction */}
        {position === 50 && (
          <div className="absolute inset-x-0 bottom-3 flex justify-center pointer-events-none">
            <span className="bg-black/50 text-white/70 text-[10px] label-caps px-3 py-1 rounded-full backdrop-blur-sm">
              Drag to compare
            </span>
          </div>
        )}
      </div>

      <div className="px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-white text-sm font-medium">{label}</p>
          <p className="text-neutral-500 text-xs mt-0.5">{location}</p>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#C8A94E" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

const BeforeAfter = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="py-24 lg:py-32 bg-surface-black">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-12">
          <p className="label-caps text-gold text-xs mb-4 tracking-widest">Real Results</p>
          <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
            See the difference
            <br />
            <span className="text-gold-gradient">we actually make.</span>
          </h2>
          <p className="text-neutral-400 text-base max-w-lg leading-relaxed">
            Drag each slider to compare before and after — these are real homes, real cleans, real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAIRS.map((pair) => (
            <Slider key={pair.label} {...pair} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
