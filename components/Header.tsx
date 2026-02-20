import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CLINIC_NAME } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 flex-shrink-0">
             <img src="https://drive.google.com/thumbnail?id=1zuuZmqJhGyT9Gh9k8fbFd7vGyRkKpBZ_&sz=w1000" alt="Maisha Medical Logo" className="w-full h-full object-contain bg-white rounded-full p-1" />
          </div>
          
          <div className="flex flex-col">
            <span className={`font-serif text-2xl font-bold tracking-[0.15em] leading-none ${isScrolled ? 'text-royal-blue' : 'text-royal-blue'}`}>
              MAISHA
            </span>
            <span className={`text-[10px] uppercase tracking-[0.25em] font-sans font-semibold mt-1 text-slate-500`}>
              By Dr. Fauzia
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-gold-500 ${isScrolled ? 'text-slate-600' : 'text-slate-600'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2 bg-royal-blue text-white rounded-full text-sm font-bold hover:bg-gold-500 transition-colors scroll-smooth">
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-royal-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 flex flex-col items-center gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-800 font-semibold py-2 w-full text-center hover:bg-slate-50"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="px-8 py-3 bg-gold-500 text-white rounded-full font-bold my-2"
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
};