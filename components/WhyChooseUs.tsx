import React from 'react';
import { ShieldCheck, HeartPulse, Clock, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Expert Care",
      description: "Led by Dr. Fauzia with over 15 years of specialized experience in women's health.",
      icon: <HeartPulse className="w-8 h-8 text-white" />
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art diagnostic equipment ensuring accurate and timely healthcare delivery.",
      icon: <Sparkles className="w-8 h-8 text-white" />
    },
    {
      title: "Compassionate Approach",
      description: "We prioritize patient comfort and provide a safe, non-judgmental environment.",
      icon: <ShieldCheck className="w-8 h-8 text-white" />
    },
    {
      title: "Flexible Scheduling",
      description: "Offering convenient appointment times to accommodate your busy lifestyle.",
      icon: <Clock className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-[0.5cm]">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3">Why Choose Maisha</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-royal-blue mb-6">Excellence in Women's Healthcare</h2>
          <p className="text-slate-600 leading-relaxed">
            We are dedicated to providing comprehensive, compassionate medical care at every stage of your life. Here's what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {reason.icon}
              </div>
              <h3 className="text-xl font-serif text-royal-blue mb-3">{reason.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
