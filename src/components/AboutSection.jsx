import React from 'react';
import dcsLogo from '../assets/DCS_LogoWhite.svg';

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Team DCS</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src={dcsLogo} 
              alt="Team DCS Logo" 
              className="w-48 h-48 object-contain"
            />
          </div>
          
          <div className="md:w-2/3">
            <p className="text-gray-300 mb-4">
              Team DCS is a team of passionate developers who strive to contribute to the community while constantly improving themselves. DCS has several technical and non-technical clusters ranging from Android to Content, working together in an integrated environment to aid the student fraternity. The members work on various community projects envisioned to enhance the lives of people. DCS is a destination where ideas nurture into reality!  
            </p>
            
            <p className="text-gray-300">
              Our URL Shortener service is designed with simplicity and efficiency in mind. We believe that 
              sharing links should be easy, fast, and provide valuable insights into how your content performs!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;