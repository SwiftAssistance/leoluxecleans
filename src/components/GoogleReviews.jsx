import { Star, ArrowRight } from 'lucide-react';
import { business } from '../config/business';

const Stars = ({ size = 12 }) => (
  <span className="inline-flex gap-0.5" aria-hidden="true">
    {[...Array(5)].map((_, j) => (
      <Star key={j} size={size} fill="#C8A94E" strokeWidth={0} />
    ))}
  </span>
);

// A pull-quote: hairline above, serif text, no container.
export const ReviewCard = ({ review, large = false }) => (
  <figure className="relative h-full flex flex-col border-t border-gold/40 pt-6">
    <span className="heading-serif text-gold/40 text-6xl leading-none h-8 -mt-1 select-none" aria-hidden="true">
      &ldquo;
    </span>
    <blockquote
      className={`heading-serif text-neutral-200 flex-1 ${large ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-[1.375rem]'}`}
      style={{ lineHeight: 1.35, fontWeight: 400 }}
    >
      <p>{review.text}</p>
    </blockquote>
    <figcaption className="mt-6 flex items-center gap-3">
      <span className="label-caps text-[10px] text-white">{review.displayName}</span>
      <span className="h-px w-6 bg-surface-border" aria-hidden="true" />
      <Stars size={10} />
      <span className="sr-only">Google review</span>
    </figcaption>
  </figure>
);

export const RatingSummary = ({ className = '' }) => (
  <a
    href={business.google.profileUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 text-neutral-400 hover:text-gold transition-colors text-sm ${className}`}
  >
    <Stars size={14} />
    <span>{business.google.summary}</span>
  </a>
);

// Section of real Google reviews, linked to the Google Business Profile.
const GoogleReviews = ({ reviews, heading, intro, className = 'bg-surface-dark' }) => (
  <section className={`py-16 lg:py-20 ${className}`}>
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
        <div>
          <h2 className="display text-5xl lg:text-7xl text-white">{heading}</h2>
          {intro && <p className="text-neutral-400 text-sm mt-3 max-w-xl">{intro}</p>}
          <RatingSummary className="mt-3" />
        </div>
        <a
          href={business.google.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="label-caps text-gold text-[11px] flex items-center gap-1.5 hover:gap-3 transition-all"
        >
          Read all reviews on Google <ArrowRight size={12} />
        </a>
      </div>
      <div className={`grid grid-cols-1 gap-x-12 gap-y-12 ${reviews.length > 2 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </div>
  </section>
);

export default GoogleReviews;
