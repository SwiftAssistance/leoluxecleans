import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import QuoteButton from '../components/QuoteButton';
import { ReviewCard, RatingSummary } from '../components/GoogleReviews';
import { business } from '../config/business';
import { writtenReviews } from '../data/reviews';

const ReviewsPage = () => (
  <>
    <PageHero
      title={<>What People <span className="text-gold-gradient">Say</span></>}
      subtitle="We're a small, local company, so every review matters to us. These are the reviews our customers have left on Google."
      breadcrumb="Reviews"
    />

    {/* Rating summary */}
    <section className="py-10 bg-surface-dark border-b border-surface-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
        <div>
          <span className="heading-serif text-6xl text-gold block">{business.google.ratingDisplay}</span>
          <RatingSummary className="mt-2" />
        </div>
        <p className="text-neutral-400 text-sm max-w-md">
          Shown exactly as written on our Google Business Profile. Longer reviews are cut short by Google; read them in full there.
        </p>
      </div>
    </section>

    {/* All written reviews */}
    <section className="py-16 lg:py-24 bg-surface-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <h2 className="heading-serif text-4xl lg:text-5xl text-white">Google reviews</h2>
          <a
            href={business.google.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="label-caps text-gold text-[11px] flex items-center gap-1.5 hover:gap-3 transition-all"
          >
            Read all reviews on Google <ArrowRight size={12} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {writtenReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 lg:py-20 bg-surface-dark border-y border-surface-border/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">Ready to see for yourself?</h2>
        <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
          Get a free, no-obligation quote. We reply {business.responseTime}.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <QuoteButton className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2">
            Get a Free Quote <ArrowRight size={14} />
          </QuoteButton>
          <a
            href={business.phone.href}
            className="btn-outline-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            aria-label={`Call us on ${business.phone.display}`}
          >
            <Phone size={16} /> {business.phone.display}
          </a>
        </div>
        <a
          href={business.google.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-gold transition-colors text-xs label-caps mt-8 inline-flex items-center gap-1.5"
        >
          Leave us a review on Google <ArrowRight size={12} />
        </a>
      </div>
    </section>
  </>
);

export default ReviewsPage;
