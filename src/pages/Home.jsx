import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import Stats from '../components/home/Stats';
import About from '../components/home/About';
import Features from '../components/home/Features';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProductHighlights from '../components/home/ProductHighlights';
import Testimonials from '../components/home/Testimonials';
import Certificates from '../components/home/Certificates';
import Partners from '../components/home/Partners';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
  return (
    <main className="mt-16">
      <HeroSlider />
      <About />
      <Features />
      <WhyChooseUs />
      <ProductHighlights />
      <Testimonials />
      <Certificates />
      <Partners />
      <Stats />
      <ContactCTA />
    </main>
  );
};

export default Home;
