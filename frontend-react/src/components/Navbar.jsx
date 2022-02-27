import React from "react";
import { images } from "../constants";
import "./Navbar.scss";
import { HiMenu, HiXCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const NavBarOptions = [
    "about",
    "Footer",
    "header",
    "Works",
    "Skills",
    "Testimonials",
    ,
  ];

  const [Toggle, setToggle] = useState(false);

  const ToggleHandler = () => {
    const change = !Toggle;
    setToggle(change);
    console.log(change);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt={"Logo"}></img>
      </div>
      <ul className="app__navbar-links">
        {NavBarOptions.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenu onClick={ToggleHandler}></HiMenu>

        {Toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiXCircle onClick={ToggleHandler} />
            <ul>
              {NavBarOptions.map((item) => (
                <li key={item}>
                  <a onClick={ToggleHandler} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
