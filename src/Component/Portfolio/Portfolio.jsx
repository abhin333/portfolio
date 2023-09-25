import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/movie-logo.jpg";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>portfolio</h2>
        <div className="container portfolio__container">
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG2} alt="image2" />
            </div>
            <h3>Easy Food [Mobile view only] </h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333/Easy_Food.git"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://easy-food-123.netlify.app/"
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
              <img src={IMG6} alt="image6" />
            </div>
            <h3>Movie App</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333/movies"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://movie-cuchufli-7c35bc.netlify.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="image1" />
            </div>
            <h3>Books and stationary </h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://books-stationery-4f20c4.netlify.app/"
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
            <h3>Abhin portfolio</h3>
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

          
        </div>
      </section>
    </>
  );
};

export default Portfolio;
