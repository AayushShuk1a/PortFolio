import React, { Fragment } from "react";
import { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { animate, motion } from "framer-motion";
import "./works.scss";
import AppWrapper from "../../Wrapper/AppWrapper";
import { urlFor, client } from "../../client";
import { useEffect } from "react";
const Works = () => {
  const [activeFilter, setactiveFilter] = useState("All");
  const [Works, setWorks] = useState([]);
  const [FilterWorks, setFilterWorks] = useState([]);
  const [AnimateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const ToggleHandler = (item) => {
    setactiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (item === "All") {
        setFilterWorks(Works);
      } else {
        setFilterWorks(Works.filter((works) => works.tags.includes(item)));
      }
    }, 500);
  };

  useEffect(() => {
    const query = '*[_type=="works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);

  return (
    <Fragment>
      <h2 className="head-text">
        My creative <span>Portfolio</span>
      </h2>
      <div className="app__work-filter">
        {["UI/UX", "Web App", "Games", "React JS", "All"].map((item, index) => (
          <div
            key={index}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item - active" : ""
            }`}
            onClick={() => ToggleHandler(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={AnimateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {FilterWorks.map((works, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(works.imgUrl)} alt={works.name}></img>

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={works.projectLink} target="_blank" rel="norefer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className=" app__flex"
                  >
                    <AiFillEye></AiFillEye>
                  </motion.div>
                </a>

                <a href={works.codeLink} target="_blank" rel="norefer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className=" app__flex"
                  >
                    <AiFillGithub></AiFillGithub>
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{works.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {works.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text"> {works.tags[1]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </Fragment>
  );
};

export default AppWrapper(Works, "Works");
