import React from 'react';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { QuickServices } from '../components/QuickServices';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { LocationSnapshot } from '../components/LocationSnapshot';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhyChooseUs />
      <QuickServices />
      <TestimonialSlider />
      <LocationSnapshot />
    </div>
  );
};
