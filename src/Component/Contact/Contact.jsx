import React from 'react'
import './Contact.css'
import {MdMarkEmailUnread} from "react-icons/md"
import { RiWhatsappFill } from "react-icons/ri"
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdMarkEmailUnread className="conatct_option-icon" />
              <h4>Email</h4>
              <h5 className='h55'>abhinpradeepan@gmail.com</h5>
              <a href="mailto:abhinpradeepan123@gmail.com" target="_blank">
                Send a Message
              </a>
            </article>
            <article className="contact__option">
              <RiWhatsappFill className="conatct_option-icon" />
              <h4>Whatsapp</h4>
              <h5>7902314666</h5>
              <a
                href="https://api.whatsapp.com/send?phone+917202314666"
                target="_blank"
              >
                Send a Message
              </a>
            </article>
            <article className="contact__option">
              <BsLinkedin className="conatct_option-icon" />
              <h4>LinkedIn</h4>
              <h5>abhin</h5>
              <a href="mailto:abhinpradeepan@gmail.com" target="_blank">
                Send a Message
              </a>
            </article>
          </div>

          <form action="">
            <input
              type="text"
              name="name"
              placeholder="your full name"
              required
            />
            <input
              type="email"
              name="eamail"
              placeholder="your email "
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="enther the message"
              required
            ></textarea>
            <div className="btnn">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            <input
              type="reset"
              value="Reset"
              className="btn btn-primary"
            ></input>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact
