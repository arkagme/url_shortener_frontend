import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { FaHistory } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Header = () => {
  const navigate = useNavigate();
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
    
    // if not on home page, navigate to home page first
    if (window.location.pathname !== '/') {
      navigate('/');
      // wait for nav to complete before scrolling
      setTimeout(() => {
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
      }, 100);
    } else {
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
    }
  };

  // go to history page
  const goToHistory = () => {
    setMobileMenuOpen(false);
    navigate('/history');
  };

  // go to home page
  const goToHome = () => {
    setMobileMenuOpen(false);
    navigate('/');
  };

  // navlink styling function
  const getLinkStyles = ({ isActive }) => {
    return isActive
      ? "text-yellow-300 font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-500 after:transform after:origin-bottom-left"
      : "text-white font-normal hover:text-[#261fb3] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#261fb3] after:transition-all after:duration-300 hover:after:w-full";
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-purple-accent/95 backdrop-blur-sm py-3 shadow-lg'
        : 'bg-purple-accent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          onClick={goToHome}
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <Logo />
        </div>
        
        {/* desktop nav */} 
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={goToHome}
            className="px-6 py-3 rounded-full text-white font-medium hover:text-yellow-300 hover:bg-white/10 transition-all duration-300"
          >
            <span className="text-base tracking-wide font-bold font-poppins">Home</span>
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="px-6 py-3 rounded-full text-white font-medium hover:text-yellow-300 hover:bg-white/10 transition-all duration-300"
          >
            <span className="text-base tracking-wide font-bold font-poppins">Features</span>
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="px-6 py-3 rounded-full text-white font-medium hover:text-yellow-300 hover:bg-white/10 transition-all duration-300"
          >
            <span className="text-base tracking-wide font-bold font-poppins">About</span>
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="px-6 py-3 rounded-full text-white font-medium hover:text-yellow-300 hover:bg-white/10 transition-all duration-300"
          >
            <span className="text-base tracking-wide font-bold font-poppins">FAQ</span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 rounded-full text-white font-medium hover:text-yellow-300 hover:bg-white/10 transition-all duration-300"
          >
            <span className="text-base tracking-wide font-bold font-poppins">Contact</span>
          </button>
          <button 
            onClick={goToHistory}
            className="px-6 py-3 rounded-full text-white font-medium hover:text-yellow-300 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <FaHistory className="text-base" />
            <span className="text-base tracking-wide font-bold font-poppins">History</span>
          </button>
        </nav>
        
        {/* mobile menu btn */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none transition-all duration-300"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>
      
      {/* mobile nav */}
      <div
        className={`md:hidden bg-purple-accent/95 backdrop-blur-sm overflow-y-auto transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 pb-8 opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col space-y-3">
          <button
            onClick={goToHome}
            className="block py-3 px-6 rounded-full transition-all duration-300 text-white font-medium border border-white/30 hover:text-yellow-300 hover:bg-white/10 hover:border-yellow-300"
          >
            <span className="font-medium tracking-wide font-poppins">Home</span>
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="block py-3 px-6 rounded-full transition-all duration-300 text-white font-medium border border-white/30 hover:text-yellow-300 hover:bg-white/10 hover:border-yellow-300"
          >
            <span className="font-medium tracking-wide font-poppins">Features</span>
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block py-3 px-6 rounded-full transition-all duration-300 text-white font-medium border border-white/30 hover:text-yellow-300 hover:bg-white/10 hover:border-yellow-300"
          >
            <span className="font-medium tracking-wide font-poppins">About</span>
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="block py-2.5 px-5 rounded-full transition-all duration-300 text-white font-medium border border-white/30 hover:text-yellow-300 hover:bg-white/10 hover:border-yellow-300"
          >
            <span className="font-medium tracking-wide font-poppins text-sm">FAQ</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block py-3 px-6 rounded-full transition-all duration-300 text-white font-medium border border-white/30 hover:text-yellow-300 hover:bg-white/10 hover:border-yellow-300"
          >
            <span className="font-medium tracking-wide font-poppins">Contact</span>
          </button>
          <button
            onClick={goToHistory}
            className="block py-3 px-6 rounded-full transition-all duration-300 text-white font-medium border border-white/30 hover:text-yellow-300 hover:bg-white/10 hover:border-yellow-300 flex items-center gap-2 justify-center"
          >
            <FaHistory className="text-lg" />
            <span className="font-medium tracking-wide font-poppins">History</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;