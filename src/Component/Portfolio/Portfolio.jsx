import React from "react";
import "./Portfolio.css";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/movie-logo.jpg";

const projects = [
  {
    title: "Easy Food [Mobile view only] MERN",
    image: IMG2,
    github: "https://github.com/abhin333/easy-foode-node",
    demo: "https://easy-fastfood.netlify.app",
  },
  {
    title: "Easy Food [Mobile view only] React js & Firebase",
    image: IMG2,
    github: "https://github.com/abhin333/Easy_Food.git",
    demo: "https://easy-food-123.netlify.app/",
  },
  {
    title: "Olx Clone",
    image: IMG3,
    github: "https://github.com/abhin333/olx.git",
    demo: "https://olx-clone-e55a9.web.app/",
  },
  {
    title: "Netflix Clone",
    image: IMG4,
    github: "https://github.com/abhin333/Netflix.git",
    demo: "https://netflixsnew.netlify.app/",
  },
  {
    title: "Movie App",
    image: IMG6,
    github: "https://github.com/abhin333/movies",
    demo: "https://moviesnew.netlify.app/",
  },
  {
    title: "Books and stationary",
    image: IMG1,
    github: "https://github.com/abhin333",
    demo: "https://books-stationery-4f20c4.netlify.app/",
  },
  {
    title: "Abhin Portfolio",
    image: IMG5,
    github: "https://github.com/abhin333/fb.git",
    demo: "https://abhin333.github.io/abhin/",
  },
];

// stagger delay helper
const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600'];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="reveal">My Recent Work</h5>
      <h2 className="reveal delay-100">Portfolio</h2>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <article
            className={`portfolio-card reveal ${delays[index % delays.length]}`}
            key={index}
          >
            <div className="portfolio-img">
              <img src={project.image} alt={project.title} />
            </div>

            <h3>{project.title}</h3>

            <div className="portfolio-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                Github
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
