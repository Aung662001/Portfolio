import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="app__social">
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebook />
      </div>
    </section>
  );
};

export default SocialMedia;
