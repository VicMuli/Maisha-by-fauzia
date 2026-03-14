import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { LucideIcon, ChevronDown, ChevronUp, ArrowLeft, Calendar } from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center py-32 px-[0.5cm]">
        <h1 className="text-4xl font-serif text-royal-blue mb-4">Service Not Found</h1>
        <p className="text-slate-500 mb-8">The service you are looking for does not exist.</p>
        <Link to="/services" className="px-8 py-3 bg-royal-blue text-white rounded-full font-bold hover:bg-gold-500 transition-colors">
          Back to Services
        </Link>
      </div>
    );
  }

  const IconComponent = (Icons[service.icon as keyof typeof Icons] as LucideIcon) || Icons.Activity;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <div className="bg-royal-blue pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-400 opacity-10 rounded-full -translate-x-1/3 translate-y-1/2"></div>

        <div className="container mx-auto px-[0.5cm] relative z-10">
          {/* Breadcrumb */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-300 hover:text-gold-400 transition-colors mb-8 text-sm font-semibold"
          >
            <ArrowLeft size={16} />
            Back to Services
          </button>

          {/* Icon + Title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 bg-gold-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
              <IconComponent className="text-white" size={40} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Maisha Medical — Our Services</p>
              <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">{service.title}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-[0.5cm] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-10">
              <h2 className="text-2xl font-serif text-royal-blue mb-6">About This Service</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">{service.description}</p>
              <p className="text-slate-600 leading-relaxed">{service.details}</p>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <h2 className="text-2xl font-serif text-royal-blue mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {service.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-slate-100 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-semibold text-royal-blue pr-4">{faq.question}</span>
                      {openFaq === index
                        ? <ChevronUp className="text-gold-500 flex-shrink-0" size={20} />
                        : <ChevronDown className="text-slate-400 flex-shrink-0" size={20} />
                      }
                    </button>
                    {openFaq === index && (
                      <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Book CTA */}
            <div className="bg-royal-blue text-white rounded-2xl p-8 shadow-xl sticky top-28">
              <div className="w-12 h-12 bg-gold-400 rounded-xl flex items-center justify-center mb-5">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-serif mb-3">Book a Consultation</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Ready to take the next step? Book an appointment with Dr. Fauzia today and experience compassionate, expert women's healthcare.
              </p>
              <Link
                to="/book-appointment"
                className="block w-full text-center bg-gold-500 hover:bg-gold-400 text-white font-bold py-3 rounded-xl transition-colors shadow-lg mb-4"
              >
                Book Appointment
              </Link>
              <Link
                to="/contact"
                className="block w-full text-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Other Services */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h4 className="font-serif text-royal-blue text-lg mb-4">Other Services</h4>
              <div className="space-y-2">
                {SERVICES.filter((s) => s.id !== service.id).slice(0, 5).map((s) => {
                  const OtherIcon = (Icons[s.icon as keyof typeof Icons] as LucideIcon) || Icons.Activity;
                  return (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 bg-royal-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-royal-blue group-hover:text-white transition-colors">
                        <OtherIcon className="text-royal-blue group-hover:text-white" size={16} />
                      </div>
                      <span className="text-slate-600 text-sm group-hover:text-royal-blue transition-colors font-medium">{s.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
