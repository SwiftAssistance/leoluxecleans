'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';

function WhatsAppIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ display: 'block', flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'About', to: '/about' },
  { name: 'Reviews', to: '/reviews' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isScrolledRef = useRef(false);
  const { openModal } = useQuoteModal();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolledRef.current) {
        isScrolledRef.current = scrolled;
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (to) => to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-black py-3 border-b border-surface-border/50'
          : 'bg-transparent py-5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3" aria-label="Leo Luxe Clean — Home">
          <img
            src="/logo.png"
            alt="Leo Luxe Clean"
            width="120"
            height="40"
            fetchPriority="high"
            decoding="sync"
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.name}
                href={link.to}
                className={`label-caps transition-colors duration-300 relative group ${
                  active ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            );
          })}
          <a
            href="tel:01753257118"
            className="label-caps text-neutral-400 hover:text-gold transition-colors duration-300 flex items-center gap-2"
            aria-label="Call us at 01753 257118"
          >
            <Phone size={14} /> 01753 257118
          </a>
          <a
            href="https://wa.me/447845239774?text=Hi%20Leo%20Luxe%20Clean%2C%20I%27d%20like%20a%20quote%20please"
            target="_blank"
            rel="noopener noreferrer"
            className="label-caps text-[#4ade80]/80 hover:text-[#4ade80] transition-colors duration-300 flex items-center gap-1.5"
            aria-label="WhatsApp Leo Luxe Clean"
          >
            <WhatsAppIcon size={14} /> WhatsApp
          </a>
          <button
            onClick={() => openModal()}
            className="btn-gold label-caps px-6 py-2.5 rounded-lg"
          >
            Free Quote
          </button>
        </div>

        <button
          className="md:hidden text-white relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="bg-surface-dark border-t border-surface-border/50">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.name}
                  href={link.to}
                  className={`label-caps transition-colors duration-300 ${
                    active ? 'text-gold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="tel:01753257118"
              className="label-caps text-gold flex items-center gap-2"
              aria-label="Call us at 01753 257118"
            >
              <Phone size={14} /> 01753 257118
            </a>
            <a
              href="https://wa.me/447845239774?text=Hi%20Leo%20Luxe%20Clean%2C%20I%27d%20like%20a%20quote%20please"
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps text-[#4ade80] flex items-center gap-2"
              aria-label="WhatsApp us"
            >
              <WhatsAppIcon size={14} /> WhatsApp Us
            </a>
            <button
              onClick={() => { openModal(); setMobileMenuOpen(false); }}
              className="btn-gold label-caps text-center py-3 mt-2 rounded-lg w-full"
            >
              Free Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
