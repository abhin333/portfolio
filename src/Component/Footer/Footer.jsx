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
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">experice</a>
        </li>
        <li>
          <a href="#">portfolio</a>
        </li>
        <li>
          <a href="#">contacts</a>
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