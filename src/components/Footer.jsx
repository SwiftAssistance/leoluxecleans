import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Star,
  Clock,
} from 'lucide-react';
import { business, isCoreArea } from '../config/business';
import { areas } from '../data/areas';
import { locations } from '../data/locations';

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
  ...areas.map((a) => ({ name: a.name, to: `/areas/${a.slug}/` })),
  { name: 'All areas', to: '/areas/' },
];

// Towns we cover without their own page (listed on /areas/).
const otherAreaNames = locations.filter((l) => !isCoreArea(l.slug)).map((l) => l.name);

const socialLinks = [
  { Icon: Star, label: 'Google', href: business.google.profileUrl },
  { Icon: Instagram, label: 'Instagram', href: business.instagram },
];

const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-surface-border/30 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 lg:gap-8">
          {/* Logo & description */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-6" aria-label="Leo Luxe Clean — Home">
              <img
                src="/logo.webp"
                alt="Leo Luxe Clean"
                width={186}
                height={96}
                loading="lazy"
                decoding="async"
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mb-6">
              Professional cleaning across Slough, Windsor & Berkshire. Local team,
              proper standards, honest prices.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={business.phone.href}
                className="flex items-center gap-3 text-neutral-400 hover:text-gold transition-colors"
                aria-label={`Call us on ${business.phone.display}`}
              >
                <Phone size={14} className="text-gold" />
                <span> {business.phone.display}</span>
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-3 text-neutral-500 hover:text-gold transition-colors"
              >
                <Mail size={14} className="text-gold" /> {business.email}
              </a>
              <a
                href={business.google.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-neutral-500 hover:text-gold transition-colors"
                aria-label="Find Leo Luxe Clean on Google Maps"
              >
                <MapPin size={14} className="text-gold mt-1 flex-shrink-0" />
                <address className="not-italic">{business.address.singleLine}</address>
              </a>
              <p className="flex items-center gap-3 text-neutral-500">
                <Clock size={14} className="text-gold" /> {business.hours.short}
              </p>
            </div>
          </div>

          <div>
            <h4 className="label-caps text-neutral-300 mb-6">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.to}
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
                    href={link.to}
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
                    href={link.to}
                    className="text-neutral-500 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-caps text-neutral-300 mb-6">Also covering</h4>
            <p className="text-neutral-500 text-sm leading-relaxed">{otherAreaNames.join(', ')}</p>
          </div>

          <div>
            <h4 className="label-caps text-neutral-300 mb-6">Social</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-surface-border/40 flex items-center justify-center text-neutral-400 hover:text-gold hover:border-gold/30 transition-colors"
                  aria-label={label === 'Google' ? 'Find us on Google' : `Follow us on ${label}`}
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
            &copy; {new Date().getFullYear()} Leo Luxe Clean. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy/"
              className="text-neutral-500 hover:text-neutral-300 transition-colors text-xs"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms/"
              className="text-neutral-500 hover:text-neutral-300 transition-colors text-xs"
            >
              Terms of Service
            </Link>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors text-xs"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
