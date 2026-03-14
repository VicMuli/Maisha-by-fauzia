import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-50 z-0"></div>

      <div className="container mx-auto px-[0.5cm] relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3">Patient Stories</h4>
          <h2 className="text-4xl font-serif text-royal-blue mb-4">What Our Patients Say</h2>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          {/* Slider Controls - Desktop */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white text-royal-blue shadow-md border border-slate-100 hover:bg-gold-50 hover:text-gold-600 transition-colors z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white text-royal-blue shadow-md border border-slate-100 hover:bg-gold-50 hover:text-gold-600 transition-colors z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Cards Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4 py-8">
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100 text-center relative max-w-3xl mx-auto h-full flex flex-col justify-center">
                    <Quote className="w-12 h-12 text-gold-200 absolute top-8 left-8 md:top-12 md:left-12 opacity-50" />
                    <Quote className="w-12 h-12 text-gold-200 absolute bottom-8 right-8 md:bottom-12 md:right-12 opacity-50 rotate-180" />
                    
                    <p className="text-xl md:text-2xl text-slate-700 font-serif leading-relaxed mb-8 relative z-10 italic">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex flex-col items-center mt-auto">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gold-200"
                      />
                      <h4 className="font-bold text-royal-blue text-lg">{testimonial.name}</h4>
                      <p className="text-gold-500 text-sm font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-gold-500 w-8' : 'bg-slate-300 hover:bg-gold-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
