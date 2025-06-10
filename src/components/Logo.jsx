import React from 'react';
import dcsLogo from '../assets/DCS_LogoWhite.svg';

const Logo = () => {
  return (
    <div className="logo flex items-center">
      <img
        src={dcsLogo}
        alt="DCS Logo"
        className="h-10 md:h-12 filter drop-shadow-lg"
      />
    </div>
  );
};

export default Logo;