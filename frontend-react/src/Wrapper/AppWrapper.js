import React from "react";
import { Navigationdot, SocialMediaIcons } from "../components";

const AppWrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        {" "}
        <SocialMediaIcons></SocialMediaIcons>
        <div className="app__wrapper app__flex">
          <Component></Component>

          <div className="copyright">
            <p className="p-text">@2022 Aayush</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <Navigationdot active={idName}></Navigationdot>
      </div>
    );
  };

export default AppWrapper;
