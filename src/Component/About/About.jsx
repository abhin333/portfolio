import React from "react";
import "./About.css";
import Me from "../../assets/me-about.jpeg";
import { FaAward, FaUsers } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { motion } from "framer-motion";

const About = () => {
  // Animation for the Image (Slide from Left)
  const imageVariants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1.5, bounce: 0.3 }
    }
  };

  // Animation for the Content (Slide from Right)
  const contentVariants = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 0.2 }
    }
  };

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* IMAGE SLIDING FROM LEFT */}
        <motion.div 
          className="about__me"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.3 }} // "once: false" makes it re-animate when scrolling back up
          variants={imageVariants}
        >
          <div className="about__me-image">
            <img src={Me} alt="Abhin — profile photo" />
          </div>
        </motion.div>

        {/* CONTENT SLIDING FROM RIGHT */}
        <motion.div 
          className="about__content"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.3 }}
          variants={contentVariants}
        >
          <div className="about__cards">
            <motion.article className="about__card" whileHover={{ y: -10 }}>
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year experience</small>
            </motion.article>

            <motion.article className="about__card" whileHover={{ y: -10 }}>
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5+</small>
            </motion.article>

            <motion.article className="about__card" whileHover={{ y: -10 }}>
              <MdComputer className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </motion.article>
          </div>

          <p>
            A Web Developer is a professional who is responsible for the
            design and construction of websites. They ensure that sites meet
            user expectations by ensuring they look good and run smoothly.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;