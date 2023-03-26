import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constant";
import Wrapper from "../../Wrapper";
import MotionWrap from "../../MotionWrap";
const Header = () => {
  const scaleVarients = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div id="home" className="app__header app__flex">
      {/*//////////////////////////////////////////// start header information////////////////////////////////////////// */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p>Hello, I am </p>
              <h1 className="head-text">WinnMyoAung</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web developer &</p>
            <p className="p-text"> Future World Shaker!</p>
          </div>
        </div>
      </motion.div>
      {/* /////////////////////////////////////////end header inrormation ///////////////////////////////////////////////////*/}

      {/* /////////////////////////////////////////start image and circle ///////////////////////////////////////////////////*/}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="miclel" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile-cicle"
          className="overlay_circle"
        />
      </motion.div>
      {/* /////////////////////////////////////////end image and circle ///////////////////////////////////////////////////*/}

      {/* /////////////////////////////////////////start skill photos ///////////////////////////////////////////////////*/}
      <motion.div
        varient={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.sass, images.figma].map((circle, index) => {
          return (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle"></img>
            </div>
          );
        })}
      </motion.div>
      {/* /////////////////////////////////////////end skill photos ///////////////////////////////////////////////////*/}
    </div>
  );
};

export default Wrapper(Header, "home");
// export default Wrapper(MotionWrap(Header, "app__home"), "home", "app__whitebg");
