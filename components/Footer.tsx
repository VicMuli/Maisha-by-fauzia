import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { CLINIC_NAME, CLINIC_ADDRESS, CLINIC_PHONE, CLINIC_EMAIL } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t-4 border-gold-500">
      <div className="container mx-auto px-[0.5cm]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 inline-block">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-[0.15em] leading-none text-white">
                  MAISHA
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-semibold mt-1 text-gold-400">
                  By Dr. Fauzia
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Expert obstetrics and gynecological care tailored for every stage of a woman's life. Experience compassionate healthcare.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">About Dr. Fauzia</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">Our Services</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">Patient Reviews</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">Book Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Core Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">Comprehensive Obs/Gyn</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">Antenatal & Postnatal</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">Cosmetic Gynecology</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">Cancer Screening</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">Menopausal Care</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-slate-400 text-sm">{CLINIC_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-400 flex-shrink-0" size={18} />
                <span className="text-slate-400 text-sm">{CLINIC_PHONE}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-400 flex-shrink-0" size={18} />
                <span className="text-slate-400 text-sm">{CLINIC_EMAIL}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} {CLINIC_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
