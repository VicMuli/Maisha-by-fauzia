import React, { useState, useEffect, useRef } from 'react';
import { DOCTORS } from '../constants';
import { CheckCircle2, Users } from 'lucide-react';

export const About: React.FC = () => {
  const doctor = DOCTORS[0];

  // Animated counter state
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Start counter when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  // Count up to 10000 over 10 seconds
  useEffect(() => {
    if (!started) return;
    const target = 10000;
    const duration = 10000; // 10 seconds
    const interval = 50; // update every 50ms
    const steps = duration / interval;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [started]);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-[0.5cm]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image — Hero-style framed */}
          <div className="lg:w-1/2 relative">
            {/* Decorative background accent */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold-200 rounded-3xl z-0"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white z-10">
              <img
                src="https://drive.google.com/thumbnail?id=1PkiDEAPdTDOeDvdj7urPNW0-tbiPiCTa&sz=w1000"
                className="w-full h-[520px] object-cover transform hover:scale-105 transition-transform duration-700"
                alt="Maisha Medical Clinic"
              />
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-royal-blue/90 to-transparent"></div>

              {/* Doctor label overlay */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-2xl mb-1">{doctor.name}</p>
                <p className="text-gold-300 text-sm uppercase tracking-wider">Lead Specialist</p>
              </div>
            </div>

            {/* Animated Patient Counter Card — bottom right */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white p-5 rounded-2xl shadow-xl border-l-4 border-gold-400 z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-gold-100 p-3 rounded-xl text-gold-600">
                  <Users size={24} />
                </div>
                <div>
                  <p className="font-bold text-royal-blue text-2xl leading-none">
                    {count >= 10000 ? '10,000+' : count.toLocaleString()}
                  </p>
                  <p className="text-slate-500 text-sm mt-1">Patients Served</p>
                </div>
              </div>
            </div>
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