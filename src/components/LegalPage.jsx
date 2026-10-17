import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Simple, server-rendered layout for the privacy policy and terms pages.
const LegalPage = ({ title, updated, children }) => (
  <>
    <section className="pt-28 pb-10 lg:pt-36 lg:pb-12 bg-gradient-to-b from-surface-dark to-surface-black border-b border-surface-border/30">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
          <Link href="/" className="text-neutral-500 hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={14} className="text-neutral-700" />
          <span className="text-gold">{title}</span>
        </nav>
        <h1 className="heading-serif text-4xl sm:text-5xl text-white mb-3">{title}</h1>
        <p className="text-neutral-500 text-sm">Last updated {updated}</p>
      </div>
    </section>
    <section className="py-12 lg:py-16 bg-surface-black">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 legal-copy text-neutral-300 leading-relaxed space-y-4 [&_h2]:heading-serif [&_h2]:text-2xl [&_h2]:text-white [&_h2]:pt-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-gold [&_a:hover]:underline">
        {children}
      </div>
    </section>
  </>
);

export default LegalPage;
