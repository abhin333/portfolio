import React from 'react';
import './Footer.css';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo reveal">
        Abhin
      </a>

      <ul className="permalinks reveal delay-100">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials reveal delay-200">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <AiFillFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter />
        </a>
      </div>

      <div className="footer__copyright reveal delay-300">
        <small>© 2026 Abhin. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
