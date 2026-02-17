import React from 'react'
import './Footer.css'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Abhin
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#experence">experence</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#contacts">contacts</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <AiFillFacebook />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com">
          <AiOutlineTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>@abhin.All rights reserver</small>
      </div>
    </footer>
  );
}

export default Footer