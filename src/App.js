import './App.css';
import { useEffect } from 'react';
import Header  from './Component/Header/Header';
import Nav from './Component/Nav/Nav';
import About from './Component/About/About';
import Experence from './Component/Experence/Experence';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import AnimatedBackground from './Component/AnimatedBackground/AnimatedBackground';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe all reveal elements (also catches ones added after paint)
    const attach = () => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
        .forEach((el) => observer.observe(el));
    };

    attach();
    // Re-attach after a short delay in case components render slowly
    const t = setTimeout(attach, 600);
    return () => { observer.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <>
      <AnimatedBackground />
      <Header />
      <Nav />
      <About/>
      <Experence />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
