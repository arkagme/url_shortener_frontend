import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {HiMenu, HiX} from 'react-icons/hi';
import Logo from './Logo';

const Navbar=()=>{
  const [isOpen, setIsOpen]=useState(false);

  const toggleMenu=()=>{
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {isOpen ? <HiX /> : <HiMenu />}
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;