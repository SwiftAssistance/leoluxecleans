import React from 'react';
import { Link } from 'react-router-dom';
import { useQuoteModal } from '../context/QuoteModalContext';
import { Star, Quote, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import Seo, { breadcrumbSchema } from '../components/Seo';
import { useScrollReveal } from '../hooks/useScrollReveal';

const StarRating = ({ size = 12 }) => (
  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, j) => (
      <Star key={j} size={size} fill="#C8A94E" strokeWidth={0} />
    ))}
  </div>
);

const allReviews = [
  {
    text: "Really impressed with Leo Luxe. They cleaned our whole house before we moved in and it was spotless. You can tell they take pride in what they do — I've already recommended them to two friends.",
    author: 'Sarah Mitchell',
    role: 'Homeowner, Slough',
    initial: 'S',
    featured: true,
  },
  {
    text: 'We use them for our office every week. Always on time, always thorough, and the team are really lovely. Makes a real difference to the workplace.',
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
    text: 'End of tenancy clean was brilliant. Got our full deposit back. They even cleaned inside the oven which I thought was a lost cause!',
    author: 'James Taylor',
    role: 'Tenant, Slough',
    initial: 'J',
  },
  {
    text: "Found Leo Luxe through a neighbour's recommendation and I'm so glad I did. You can tell they genuinely care about doing a good job. My house has never been cleaner.",
    author: 'Tom Richards',
    role: 'Homeowner, Slough',
    initial: 'T',
  },
  {
    text: "After our daughter's birthday party the place was a state. Leo Luxe came next morning and had it sorted by lunchtime. Lifesaver.",
    author: 'Rebecca Osei',
    role: 'Homeowner, Windsor',
    initial: 'R',
  },
  {
    text: "Professional, friendly, and thorough. They cleaned our Airbnb property between guests and our reviews have improved since we started using them.",
    author: 'Marcus Hall',
    role: 'Property Host, Windsor',
    initial: 'M',
  },
];

const ReviewsPage = () => {
  const { openModal } = useQuoteModal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  const featuredReview = allReviews.find((r) => r.featured);
  const regularReviews = allReviews.filter((r) => !r.featured);

  return (
    <>
      <Seo
        title="Reviews — 5-Star Cleaning Service in Slough & Berkshire"
        description="Read genuine reviews from Leo Luxe Clean customers across Slough, Windsor & Berkshire. See why our clients keep recommending us."
        canonical="/reviews"
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Reviews' },
        ])}
      />
      <PageHero
        title={<>What People <span className="text-gold-gradient">Say</span></>}
        subtitle="We're a new company, so every review means the world to us. Here's what our customers across Berkshire have to say."
        breadcrumb="Reviews"
      />

      {/* Rating summary */}
      <section className="py-10 bg-surface-dark border-b border-surface-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-5">
              <span className="heading-serif text-6xl text-gold">5.0</span>
              <div>
                <StarRating size={18} />
                <p className="text-neutral-500 text-sm mt-1">
                  Google Reviews
                </p>
              </div>
            </div>
            <div className="hidden md:block w-px h-14 bg-surface-border/40" />
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-neutral-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold" />
                Verified Customers
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold" />
                100% Real Feedback
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold" />
                Every Review Earned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured review */}
      <section className="py-16 lg:py-20 bg-surface-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="rounded-2xl border border-gold/15 p-10 lg:p-14 text-center relative">
            <Quote size={32} className="text-gold/20 mx-auto mb-6" />
            <p className="text-white text-xl lg:text-2xl leading-relaxed mb-8 font-light max-w-2xl mx-auto">
              "{featuredReview.text}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold heading-serif text-xl">
                {featuredReview.initial}
              </div>
              <div className="text-left">
                <p className="text-white font-medium">{featuredReview.author}</p>
                <p className="text-neutral-500 text-sm">{featuredReview.role}</p>
              </div>
              <div className="ml-4">
                <StarRating size={14} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All reviews */}
      <section className="py-16 lg:py-24 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
              More From Our Customers
            </h2>
            <p className="text-neutral-400 text-sm max-w-md mx-auto">
              Real reviews from real people across Slough, Windsor, and Berkshire.
            </p>
          </div>

          <div
            ref={gridRef}
            className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5"
          >
            {regularReviews.map((review, i) => (
              <div
                key={i}
                className={`break-inside-avoid rounded-xl border border-surface-border/40 p-7 hover:border-gold/20 transition-all duration-500 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="mb-3">
                  <StarRating size={13} />
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed mb-5">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 border-t border-surface-border/30 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm heading-serif">
                    {review.initial}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{review.author}</p>
                    <p className="text-neutral-600 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-surface-dark border-y border-surface-border/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex gap-0.5 justify-center mb-6">
            {[...Array(5)].map((_, j) => (
              <Star key={j} size={20} fill="#C8A94E" strokeWidth={0} />
            ))}
          </div>
          <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
            Ready to see for yourself?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            Join our growing list of happy customers across Berkshire. Get a free,
            no-obligation quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal()}
              className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight size={14} />
            </button>
            <a
              href="tel:01753257118"
              className="btn-outline-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
              aria-label="Call our landline at 01753 257118"
            >
              <Phone size={16} /> 01753 257118
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsPage;
