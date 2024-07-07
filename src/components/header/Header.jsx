import React from "react";
import "./Header.css";
import CV from "./CV.jsx";
import ME from "../../assets/hero.png";
import HeaderSocial from "./HeaderSocial.jsx";
import Scroll from "../../assets/scroll.png";
import { motion } from "framer-motion";
import Typical from "react-typical";

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

const scrollButton = {
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
  scrollB: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderTextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",

    transition: {
      repeat: Infinity,
      repeatType: "mirror",

      duration: 20,
    },
  },
};

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <motion.h4 variants={textVariants} initial="initial" animate="animate">
          Hello I'm
        </motion.h4>
        <motion.h2 variants={textVariants} initial="initial" animate="animate">
          Sudipto roy
        </motion.h2>
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-light"
        >
          <Typical
            loop={Infinity}
            steps={[
              "Web developer ",
              1500,
              "Frontend developer",
              1500,
              "Web designer",
              1500,
              "students",
              1500,
            ]}
          />
        </motion.h1>
        <CV />
        <HeaderSocial />
        <motion.div
          className="slidingTextContainer"
          variants={sliderTextVariants}
          initial="initial"
          animate="animate"
        >
          MYSELF SUDIPTO ROY
        </motion.div>

        <div className="me">
          <img src={ME} alt="me"></img>
        </div>

        <motion.a href="#contact" className="scroll__down">
          <motion.img
            variants={scrollButton}
            animate="scrollB"
            src={Scroll}
            alt=""
          ></motion.img>
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
