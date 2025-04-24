import React from 'react';
import {FaTwitter, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa';
import dcsLogo from '../assets/DCS_LogoWhite.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#261eb2] py-3">
      <div className="container mx-auto px-6 flex items-center justify-between h-[70px]">
        <p className="text-white text-sm">
          © {currentYear} Team DCS. All rights reserved.
        </p>
        <div className="flex space-x-6 items-center">
          <a href="https://www.teamdcs.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-all">
            <img src={dcsLogo} alt="DCS Logo" className="h-5 w-5" />
          </a>
          <a href="https://www.youtube.com/c/DeveloperCommunitySASTRA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400">
            <FaYoutube size={20} />
          </a>
          <a href="https://x.com/dcs_sastra" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/team_dcs_/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/dcs-sastra/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;