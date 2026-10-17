import LegalPage from '../../../src/components/LegalPage';
import JsonLd from '../../../src/components/JsonLd';
import { breadcrumbSchema } from '../../../src/components/Seo';
import { pageMeta } from '../../../src/lib/meta';
import { business } from '../../../src/config/business';

export const metadata = pageMeta({
  title: 'Terms of Service | Leo Luxe Clean',
  description:
    'The terms that apply when you book a clean with Leo Luxe Clean: quotes, bookings, access, changes, our re-clean promise, damage and complaints.',
  path: '/terms/',
});

const mail = <a href={`mailto:${business.email}`}>{business.email}</a>;
const phone = <a href={business.phone.href}>{business.phone.display}</a>;

export default function Page() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Terms of Service', url: '/terms/' }])} />
      <LegalPage title="Terms of Service" updated="October 2026">
        <p>
          These terms apply when you book a clean with {business.name}, {business.address.singleLine}. They are written
          to be easy to read. Nothing in them affects your legal rights as a consumer. If you have a question, call us
          on {phone} or email {mail}.
        </p>

        <h2>1. Quotes</h2>
        <p>
          Prices on our website are starting prices. Before any work starts we give you a quote based on what you have
          told us about the property, the type of clean and how often you want us. If the job turns out to be very
          different from what was described (for example, much larger or in a much worse condition), we will tell you
          before carrying on and agree any change in price with you. We will never add charges without telling you first.
        </p>

        <h2>2. Bookings</h2>
        <p>
          A booking is confirmed when we have agreed a date, time and price with you by phone, WhatsApp, email or text.
          Regular cleans (weekly, fortnightly or otherwise) carry on until either of us stops them. There is no contract
          term and no minimum number of visits.
        </p>

        <h2>3. Changing or cancelling</h2>
        <p>
          If you need to move or cancel a clean, please tell us as early as you can so we can offer the slot to someone
          else. If we ever need to change a booking, we will contact you as soon as possible and offer another time.
        </p>

        <h2>4. Access, keys and your home</h2>
        <ul>
          <li>Please make sure we can get in at the agreed time, whether you are home or have given us a key or code.</li>
          <li>Any keys or codes you give us are kept securely and only used for your cleans.</li>
          <li>We need running water and electricity to work. Please let us know about pets, alarms, parking or anything else we should be aware of.</li>
          <li>Please put away cash, jewellery and other valuables, and tell us about any items or surfaces that need special care.</li>
          <li>For our team&apos;s safety, we may decline work that involves hazardous waste or unsafe working at height.</li>
        </ul>

        <h2>5. Products and equipment</h2>
        <p>
          We bring our own cleaning products and equipment. If you would like us to use particular products, for
          example because of allergies, tell us when you book.
        </p>

        <h2>6. If you are not happy</h2>
        <p>
          If something has been missed or not done to standard, tell us as soon as you can, with photos if possible.
          We will come back and put it right at no extra charge. For end of tenancy cleans, if a landlord or
          agent raises a cleaning issue, let us know and we will return within 48 hours to sort it.
        </p>

        <h2>7. Damage and breakages</h2>
        <p>
          We take care in your home and hold public liability insurance. If something is damaged while we are working,
          please tell us as soon as you notice so we can look into it. We are not
          responsible for damage caused by existing faults, wear and tear, or items that were not secure, or where we
          followed your instructions.
        </p>

        <h2>8. Payment</h2>
        <p>
          The price and how to pay are confirmed when you book. Please pay by the date we agree. If a payment is late, we
          may pause further bookings until it is settled.
        </p>

        <h2>9. Our team</h2>
        <p>
          Everyone who cleans for us is DBS checked. To keep things fair to our staff, please do not employ a member of
          our team privately while you are a customer.
        </p>

        <h2>10. Complaints</h2>
        <p>
          If you have a complaint, contact us on {phone} or at {mail}. We will try to resolve it quickly and fairly.
        </p>

        <h2>11. Your information</h2>
        <p>
          We use your details only to provide our services. See our <a href="/privacy/">privacy policy</a> for more.
        </p>

        <h2>12. The law that applies</h2>
        <p>These terms are governed by the law of England and Wales.</p>
      </LegalPage>
    </>
  );
}
