'use client';
import { useSearchParams } from 'next/navigation';
import LandingPage from '../../src/page-components/LandingPage';

export default function LandingPageWrapper() {
  const searchParams = useSearchParams();

  const raw = searchParams.get('area');
  const areaName = raw
    ? (() => {
        try {
          return decodeURIComponent(raw).replace(/\b\w/g, (c) => c.toUpperCase());
        } catch {
          return 'Windsor & Berkshire';
        }
      })()
    : 'Windsor & Berkshire';

  return (
    <LandingPage
      areaName={areaName}
      utmSource={searchParams.get('utm_source') || ''}
      utmCampaign={searchParams.get('utm_campaign') || ''}
      utmTerm={searchParams.get('utm_term') || ''}
    />
  );
}
