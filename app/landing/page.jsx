import { Suspense } from 'react';
import LandingPageWrapper from './LandingPageWrapper';
import LandingPage from '../../src/page-components/LandingPage';
import { pageMeta } from '../../src/lib/meta';

export const metadata = pageMeta({
  title: 'Home Cleaning in Windsor, Ascot & Berkshire | Leo Luxe Clean',
  description:
    'DBS-checked, fully insured home cleaning in Windsor, Ascot, Maidenhead and across Berkshire. Free quote.',
  path: '/landing/',
  noindex: true,
});

export default function Page() {
  return (
    <Suspense fallback={<LandingPage areaName="Windsor & Berkshire" utmSource="" utmCampaign="" utmTerm="" />}>
      <LandingPageWrapper />
    </Suspense>
  );
}
