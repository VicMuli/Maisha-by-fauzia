import React, { useState } from 'react';
import { CLINIC_ADDRESS, CLINIC_EMAIL, CLINIC_PHONE, CLINIC_NAME } from '../constants';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '', service: 'Comprehensive Obs/Gyn', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "254745795686";
    const text = `*New Appointment Request*\n\n*Name:* ${formData.firstName} ${formData.lastName}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormData({ firstName: '', lastName: '', phone: '', service: 'Comprehensive Obs/Gyn', message: '' });
  };

  return (
    <footer id="contact" className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-royal-blue mb-6">Visit Us</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Experience healthcare reimagined. We are conveniently located in the heart of the city with ample parking.
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
                  <p className="text-slate-500 text-sm">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  <p className="text-slate-500 text-sm">Sat - Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:w-2/3 bg-white p-8 lg:p-12 rounded-2xl shadow-xl border-t-4 border-gold-400">
            <h3 className="text-2xl font-serif text-royal-blue mb-2">Request an Appointment</h3>
            <p className="text-slate-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">First Name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-400"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Last Name</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-400"
                  placeholder="Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-400"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Service of Interest</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-400 text-slate-600"
                >
                  <option value="Comprehensive Obs/Gyn">Comprehensive Obs/Gyn</option>
                  <option value="Antenatal">Antenatal</option>
                  <option value="Postnatal">Postnatal</option>
                  <option value="Cosmetic Gynecology">Cosmetic Gynecology</option>
                  <option value="Contraceptive Services">Contraceptive Services</option>
                  <option value="Cancer Screening">Cancer Screening</option>
                  <option value="Reproductive Health">Reproductive Health</option>
                  <option value="Menopausal care">Menopausal care</option>
                  <option value="Advanced Ultrasound">Advanced Ultrasound</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Message (Optional)</label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-400 h-32 resize-none"
                  placeholder="Tell us a bit about why you are visiting..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-royal-blue text-white font-bold py-4 rounded-lg hover:bg-maisha-blue transition-colors shadow-lg">
                  Submit Request
                </button>
              </div>
            </form>
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