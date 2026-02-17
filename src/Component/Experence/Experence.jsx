import React from "react";
import "./Experence.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import tiqrstore from "../../assets/tiqrstore.webp";
import avatar1 from "../../assets/tiqrstore.svg";
import kannuruniversity from "../../assets/kannur-univ-logo.webp";
import ksna from "../../assets/ksna.png";
import itfok from "../../assets/itfok.webp";

const Experence = () => {
  // You can add your webp images in the `image` field for each client below.
  // Make sure the path points to your actual image (either in /assets or another images directory).

  const clients = [
    {
      id: 1,
      name: "Kiebot",
      image: `${tiqrstore}`,        // <-- Add your Kiebot .webp image here
    },
    {
      id: 2,
      name: "Tiqr Events",
      image: `${avatar1}`,      // <-- Your Tiqr Events .webp image here
    },
      {
        id:3,
        name:"Kannur univirsity logo",
        image: `${kannuruniversity}`,
      },
      {
        id:4,
        name:"Ksna logo",
        image: `${ksna}`,
      },
      {
        id:5,
        name:"Itfok",
        image: `${itfok}`,
      }

      
  ];

  return (
    <>
      <section id="experence">
        <h5>What Skill I Have</h5>
        <h2>My Experience</h2>

        {/* Company Experience Card */}
        <div className="container company__experience" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
          <div className="company__card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div className="company__details" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <img
                src="https://static.ambitionbox.com/alpha/company/photos/logos/kiebot.jpg"
                alt="Kiebot Logo"
                className="company__logo"
                width="60"
                height="60"
                style={{ display: "block", margin: "0 auto" }}
              />
              <h3 style={{ textAlign: "center" }}>Kiebot</h3>
              <small className="text-light" style={{ textAlign: "center" }}>4 Months Experience</small>
            </div>
          </div>

          <div className="company__card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div className="company__details" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <img
                src="https://tiqr.events/og-image.png"
                alt="Tiqr Events Logo"
                className="company__logo"
                width="60"
                height="60"
                style={{ display: "block", margin: "0 auto" }}
              />
              <h3 style={{ textAlign: "center" }}>Tiqr Events</h3>
              <small className="text-light" style={{ textAlign: "center" }}>2024- 2025</small>
            </div>
          </div>
        </div>

        <div className="clients__section">
        <h2 className="clients__title">My Client projects</h2>
          <div className="clients__scroll-container">
            <div className="clients__scroll-track">
              {clients.map((client, index) => (
                <div key={`${client.id}-${index}`} className="clients__item" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src={client.image} alt={client.name} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Experience */}
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Next.js</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React.js</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>TypeScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>

          {/* Backend */}
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Node.js</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Firebase</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experence;
