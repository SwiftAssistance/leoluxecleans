import { Suspense } from 'react';
import LandingPage from '../../src/page-components/LandingPage';

export const metadata = {
  title: 'Leo Luxe Clean | Free Cleaning Quote',
  description: 'Get a free cleaning quote from Leo Luxe Clean. Professional cleaners serving Slough, Windsor & Berkshire.',
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <LandingPage />
    </Suspense>
  );
}
