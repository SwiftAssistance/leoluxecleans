import { Suspense } from 'react';
import LandingPageWrapper from './LandingPageWrapper';

export const metadata = {
  title: 'Leo Luxe Clean | Premium Home Cleaning — Windsor, Ascot & Berkshire',
  description: 'DBS-checked, fully insured home cleaning in Windsor, Ascot, Maidenhead, Bracknell & across Berkshire and Surrey. Same trusted cleaner every visit. Free quote — we reply within 60 minutes.',
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <LandingPageWrapper />
    </Suspense>
  );
}
