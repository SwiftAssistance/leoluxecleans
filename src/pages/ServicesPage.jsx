import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Building2,
  Gem,
  Sparkles,
  Clock,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';

const allServices = [
  {
    icon: <Home size={32} />,
    title: 'Home Cleaning',
    tag: 'Most Popular',
    desc: 'Regular or one-off cleans for your home. We treat every house like our own — thorough, careful, and spotless. From studio flats to five-bed houses.',
    features: [
      'Kitchen deep clean (surfaces, appliances, floors)',
      'Bathroom sanitisation and polishing',
      'Dusting, vacuuming and mopping throughout',
      'Bedroom tidying and fresh linen changes',
      'Window sills, skirting boards and light switches',
      'Bins emptied and recycling sorted',
    ],
    pricing: 'From £60',
  },
  {
    icon: <Building2 size={32} />,
    title: 'Office & Commercial',
    tag: 'Flexible Hours',
    desc: 'Keep your workspace looking professional. Flexible scheduling including evenings and weekends to minimise disruption to your business.',
    features: [
      'Desk and workstation sanitisation',
      'Kitchen and breakroom deep clean',
      'Bathroom and toilet maintenance',
      'Floor vacuuming, mopping and polishing',
      'Window and glass partition cleaning',
      'Waste removal and recycling',
    ],
    pricing: 'Custom quote',
  },
  {
    icon: <Gem size={32} />,
    title: 'Deep Clean',
    tag: 'Thorough',
    desc: 'Top-to-bottom, behind-the-scenes. Every corner, every time. Perfect for seasonal refreshes or when your space needs extra attention.',
    features: [
      'Behind and under all furniture',
      'Inside cupboards and wardrobes',
      'Oven, fridge and appliance interiors',
      'Grout scrubbing and limescale removal',
      'Light fixtures and ceiling fans',
      'Wall spot cleaning and cobweb removal',
    ],
    pricing: 'From £120',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'End of Tenancy',
    tag: 'Deposit Back',
    desc: "Moving in or out? We'll get that deposit back for you. Our end of tenancy cleans meet landlord and letting agent standards every time.",
    features: [
      'Full property deep clean to inventory standards',
      'Oven, hob and extractor fan degreasing',
      'Bathroom descaling and sanitisation',
      'Window cleaning (interior)',
      'Carpet vacuuming and spot treatment',
      'Skirting boards, doors and frames',
    ],
    pricing: 'From £150',
  },
  {
    icon: <Clock size={32} />,
    title: 'After Events',
    tag: 'Same Day',
    desc: "Had a party? We'll make it look like nothing happened. Fast turnaround available for those morning-after emergencies.",
    features: [
      'Full waste collection and disposal',
      'Spill and stain treatment',
      'Kitchen and bathroom restoration',
      'Floor mopping and vacuuming',
      'Surface sanitisation throughout',
      'Same-day and next-day availability',
    ],
    pricing: 'From £80',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Specialist Cleaning',
    tag: 'Expert',
    desc: 'Carpets, upholstery, ovens, windows — the lot. Using professional-grade equipment and products for results you can see and feel.',
    features: [
      'Carpet deep extraction cleaning',
      'Upholstery and sofa cleaning',
      'Professional oven degreasing',
      'External and internal window cleaning',
      'Hard floor polishing and sealing',
      'Mattress cleaning and sanitisation',
    ],
    pricing: 'From £70',
  },
];

const ServicesPage = () => {
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.3 });

  return (
    <>
      <PageHero
        title={
          <>
            Our <span className="text-gold-gradient">Services</span>
          </>
        }
        subtitle="Whatever your space needs, we've got you covered. Every job done properly, every time — with fully insured, DBS-checked professionals."
        breadcrumb="Services"
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-surface-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gold/[0.03] rounded-full blur-[150px]"></div>

        <div ref={gridRef} className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {allServices.map((service, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl p-8 lg:p-10 group relative overflow-hidden transition-all duration-700 ${
                  gridVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold/[0.03] rounded-full blur-[80px] group-hover:bg-gold/[0.06] transition-all duration-700"></div>

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                      {service.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="label-caps text-[10px] text-gold/60 group-hover:text-gold transition-colors">
                        {service.tag}
                      </span>
                      <span className="heading-serif text-2xl text-gold">
                        {service.pricing}
                      </span>
                    </div>
                  </div>

                  <h3 className="heading-serif text-3xl text-white mb-3 group-hover:text-gold-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {service.features.map((feature, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-2 text-sm text-neutral-300"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-gold mt-0.5 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="btn-gold label-caps px-6 py-2.5 rounded-lg inline-flex items-center gap-2 group/btn"
                  >
                    Get a Quote{' '}
                    <ArrowRight
                      size={12}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-card to-surface-dark"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>

        <div
          ref={ctaRef}
          className={`relative max-w-4xl mx-auto px-6 lg:px-12 text-center transition-all duration-700 ${
            ctaVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            Give us a ring or fill in the form and we'll help you figure out
            exactly what your space needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight size={14} />
            </Link>
            <a
              href="tel:01753000000"
              className="btn-outline-gold label-caps px-10 py-4 rounded-lg inline-flex items-center justify-center gap-2"
            >
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
