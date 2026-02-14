import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Services', to: '/services' },
  { name: 'About', to: '/about' },
  { name: 'Reviews', to: '/reviews' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-surface-black/95 backdrop-blur-xl py-3 border-b border-surface-border shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="group flex flex-col relative">
          <span className="heading-serif text-2xl text-white group-hover:text-gold-light transition-colors duration-300">
            Leo Luxe
          </span>
          <span className="label-caps text-gold text-[9px] tracking-[0.3em] -mt-0.5">
            Cleans
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500"></span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
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

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute transition-all duration-300 ${
              mobileMenuOpen
                ? 'opacity-0 rotate-90 scale-75'
                : 'opacity-100 rotate-0 scale-100'
            }`}
          >
            <Menu size={24} />
          </span>
          <span
            className={`absolute transition-all duration-300 ${
              mobileMenuOpen
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-75'
            }`}
          >
            <X size={24} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface-dark/95 backdrop-blur-xl border-t border-surface-border">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `label-caps transition-all duration-300 hover:translate-x-2 ${
                    isActive ? 'text-gold' : 'text-neutral-400 hover:text-white'
                  }`
                }
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="tel:01753000000"
              className="label-caps text-gold flex items-center gap-2"
            >
              <Phone size={14} /> 01753 000 000
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
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
