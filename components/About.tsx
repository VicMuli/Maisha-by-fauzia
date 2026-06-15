import React, { useState, useEffect, useRef } from 'react';
import { DOCTORS } from '../constants';
import { CheckCircle2, Users } from 'lucide-react';

export const About: React.FC = () => {
  const doctor = DOCTORS[0];

  // Animated counter state
  const [count, setCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Count up to 20 years over 2 seconds
  useEffect(() => {
    if (!started) return;
    const target = 20;
    const duration = 2000; // 2 seconds
    const interval = 50;
    const steps = duration / interval;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setYearsCount(target);
        clearInterval(timer);
      } else {
        setYearsCount(Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [started]);
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
    const target = 20000; // Updated patient count to 20,000
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
    <section id="about" ref={sectionRef} className="py-24 bg-blush-50">
      <div className="container mx-auto px-[0.5cm]">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Mobile-only heading — shown above the image on small screens */}
          <div className="w-full order-1 lg:hidden">
            <h4 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-3">About Maisha</h4>
            <h2 className="text-4xl font-serif text-royal-blue">A Sanctuary for Women's Health</h2>
          </div>

          {/* Image — Hero-style framed */}
          <div className="order-2 lg:order-1 lg:w-1/2 relative">
            {/* Decorative background accent */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold-200 rounded-3xl z-0"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white z-10">
              <img
                src="/doctor-fauzia.jpg"
                referrerPolicy="no-referrer"
                loading="lazy"
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

            {/* Experience Counter Card */}
            <div className="absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border-r-4 border-gold-400 z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-gold-100 p-3 rounded-xl text-gold-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-royal-blue text-2xl leading-none">
                    {count >= 20000 ? '20,000+' : count.toLocaleString()}
                  </p>
                  <p className="text-slate-500 text-sm mt-1">Patients Served</p>
                </div>
              </div>
            </div>
            {/* New Years of Experience Counter */}
            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border-l-4 border-gold-400 z-20 hidden md:block">
              <div>
                <p className="font-bold text-royal-blue text-2xl leading-none">
                  {yearsCount >= 20 ? '20+' : yearsCount}
                </p>
                <p className="text-slate-500 text-sm mt-1">Years Experience</p>
              </div>
            </div>
          </div>


          <div className="lg:w-1/2 order-3 lg:order-2">
            <h4 className="hidden lg:block text-gold-600 font-bold uppercase tracking-widest text-sm mb-3">About Maisha</h4>
            <h2 className="hidden lg:block text-4xl font-serif text-royal-blue mb-6">A Sanctuary for Women's Health</h2>

            <p className="text-slate-600 mb-6 leading-relaxed">
              At Maisha Medical, we believe that healthcare should be empowering. Founded by {doctor.name} in June 2024, our clinic provides a safe, welcoming space where your health concerns are met with expertise and empathy.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Dr. Fauzia holds a Bachelor of Medicine, Bachelor of Surgery (MBBS) and a Master of Medicine in Obstetrics and Gynaecology (MMED). She works alongside specialists: an Endocrinologist, a Gynecologic Cancer Specialist, a Breast Specialist, and an Orthopedic Specialist, each contributing their expertise to comprehensive women's health.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {doctor.bio} Dr. Fauzia has been qualified since 2010.
            </p>
            <div className="text-slate-600 mb-8 leading-relaxed">
              <p>She works alongside several specialists:</p>
              <ul className="list-disc list-inside">
                <li>An Endocrinologist who manages hormone-related conditions.</li>
                <li>A Gynecologic Cancer Specialist who treats cancers of the reproductive system.</li>
                <li>A Breast Specialist who focuses on breast health and surgeries.</li>
                <li>An Orthopedic Specialist who addresses bone and joint issues.</li>
              </ul>
            </div>

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
              <hr className="border-t border-gold-200 my-4" />
              <h3 className="text-xl font-serif text-royal-blue mb-3">Our Mission</h3>
              <p className="text-slate-600 mb-4">To improve women's health and empower care for women.</p>
              <h3 className="text-xl font-serif text-royal-blue mb-3">Our Vision</h3>
              <p className="text-slate-600 mb-4">A full‑fledged center delivering multispecialist care, championing women's health at every life stage.</p>
            </div>


          </div>

        </div>
      </div>

    </section>
  );
};