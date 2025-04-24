import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import UserDashboard from '../components/UserDashboard';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="pt-32 md:pt-36">
        <div id="home">
          <HeroSection />
          <UserDashboard />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="about">
          <AboutSection />
          <FAQSection />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;