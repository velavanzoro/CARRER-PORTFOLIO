import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Velavan R. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://github.com/velavanzoro" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/velavan-r-231240293/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/velavan.r_11/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
