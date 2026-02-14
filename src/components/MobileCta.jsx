import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const MobileCta = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface-black/95 backdrop-blur-xl border-t border-gold/20 px-4 py-3 flex gap-3 safe-bottom">
      <a
        href="tel:01753000000"
        className="flex-1 btn-outline-gold label-caps py-3 rounded-lg text-center flex items-center justify-center gap-2"
      >
        <Phone size={14} /> Call
      </a>
      <Link
        to="/contact"
        className="flex-1 btn-gold label-caps py-3 rounded-lg text-center"
      >
        Free Quote
      </Link>
    </div>
  );
};

export default MobileCta;
