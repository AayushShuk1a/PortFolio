import React from "react";

const Navigationdot = ({ active }) => {
  const NavBarOptions = ["header", "about", "Works", "Skills", "Footer"];
  return (
    <div className="app__navigation">
      {NavBarOptions.map((item) => (
        <a
          href={`#${item}`}
          key={item}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        ></a>
      ))}
    </div>
  );
};

export default Navigationdot;
