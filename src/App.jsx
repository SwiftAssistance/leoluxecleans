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
  CalendarCheck,
  ChevronRight,
  Quote,
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

  const marqueeItems = [
    'Fully Insured',
    'DBS Checked',
    'Eco-Friendly Products',
    '500+ Homes Cleaned',
    '5-Star Rated',
    'Free Quotes',
    'Slough & Berkshire',
    'Same Week Booking',
    'Satisfaction Guaranteed',
    '12+ Years Experience',
  ];

  return (
    <div className="min-h-screen bg-surface-black text-white font-sans overflow-x-hidden">

      {/* ══════════ NAV ══════════ */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-surface-black/95 backdrop-blur-md py-3 border-b border-surface-border'
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <a href="#" className="flex flex-col">
            <span className="heading-serif text-2xl text-white">Leo Luxe</span>
            <span className="label-caps text-gold text-[9px] tracking-[0.3em] -mt-0.5">Cleans</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="label-caps text-neutral-400 hover:text-white transition-colors duration-300">
                {link.name}
              </a>
            ))}
            <a href="tel:01753000000" className="label-caps text-neutral-400 hover:text-gold transition-colors duration-300 flex items-center gap-2">
              <Phone size={14} /> 01753 000 000
            </a>
            <a href="#contact" className="btn-gold label-caps px-6 py-2.5 rounded-lg">
              Free Quote
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
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="label-caps text-neutral-400 hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="tel:01753000000" className="label-caps text-gold flex items-center gap-2">
                <Phone size={14} /> 01753 000 000
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-gold label-caps text-center py-3 mt-2 rounded-lg">
                Free Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ══════════ HERO — diagonal clip, overlapping badges ══════════ */}
      <section className="relative min-h-screen clip-diagonal overflow-hidden">
        {/* Background image + overlays */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Beautiful clean interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-1/3 w-[700px] h-[500px] bg-gold/5 rounded-full blur-[140px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full pt-24 pb-32 lg:pb-40">

            {/* Left — main CTA */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 glass-card rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-neutral-300 text-sm">Now taking bookings across Berkshire</span>
              </div>

              <h1 className="heading-serif text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] text-white mb-6 leading-[0.95]">
                Your Space,<br />
                <span className="text-gold-gradient">Our Standard</span>
              </h1>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-lg mb-10 font-light">
                Professional cleaning across Slough, Windsor & Berkshire.
                Reliable, thorough, and always to the highest standard.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#contact" className="btn-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2">
                  Get Your Free Quote <ArrowRight size={14} />
                </a>
                <a href="tel:01753000000" className="btn-outline-gold label-caps px-8 py-4 rounded-lg text-center flex items-center justify-center gap-2">
                  <Phone size={16} /> Call Us Now
                </a>
              </div>

              <p className="text-neutral-600 text-xs">No obligation. Free quotes. We respond within 2 hours.</p>
            </div>

            {/* Right — floating stacked badges */}
            <div className="hidden lg:flex lg:col-span-5 flex-col gap-4 items-end">
              {[
                { icon: <Star size={18} fill="#C8A94E" strokeWidth={0} />, value: '5.0', label: 'Average Rating', sub: '200+ reviews' },
                { icon: <Home size={18} />, value: '500+', label: 'Homes Cleaned', sub: 'across Berkshire' },
                { icon: <ShieldCheck size={18} />, value: '100%', label: 'Satisfaction', sub: 'guaranteed' },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl px-6 py-4 flex items-center gap-5 w-72"
                  style={{ transform: `translateX(${i * -20}px)` }}
                >
                  <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                    {badge.icon}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="heading-serif text-2xl text-white">{badge.value}</span>
                      <span className="text-neutral-400 text-xs">{badge.label}</span>
                    </div>
                    <span className="text-neutral-600 text-[11px]">{badge.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ MARQUEE TRUST TICKER ══════════ */}
      <section className="relative -mt-16 lg:-mt-24 z-20 py-5 bg-surface-dark/90 backdrop-blur-sm border-y border-gold/10 overflow-hidden">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-3 px-8 text-neutral-400 text-sm whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></span>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ══════════ SERVICES — bento grid ══════════ */}
      <section id="services" className="py-24 lg:py-32 bg-surface-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gold/[0.03] rounded-full blur-[150px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16 lg:mb-20">
            <div>
              <p className="label-caps text-gold mb-4">What We Do</p>
              <h2 className="heading-serif text-4xl lg:text-6xl text-white">Our Services</h2>
            </div>
            <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
              Whatever your space needs, we've got you covered. Every job done properly, every time.
            </p>
          </div>

          {/* Bento grid — 2 large cards on top, 4 smaller below */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">

            {/* FEATURED: Home Cleaning — large card */}
            <a href="#contact" className="lg:col-span-7 glass-card rounded-2xl p-8 lg:p-10 group relative overflow-hidden block">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/[0.04] rounded-full blur-[80px] group-hover:bg-gold/[0.08] transition-all duration-700"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-all duration-500">
                    <Home size={28} />
                  </div>
                  <span className="label-caps text-[10px] text-gold/60 group-hover:text-gold transition-colors">Most Popular</span>
                </div>
                <h3 className="heading-serif text-3xl lg:text-4xl text-white mb-3 group-hover:text-gold-light transition-colors duration-300">
                  Home Cleaning
                </h3>
                <p className="text-neutral-400 leading-relaxed max-w-md mb-8">
                  Regular or one-off cleans for your home. We treat every house like our own — thorough, careful, and spotless. From studio flats to five-bed houses.
                </p>
                <span className="btn-gold label-caps px-6 py-2.5 rounded-lg inline-flex items-center gap-2">
                  Get a Quote <ArrowRight size={12} />
                </span>
              </div>
            </a>

            {/* FEATURED: Office & Commercial — large card */}
            <a href="#contact" className="lg:col-span-5 glass-card rounded-2xl p-8 lg:p-10 group relative overflow-hidden block">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/[0.04] rounded-full blur-[60px] group-hover:bg-gold/[0.08] transition-all duration-700"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:bg-gold/20 transition-all duration-500">
                  <Building2 size={28} />
                </div>
                <h3 className="heading-serif text-3xl lg:text-4xl text-white mb-3 group-hover:text-gold-light transition-colors duration-300">
                  Office & Commercial
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  Keep your workspace looking professional. Flexible scheduling including evenings and weekends.
                </p>
                <span className="label-caps text-[10px] text-gold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Get a Quote <ChevronRight size={12} />
                </span>
              </div>
            </a>

            {/* Smaller cards */}
            {[
              { icon: <Gem size={22} />, title: 'Deep Clean', desc: 'Top-to-bottom, behind-the-scenes. Every corner, every time.' },
              { icon: <Sparkles size={22} />, title: 'End of Tenancy', desc: 'Moving in or out? We\'ll get that deposit back for you.' },
              { icon: <Clock size={22} />, title: 'After Events', desc: 'Had a party? We\'ll make it look like nothing happened.' },
              { icon: <ShieldCheck size={22} />, title: 'Specialist', desc: 'Carpets, upholstery, ovens, windows — the lot.' },
            ].map((s, i) => (
              <a key={i} href="#contact" className="lg:col-span-3 glass-card rounded-xl p-6 group block">
                <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/20 group-hover:shadow-gold-sm transition-all duration-500">
                  {s.icon}
                </div>
                <h3 className="font-sans text-white text-sm font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BIG STATEMENT BREAK ══════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-card to-surface-dark"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/[0.05] rounded-full blur-[120px]"></div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <Quote size={40} className="text-gold/30 mx-auto mb-6" />
          <blockquote className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-8">
            We don't just clean your space —<br className="hidden sm:block" />
            <span className="text-gold-gradient">we raise the standard of it.</span>
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="divider-gold"></div>
            <span className="label-caps text-neutral-500 text-[10px]">Leo Luxe Cleans</span>
            <div className="divider-gold"></div>
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT — asymmetric overlapping ══════════ */}
      <section id="about" className="py-24 lg:py-32 bg-surface-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left — image stack, overlapping */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                {/* Main image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1581578731117-104f2a8d275d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Our cleaning team at work"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

                {/* Overlapping experience badge — breaks out of container */}
                <div className="absolute -bottom-6 -right-4 lg:-right-8 btn-gold rounded-2xl p-6 shadow-gold-lg z-10">
                  <span className="heading-serif text-5xl block text-surface-black leading-none">12+</span>
                  <span className="label-caps text-[10px] text-surface-black/60 mt-1 block">Years</span>
                </div>

                {/* Overlapping small image */}
                <div className="hidden lg:block absolute -left-8 bottom-24 w-40 h-48 rounded-xl overflow-hidden border-4 border-surface-black shadow-2xl z-10">
                  <img
                    src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Cleaning detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right — content */}
            <div className="lg:col-span-6 lg:pl-8">
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

              {/* Feature list — 2-column staggered */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {[
                  { icon: <ShieldCheck size={16} />, text: 'Fully Insured & DBS Checked' },
                  { icon: <Sparkles size={16} />, text: 'Eco-Friendly Products' },
                  { icon: <Award size={16} />, text: 'Uniformed, Professional Team' },
                  { icon: <CheckCircle2 size={16} />, text: '100% Satisfaction Guarantee' },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 px-4 rounded-lg bg-surface-dark/60 border border-surface-border/50">
                    <span className="text-gold">{f.icon}</span>
                    <span className="text-neutral-300 text-sm">{f.text}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-gold label-caps px-8 py-3.5 rounded-lg inline-flex items-center gap-2">
                Get a Free Quote <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROCESS — connected steps with line ══════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark to-surface-black"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <p className="label-caps text-gold mb-4">How It Works</p>
            <h2 className="heading-serif text-4xl lg:text-6xl text-white">Three Simple Steps</h2>
          </div>

          <div className="relative">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute top-1/2 left-[16%] right-[16%] h-px bg-gradient-to-r from-gold/30 via-gold/50 to-gold/30 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
              {[
                { num: '01', title: 'Get Your Quote', desc: 'Fill in the form or give us a ring. We\'ll come back to you within 2 hours with a clear, honest price.', icon: <Phone size={20} /> },
                { num: '02', title: 'We Clean', desc: 'Our team arrives on time, fully equipped and ready. Sit back and relax while we work our magic.', icon: <Sparkles size={20} /> },
                { num: '03', title: 'You Enjoy', desc: 'Walk into a spotless space. Not happy? We\'ll come back and sort it — no extra charge.', icon: <CheckCircle2 size={20} /> },
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-surface-black border-2 border-gold/40 flex items-center justify-center mb-8">
                    <span className="text-gold">{step.icon}</span>
                  </div>
                  <div className="glass-card rounded-xl p-8 w-full">
                    <span className="text-gold-gradient heading-serif text-5xl block mb-2 opacity-30">{step.num}</span>
                    <h3 className="font-sans text-white text-base font-semibold tracking-wide mb-3 uppercase">{step.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <a href="#contact" className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center gap-2">
              Start With Step One <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ REVIEWS — featured + side cards ══════════ */}
      <section id="reviews" className="py-24 lg:py-32 bg-surface-black relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16 lg:mb-20">
            <div>
              <p className="label-caps text-gold mb-4">Testimonials</p>
              <h2 className="heading-serif text-4xl lg:text-6xl text-white">What People Say</h2>
            </div>
            <div className="flex items-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#C8A94E" strokeWidth={0} />)}
              <span className="text-neutral-400 text-sm ml-2">5.0 from 200+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

            {/* Featured review — takes up more space */}
            <div className="lg:col-span-5 glass-card rounded-2xl p-8 lg:p-10 flex flex-col border-gold/20">
              <Quote size={28} className="text-gold/40 mb-5" />
              <p className="text-white text-lg lg:text-xl leading-relaxed flex-grow mb-8 font-light">
                "Honestly can't recommend Leo Luxe enough. They cleaned our whole house before we moved in and it was absolutely spotless. The attention to detail was incredible — places I'd never even think to clean. Will definitely be using them regularly."
              </p>
              <div className="flex items-center gap-4 border-t border-gold/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold heading-serif text-lg">S</div>
                <div>
                  <p className="text-white text-sm font-medium">Sarah Mitchell</p>
                  <p className="text-neutral-500 text-xs">Homeowner, Slough</p>
                </div>
                <div className="flex ml-auto gap-0.5">
                  {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="#C8A94E" strokeWidth={0} />)}
                </div>
              </div>
            </div>

            {/* Side reviews — stacked */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { text: 'We use them for our office every week. Always on time, always thorough, and the team are really lovely. Makes such a difference to the workplace.', author: 'David Chen', role: 'Business Owner, Windsor', initial: 'D' },
                { text: 'Had them do a deep clean before our baby arrived. They got into every nook and cranny. Brilliant service from start to finish.', author: 'Priya Sharma', role: 'Homeowner, Langley', initial: 'P' },
                { text: 'End of tenancy clean was perfect. Got our full deposit back. They even cleaned inside the oven which I thought was a lost cause!', author: 'James Taylor', role: 'Tenant, Slough', initial: 'J' },
                { text: 'After our daughter\'s birthday party the place was a state. Leo Luxe came next morning and had it spotless by lunchtime. Absolute lifesaver.', author: 'Rebecca Osei', role: 'Homeowner, Windsor', initial: 'R' },
              ].map((t, i) => (
                <div key={i} className="glass-card rounded-xl p-6 flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} size={11} fill="#C8A94E" strokeWidth={0} />)}
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed flex-grow mb-5">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 border-t border-surface-border/50 pt-4">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xs heading-serif">{t.initial}</div>
                    <div>
                      <p className="text-white text-xs font-medium">{t.author}</p>
                      <p className="text-neutral-600 text-[10px]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA BAND ══════════ */}
      <section className="relative py-16 lg:py-20 overflow-hidden shimmer">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10"></div>
        <div className="absolute inset-0 bg-surface-dark/90"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <h3 className="heading-serif text-3xl lg:text-4xl text-white mb-2">Ready for a spotless space?</h3>
            <p className="text-neutral-400 text-sm">Free quote. No obligation. Response within 2 hours.</p>
          </div>
          <div className="flex gap-4">
            <a href="#contact" className="btn-gold label-caps px-8 py-4 rounded-lg whitespace-nowrap">Free Quote</a>
            <a href="tel:01753000000" className="btn-outline-gold label-caps px-8 py-4 rounded-lg whitespace-nowrap flex items-center gap-2">
              <Phone size={14} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ CONTACT FORM ══════════ */}
      <section id="contact" className="py-24 lg:py-32 bg-surface-black relative overflow-hidden">
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

            {/* Left — info */}
            <div className="lg:col-span-5">
              <p className="label-caps text-gold mb-4">Get Started</p>
              <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-6">
                Get Your Free<br />
                <span className="text-gold-gradient">Quote Today</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed font-light mb-10">
                Drop us your details and we'll get back to you within 2 hours
                with a clear, honest price. No hidden fees, no obligation.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: <Phone size={18} />, label: 'Call us', value: '01753 000 000', href: 'tel:01753000000' },
                  { icon: <Mail size={18} />, label: 'Email us', value: 'info@leoluxecleans.com', href: 'mailto:info@leoluxecleans.com' },
                  { icon: <MapPin size={18} />, label: 'We cover', value: 'Slough, Windsor, Langley & Berkshire', href: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-3 px-4 rounded-lg bg-surface-dark/60 border border-surface-border/40">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-neutral-500 text-[10px] uppercase tracking-wide">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white text-sm hover:text-gold transition-colors font-medium">{item.value}</a>
                      ) : (
                        <p className="text-white text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 text-neutral-500 text-xs">
                <ShieldCheck size={14} className="text-gold" />
                <span>Your details are safe with us. We never share your information.</span>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-2xl p-8 lg:p-10 border-gold/15">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} className="text-gold" />
                    </div>
                    <h3 className="heading-serif text-3xl text-white mb-3">Thank You!</h3>
                    <p className="text-neutral-400 text-sm">We'll be in touch within 2 hours with your quote.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
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
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
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
                    </div>
                    <button type="submit" className="w-full btn-gold label-caps py-4 rounded-lg mt-2">
                      Get My Free Quote
                    </button>
                    <p className="text-neutral-500 text-xs text-center mt-4">
                      No obligation — Free quote — Response within 2 hours
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-surface-dark border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col mb-6">
                <span className="heading-serif text-2xl text-white">Leo Luxe</span>
                <span className="label-caps text-gold text-[9px] tracking-[0.3em] -mt-0.5">Cleans</span>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                Professional cleaning across Slough, Windsor & Berkshire. Premium results at honest prices.
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

      {/* ══════════ STICKY MOBILE CTA ══════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface-black/95 backdrop-blur-md border-t border-gold/20 px-4 py-3 flex gap-3">
        <a href="tel:01753000000" className="flex-1 btn-outline-gold label-caps py-3 rounded-lg text-center flex items-center justify-center gap-2">
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
