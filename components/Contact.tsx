import React from 'react';
import { CLINIC_ADDRESS, CLINIC_EMAIL, CLINIC_PHONE, CLINIC_NAME } from '../constants';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg height="22" width="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const Contact: React.FC = () => {
  const phoneNumber = '254745795686';
  const whatsappMessage = "Hello! I'm interested in booking an appointment at Maisha Medical. Could you please help me?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer id="contact" className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-[0.5cm]">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3">Get In Touch</h4>
              <h3 className="text-3xl font-serif text-royal-blue mb-6">We're Here For You</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Have questions or ready to schedule your visit? Reach out via WhatsApp or give us a call — we're happy to help.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded shadow-sm text-gold-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-royal-blue text-sm">Address</h5>
                  <p className="text-slate-500 text-sm">{CLINIC_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded shadow-sm text-gold-500">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-royal-blue text-sm">Phone</h5>
                  <p className="text-slate-500 text-sm">{CLINIC_PHONE}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded shadow-sm text-gold-500">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-royal-blue text-sm">Email</h5>
                  <p className="text-slate-500 text-sm">{CLINIC_EMAIL}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded shadow-sm text-gold-500">
                  <Clock size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-royal-blue text-sm">Hours</h5>
                  <p className="text-slate-500 text-sm">Mon – Sat: 9:00 AM – 6:00 PM</p>
                  <p className="text-slate-500 text-sm">Sun: 10:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Side */}
          <div className="lg:w-1/2 flex flex-col justify-center gap-8">
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border-t-4 border-gold-400">
              <h3 className="text-2xl font-serif text-royal-blue mb-3">Ready to Book?</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Choose how you'd like to reach us. We respond quickly and will confirm your appointment promptly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* WhatsApp CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Phone Call CTA */}
                <a
                  href={`tel:${CLINIC_PHONE}`}
                  className="flex-1 flex items-center justify-center gap-3 bg-royal-blue hover:bg-blue-900 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Phone size={22} />
                  <span>Call Us Now</span>
                </a>
              </div>

              <p className="text-slate-400 text-xs text-center mt-6">
                Or use our <a href="/book-appointment" className="text-gold-500 hover:underline font-semibold">online booking form</a> and we'll get in touch within 24 hours.
              </p>
            </div>
          </div>

        </div>

        {/* Map Section */}
        <div className="w-full h-96 bg-slate-100 rounded-2xl overflow-hidden shadow-lg mb-16 border border-slate-200">
          <iframe 
            width="100%" 
            height="100%" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=Dr.%20Fauzia%20Butt%20-%20Maisha%20by%20Dr.%20Fauzia&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0}
            title="Clinic Location"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/maishabydrfauzia?igsh=MXNybHRvcTFhdG5hNw==" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};