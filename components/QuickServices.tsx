import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export const QuickServices: React.FC = () => {
  // Take only the first 4 services
  const recentServices = SERVICES.slice(0, 4);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-[0.5cm]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3">Our Services</h4>
            <h2 className="text-4xl font-serif text-royal-blue mb-4">Focused on Your Well-being</h2>
            <p className="text-slate-600 leading-relaxed">
              Explore some of our core medical services designed to support you at every phase of your journey.
            </p>
          </div>
          <Link 
            to="/services" 
            className="hidden md:inline-flex mt-6 md:mt-0 items-center justify-center px-8 py-3 bg-white border border-slate-200 text-royal-blue rounded-full font-bold hover:border-gold-400 hover:text-gold-600 transition-colors shadow-sm"
          >
            Explore All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {recentServices.map((service) => {
            const IconComponent = (Icons[service.icon as keyof typeof Icons] as LucideIcon) || Icons.Activity;

            return (
              <div 
                key={service.id}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold-200 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-50 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500 ease-out"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-royal-blue text-gold-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed truncate-2-lines">
                    {service.description.length > 100 ? `${service.description.substring(0, 100)}...` : service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center md:hidden">
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white border border-slate-200 text-royal-blue rounded-full font-bold hover:border-gold-400 hover:text-gold-600 transition-colors shadow-sm w-full sm:w-auto"
            >
              Explore All Services
            </Link>
        </div>
      </div>
    </section>
  );
};
