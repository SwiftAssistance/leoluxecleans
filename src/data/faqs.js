// FAQs shown on the page and mirrored into FAQPage schema from the same data,
// so the structured data always matches the visible text.
import { business } from '../config/business';

export const homeFaqs = [
  {
    q: 'How much does home cleaning cost in Slough?',
    a: 'Home cleaning in Slough starts from £60. The exact price depends on the size of your property and how often you want us. We give you a clear, fixed quote before any work starts, with no hidden extras.',
  },
  {
    q: 'What areas do you cover?',
    a: "We're based in Slough and cover Windsor, Langley, Maidenhead, Eton, Ascot, Burnham and Bracknell, plus West London including Hayes, Southall, Uxbridge, Ealing, Greenford, Northolt, West Drayton and Hounslow.",
  },
  {
    q: 'Are your cleaners DBS checked?',
    a: "Yes. Every member of our team is DBS checked and fully insured. We can provide documentation on request. We don't use agency staff or sub-contractors.",
  },
  {
    q: 'Do you bring your own products and equipment?',
    a: "We bring everything: cleaning products, equipment and supplies. You don't need to provide anything. If you have specific product preferences (for allergies or sensitivities), just let us know when booking.",
  },
  {
    q: 'How quickly can you start?',
    a: `Most weeks we can fit a new booking within the same week. Call us on ${business.phone.display} or fill in the quote form and we'll confirm availability ${business.responseTime}.`,
  },
  {
    q: 'Do I need to be home when you clean?',
    a: "Not at all. Many regular clients give us a key or leave access instructions. We're DBS checked and insured, so your home is in safe hands.",
  },
  {
    q: 'What does an end of tenancy clean include?',
    a: 'Everything on a standard inventory checklist: inside all cupboards and drawers, behind appliances, oven degreased, bathroom descaled, carpets vacuumed and spot-treated, windows cleaned inside, all surfaces done. If your landlord raises any cleaning issues, we come back within 48 hours at no extra charge.',
  },
  {
    q: "What if I'm not happy with the clean?",
    a: "Tell us. If something's been missed or hasn't been done to standard, we'll come back and sort it, same week, no charge. That's the guarantee on every job.",
  },
];

export const contactFaqs = [
  {
    q: 'How quickly can you start?',
    a: 'We can usually book you in within the same week. For urgent jobs, we offer same-day and next-day availability where possible.',
  },
  {
    q: 'Do I need to provide cleaning products?',
    a: "No. We bring everything we need, including professional-grade, eco-friendly products and all equipment.",
  },
  {
    q: 'Are your team DBS checked?',
    a: 'Yes. Every team member is DBS checked, insured and trained to our standards before they enter your home.',
  },
  {
    q: "What if I'm not happy with the clean?",
    a: "Tell us. If you're not completely happy, we'll come back and sort it at no extra charge.",
  },
];
