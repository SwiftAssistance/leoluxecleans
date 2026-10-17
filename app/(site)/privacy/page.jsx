import LegalPage from '../../../src/components/LegalPage';
import JsonLd from '../../../src/components/JsonLd';
import { breadcrumbSchema } from '../../../src/components/Seo';
import { pageMeta } from '../../../src/lib/meta';
import { business } from '../../../src/config/business';

export const metadata = pageMeta({
  title: 'Privacy Policy | Leo Luxe Clean',
  description:
    'How Leo Luxe Clean collects, uses and protects the personal details you give us when you ask for a quote or book a clean.',
  path: '/privacy/',
});

const mail = <a href={`mailto:${business.email}`}>{business.email}</a>;

export default function Page() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy/' }])} />
      <LegalPage title="Privacy Policy" updated="October 2026">
        <p>
          This policy explains what personal information {business.name} collects, why we collect it, and what
          rights you have over it. We keep it short and in plain English. If anything is unclear, email us at {mail}.
        </p>

        <h2>Who we are</h2>
        <p>
          {business.name} is a cleaning business based at {business.address.singleLine}. We are responsible for
          (the &ldquo;controller&rdquo; of) the personal information described in this policy. You can contact us by
          email at {mail} or by phone on <a href={business.phone.href}>{business.phone.display}</a>.
        </p>

        <h2>What we collect</h2>
        <p>When you ask for a quote through our website, we collect:</p>
        <ul>
          <li>your name</li>
          <li>your phone number</li>
          <li>your email address</li>
          <li>your address or postcode</li>
          <li>the service you are interested in, and anything you choose to tell us in the message box</li>
        </ul>
        <p>
          If you go on to book with us, we also keep the details needed to carry out the clean, such as access
          instructions, key arrangements and notes about your property, plus records of the work we have done and
          what you have paid.
        </p>
        <p>
          If you contact us by phone, WhatsApp or email, we keep the messages and the contact details you used.
        </p>

        <h2>Why we use it</h2>
        <ul>
          <li>To reply to your enquiry and send you a quote. The legal basis is taking steps at your request before entering into a contract.</li>
          <li>To arrange, carry out and invoice the cleaning you book. The legal basis is performing our contract with you.</li>
          <li>To keep business and accounting records we are required to keep by law. The legal basis is legal obligation.</li>
          <li>To deal with questions or complaints about our work. The legal basis is our legitimate interest in running the business properly.</li>
        </ul>
        <p>We do not sell your information, and we do not use it to send you marketing unless you have asked us to.</p>

        <h2>Who we share it with</h2>
        <p>We only share your information where we need to:</p>
        <ul>
          <li>the members of our team who carry out or organise your clean;</li>
          <li>
            the service we use to deliver website quote forms to our inbox (Web3Forms), which passes your form details
            to us by email;
          </li>
          <li>our email, phone and accounting providers, who store information on our behalf;</li>
          <li>anyone we are legally required to share it with, such as HMRC.</li>
        </ul>

        <h2>Cookies and third-party content</h2>
        <p>
          Our website uses Google Ads measurement (Google tag), which may set cookies to tell us when someone who
          clicked one of our adverts gets in touch. The contact page embeds a Google Map, and links to our Google
          Business Profile and Instagram take you to sites run by Google and Instagram. Those companies handle data
          under their own privacy policies. You can block or delete cookies in your browser settings.
        </p>

        <h2>How long we keep it</h2>
        <p>
          If you ask for a quote and do not book, we keep your details only as long as we need them to follow up on
          your enquiry. If you book with us, we keep customer and payment records for as long as the law requires for
          tax and accounting purposes, and then delete them.
        </p>

        <h2>How we protect it</h2>
        <p>
          Your information is held on password-protected accounts and devices, and only people who need it to do their
          job can see it. Keys and access codes you give us are kept securely and returned or destroyed when you stop
          using our services.
        </p>

        <h2>Your rights</h2>
        <p>Under UK data protection law you have the right to:</p>
        <ul>
          <li>ask for a copy of the information we hold about you;</li>
          <li>ask us to correct anything that is wrong;</li>
          <li>ask us to delete your information, where we no longer need it;</li>
          <li>object to, or ask us to restrict, how we use it;</li>
          <li>ask us to transfer it to you or another organisation in a portable format.</li>
        </ul>
        <p>
          To use any of these rights, email {mail}. We will reply within one month. If you are unhappy with how we have
          handled your information, please tell us first so we can put it right. You also have the right to complain to
          the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The date at the top shows when it was last changed.
        </p>
      </LegalPage>
    </>
  );
}
