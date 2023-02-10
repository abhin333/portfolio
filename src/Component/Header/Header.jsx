import React from 'react'
import './Header.css'
import Cta from './Cta'
import Me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Abhin.v</h1>
        <h5 className="text-light">
          Fullstack Developer
        </h5>
        <Cta />
        <HeaderSocial/>
        <div className="me">
          <img src={Me} alt="me" />
        </div>
          <a href="#contact"className='scroll__down'>scroll Down</a>
      </div>
   </header>
  )
}

export default Header