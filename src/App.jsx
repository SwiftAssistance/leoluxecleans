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
    { icon: <Home size={28} />, title: 'Home Cleaning', desc: 'Regular or one-off cleans for your home. We treat every house like our own — thorough, careful, and spotless.' },
    { icon: <Building2 size={28} />, title: 'Office & Commercial', desc: 'Keep your workspace looking professional. Flexible scheduling including evenings and weekends to suit your business.' },
    { icon: <Gem size={28} />, title: 'Deep Clean', desc: 'A top-to-bottom, behind-the-scenes clean that gets into every corner. Perfect for spring cleans or fresh starts.' },
    { icon: <Sparkles size={28} />, title: 'End of Tenancy', desc: 'Moving in or out? We\'ll make sure the place is spotless for handover — helping you get that deposit back.' },
    { icon: <Clock size={28} />, title: 'After Event Cleanup', desc: 'Had a party or event? We\'ll have your space looking like nothing happened. You enjoy it, we sort it.' },
    { icon: <ShieldCheck size={28} />, title: 'Specialist Cleaning', desc: 'Carpets, upholstery, ovens, windows — whatever needs extra care, we\'ve got the right tools and products.' },
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
            <a href="tel:01753000000" className="label-caps text-neutral-400 hover:text-gold transition-colors duration-300 flex items-center gap-2">
              <Phone size={14} /> 01753 000 000
            </a>
            <a href="#contact" className="btn-gold label-caps px-6 py-2.5 rounded-lg">
              Get Free Quote
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-dark/95 backdrop-blur-md border-t border-surface-border">
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
              <a href="tel:01753000000" className="label-caps text-gold flex items-center gap-2">
                <Phone size={14} /> 01753 000 000
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-gold label-caps text-center py-3 mt-2 rounded-lg">
                Get Free Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-end pb-28 pt-32 lg:items-center lg:pb-0 lg:pt-0 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Beautiful clean interior"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30"></div>
          {/* Gold ambient glow */}
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 glass-card rounded-full px-4 py-2 mb-8">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#C8A94E" strokeWidth={0} />)}
              </div>
              <span className="text-neutral-300 text-sm">Rated 5.0 by 200+ happy customers</span>
            </div>
            <h1 className="heading-serif text-5xl sm:text-6xl lg:text-8xl text-white mb-6">
              A Cleaner Home,<br />
              <span className="text-gold-gradient">A Better Feeling</span>
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-lg mb-10 font-light">
              Professional cleaning across Slough, Windsor & Berkshire.
              Reliable, thorough, and always to the highest standard.
              You deserve to come home to spotless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href="#contact" className="btn-gold label-caps px-8 py-4 rounded-lg text-center">
                Get Your Free Quote
              </a>
              <a href="tel:01753000000" className="label-caps border border-neutral-600 text-white px-8 py-4 rounded-lg hover:border-gold hover:text-gold transition-all duration-300 text-center flex items-center justify-center gap-2 hover:shadow-gold-sm">
                <Phone size={16} /> Call Us Now
              </a>
            </div>
            <p className="text-neutral-500 text-xs">No obligation. Free quotes. We respond within 2 hours.</p>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="relative shimmer border-y border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-card to-surface-dark"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { value: '500+', label: 'Homes Cleaned', icon: <Home size={20} /> },
              { value: '5.0', label: 'Star Rating', icon: <Star size={20} /> },
              { value: '100%', label: 'Satisfaction', icon: <Award size={20} /> },
              { value: '2hr', label: 'Quote Response', icon: <CalendarCheck size={20} /> },
            ].map((stat, i) => (
              <div key={i} className="py-8 lg:py-10 text-center border-r border-gold/10 last:border-0">
                <div className="text-gold mb-3 flex justify-center">{stat.icon}</div>
                <span className="heading-serif text-3xl lg:text-4xl text-white block">{stat.value}</span>
                <span className="text-neutral-500 text-xs tracking-wide uppercase mt-1 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 lg:py-32 bg-surface-black relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gold/[0.03] rounded-full blur-[150px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <p className="label-caps text-gold mb-4">What We Do</p>
            <h2 className="heading-serif text-4xl lg:text-6xl text-white mb-4">Our Services</h2>
            <p className="text-neutral-500 max-w-md mx-auto text-sm leading-relaxed">
              Whatever your space needs, we've got you covered. Every job done properly, every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <a key={i} href="#contact" className="glass-card rounded-xl p-8 group block">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold/20 group-hover:shadow-gold-sm transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="font-sans text-white text-lg font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <span className="label-caps text-[10px] text-gold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  Get a Quote <ArrowRight size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT / WHY US ─── */}
      <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark to-surface-black"></div>
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1581578731117-104f2a8d275d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Pristine clean room"
                  className="w-full aspect-[4/5] object-cover"
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 btn-gold rounded-xl p-5 lg:p-7 shadow-gold-lg">
                <span className="heading-serif text-4xl lg:text-5xl block text-surface-black">12+</span>
                <span className="label-caps text-[10px] text-surface-black/70">Years Experience</span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="label-caps text-gold mb-4">Why Choose Us</p>
              <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-6">
                We Take Pride<br />in Every Clean
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-10 font-light text-[15px]">
                We're not just another cleaning company. Our team is fully trained,
                DBS checked, and genuinely cares about doing a brilliant job.
                Whether it's a studio flat or a five-bedroom house, we give it
                the same attention to detail.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Fully Insured & DBS Checked',
                  'Eco-Friendly Products',
                  'Uniformed, Professional Team',
                  '100% Satisfaction Guarantee',
                ].map((feature, i) => (
                  <div key={i} className="glass-card rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                    <span className="text-neutral-200 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-gold label-caps px-8 py-3.5 rounded-lg inline-block">
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="process" className="py-24 lg:py-32 bg-surface-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <p className="label-caps text-gold mb-4">How It Works</p>
            <h2 className="heading-serif text-4xl lg:text-6xl text-white mb-4">Simple as 1, 2, 3</h2>
            <p className="text-neutral-500 text-sm max-w-md mx-auto">Getting started is easy. Here's how it works.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Get Your Quote', desc: 'Fill in the form or give us a ring. We\'ll come back to you within 2 hours with a clear, honest price.' },
              { num: '02', title: 'We Clean', desc: 'Our team arrives on time, fully equipped, and ready to go. Sit back and relax while we work our magic.' },
              { num: '03', title: 'You Enjoy', desc: 'Walk into a spotless space. Not happy with something? We\'ll come back and sort it — no extra charge.' },
            ].map((step, i) => (
              <div key={i} className="glass-card rounded-xl p-8 lg:p-10 text-center relative group hover:border-gold/30 transition-all duration-500">
                <span className="text-gold-gradient heading-serif text-7xl lg:text-8xl block mb-4 opacity-40 group-hover:opacity-70 transition-opacity">{step.num}</span>
                <h3 className="font-sans text-white text-base font-semibold tracking-wide mb-3 uppercase">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="btn-gold label-caps px-10 py-4 rounded-lg inline-block">
              Start With Step One
            </a>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="reviews" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark to-surface-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/[0.04] rounded-full blur-[150px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
            <div>
              <p className="label-caps text-gold mb-4">Testimonials</p>
              <h2 className="heading-serif text-4xl lg:text-6xl text-white">Real Reviews,<br />Real Customers</h2>
            </div>
            <a href="#contact" className="label-caps text-gold hover:text-gold-light transition-colors flex items-center gap-2 group">
              Join 200+ happy customers
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              { text: 'Honestly can\'t recommend Leo Luxe enough. They cleaned our whole house before we moved in and it was absolutely spotless. Will definitely use again.', author: 'Sarah Mitchell', role: 'Homeowner, Slough' },
              { text: 'We use them for our office every week. Always on time, always thorough, and the team are really lovely. Makes such a difference to the workplace.', author: 'David Chen', role: 'Business Owner, Windsor' },
              { text: 'Had them do a deep clean before our baby arrived. They got into every nook and cranny. The place has never been this clean. Brilliant service.', author: 'Priya Sharma', role: 'Homeowner, Langley' },
            ].map((testimonial, i) => (
              <div key={i} className="glass-card rounded-xl p-8 lg:p-10 flex flex-col">
                <div className="flex text-gold mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#C8A94E" strokeWidth={0} />)}
                </div>
                <p className="text-neutral-200 leading-relaxed flex-grow mb-8 text-[15px]">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gold/10 pt-5">
                  <p className="text-white text-sm font-medium">{testimonial.author}</p>
                  <p className="text-neutral-500 text-xs mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEAD CAPTURE FORM ─── */}
      <section id="contact" className="py-24 lg:py-32 bg-surface-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            <div>
              <p className="label-caps text-gold mb-4">Get Started</p>
              <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-6">
                Get Your Free<br />
                <span className="text-gold-gradient">Quote Today</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed font-light mb-10">
                Drop us your details and we'll get back to you within 2 hours
                with a clear, honest price. No hidden fees, no obligation.
              </p>

              <div className="space-y-5">
                {[
                  { icon: <Phone size={18} />, label: 'Call us', value: '01753 000 000', href: 'tel:01753000000' },
                  { icon: <Mail size={18} />, label: 'Email us', value: 'info@leoluxecleans.com', href: 'mailto:info@leoluxecleans.com' },
                  { icon: <MapPin size={18} />, label: 'We cover', value: 'Slough, Windsor, Langley & Berkshire', href: null },
                ].map((item, i) => (
                  <div key={i} className="glass-card rounded-lg p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-neutral-500 text-xs uppercase tracking-wide">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white text-sm hover:text-gold transition-colors font-medium">{item.value}</a>
                      ) : (
                        <p className="text-white text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 text-neutral-500 text-xs">
                <ShieldCheck size={14} className="text-gold" />
                <span>Your details are safe with us. We never share your information.</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 lg:p-10">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-gold" />
                  </div>
                  <h3 className="heading-serif text-3xl text-white mb-3">Thank You!</h3>
                  <p className="text-neutral-400 text-sm">We'll be in touch within 2 hours with your quote.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="label-caps text-neutral-400 text-[10px] block mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-surface-black/80 border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none focus:shadow-gold-sm transition-all placeholder:text-neutral-600"
                      placeholder="e.g. Sarah Mitchell"
                    />
                  </div>
                  <div>
                    <label className="label-caps text-neutral-400 text-[10px] block mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-surface-black/80 border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none focus:shadow-gold-sm transition-all placeholder:text-neutral-600"
                      placeholder="e.g. 07700 000 000"
                    />
                  </div>
                  <div>
                    <label className="label-caps text-neutral-400 text-[10px] block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-surface-black/80 border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none focus:shadow-gold-sm transition-all placeholder:text-neutral-600"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="label-caps text-neutral-400 text-[10px] block mb-2">What Do You Need?</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-surface-black/80 border border-surface-border rounded-lg px-4 py-3.5 text-white text-sm focus:border-gold focus:outline-none focus:shadow-gold-sm transition-all appearance-none"
                    >
                      <option value="">Choose a service</option>
                      <option value="home">Home Cleaning</option>
                      <option value="office">Office & Commercial</option>
                      <option value="deep">Deep Clean</option>
                      <option value="tenancy">End of Tenancy</option>
                      <option value="event">After Event Cleanup</option>
                      <option value="specialist">Specialist Cleaning</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-gold label-caps py-4 rounded-lg"
                  >
                    Get My Free Quote
                  </button>
                  <p className="text-neutral-500 text-xs text-center">
                    No obligation — Free quote — Response within 2 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-surface-dark border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col mb-6">
                <span className="heading-serif text-2xl text-white">Leo Luxe</span>
                <span className="label-caps text-gold text-[9px] tracking-[0.3em] -mt-0.5">Cleans</span>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                Professional cleaning services across Slough, Windsor & Berkshire.
                Premium results at honest prices.
              </p>
            </div>

            <div>
              <h4 className="label-caps text-neutral-300 mb-6">Navigate</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Services', href: '#services' },
                  { name: 'About', href: '#about' },
                  { name: 'Reviews', href: '#reviews' },
                  { name: 'Get Quote', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-neutral-500 hover:text-gold transition-colors text-sm">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="label-caps text-neutral-300 mb-6">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="tel:01753000000" className="flex items-center gap-3 text-neutral-500 hover:text-gold transition-colors"><Phone size={14} className="text-gold" /> 01753 000 000</a></li>
                <li><a href="mailto:info@leoluxecleans.com" className="flex items-center gap-3 text-neutral-500 hover:text-gold transition-colors"><Mail size={14} className="text-gold" /> info@leoluxecleans.com</a></li>
                <li className="flex items-center gap-3 text-neutral-500"><MapPin size={14} className="text-gold" /> Slough, Berkshire</li>
              </ul>
            </div>

            <div>
              <h4 className="label-caps text-neutral-300 mb-6">Social</h4>
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-neutral-400 hover:text-gold transition-all duration-300">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600 text-xs">&copy; {new Date().getFullYear()} Leo Luxe Cleans. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-600 hover:text-neutral-400 transition-colors text-xs">Privacy Policy</a>
              <a href="#" className="text-neutral-600 hover:text-neutral-400 transition-colors text-xs">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── STICKY MOBILE CTA ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface-black/95 backdrop-blur-md border-t border-gold/20 px-4 py-3 flex gap-3">
        <a href="tel:01753000000" className="flex-1 label-caps border border-gold/50 text-gold py-3 rounded-lg text-center flex items-center justify-center gap-2 hover:border-gold transition-colors">
          <Phone size={14} /> Call
        </a>
        <a href="#contact" className="flex-1 btn-gold label-caps py-3 rounded-lg text-center">
          Free Quote
        </a>
      </div>
    </div>
  );
};

export default App;
