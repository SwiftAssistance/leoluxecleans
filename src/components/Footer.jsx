import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from 'lucide-react';

const footerLinks = [
  { name: 'Services', to: '/services' },
  { name: 'About', to: '/about' },
  { name: 'Reviews', to: '/reviews' },
  { name: 'Get Quote', to: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex flex-col mb-6 inline-block">
              <span className="heading-serif text-2xl text-white">Leo Luxe</span>
              <span className="label-caps text-gold text-[9px] tracking-[0.3em] -mt-0.5">
                Cleans
              </span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Professional cleaning across Slough, Windsor & Berkshire. Premium
              results at honest prices.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="label-caps text-neutral-300 mb-6">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-neutral-500 hover:text-gold transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-caps text-neutral-300 mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:01753000000"
                  className="flex items-center gap-3 text-neutral-500 hover:text-gold transition-colors"
                >
                  <Phone size={14} className="text-gold" /> 01753 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@leoluxecleans.com"
                  className="flex items-center gap-3 text-neutral-500 hover:text-gold transition-colors"
                >
                  <Mail size={14} className="text-gold" /> info@leoluxecleans.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-500">
                <MapPin size={14} className="text-gold" /> Slough, Berkshire
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="label-caps text-neutral-300 mb-6">Social</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-neutral-400 hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs">
            &copy; {new Date().getFullYear()} Leo Luxe Cleans. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-neutral-600 hover:text-neutral-400 transition-colors text-xs"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-neutral-400 transition-colors text-xs"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
