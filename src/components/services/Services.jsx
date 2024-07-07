import React, { useRef } from "react";
import "./Services.css";
import logo from "../../assets/people.webp";
import { motion, useInView } from "framer-motion";

const serviceVariants = {
  initial: {
    x: -500,

    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildern: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      id="Services"
      className="services"
      variants={serviceVariants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={serviceVariants}>
        <motion.p>
          I focus on helping your brand grow <br /> and move forward
        </motion.p>
        <motion.hr />
      </motion.div>
      <motion.div className="titleContainer" variants={serviceVariants}>
        <motion.div className="title">
          <motion.img src={logo} alt=""></motion.img>
          <motion.h1>
            <motion.b>Unique</motion.b> Ideas
          </motion.h1>
        </motion.div>
        <motion.div className="title">
          <h1>
            <motion.b>For Your</motion.b> Business.
          </h1>
          <button>WHAT TO DO?</button>
        </motion.div>
      </motion.div>
      <motion.div className="listContainer" variants={serviceVariants}>
        <motion.div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
            pariatur optio nihil rem voluptatibus veniam sapiente maxime tempore
            ducimus odit?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
            pariatur optio nihil rem voluptatibus veniam sapiente maxime tempore
            ducimus odit?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
            pariatur optio nihil rem voluptatibus veniam sapiente maxime tempore
            ducimus odit?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
            pariatur optio nihil rem voluptatibus veniam sapiente maxime tempore
            ducimus odit?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
