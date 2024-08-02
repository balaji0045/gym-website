import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../Navbar/NavBar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation-container">
      <div className="logo-container">
        <h3 id='logo'>Gym Website</h3>
      </div>
      
      <div className={`nav-list ${isOpen ? 'mobile-view' : ''}`}>
        <nav>
          <ul>
            <li><ScrollLink to='home' smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(!isOpen)}>Home</ScrollLink></li>
            <li><ScrollLink to='about' smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(!isOpen)}>About Us</ScrollLink></li>
            <li><ScrollLink to='services' smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(!isOpen)}>Services</ScrollLink></li>
            <li><ScrollLink to='pricing' smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(!isOpen)}>Pricing</ScrollLink></li>
            <li><ScrollLink to='gallery' smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(!isOpen)}>Gallery</ScrollLink></li>
            <li><ScrollLink to='contactus' smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(!isOpen)}>Contact Us</ScrollLink></li>
          </ul>
        </nav>
      </div>
       
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  );
};

export default NavBar;
