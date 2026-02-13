import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Home, 
  Building2, 
  Gem, 
  ShieldCheck, 
  Clock, 
  Star, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

/**
 * Leo Luxe Clean - Premium Cleaning Service Homepage
 * * Design Philosophy:
 * - Dark Mode aesthetic (Black/Dark Grey backgrounds)
 * - Gold Accents (#D4AF37) for luxury cues
 * - Generous whitespace and rounded-sm corners for elegance
 */

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Navigation Links
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- NAVIGATION --- */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-lg border-b border-[#333]' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Sparkles className="text-[#D4AF37] w-8 h-8" />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-widest uppercase">Leo Luxe</span>
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37]">Premium Cleaning</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#D4AF37] hover:bg-[#C5A028] text-black font-semibold px-6 py-2 rounded-sm transition-all duration-300 transform hover:-translate-y-0.5">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A1A1A] absolute top-full left-0 w-full border-t border-[#333] py-8 px-6 flex flex-col space-y-6 animate-fade-in">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg uppercase tracking-widest hover:text-[#D4AF37]"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#D4AF37] text-black font-bold py-3 w-full uppercase tracking-widest">
              Book Consultation
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mb-6 inline-block border border-[#D4AF37] px-4 py-1 rounded-full bg-black/50 backdrop-blur-sm">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">The Art of Clean Living</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Elevate Your Space <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F5E089]">
              To Absolute Luxury
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Experience the pinnacle of residential and commercial cleaning. 
            Meticulous attention to detail for those who demand perfection.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-[#D4AF37] hover:bg-[#C5A028] text-black font-bold px-10 py-4 rounded-sm transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Schedule Service
            </button>
            <button className="border border-white hover:border-[#D4AF37] hover:text-[#D4AF37] text-white font-bold px-10 py-4 rounded-sm transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
          <SectionHeader title="Our Expertise" subtitle="Curated Cleaning Services" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Home />} 
              title="Estate Residential" 
              desc="Comprehensive cleaning for luxury homes, penthouses, and estates. We handle delicate surfaces and high-value furnishings with expert care."
            />
            <ServiceCard 
              icon={<Building2 />} 
              title="Corporate Spaces" 
              desc="Maintain a pristine professional environment. After-hours service available to ensure zero disruption to your business operations."
            />
            <ServiceCard 
              icon={<Gem />} 
              title="Deep Purification" 
              desc="An exhaustive top-to-bottom refresh using hospital-grade, eco-friendly sanitization methods for a truly sterile environment."
            />
            <ServiceCard 
              icon={<Sparkles />} 
              title="Move-In / Move-Out" 
              desc="Transition into your new sanctuary with confidence. We ensure every corner is immaculate before you arrive or after you leave."
            />
            <ServiceCard 
              icon={<Clock />} 
              title="Event Restoration" 
              desc="Pre-event preparation and post-event restoration. Enjoy your gathering knowing the cleanup is in professional hands."
            />
            <ServiceCard 
              icon={<ShieldCheck />} 
              title="Specialized Surfaces" 
              desc="Expert care for marble, granite, hardwood, and crystal chandeliers using material-specific premium products."
            />
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section id="why-us" className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2">
              <SectionHeader title="The Leo Luxe Standard" subtitle="Why We Are Different" align="left" />
              <p className="text-gray-400 mb-8 leading-relaxed">
                We don't just clean; we curate an environment of wellness and luxury. 
                Our team is rigorously vetted, trained in 5-star hospitality standards, 
                and equipped with the finest tools in the industry.
              </p>
              
              <div className="space-y-6">
                <FeatureRow text="Fully Licensed, Bonded & Insured" />
                <FeatureRow text="Eco-Friendly, Non-Toxic Premium Products" />
                <FeatureRow text="White-Glove Uniformed Staff" />
                <FeatureRow text="100% Satisfaction Guarantee" />
              </div>

              <button className="mt-10 group flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-bold">
                Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 border border-[#D4AF37]/30 rounded-sm translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1581578731117-104f2a8d275d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Pristine Clean Living Room" 
                className="relative rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section id="process" className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader title="Seamless Experience" subtitle="Our Process" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <ProcessStep 
              number="01" 
              title="Consultation & Booking" 
              desc="We discuss your specific needs and tailor a bespoke cleaning plan that fits your schedule."
            />
            <ProcessStep 
              number="02" 
              title="The Leo Luxe Clean" 
              desc="Our uniformed specialists arrive fully equipped to transform your space with precision and care."
            />
            <ProcessStep 
              number="03" 
              title="Walkthrough & Delight" 
              desc="A final inspection ensures every detail meets our gold standard before we depart."
            />
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="reviews" className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <SectionHeader title="Client Stories" subtitle="What Our Partners Say" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              text="Leo Luxe Clean has completely transformed how we maintain our home. The attention to detail is unlike anything I've experienced before. True professionals."
              author="Victoria Sterling"
              role="Estate Owner"
            />
            <TestimonialCard 
              text="Reliable, discreet, and incredibly thorough. They handle our corporate headquarters with the utmost professionalism. The gold standard of cleaning."
              author="James Rothschild"
              role="CEO, Apex Holdings"
            />
            <TestimonialCard 
              text="I was hesitant to have cleaners for my delicate vintage furniture, but their team knew exactly how to handle every material. Simply outstanding."
              author="Elena Fisher"
              role="Interior Designer"
            />
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#D4AF37]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Ready to Experience Luxury?</h2>
          <p className="text-black/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Elevate your standards. Book your initial consultation today and discover the difference of a truly pristine environment.
          </p>
          <button className="bg-black text-white hover:bg-[#1A1A1A] font-bold px-12 py-5 rounded-sm transition-all duration-300 shadow-xl uppercase tracking-widest text-sm transform hover:scale-105">
            Book Your Service Now
          </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#050505] pt-20 pb-10 border-t border-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="text-[#D4AF37] w-6 h-6" />
                <span className="text-xl font-bold tracking-widest uppercase">Leo Luxe</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Defining the new standard for premium cleaning services. 
                Luxury, reliability, and perfection in every detail.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Navigation</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a></li>
                <li><a href="#process" className="hover:text-[#D4AF37] transition-colors">Our Process</a></li>
                <li><a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Testimonials</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Contact Us</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#D4AF37]" /> (555) 123-4567</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#D4AF37]" /> concierge@leoluxe.com</li>
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#D4AF37]" /> Beverly Hills, CA</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Follow Us</h4>
              <div className="flex gap-4">
                <SocialIcon icon={<Instagram size={20} />} />
                <SocialIcon icon={<Facebook size={20} />} />
                <SocialIcon icon={<Twitter size={20} />} />
              </div>
            </div>

          </div>

          <div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
            <p>&copy; {new Date().getFullYear()} Leo Luxe Clean. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* --- REUSABLE COMPONENTS --- */

const SectionHeader = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block pb-4">
      {title}
      <span className={`absolute bottom-0 h-1 bg-[#D4AF37] w-1/3 ${align === "center" ? "left-1/3" : "left-0"}`}></span>
    </h2>
  </div>
);

const ServiceCard = ({ icon, title, desc }) => (
  <div className="group bg-[#1A1A1A] p-8 border border-[#333] hover:border-[#D4AF37] transition-all duration-500 hover:transform hover:-translate-y-2">
    <div className="mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500 inline-block bg-black p-4 rounded-full border border-[#333]">
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm font-light">
      {desc}
    </p>
  </div>
);

const FeatureRow = ({ text }) => (
  <div className="flex items-center gap-4">
    <CheckCircle2 className="text-[#D4AF37] w-6 h-6 flex-shrink-0" />
    <span className="text-white font-medium tracking-wide">{text}</span>
  </div>
);

const ProcessStep = ({ number, title, desc }) => (
  <div className="relative p-6 group">
    <div className="text-6xl font-bold text-[#1A1A1A] group-hover:text-[#1A1A1A]/80 transition-colors absolute -top-4 -left-2 z-0">
      {number}
    </div>
    <div className="relative z-10">
      <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto"></div>
      <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
        {desc}
      </p>
    </div>
  </div>
);

const TestimonialCard = ({ text, author, role }) => (
  <div className="bg-black p-10 border border-[#333] relative">
    <div className="flex text-[#D4AF37] mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="#D4AF37" className="mr-1" />
      ))}
    </div>
    <p className="text-gray-300 italic mb-8 leading-loose font-light">"{text}"</p>
    <div>
      <h4 className="text-white font-bold uppercase tracking-wider text-sm">{author}</h4>
      <p className="text-[#D4AF37] text-xs mt-1">{role}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="bg-[#1A1A1A] p-3 rounded-full text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
    {icon}
  </a>
);

export default App;