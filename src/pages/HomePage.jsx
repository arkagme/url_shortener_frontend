import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
// import UrlForm from '../components/UrlForm'; // Removed: Already in HeroSection
import ResultsDisplay from '../components/ResultsDisplay'; // Will be conditionally rendered or removed if not needed on initial load
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <HeroSection />
        <div className="container mx-auto px-4 py-16">
          {/* <UrlForm /> Removed: Already in HeroSection */}
          { /* Conditionally render ResultsDisplay or remove if it's handled elsewhere e.g. after form submission */}
          {/* <ResultsDisplay /> */}
        </div>
        <FeaturesSection />
        <AboutSection />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;