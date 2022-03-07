import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMediaIcons = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/Aayushs30319978">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/aayushshuk1a/">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://github.com/Aayushshukla007">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
