import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';

const StarRating = ({ size = 12 }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, j) => (
      <Star key={j} size={size} fill="#C8A94E" strokeWidth={0} />
    ))}
  </div>
);

const allReviews = [
  {
    text: "Honestly can't recommend Leo Luxe enough. They cleaned our whole house before we moved in and it was absolutely spotless. The attention to detail was incredible — places I'd never even think to clean. Will definitely be using them regularly.",
    author: 'Sarah Mitchell',
    role: 'Homeowner, Slough',
    initial: 'S',
    featured: true,
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
  {
    text: "I've tried several cleaning companies in the Slough area and Leo Luxe is by far the best. Consistent quality every single time. My house has never looked better.",
    author: 'Tom Richards',
    role: 'Homeowner, Slough',
    initial: 'T',
  },
  {
    text: "They deep cleaned our carpet and it looks brand new. I was honestly ready to replace it but they saved me hundreds of pounds. Amazing results.",
    author: 'Aisha Khan',
    role: 'Homeowner, Langley',
    initial: 'A',
  },
  {
    text: "Professional, friendly, and thorough. They cleaned our Airbnb property between guests and our reviews have improved massively since we started using them.",
    author: 'Marcus Hall',
    role: 'Property Host, Windsor',
    initial: 'M',
  },
  {
    text: "My elderly mum needed help keeping on top of the house. The team are so respectful and kind, and the house is always spotless. Couldn't ask for more.",
    author: 'Claire Bennett',
    role: 'Family Member, Berkshire',
    initial: 'C',
  },
  {
    text: "Had the full specialist treatment — oven, carpets, and windows. Everything looks incredible. Genuinely worth every penny and then some.",
    author: 'Nikhil Patel',
    role: 'Homeowner, Slough',
    initial: 'N',
  },
  {
    text: "We hired them for a post-renovation clean and they handled all the dust and debris beautifully. Our new kitchen is gleaming thanks to the team.",
    author: 'Emma Collins',
    role: 'Homeowner, Windsor',
    initial: 'E',
  },
  {
    text: "Booked a regular weekly clean for our dental practice. The difference is night and day. Patients have commented on how clean everything feels.",
    author: 'Dr. Fatima Ali',
    role: 'Business Owner, Slough',
    initial: 'F',
  },
];

const ReviewsPage = () => {
  const [featuredRef, featuredVisible] = useScrollReveal({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.3 });

  const featuredReview = allReviews.find((r) => r.featured);
  const regularReviews = allReviews.filter((r) => !r.featured);

  return (
    <>
      <PageHero
        title={
          <>
            What People <span className="text-gold-gradient">Say</span>
          </>
        }
        subtitle="Don't just take our word for it. Here's what our customers across Berkshire have to say about Leo Luxe Cleans."
        breadcrumb="Reviews"
      />

      {/* Rating Summary */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-card to-surface-dark"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-center">
              <span className="heading-serif text-6xl text-gold-gradient">
                5.0
              </span>
            </div>
            <div className="text-center sm:text-left">
              <StarRating size={20} />
              <p className="text-neutral-400 text-sm mt-1">
                from 200+ verified reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-16 lg:py-20 bg-surface-black relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[120px]"></div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
          <div
            ref={featuredRef}
            className={`glass-card rounded-2xl p-10 lg:p-14 border-gold/20 text-center transition-all duration-700 ${
              featuredVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <Quote size={36} className="text-gold/40 mx-auto mb-6" />
            <p className="text-white text-xl lg:text-2xl leading-relaxed mb-8 font-light max-w-2xl mx-auto">
              "{featuredReview.text}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold heading-serif text-xl">
                {featuredReview.initial}
              </div>
              <div className="text-left">
                <p className="text-white font-medium">
                  {featuredReview.author}
                </p>
                <p className="text-neutral-500 text-sm">
                  {featuredReview.role}
                </p>
              </div>
              <div className="ml-4">
                <StarRating size={14} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-16 lg:py-24 bg-surface-black relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="label-caps text-gold mb-4">All Reviews</p>
            <h2 className="heading-serif text-4xl lg:text-5xl text-white">
              More From Our Customers
            </h2>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {regularReviews.map((review, i) => (
              <div
                key={i}
                className={`glass-card rounded-xl p-7 flex flex-col hover:border-gold/20 transition-all duration-700 ${
                  gridVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-3">
                  <StarRating size={13} />
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed flex-grow mb-6">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 border-t border-surface-border/50 pt-5">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm heading-serif">
                    {review.initial}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">
                      {review.author}
                    </p>
                    <p className="text-neutral-600 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden shimmer">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10"></div>
        <div className="absolute inset-0 bg-surface-dark/90"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div
          ref={ctaRef}
          className={`relative max-w-4xl mx-auto px-6 lg:px-12 text-center transition-all duration-700 ${
            ctaVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
            Join our happy customers
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            Experience the Leo Luxe difference for yourself. Get a free,
            no-obligation quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight size={14} />
            </Link>
            <a
              href="tel:01753000000"
              className="btn-outline-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsPage;
