import React, { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';

export const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: 'Comprehensive Obs/Gyn',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '254745795686';
    const text = `*New Appointment Request*\n\n*Name:* ${formData.firstName} ${formData.lastName}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Message:* ${formData.message || 'N/A'}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setFormData({ firstName: '', lastName: '', phone: '', service: 'Comprehensive Obs/Gyn', message: '' });
  };

  return (
    <section id="book-appointment" className="min-h-screen bg-slate-50 flex items-center py-32">
      <div className="container mx-auto px-[0.5cm]">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3">Schedule a Visit</h4>
            <h1 className="text-4xl md:text-5xl font-serif text-royal-blue mb-4">Book an Appointment</h1>
            <p className="text-slate-600 leading-relaxed">
              Fill in your details below. After submitting, you'll be redirected to WhatsApp to confirm your booking with our team.
            </p>
          </div>

          {/* Confirmation Message */}
          {submitted ? (
            <div className="bg-white rounded-2xl shadow-xl border-t-4 border-green-400 p-12 text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle className="w-20 h-20 text-green-500" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-serif text-royal-blue mb-4">Request Sent!</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Your appointment request has been sent via WhatsApp. Our team will confirm your booking shortly. We look forward to welcoming you to Maisha Medical!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 bg-royal-blue text-white rounded-full font-bold hover:bg-gold-500 transition-colors"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (

            /* Booking Form */
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border-t-4 border-gold-400">
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
                    placeholder="+254 700 000 000"
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
                    <option value="Menopausal Care">Menopausal Care</option>
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
                  <button
                    type="submit"
                    className="w-full bg-royal-blue text-white font-bold py-4 rounded-xl hover:bg-gold-500 transition-colors shadow-lg flex items-center justify-center gap-3 text-lg"
                  >
                    <Send size={20} />
                    Send via WhatsApp
                  </button>
                  <p className="text-slate-400 text-xs text-center mt-4">
                    Clicking the button above will open WhatsApp with a pre-filled message.
                  </p>
                </div>
              </form>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
