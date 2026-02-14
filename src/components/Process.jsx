import React from 'react';
import { Phone, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Get Your Quote',
    desc: "Fill in the form or give us a ring. We'll come back to you within 2 hours with a clear, honest price.",
    icon: <Phone size={20} />,
  },
  {
    num: '02',
    title: 'We Clean',
    desc: 'Our team arrives on time, fully equipped and ready. Sit back and relax while we work our magic.',
    icon: <Sparkles size={20} />,
  },
  {
    num: '03',
    title: 'You Enjoy',
    desc: "Walk into a spotless space. Not happy? We'll come back and sort it — no extra charge.",
    icon: <CheckCircle2 size={20} />,
  },
];

const Process = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [stepsRef, stepsVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark to-surface-black"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={headerRef}
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="label-caps text-gold mb-4">How It Works</p>
          <h2 className="heading-serif text-4xl lg:text-6xl text-white">
            Three Simple Steps
          </h2>
        </div>

        <div ref={stepsRef} className="relative">
          {/* Connecting line — animates width on reveal */}
          <div className="hidden lg:block absolute top-8 left-[16%] right-[16%] h-px -translate-y-1/2 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-gold/30 via-gold/50 to-gold/30 transition-all duration-1500 origin-left ${
                stepsVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
              style={{ transitionDelay: '400ms', transitionDuration: '1.2s' }}
            ></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                  stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + i * 200}ms` }}
              >
                {/* Step circle */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-full bg-surface-black border-2 border-gold/40 flex items-center justify-center mb-8 transition-all duration-500 ${
                    stepsVisible ? 'scale-100 border-gold/40' : 'scale-75 border-transparent'
                  }`}
                  style={{ transitionDelay: `${400 + i * 200}ms` }}
                >
                  <span className="text-gold">{step.icon}</span>
                </div>

                {/* Card */}
                <div className="glass-card rounded-xl p-8 w-full hover:border-gold/20 transition-all duration-300">
                  <span className="text-gold-gradient heading-serif text-5xl block mb-2 opacity-30">
                    {step.num}
                  </span>
                  <h3 className="font-sans text-white text-base font-semibold tracking-wide mb-3 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`text-center mt-14 transition-all duration-700 ${
            stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <a
            href="#contact"
            className="btn-gold label-caps px-10 py-4 rounded-lg inline-flex items-center gap-2 group"
          >
            Start With Step One{' '}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
