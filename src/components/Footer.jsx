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
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'About', to: '/about' },
  { name: 'Reviews', to: '/reviews' },
  { name: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { name: 'Home Cleaning', to: '/services/home-cleaning' },
  { name: 'Deep Clean', to: '/services/deep-clean' },
  { name: 'End of Tenancy', to: '/services/end-of-tenancy' },
  { name: 'Office Cleaning', to: '/services/office-cleaning' },
  { name: 'After Events', to: '/services/after-events' },
  { name: 'Specialist Cleaning', to: '/services/specialist-cleaning' },
];

const areaLinks = [
  { name: 'Slough', to: '/areas/slough' },
  { name: 'Windsor', to: '/areas/windsor' },
  { name: 'Langley', to: '/areas/langley' },
  { name: 'Maidenhead', to: '/areas/maidenhead' },
  { name: 'Eton', to: '/areas/eton' },
  { name: 'Burnham', to: '/areas/burnham' },
];

const socialLinks = [
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Facebook, label: 'Facebook', href: '#' },
  { Icon: Twitter, label: 'Twitter', href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-surface-border/30 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Logo & description */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-block mb-6" aria-label="Leo Luxe Cleans — Home">
              <img
                src="/logo.svg"
                alt="Leo Luxe Cleans"
                width="120"
                height="40"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mb-6">
              Professional cleaning across Slough, Windsor & Berkshire. Local team,
              proper standards, honest prices.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:01753000000"
                className="flex items-center gap-3 text-neutral-500 hover:text-gold transition-colors"
                aria-label="Call us at 01753 000 000"
              >
                <Phone size={14} className="text-gold" /> 01753 000 000
              </a>
              <a
                href="mailto:info@leoluxecleans.com"
                className="flex items-center gap-3 text-neutral-500 hover:text-gold transition-colors"
              >
                <Mail size={14} className="text-gold" /> info@leoluxecleans.com
              </a>
              <span className="flex items-center gap-3 text-neutral-500">
                <MapPin size={14} className="text-gold" /> Slough, Berkshire
              </span>
            </div>
          </div>

          <div>
            <h4 className="label-caps text-neutral-300 mb-6">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-neutral-500 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-caps text-neutral-300 mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-neutral-500 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-caps text-neutral-300 mb-6">Areas</h4>
            <ul className="space-y-3">
              {areaLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-neutral-500 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-caps text-neutral-300 mb-6">Social</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-lg border border-surface-border/40 flex items-center justify-center text-neutral-400 hover:text-gold hover:border-gold/30 transition-colors"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-border/30">
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
