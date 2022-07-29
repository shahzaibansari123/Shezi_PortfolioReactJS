import React, { useState } from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    message: "",
  });

  const[isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <>
      <h2 className="head-text">Take a coffee and Chat with Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.mymail} alt="email" />
          <a href="mailto:ansarishahzaib567@gmail.com" className="p-text">
            ansarishahzaib567@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +923032965359" className="p-text">
            +923032965359
          </a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            onClick={handleChangeInput}
          />
        </div>

        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
            value={email}
            onClick={handleChangeInput}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>
          Send Message
        </button>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Contact",
  "app__whitebg"
);
