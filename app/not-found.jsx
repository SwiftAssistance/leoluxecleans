import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-black flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="label-caps text-gold mb-6">404</p>
        <h1 className="heading-serif text-5xl text-white mb-6">Page Not Found</h1>
        <p className="text-neutral-400 text-lg mb-10">
          This page doesn&apos;t exist. Let us help you find what you&apos;re looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-gold label-caps px-8 py-3.5 rounded-lg inline-flex items-center justify-center gap-2">
            Go Home
          </Link>
          <Link href="/services" className="btn-outline-gold label-caps px-8 py-3.5 rounded-lg inline-flex items-center justify-center gap-2">
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
