import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image — optimized: webp, responsive, preloaded in index.html */}
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75&fm=webp"
        srcSet="
          https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&q=70&fm=webp 768w,
          https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75&fm=webp 1200w,
          https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=webp 1920w
        "
        sizes="100vw"
        alt="Beautiful clean interior"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        decoding="async"
        width={1200}
        height={800}
      />

      {/* Single combined overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-end min-h-screen pb-24 lg:pb-32 pt-32">
        {/* Availability line */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-neutral-400 text-sm">
            Taking bookings this week across Slough & Berkshire
          </span>
        </div>

        <h1 className="heading-serif text-[clamp(3rem,8vw,7.5rem)] text-white leading-[0.9] mb-8 max-w-4xl">
          Clean Done
          <br />
          <span className="text-gold-gradient">Properly.</span>
        </h1>

        <p className="text-neutral-400 text-lg max-w-md leading-relaxed font-light mb-10">
          We're a local team based in Slough. Homes, offices, end of tenancy —
          we do the kind of clean you'd actually notice.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            to="/contact"
            className="btn-gold glow-pulse label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2 group"
          >
            Get a Free Quote{' '}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <a
            href="tel:01753000000"
            className="btn-outline-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2"
            aria-label="Call us at 01753 000 000"
          >
            <Phone size={16} /> 01753 000 000
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span className="flex items-center gap-1.5 text-neutral-400">
            <Star size={14} fill="#C8A94E" strokeWidth={0} />
            <span className="text-white font-medium">5.0</span> on Google
          </span>
          <span className="text-neutral-600">·</span>
          <span className="text-neutral-400">500+ homes cleaned</span>
          <span className="text-neutral-600">·</span>
          <span className="text-neutral-400">DBS checked & fully insured</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
