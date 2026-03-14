import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { CLINIC_NAME } from '../constants';

const LOGO_URL = 'https://drive.google.com/thumbnail?id=1zuuZmqJhGyT9Gh9k8fbFd7vGyRkKpBZ_&sz=w1000';

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg height={size} width={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  const phoneNumber = '254745795686';
  const welcomeMessage = "Hello! I'm interested in learning more about the services at Maisha Medical. Could you please help me?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(welcomeMessage)}`;

  // Show "Chat with us" label after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLabel(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  // Hide label when chat is opened
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setHasNotification(false);
    setShowLabel(false);
  };

  return (
    <div className="fixed bottom-6 right-[0.5cm] z-50 flex flex-col items-end gap-3">

      {/* WhatsApp Chat Template */}
      {isOpen && (
        <div className="w-80 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 mb-1 animate-in fade-in slide-in-from-bottom-4 duration-300">

          {/* WhatsApp-style Header */}
          <div className="bg-[#075E54] p-4 flex items-center gap-3">
            <div className="relative">
              <img
                src={LOGO_URL}
                alt="Maisha Medical Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-white/30 bg-white p-0.5"
              />
              {/* Online indicator */}
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#075E54]"></span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-base truncate">{CLINIC_NAME}</h3>
              <p className="text-green-300 text-xs">Online · Typically replies instantly</p>
            </div>
            <button onClick={toggleOpen} className="text-white/70 hover:text-white transition-colors flex-shrink-0">
              <X size={20} />
            </button>
          </div>

          {/* WhatsApp-style Chat Body */}
          <div
            className="p-4 min-h-[160px] flex flex-col gap-3"
            style={{ background: 'url("https://web.whatsapp.com/img/bg-chat-tile-light_686b98c9fdffef3f63127759e4b97b49.png") #E5DDD5' }}
          >
            {/* Timestamp */}
            <div className="text-center">
              <span className="text-[10px] text-slate-500 bg-white/70 px-2 py-0.5 rounded-full">Today</span>
            </div>

            {/* Message Bubble 1 */}
            <div className="flex items-end gap-2">
              <img src={LOGO_URL} alt="logo" className="w-6 h-6 rounded-full object-cover bg-white p-0.5 flex-shrink-0 mb-1" />
              <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm max-w-[85%]">
                <p className="text-slate-800 text-sm leading-relaxed">
                  👋 Hello! Welcome to <strong>Maisha Medical</strong> — Expert Women's Healthcare by Dr. Fauzia.
                </p>
                <p className="text-slate-400 text-[10px] text-right mt-1">10:30 AM ✓✓</p>
              </div>
            </div>

            {/* Message Bubble 2 */}
            <div className="flex items-end gap-2">
              <img src={LOGO_URL} alt="logo" className="w-6 h-6 rounded-full object-cover bg-white p-0.5 flex-shrink-0 mb-1" />
              <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm max-w-[85%]">
                <p className="text-slate-800 text-sm leading-relaxed">
                  How can we help you today? Whether it's booking an appointment or a general inquiry, we're here for you. 😊
                </p>
                <p className="text-slate-400 text-[10px] text-right mt-1">10:30 AM ✓✓</p>
              </div>
            </div>
          </div>

          {/* CTA Footer */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-6 w-full transition-colors"
          >
            <WhatsAppIcon size={22} />
            <span>Start Chat</span>
          </a>
        </div>
      )}

      {/* "Chat with us" label + Floating Button row */}
      <div className="flex items-center gap-3">

        {/* "Chat with us" tooltip — appears after 15 seconds */}
        {showLabel && !isOpen && (
          <div
            className="flex items-center gap-2 bg-white text-slate-800 text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg border border-slate-100 cursor-pointer animate-in fade-in slide-in-from-right-4 duration-500"
            onClick={toggleOpen}
          >
            <span>💬 Chat with us</span>
            {/* Arrow pointing right */}
            <span className="text-green-500">→</span>
          </div>
        )}

        {/* Floating Action Button */}
        <div className="relative inline-flex">
          <button
            onClick={toggleOpen}
            className="bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BA5A] transition-all duration-300 transform hover:scale-110"
            aria-label="Toggle WhatsApp Chat"
          >
            {isOpen ? <X size={28} /> : <WhatsAppIcon size={32} />}
          </button>

          {/* Red notification dot */}
          {hasNotification && !isOpen && (
            <span className="absolute top-0 right-0 block w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
          )}
        </div>

      </div>
    </div>
  );
};
