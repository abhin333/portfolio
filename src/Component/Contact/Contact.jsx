import React, { useRef } from "react";
import "./Contact.css";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x3mflno",       // your service ID
        "template_qggt1zg",      // your template ID
        form.current,
        "Y_HlEaixg-so_4Km8"       // your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully ✅");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* CONTACT OPTIONS */}
        <div className="contact__options">
          
          {/* Email */}
          <article className="contact__option">
            <MdMarkEmailUnread className="contact_option-icon" />
            <h4>Email</h4>
            <h5 className="h55">abhinpradeepan123@gmail.com</h5>
            <a
              href="mailto:abhinpradeepan123@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          {/* WhatsApp */}
          <article className="contact__option">
            <RiWhatsappFill className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>7902314666</h5>
            <a
              href="https://api.whatsapp.com/send?phone=917902314666"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          {/* LinkedIn */}
          <article className="contact__option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>abhin</h5>
            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>

        {/* CONTACT FORM */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            autoComplete="off"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="off"
            required
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Enter your message"
            autoComplete="off"
            required
          ></textarea>

          <div className="btnn">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            <input
              type="reset"
              value="Reset"
              className="btn btn-secondary"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
