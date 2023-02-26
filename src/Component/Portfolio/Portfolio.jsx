import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>portfolio</h2>
        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="image1" />
            </div>
            <h3>This is a Handloom </h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333/hanveev.git"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://hanveev.pythonanywhere.com/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG2} alt="image2" />
            </div>
            <h3>This is a Camera rent </h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333/ecommerce.git"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://camerarentnew.pythonanywhere.com/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG3} alt="image3" />
            </div>
            <h3> Olx Clone </h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333/olx.git"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://olx-clone-e55a9.web.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG4} alt="image4" />
            </div>
            <h3>Netflix Clone</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333/Netflix.git"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://netflix-98727.web.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG5} alt="image5" />
            </div>
            <h3>Facebook clone</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333/fb.git"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://abhin333.github.io/abhin/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG6} alt="image6" />
            </div>
            <h3>This is demo</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://abhin333.github.io/abhin/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
