import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Get in Touch',
    desc: "Drop us a message or give us a call. We'll get back within a couple of hours with an honest quote. No hard sell.",
  },
  {
    num: '02',
    title: 'We Get to Work',
    desc: "Our team turns up on time with everything needed. You don't have to lift a finger — just let us in.",
  },
  {
    num: '03',
    title: 'Walk Into Spotless',
    desc: "That's it. Your space, done properly. Not happy with anything? We come back and fix it, free.",
  },
];

const Process = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-surface-black">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left — heading and CTA */}
          <div
            className={`lg:col-span-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="heading-serif text-4xl lg:text-5xl text-white mb-6 lg:sticky lg:top-32">
              Three steps.
              <br />
              <span className="text-neutral-500">That's it.</span>
            </h2>
          </div>

          {/* Right — steps as simple rows */}
          <div className="lg:col-span-8 lg:border-l lg:border-surface-border/40 lg:pl-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`${i > 0 ? 'border-t border-surface-border/30' : ''} py-8 lg:py-10 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  <span className="heading-serif text-5xl lg:text-6xl text-neutral-800 leading-none select-none">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div
              className={`pt-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <Link
                to="/contact"
                className="btn-gold label-caps px-8 py-4 rounded-lg inline-flex items-center gap-2 group"
              >
                Get Your Free Quote{' '}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
