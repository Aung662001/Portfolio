import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import client, { urlFor } from "../../client";
import Wrapper from "../../Wrapper";
import MotionWrap from "../../MotionWrap";
const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);
  return (
    <section id="about">
      <h2>
        I Know
        <span>How to Google</span>
        <br />
        mean how to<span>Code</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h3 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h3>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Wrapper(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
//MotionWrap(Component,className)
//Wrapper(Component,IdName,className)
