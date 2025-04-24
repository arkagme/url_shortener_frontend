import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // smooth scrolling function
  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // navlink styling function
  const getLinkStyles = ({ isActive }) => {
    return isActive
      ? "text-blue-accent font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-accent after:transition-all after:duration-500 after:transform after:origin-bottom-left"
      : "text-white font-normal hover:text-[#261fb3] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-accent after:transition-all after:duration-300 hover:after:w-full";
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-purple-accent/95 backdrop-blur-sm py-3 shadow-lg'
        : 'bg-purple-accent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          onClick={() => scrollToSection('home')}
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <Logo />
        </div>
        
        {/* desktop nav */} 
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="px-6 py-3 rounded-full text-white font-medium hover:bg-white/20 hover:text-[#261fb3] transition-all duration-300"
          >
            <span className="text-base tracking-wide font-bold font-poppins">Home</span>
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="px-6 py-3 rounded-full text-white font-medium hover:bg-white/20 hover:text-[#261fb3] transition-all duration-300"
          >
            <span className="text-base tracking-wide font-bold font-poppins">Features</span>
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="px-6 py-3 rounded-full text-white font-medium hover:bg-white/20 hover:text-[#261fb3] transition-all duration-300"
          >
            <span className="text-base tracking-wide font-bold font-poppins">About</span>
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="px-6 py-3 rounded-full text-white font-medium hover:bg-white/20 hover:text-[#261fb3] transition-all duration-300"
          >
            <span className="text-base tracking-wide font-bold font-poppins">FAQ</span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 rounded-full text-white font-medium hover:bg-white/20 hover:text-[#261fb3] transition-all duration-300"
          >
            <span className="text-base tracking-wide font-bold font-poppins">Contact</span>
          </button>
        </nav>
        
        {/* mobile menu btn */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-3 rounded-full bg-white/10 border-2 border-white hover:bg-white/20 transition-all duration-300 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* mobile nav - with transition */}
      <div
        className={`md:hidden bg-purple-accent/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-64 opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-5">
          <button
            onClick={() => scrollToSection('home')}
            className="block py-3 px-6 rounded-full transition-all duration-300 text-white font-medium border border-white/30 hover:bg-white/20 hover:text-[#261fb3]"
          >
            <span className="font-medium tracking-wide font-poppins">Home</span>
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="block py-3 px-6 rounded-full transition-all duration-300 text-white font-medium border border-white/30 hover:bg-white/20 hover:text-[#261fb3]"
          >
            <span className="font-medium tracking-wide font-poppins">Features</span>
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block py-3 px-6 rounded-full transition-all duration-300 text-white font-medium border border-white/30 hover:bg-white/20 hover:text-[#261fb3]"
          >
            <span className="font-medium tracking-wide font-poppins">About</span>
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="block py-3 px-6 rounded-full transition-all duration-300 text-white font-medium border border-white/30 hover:bg-white/20 hover:text-[#261fb3]"
          >
            <span className="font-medium tracking-wide font-poppins">FAQ</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block py-3 px-6 rounded-full transition-all duration-300 text-white font-medium border border-white/30 hover:bg-white/20 hover:text-[#261fb3]"
          >
            <span className="font-medium tracking-wide font-poppins">Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;