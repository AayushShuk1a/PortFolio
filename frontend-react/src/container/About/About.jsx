import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { images } from "../../constants";
import "./about.scss";
import { urlFor, client } from "../../client";

// const about = [
//   {
//     title: "Web-Developer",
//     description: "I can work with both frontend and backend",
//     imageUrl: images.about01,
//   },
//   {
//     title: "Web-Developer",
//     description: "I can work with both frontend and backend",
//     imageUrl: images.about02,
//   },
//   {
//     title: "Web-Developer",
//     description: "I can work with both frontend and backend",
//     imageUrl: images.about03,
//   },
//   {
//     title: "Web-Developer",
//     description: "I can work with both frontend and backend",
//     imageUrl: images.about04,
//   },
// ];
const About = () => {
  const [abouts, setabouts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((data) => {
      setabouts(data);
    });
  }, []);

  return (
    <Fragment>
      <h2 className="head-text">
        I know That <span>Good Design </span> <br></br> means{" "}
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title}></img>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Fragment>
  );
};

export default About;
