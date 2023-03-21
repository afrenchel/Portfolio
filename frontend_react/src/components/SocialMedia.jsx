import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.facebook.com/roman.alinaioana" target="_blank">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/alina-frenchel-a9337b22a/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/afrenchel" target="_blank">
        <AiFillGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
