import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { WhatsAppButton } from './components/WhatsAppButton';
function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-gold-200 selection:text-royal-blue">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;