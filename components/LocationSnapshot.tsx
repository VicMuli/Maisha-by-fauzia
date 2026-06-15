import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { CLINIC_ADDRESS, CLINIC_PHONE, CLINIC_EMAIL } from '../constants';

export const LocationSnapshot: React.FC = () => {
  return (
    <section className="py-20 bg-blush-50">
      <div className="container mx-auto px-[0.5cm]">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
          
          {/* Information Side */}
          <div className="lg:w-5/12 p-10 lg:p-14 flex flex-col justify-center bg-royal-blue text-white relative overflow-hidden">
             {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-400 opacity-10 rounded-full translate-y-1/3 -translate-x-1/4"></div>

            <div className="relative z-10">
              <h4 className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-3">Visit Clinic</h4>
              <h2 className="text-3xl font-serif mb-10">Find Us Easily</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Our Location</h5>
                    <p className="text-slate-300 text-sm leading-relaxed">{CLINIC_ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Opening Hours</h5>
                    <p className="text-slate-300 text-sm">Mon – Fri: 9:00 AM – 5:00 PM</p>
                    <p className="text-slate-300 text-sm mt-1">Sat & Sun: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Contact Details</h5>
                    <p className="text-slate-300 text-sm mb-1">
                      <a href={`tel:${CLINIC_PHONE}`} className="hover:text-gold-400 transition-colors">{CLINIC_PHONE}</a>
                    </p>
                    <p className="text-slate-300 text-sm">
                      <a href={`mailto:${CLINIC_EMAIL}`} className="hover:text-gold-400 transition-colors">{CLINIC_EMAIL}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:w-7/12 min-h-[400px] lg:min-h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8537529409086!2d36.8179083!3d-1.2599000999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17e95f944311%3A0xd9fc177cb94a9dab!2sMaisha%20by%20Dr.%20Fauzia!5e0!3m2!1sen!2ske!4v1781504248257!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maisha by Dr. Fauzia Location Map"
              className="h-full min-h-[400px]"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
};
