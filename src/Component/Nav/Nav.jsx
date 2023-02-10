import React from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail, BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";
const Nav = () => {

  const [active,setActive]=useState('#')
  return (
    <>
      <nav>
        <a href="#" className={active === "#" ? "active" : ""}>
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActive("#about")}
          className={active === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experence"
          onClick={() => setActive("#experence")}
          className={active === "#experence" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#service"
          onClick={() => setActive("#service")}
          className={active === "#service" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => setActive("#contact")}
          className={active === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </>
  );
};

export default Nav;
