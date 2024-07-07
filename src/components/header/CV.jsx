import React from "react";
import cv from "../../assets/cv.pdf";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -700,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildern: 0.1,
    },
  },
};

const CV = () => {
  return (
    <motion.div
      className="cv"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <a href={cv} download className="btn">
        Download cv
      </a>
      <a href="#Contact" className="btn btn-primary contactBtn">
        Let's talk
      </a>
    </motion.div>
  );
};

export default CV;
