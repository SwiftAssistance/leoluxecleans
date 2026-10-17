import { Star, ArrowRight } from 'lucide-react';
import { business } from '../config/business';

// Google brand colours, used for the logo, stars and avatars so the reviews
// read as Google reviews at a glance. Colours are fixed (not theme tokens):
// the cards are always white, on light and dark sections alike.
const G = { blue: '#4285F4', red: '#EA4335', yellow: '#FBBC05', green: '#34A853' };
const AVATAR_COLOURS = ['#4285F4', '#EA4335', '#E37400', '#34A853', '#7B1FA2', '#00897B'];

export const GoogleLogo = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path fill={G.red} d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill={G.blue} d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill={G.yellow} d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill={G.green} d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

// "Google" in its letter colours.
export const GoogleWordmark = ({ className = '' }) => (
  <span className={`font-medium tracking-tight ${className}`} aria-label="Google">
    <span style={{ color: G.blue }}>G</span>
    <span style={{ color: G.red }}>o</span>
    <span style={{ color: G.yellow }}>o</span>
    <span style={{ color: G.blue }}>g</span>
    <span style={{ color: G.green }}>l</span>
    <span style={{ color: G.red }}>e</span>
  </span>
);

const Stars = ({ size = 14 }) => (
  <span className="inline-flex gap-0.5" aria-hidden="true">
    {[...Array(5)].map((_, j) => (
      <Star key={j} size={size} fill={G.yellow} strokeWidth={0} />
    ))}
  </span>
);

const avatarColour = (name) =>
  AVATAR_COLOURS[[...name].reduce((sum, c) => sum + c.charCodeAt(0), 0) % AVATAR_COLOURS.length];

// A review laid out like Google's own review cards.
export const ReviewCard = ({ review, large = false }) => (
  <figure className="h-full flex flex-col rounded-xl bg-[#fff] border border-[#e5e7eb] p-6 shadow-[0_1px_2px_rgba(60,64,67,0.15),0_6px_20px_-8px_rgba(60,64,67,0.25)] text-left">
    <figcaption className="flex items-center gap-3">
      <span
        className="w-10 h-10 rounded-full flex items-center justify-center text-[#fff] font-medium text-base flex-shrink-0"
        style={{ background: avatarColour(review.displayName) }}
        aria-hidden="true"
      >
        {review.displayName.charAt(0)}
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-[#202124] text-sm font-medium truncate">{review.displayName}</span>
        <span className="block text-[#70757a] text-xs">Google review</span>
      </span>
      <GoogleLogo size={22} />
    </figcaption>
    <div className="mt-4">
      <Stars size={large ? 18 : 16} />
    </div>
    <blockquote className={`mt-3 text-[#3c4043] leading-relaxed flex-1 ${large ? 'text-base lg:text-lg' : 'text-[15px]'}`}>
      <p>{review.text}</p>
    </blockquote>
  </figure>
);

// Compact inline rating: G logo, stars and "5.0 on Google from N reviews".
export const RatingSummary = ({ className = '' }) => (
  <a
    href={business.google.profileUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 text-neutral-400 hover:text-gold transition-colors text-sm ${className}`}
  >
    <GoogleLogo size={16} />
    <Stars size={14} />
    <span>{business.google.summary}</span>
  </a>
);

// Boxed badge in Google's style: logo, "Google Rating", score and stars.
export const GoogleRatingBadge = ({ className = '' }) => (
  <a
    href={business.google.profileUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`group inline-flex items-center gap-4 rounded-xl bg-[#fff] border border-[#e5e7eb] border-t-4 px-5 py-4 shadow-[0_1px_2px_rgba(60,64,67,0.15),0_6px_20px_-8px_rgba(60,64,67,0.25)] hover:shadow-[0_2px_4px_rgba(60,64,67,0.2),0_10px_28px_-8px_rgba(60,64,67,0.35)] transition-shadow ${className}`}
    style={{ borderTopColor: G.green }}
    aria-label={`${business.google.summary}. Read our reviews on Google`}
  >
    <GoogleLogo size={36} />
    <span className="flex flex-col">
      <span className="text-[#202124] text-sm font-medium">
        <GoogleWordmark /> Rating
      </span>
      <span className="flex items-center gap-2 mt-0.5">
        <span className="text-[#E37400] text-2xl font-semibold leading-none">{business.google.ratingDisplay}</span>
        <Stars size={16} />
      </span>
      <span className="text-[#70757a] text-xs mt-1">Based on {business.google.reviewCount} reviews</span>
    </span>
  </a>
);

// Section of real Google reviews, linked to the Google Business Profile.
const GoogleReviews = ({ reviews, heading, intro, className = 'bg-surface-dark' }) => (
  <section className={`py-16 lg:py-20 ${className}`}>
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
        <div>
          <h2 className="display text-5xl lg:text-7xl text-white">{heading}</h2>
          {intro && <p className="text-neutral-400 text-sm mt-3 max-w-xl">{intro}</p>}
        </div>
        <GoogleRatingBadge className="self-start lg:self-auto" />
      </div>
      <div className={`grid grid-cols-1 gap-5 ${reviews.length > 2 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
      <div className="mt-8">
        <a
          href={business.google.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="label-caps text-gold text-[11px] inline-flex items-center gap-1.5 hover:gap-3 transition-all"
        >
          Read all reviews on Google <ArrowRight size={12} />
        </a>
      </div>
    </div>
  </section>
);

export default GoogleReviews;
