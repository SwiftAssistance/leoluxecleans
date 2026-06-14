import Link from 'next/link';

export const metadata = {
  title: 'Quote Request Received — Leo Luxe Clean',
  description: 'Thank you — we\'ll be in touch within 2 hours with your free quote.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-surface-black flex items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-8">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C8A94E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>

        <p className="label-caps text-gold text-xs mb-3 tracking-widest">Leo Luxe Clean</p>
        <h1 className="heading-serif text-4xl lg:text-5xl text-white mb-4 leading-tight">
          Your Quote Request<br />Is On Its Way
        </h1>
        <p className="text-neutral-400 text-base leading-relaxed mb-8 max-w-md mx-auto">
          We've received your details. Expect a call back within 2 hours — usually much sooner.
          We'll confirm your booking and match you with a dedicated cleaner.
        </p>

        <div className="bg-surface-dark border border-gold/20 rounded-2xl p-6 mb-8 text-left space-y-3">
          {[
            "We'll call you back within 2 hours",
            'No obligation — the quote is completely free',
            "We'll assign you the same cleaner every visit",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A94E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <p className="text-neutral-300 text-sm">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-neutral-500 text-sm mb-4">Need to speak to us now?</p>
        <a
          href="tel:01753257118"
          className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center gap-2 mb-6"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          01753 257118
        </a>

        <div className="block">
          <Link href="/" className="text-neutral-500 text-sm hover:text-gold transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
