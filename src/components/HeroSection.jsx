import React from 'react';
import UrlForm from './UrlForm';

const HeroSection = () => {
  return (
    <section className="hero-section py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Link Shortener
        </h1>
        <p className="hero-subtitle text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Create short, powerful links that drive results and make sharing easier
        </p>
        
        <UrlForm />
      </div>
    </section>
  );
};

export default HeroSection;