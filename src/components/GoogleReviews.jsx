import { Star, ArrowRight } from 'lucide-react';
import { business } from '../config/business';

const Stars = ({ size = 12 }) => (
  <span className="inline-flex gap-0.5" aria-hidden="true">
    {[...Array(5)].map((_, j) => (
      <Star key={j} size={size} fill="#C8A94E" strokeWidth={0} />
    ))}
  </span>
);

export const ReviewCard = ({ review, large = false }) => (
  <figure className="rounded-xl border border-surface-border/40 p-6 lg:p-7 h-full flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <Stars size={large ? 14 : 12} />
      <span className="text-[10px] label-caps text-gold/70 bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
        Google review
      </span>
    </div>
    <blockquote className={`text-neutral-300 leading-relaxed flex-1 ${large ? 'text-lg' : 'text-sm'}`}>
      <p>&ldquo;{review.text}&rdquo;</p>
    </blockquote>
    <figcaption className="mt-5 pt-4 border-t border-surface-border/30 text-white text-sm font-medium">
      {review.displayName}
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
          <h2 className="heading-serif text-3xl lg:text-4xl text-white">{heading}</h2>
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
      <div className={`grid grid-cols-1 gap-5 ${reviews.length > 2 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </div>
  </section>
);

export default GoogleReviews;
