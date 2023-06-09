import React from "react";
import SocialMedia from "./components/Navbar/Wrapper/SocialMedia";
import NavigationDots from "./components/Navbar/Wrapper/NavigationDots";
const Wrapper = (Component, idName, className) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${className}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@2023 MICEL</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default Wrapper;
