import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa6";
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

const HeaderSocial = () => {
  return (
    <motion.div
      className="header__social"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <motion.a href="https://linkedin.com" target="_blank">
        <FaLinkedinIn />
      </motion.a>
      <motion.a href="https://github.com" target="_blank">
        <FiGithub />
      </motion.a>
      <motion.a href="https://dribbble.com" target="_blank">
        <FaDribbble />
      </motion.a>
    </motion.div>
  );
};

export default HeaderSocial;
