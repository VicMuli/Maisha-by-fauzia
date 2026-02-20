import React from 'react';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import { CLINIC_PHONE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#F8FAFC] hidden lg:block -skew-x-12 translate-x-32 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-gold-100 text-gold-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in-up border border-gold-200">
              New Patients Welcome
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif text-royal-blue leading-[1.1] mb-8">
              Expert Care for <span className="text-gold-500 italic">Women's Health</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the Maisha difference. From routine check-ups to pregnancy care and beyond, we are dedicated to providing comprehensive, compassionate healthcare at every stage of your life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-royal-blue text-white rounded-lg hover:bg-maisha-blue transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </a>
              <a 
                href={`tel:${CLINIC_PHONE}`}
                className="px-8 py-4 bg-white text-royal-blue border border-slate-200 rounded-lg hover:border-gold-400 hover:text-gold-600 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone size={18} />
                <span>Call Us</span>
              </a>
            </div>


          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://drive.google.com/thumbnail?id=1PkiDEAPdTDOeDvdj7urPNW0-tbiPiCTa&sz=w1000" 
                alt="Dr. Fauzia consulting with patient" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-royal-blue/90 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-2xl mb-1">Dr. Fauzia</p>
                <p className="text-gold-300 text-sm uppercase tracking-wider">Lead Specialist</p>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-6 lg:-right-10 bg-white p-6 rounded-xl shadow-xl border-l-4 border-gold-400 max-w-xs hidden md:block">
              <div className="flex items-start gap-4">
                <div className="bg-gold-100 p-2 rounded-full text-gold-600">
                  <Icons.Star size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-royal-blue text-lg">4.9/5 Rating</p>
                  <p className="text-slate-500 text-sm">Excellence in obstetrics & gynecological care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import * as Icons from 'lucide-react';
