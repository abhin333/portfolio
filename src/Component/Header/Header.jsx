import React from 'react'
import './Header.css'
import Cta from './Cta'
import Me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import ParticleBackground from './ParticleBackground'
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
  // Optional: This creates a slight "shrinking" effect as you scroll down
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <header id="home" style={{ perspective: '1200px' }}>
      <ParticleBackground />

      <motion.div 
        className="container header__container"
        style={{ scale, opacity }}
      >
        <HeaderSocial />

        <motion.div
          className="header__glass-card"
          initial={{ rotateX: 45, opacity: 0, y: 100 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1], // Custom "Smooth" quintic ease
            delay: 0.2 
          }}
          whileHover={{ 
            rotateY: 10, 
            rotateX: -5,
            transition: { duration: 0.3 } 
          }}
        >
          <div className="header__text">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h5>Hello I'm</h5>
              <h1 className="glitch-text">Abhin.v</h1>
              <h5 className="text-light">Software Developer</h5>
            </motion.div>
            
            <motion.p 
              className="header__bio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              I am a <strong>Software Developer</strong> with 1+ years of experience, 
              building the future of the web.
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <Cta />
            </motion.div>
          </div>

          <div className="header__image-area">
            {/* The Image "Pops Out" of the card */}
            <motion.div 
              className="me-blob"
              initial={{ z: -100, opacity: 0 }}
              animate={{ z: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              whileHover={{ 
                scale: 1.1, 
                z: 50, // Pulls the image "closer" to the user in 3D space
                rotate: 5 
              }}
            >
               <img src={Me} alt="Abhin v" />
            </motion.div>
          </div>
        </motion.div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </motion.div>
    </header>
  );
}

export default Header;