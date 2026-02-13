import React, { useState, useEffect } from 'react';
import {
  Home,
  Building2,
  Gem,
  ShieldCheck,
  Clock,
  Star,
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Sparkles,
  Quote,
  CheckCircle2,
  Award,
  CalendarCheck
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: '', phone: '', email: '', service: '' });
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
  ];

  const services = [
    { icon: <Home size={24} />, title: 'Estate Residential', desc: 'Luxury homes, penthouses, and estates — delicate surfaces and high-value furnishings handled with expert care.' },
    { icon: <Building2 size={24} />, title: 'Corporate Spaces', desc: 'After-hours service ensuring zero disruption to your operations. Pristine offices, every morning.' },
    { icon: <Gem size={24} />, title: 'Deep Purification', desc: 'Hospital-grade, eco-friendly sanitization. A top-to-bottom refresh for a truly sterile environment.' },
    { icon: <Sparkles size={24} />, title: 'Move-In / Move-Out', desc: 'Transition with confidence. Every corner immaculate before you arrive or after you leave.' },
    { icon: <Clock size={24} />, title: 'Event Restoration', desc: 'Pre-event preparation and post-event cleanup. Enjoy your gathering — we handle the rest.' },
    { icon: <ShieldCheck size={24} />, title: 'Specialized Surfaces', desc: 'Marble, granite, hardwood, crystal — material-specific products and trained specialists.' },
  ];

  return (
    <div className="min-h-screen bg-surface-black text-white font-sans">

      {/* ─── NAVIGATION ─── */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-surface-black/95 backdrop-blur-md py-3 border-b border-surface-border'
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <a href="#" className="flex flex-col">
            <span className="heading-serif text-2xl text-white">Leo Luxe</span>
            <span className="label-caps text-gold text-[9px] tracking-[0.3em] -mt-0.5">Cleans</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="label-caps text-neutral-400 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:5551234567" className="label-caps text-neutral-400 hover:text-gold transition-colors duration-300 flex items-center gap-2">
              <Phone size={14} /> (555) 123-4567
            </a>
            <a href="#contact" className="label-caps text-surface-black bg-gold hover:bg-gold-dark px-6 py-2.5 transition-colors duration-300">
              Get Free Quote
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-dark border-t border-surface-border">
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="label-caps text-neutral-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a href="tel:5551234567" className="label-caps text-gold flex items-center gap-2">
                <Phone size={14} /> (555) 123-4567
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="label-caps text-surface-black bg-gold text-center py-3 mt-2">
                Get Free Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-end pb-24 pt-32 lg:items-center lg:pb-0 lg:pt-0 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#C8A94E" strokeWidth={0} />)}
              </div>
              <span className="text-neutral-400 text-sm">Rated 5.0 by 200+ clients</span>
            </div>
            <h1 className="heading-serif text-5xl sm:text-6xl lg:text-8xl text-white mb-6">
              Your Space,<br />Perfected
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-lg mb-8 font-light">
              Beverly Hills' trusted premium cleaning service. We handle the pristine
              — you enjoy the result. Licensed, bonded, and 100% satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href="#contact" className="label-caps bg-gold text-surface-black px-8 py-4 hover:bg-gold-dark transition-colors duration-300 text-center">
                Get Your Free Quote
              </a>
              <a href="tel:5551234567" className="label-caps border border-neutral-600 text-white px-8 py-4 hover:border-gold hover:text-gold transition-colors duration-300 text-center flex items-center justify-center gap-2">
                <Phone size={16} /> Call Now
              </a>
            </div>
            <p className="text-neutral-600 text-xs">Free consultation. No obligation. Response within 2 hours.</p>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-surface-dark border-y border-surface-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { value: '500+', label: 'Homes Serviced', icon: <Home size={18} /> },
              { value: '5.0', label: 'Star Rating', icon: <Star size={18} /> },
              { value: '100%', label: 'Satisfaction Rate', icon: <Award size={18} /> },
              { value: '24hr', label: 'Response Time', icon: <CalendarCheck size={18} /> },
            ].map((stat, i) => (
              <div key={i} className="py-8 lg:py-10 text-center border-r border-surface-border last:border-0 odd:border-r even:lg:border-r">
                <div className="text-gold mb-2 flex justify-center">{stat.icon}</div>
                <span className="heading-serif text-3xl lg:text-4xl text-white block">{stat.value}</span>
                <span className="text-neutral-500 text-xs tracking-wide uppercase mt-1 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 lg:py-32 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
            <div>
              <p className="label-caps text-gold mb-4">What We Do</p>
              <h2 className="heading-serif text-4xl lg:text-6xl text-white">Our Expertise</h2>
            </div>
            <a href="#contact" className="label-caps text-gold hover:text-gold-light transition-colors duration-300 flex items-center gap-2 group">
              Get a quote for any service
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-surface-border">
            {services.map((service, i) => (
              <a key={i} href="#contact" className="bg-surface-black p-8 lg:p-10 group hover:bg-surface-dark transition-colors duration-500 block">
                <div className="text-gold mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {service.icon}
                </div>
                <h3 className="font-sans text-white text-base font-medium mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-light mb-6">
                  {service.desc}
                </p>
                <span className="label-caps text-[10px] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-1">
                  Get Quote <ArrowRight size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT / WHY US ─── */}
      <section id="about" className="py-24 lg:py-32 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1581578731117-104f2a8d275d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Pristine Living Room"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-surface-black p-6 lg:p-8 hidden sm:block">
                <span className="heading-serif text-4xl lg:text-5xl block">12+</span>
                <span className="label-caps text-[10px] text-surface-black/70">Years of Excellence</span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="label-caps text-gold mb-4">Why Leo Luxe</p>
              <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-8">
                We Don't Just Clean.<br />We Curate Spaces.
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-10 font-light">
                Our team is rigorously vetted, trained in five-star hospitality standards,
                and equipped with the finest tools in the industry. Every visit is an exercise
                in precision and care.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  'Fully Licensed, Bonded & Insured',
                  'Eco-Friendly, Non-Toxic Premium Products',
                  'White-Glove Uniformed Staff',
                  '100% Satisfaction Guarantee',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                    <span className="text-neutral-300 text-sm tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="inline-block label-caps bg-gold text-surface-black px-8 py-3.5 hover:bg-gold-dark transition-colors duration-300">
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="process" className="py-24 lg:py-32 bg-surface-black border-y border-surface-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <p className="label-caps text-gold mb-4">How It Works</p>
            <h2 className="heading-serif text-4xl lg:text-6xl text-white">Three Simple Steps</h2>
            <p className="text-neutral-500 text-sm mt-4 max-w-md mx-auto">From first contact to a spotless space — here's how easy it is.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { num: '01', title: 'Get Your Quote', desc: 'Fill out the form or call us. We\'ll discuss your needs and give you a transparent, no-obligation quote within 2 hours.' },
              { num: '02', title: 'We Clean', desc: 'Our uniformed specialists arrive on schedule, fully equipped. Sit back while we transform your space.' },
              { num: '03', title: 'You Approve', desc: 'A final walkthrough ensures every detail is perfect. Not satisfied? We\'ll re-clean at no extra cost.' },
            ].map((step, i) => (
              <div key={i} className="relative p-8 lg:p-12 text-center border-b md:border-b-0 md:border-r border-surface-border last:border-0">
                <span className="heading-serif text-7xl lg:text-8xl text-surface-border block mb-4">{step.num}</span>
                <h3 className="font-sans text-white text-base font-medium tracking-wide mb-3 uppercase">{step.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-light max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="inline-block label-caps bg-gold text-surface-black px-10 py-4 hover:bg-gold-dark transition-colors duration-300">
              Start With Step One
            </a>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="reviews" className="py-24 lg:py-32 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
            <div>
              <p className="label-caps text-gold mb-4">Testimonials</p>
              <h2 className="heading-serif text-4xl lg:text-6xl text-white">Trusted by 200+ Clients</h2>
            </div>
            <a href="#contact" className="label-caps text-gold hover:text-gold-light transition-colors flex items-center gap-2 group">
              Join them
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-surface-border">
            {[
              { text: 'Leo Luxe has completely transformed how we maintain our home. The attention to detail is unlike anything I\'ve experienced. True professionals.', author: 'Victoria Sterling', role: 'Estate Owner' },
              { text: 'Reliable, discreet, and incredibly thorough. They handle our corporate headquarters with the utmost professionalism. The gold standard of cleaning.', author: 'James Rothschild', role: 'CEO, Apex Holdings' },
              { text: 'I was hesitant about my delicate vintage furniture, but their team knew exactly how to handle every material. Simply outstanding.', author: 'Elena Fisher', role: 'Interior Designer' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-surface-dark p-8 lg:p-10 flex flex-col">
                <div className="flex text-gold mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#C8A94E" strokeWidth={0} />)}
                </div>
                <p className="text-neutral-300 leading-relaxed font-light flex-grow mb-8 text-[15px]">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-surface-border pt-6">
                  <p className="text-white text-sm font-medium">{testimonial.author}</p>
                  <p className="text-neutral-500 text-xs mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEAD CAPTURE FORM ─── */}
      <section id="contact" className="py-24 lg:py-32 bg-surface-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            <div>
              <p className="label-caps text-gold mb-4">Get Started</p>
              <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-6">
                Get Your Free<br />Quote Today
              </h2>
              <p className="text-neutral-400 leading-relaxed font-light mb-10">
                Fill out the form and we'll get back to you within 2 hours with a
                transparent, no-obligation quote tailored to your space.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <Phone size={16} />, label: 'Call us directly', value: '(555) 123-4567', href: 'tel:5551234567' },
                  { icon: <Mail size={16} />, label: 'Email us', value: 'info@leoluxecleans.com', href: 'mailto:info@leoluxecleans.com' },
                  { icon: <MapPin size={16} />, label: 'Serving', value: 'Beverly Hills & Greater LA', href: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="text-gold mt-0.5">{item.icon}</div>
                    <div>
                      <p className="text-neutral-500 text-xs uppercase tracking-wide">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white text-sm hover:text-gold transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-white text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-3 text-neutral-600 text-xs">
                <ShieldCheck size={14} className="text-gold" />
                <span>Your information is secure and never shared with third parties.</span>
              </div>
            </div>

            <div className="bg-surface-dark border border-surface-border p-8 lg:p-10">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle2 size={48} className="text-gold mb-6" />
                  <h3 className="heading-serif text-3xl text-white mb-3">Thank You</h3>
                  <p className="text-neutral-400 text-sm">We'll be in touch within 2 hours with your personalized quote.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="label-caps text-neutral-400 text-[10px] block mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-surface-black border border-surface-border px-4 py-3 text-white text-sm focus:border-gold focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="label-caps text-neutral-400 text-[10px] block mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-surface-black border border-surface-border px-4 py-3 text-white text-sm focus:border-gold focus:outline-none transition-colors"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="label-caps text-neutral-400 text-[10px] block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-surface-black border border-surface-border px-4 py-3 text-white text-sm focus:border-gold focus:outline-none transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="label-caps text-neutral-400 text-[10px] block mb-2">Service Needed</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-surface-black border border-surface-border px-4 py-3 text-white text-sm focus:border-gold focus:outline-none transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Estate Residential</option>
                      <option value="corporate">Corporate Spaces</option>
                      <option value="deep">Deep Purification</option>
                      <option value="move">Move-In / Move-Out</option>
                      <option value="event">Event Restoration</option>
                      <option value="specialized">Specialized Surfaces</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full label-caps bg-gold text-surface-black py-4 hover:bg-gold-dark transition-colors duration-300"
                  >
                    Get My Free Quote
                  </button>
                  <p className="text-neutral-600 text-xs text-center">
                    Free consultation — No obligation — Response within 2 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-surface-black border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col mb-6">
                <span className="heading-serif text-2xl text-white">Leo Luxe</span>
                <span className="label-caps text-gold text-[9px] tracking-[0.3em] -mt-0.5">Cleans</span>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
                Beverly Hills' premium cleaning service.
                Luxury, reliability, perfection in every detail.
              </p>
            </div>

            <div>
              <h4 className="label-caps text-neutral-400 mb-6">Navigate</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Services', href: '#services' },
                  { name: 'About', href: '#about' },
                  { name: 'Reviews', href: '#reviews' },
                  { name: 'Get Quote', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-neutral-600 hover:text-white transition-colors text-sm">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="label-caps text-neutral-400 mb-6">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="tel:5551234567" className="flex items-center gap-3 text-neutral-600 hover:text-gold transition-colors"><Phone size={14} className="text-gold" /> (555) 123-4567</a></li>
                <li><a href="mailto:info@leoluxecleans.com" className="flex items-center gap-3 text-neutral-600 hover:text-gold transition-colors"><Mail size={14} className="text-gold" /> info@leoluxecleans.com</a></li>
                <li className="flex items-center gap-3 text-neutral-600"><MapPin size={14} className="text-gold" /> Beverly Hills, CA</li>
              </ul>
            </div>

            <div>
              <h4 className="label-caps text-neutral-400 mb-6">Social</h4>
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 border border-surface-border flex items-center justify-center text-neutral-600 hover:border-gold hover:text-gold transition-all duration-300">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-neutral-700 text-xs">&copy; {new Date().getFullYear()} Leo Luxe Cleans. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-700 hover:text-neutral-400 transition-colors text-xs">Privacy</a>
              <a href="#" className="text-neutral-700 hover:text-neutral-400 transition-colors text-xs">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── STICKY MOBILE CTA ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface-black/95 backdrop-blur-md border-t border-surface-border px-4 py-3 flex gap-3">
        <a href="tel:5551234567" className="flex-1 label-caps border border-gold text-gold py-3 text-center flex items-center justify-center gap-2">
          <Phone size={14} /> Call
        </a>
        <a href="#contact" className="flex-1 label-caps bg-gold text-surface-black py-3 text-center">
          Free Quote
        </a>
      </div>
    </div>
  );
};

export default App;
