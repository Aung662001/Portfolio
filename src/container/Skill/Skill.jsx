import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Wrapper from "../../Wrapper";
import client, { urlFor } from "../../client";
import { Tooltip } from "react-tooltip";
import "./Skill.scss";
import "react-tooltip/dist/react-tooltip.css";
import MotionWrap from "../../MotionWrap";

const Skill = () => {
  const [skill, setSkill] = useState([]);
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    const skillQuery = "*[_type == 'skills']";
    const experienceQuery = "*[_type == 'experiences']";
    client.fetch(skillQuery).then((data) => {
      setSkill(data);
    });

    client.fetch(experienceQuery).then((data) => {
      setExperience(data);
    });
  }, []);

  return (
    <section id="skills">
      <h1 className="head-text">Skill & Experiences</h1>
      <div className="app__skill-container">
        <motion.div className="app__skill-list">
          {skill.map((skill, index) => (
            <motion.div
              className="app__skill-item app__flex"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={skill.name + index}
            >
              <div
                className="app__felx "
                style={{ backgroundColor: `${skill.bgColor}` }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skill-exp">
          {experience.map((exp, index) => (
            <motion.div key={index} className="app__skill-exp-item">
              <div className="app__skill-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app__skill-exp-works">
                {exp.works.map((work, index) => (
                  <div key={index}>
                    <motion.div
                      className="app__skill-exp-work "
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      data-tip
                      id={work._key}
                      data-for={work.name}
                      key={work.name + index}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text ">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      anchorSelect={`#${work._key}`}
                      content={work.desc}
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Wrapper(
  MotionWrap(Skill, "app__skill"),
  "skills",
  "app__whitebg"
);
