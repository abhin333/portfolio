import React from "react";
import "./Experence.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experence = () => {
  return (
    <>
      <section id="experence">
        <h5>What Skill I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Devlopment</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Css</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Java Script</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>React js</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
            </div>
          </div>
          {/* END OF THE FRONT END */}
          <div className="experience__backend">
            <h3>Backend Devlopment</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>python</h4>
                  <small className="text-light">Intermidiate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Mysql</h4>
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
