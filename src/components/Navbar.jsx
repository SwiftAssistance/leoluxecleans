import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'About', to: '/about' },
  { name: 'Reviews', to: '/reviews' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-black/95 backdrop-blur-md py-3 border-b border-surface-border/50'
          : 'bg-transparent py-5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3" aria-label="Leo Luxe Cleans — Home">
          <img
            src="/logo.svg"
            alt="Leo Luxe Cleans"
            width="120"
            height="40"
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `label-caps transition-colors duration-300 relative group ${
                  isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
          <a
            href="tel:01753000000"
            className="label-caps text-neutral-400 hover:text-gold transition-colors duration-300 flex items-center gap-2"
            aria-label="Call us at 01753 000 000"
          >
            <Phone size={14} /> 01753 000 000
          </a>
          <Link
            to="/contact"
            className="btn-gold label-caps px-6 py-2.5 rounded-lg"
          >
            Free Quote
          </Link>
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
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="bg-surface-dark/98 backdrop-blur-md border-t border-surface-border/50">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `label-caps transition-colors duration-300 ${
                    isActive ? 'text-gold' : 'text-neutral-400 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="tel:01753000000"
              className="label-caps text-gold flex items-center gap-2"
              aria-label="Call us at 01753 000 000"
            >
              <Phone size={14} /> 01753 000 000
            </a>
            <Link
              to="/contact"
              className="btn-gold label-caps text-center py-3 mt-2 rounded-lg"
            >
              Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
