import React from 'react';
import { DOCTORS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const doctor = DOCTORS[0];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
               <img 
                 src="https://drive.google.com/thumbnail?id=14MZ6ZOAOGgAaQ5-7t2eTM7PbK_8SVUrb&sz=w1000" 
                 className="rounded-2xl shadow-lg mt-12 w-full h-96 object-cover"
                 alt="Clinic Interior"
               />
               <img 
                 src={doctor.image} 
                 className="rounded-2xl shadow-lg w-full h-96 object-cover"
                 alt={doctor.name}
               />
            </div>
            {/* Decorative Gold Box */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] border-2 border-gold-200 rounded-3xl"></div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <h4 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-3">About Maisha</h4>
            <h2 className="text-4xl font-serif text-royal-blue mb-6">A Sanctuary for Women's Health</h2>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              At Maisha Medical, we believe that healthcare should be empowering. Founded by {doctor.name}, our clinic provides a safe, welcoming space where your health concerns are met with expertise and empathy.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {doctor.bio} Whether you are planning a family, navigating menopause, or simply maintaining your wellness, we are here to support you with gold-standard medical care.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-gold-500" size={20} />
                <span className="text-slate-800 font-medium">State-of-the-art ultrasound facilities</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-gold-500" size={20} />
                <span className="text-slate-800 font-medium">Private and comfortable consultation suites</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-gold-500" size={20} />
                <span className="text-slate-800 font-medium">Integrated holistic wellness approach</span>
              </div>
            </div>

            <button className="text-royal-blue font-bold border-b-2 border-gold-400 hover:text-gold-600 hover:border-royal-blue transition-all pb-1">
              Read Our Story
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};