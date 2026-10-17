import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import GoogleReviews from './GoogleReviews';
import { rotatingReviews } from '../data/reviews';

// Homepage reviews: a rotating selection of the real Google reviews.
const Reviews = () => (
  <>
    <GoogleReviews reviews={rotatingReviews(2, 3)} heading="What People Say" />
    <div className="bg-surface-dark pb-12 text-center">
      <Link href="/reviews/" className="label-caps text-gold text-[11px] inline-flex items-center gap-1.5 hover:gap-3 transition-all">
        See all reviews <ArrowRight size={12} />
      </Link>
    </div>
  </>
);

export default Reviews;
