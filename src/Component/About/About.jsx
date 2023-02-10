import React from "react";
import "./About.css";
import Me from "../../assets/me-about.jpg";
import { FaAward, FaUsers } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={Me} alt="about-image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>4 Month experience</small>
              </article>
              <article className="about__card">
                <FaUsers className="about__icon" />
                <h5>clients</h5>
                <small>No more </small>
              </article>
              <article className="about__card">
                <MdComputer className="about__icon" />
                <h5>projects</h5>
                <small>4+ completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              tempora velit, ipsum adipisci molestiae optio veniam alias
              doloribus voluptatum similique architecto molestias fuga magni
              consequatur deleniti odit temporibus, eligendi aspernatur.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
