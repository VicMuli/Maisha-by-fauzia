import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h4 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-royal-blue mb-6">Comprehensive Care for Every Stage</h2>
          <p className="text-slate-600 leading-relaxed">
            We provide a holistic approach to women's health, combining advanced medical technology with compassionate, personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            // Dynamically get icon component
            const IconComponent = (Icons[service.icon as keyof typeof Icons] as LucideIcon) || Icons.Activity;

            return (
              <div 
                key={service.id}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold-200 relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-50 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500 ease-out"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-royal-blue text-gold-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <a href="#contact" className="inline-block mt-4 px-6 py-3 bg-gold-400 text-royal-blue rounded-full text-sm font-bold hover:bg-gold-500 transition-colors shadow-md group-hover:shadow-lg transform group-hover:-translate-y-1 duration-300">
                    Book Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};