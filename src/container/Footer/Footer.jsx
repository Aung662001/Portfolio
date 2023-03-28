import React from "react";
import "./Footer.scss";
import Wrapper from "../../Wrapper";
import MotionWrap from "../../MotionWrap";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { images } from "../../constant";
import { motion } from "framer-motion";
import client from "../../client";
const Footer = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: "",
  });
  console.log(formData);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userName, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: userName,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <motion.div
      whileInView={{ y: 100, opacity: [0, 1] }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
      }}
      id="contact"
    >
      <section id="footer" className="app__footer">
        <h2>Take A Coffee & Chat With Me?</h2>

        <div className="app__footer-email-phone">
          <div>
            <img src={images.mobile} alt="mobilePng" />
            <a className="app__footer-phone-number" href="tel:+959 753 912 127">
              +959 753 912 127
            </a>
          </div>
          <div>
            <img src={images.email} alt="email" />
            <a
              className="app__footer-email"
              href="mailto:winnmyoaung49@gmail.com"
            >
              winnmyoaung49@gmail.com
            </a>
          </div>
        </div>
      </section>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              name="userName"
              value={userName}
              placeholder="Your Name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              name="email"
              value={email}
              placeholder="Your Email"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <textarea
              rows={7}
              className="p-text"
              name="message"
              value={message}
              placeholder="Your Message"
              onChange={handleChangeInput}
            />
          </div>
          <button className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send"}
          </button>
        </div>
      ) : (
        <h2>Thank You For Vewing My Work!</h2>
      )}
    </motion.div>
  );
};

export default Wrapper(
  MotionWrap(Footer, "app__footer"),
  "footer",
  "app__whitebg"
);
