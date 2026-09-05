// Real Google reviews for Leo Luxe Clean, quoted verbatim from the
// Google Business Profile. Single source of truth — every review shown
// anywhere on the site comes from here.

export const googleReviews = [
  {
    text: "I used this cleaning company services for a few months now and I can say I'm very happy. They are reliable and delivers a great service. I run a few properties on short term Lettings and they have been excellent at helping me to keep my properties at a 5* level for my guests. Highly recommended 👍",
    author: 'Stefania P',
    role: 'Short-let property owner',
    initial: 'S',
    featured: true,
  },
  {
    text: 'Really pleased with the office clean and window clean from Leo Luxe Clean. The team turned up on time, were professional throughout, and the office looked spotless afterwards — windows were left completely streak-free too. Great attention to detail and good value for the quality of work. Would definitely use them again and happy to recommend.',
    author: 'DIGITAL MART LTD',
    authorType: 'Organization',
    role: 'Office & window cleaning',
    initial: 'D',
  },
  {
    text: "I booked Leo Lux Cleans for a deep clean of my house and I honestly couldn't be happier with the service! Two lovely girls came and did a brilliant job. They were here for around 3 hours and worked so hard, leaving my house looking and feeling amazing. Great service from start to finish and I would highly recommend Leo Lux Cleans to anyone looking for a thorough, professional clean. I'll definitely be rebooking again soon!",
    author: 'Simon K.O',
    role: 'Deep clean',
    initial: 'S',
  },
  {
    text: 'Kelly and Stacey are excellent, they provide a high quality service and attention to detail. Communication is great. Its a pleasure being your client.',
    author: 'Lucy C',
    role: 'Regular cleaning',
    initial: 'L',
  },
  {
    text: 'Very reliable, always to a high standard 10/10',
    author: 'Susan J',
    role: 'Google review',
    initial: 'S',
  },
  {
    text: 'Not had time to clean properly as always at work so I called these guys, did an amazing job, house so fresh and clean.',
    author: 'Linda W',
    role: 'Home cleaning',
    initial: 'L',
  },
  {
    text: "Clean, professional and very tidy. Couldn't recommend a better cleaning service. Thank you guys for this.",
    author: 'Reece L',
    role: 'Google review',
    initial: 'R',
  },
  {
    text: 'Amazing service would highly recommend!',
    author: 'Onika E',
    role: 'Google review',
    initial: 'O',
  },
];

// The site shows five reviews. Change this number to show more or fewer.
export const REVIEWS_SHOWN = 5;

export const featuredReviews = googleReviews.slice(0, REVIEWS_SHOWN);

export default featuredReviews;
