import React from "react";
import { BsLinkedin } from "react-icons/bs";
import {TbFileDownload} from "react-icons/tb"

import { AiFillGithub } from "react-icons/ai";
const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/alina-frenchel-a9337b22a/"
        target="_blank"
      >
        <BsLinkedin className="svg-in" />
      </a>
    </div>
    <div>
      <a href="https://github.com/afrenchel" target="_blank">
        <AiFillGithub />
      </a>
    </div>
    <div>
      <a href='https://drive.google.com/file/d/1ptqeNiv8LRSnjn7ibymPnE54FZQ0wmfP/view?usp=drive_link' target="_blank" download>
        <TbFileDownload/>
      </a>
    </div>
    
  </div>
);

export default SocialMedia;
