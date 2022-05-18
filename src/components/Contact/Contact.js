import React, { useEffect } from "react";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/Footer";
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="contact" data-aos="fade-left">
      <div className="outer-contact">
        <div className="inner-contact">
          <div className="top-contact">
            <h1>Contact</h1>
          </div>
          <div className="bot-contact">
            <h3>Get in touch, let's talk.</h3>
            <p className="send">Feel free to send me an email.</p>
            <p className="gmail">jayson.dellova2@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
