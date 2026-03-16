import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const NotFoundPage = () => {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Browse our cleaning services or contact Leo Luxe Clean for a free quote."
        noindex={true}
      />
      <section className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">404</h1>
          <p className="text-neutral-400 text-lg mb-8">
            Sorry, we couldn&rsquo;t find that page. It may have been moved or no longer exists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-3 bg-gold text-surface-black font-medium rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Go Home
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 border border-surface-border text-neutral-300 rounded-lg hover:border-gold/30 hover:text-gold transition-colors text-sm"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
