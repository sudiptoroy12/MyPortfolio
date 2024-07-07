import React, { useRef } from "react";
import "./About.css";
import theme_patten from "../../assets/theme_pattern.svg";
import me1 from "../../assets/avatar2.jpg";
import { RiAwardFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const aboutVariants = {
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

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      id="About"
      className="about"
      ref={ref}
      variants={aboutVariants}
      initial="initial"
      animate={isInView && "animate"}
    >
      <motion.div className="about_title">
        <h1>About me</h1>
        <img src={theme_patten} alt="" />
      </motion.div>
      <motion.div className="about_sections">
        <div className="about_left">
          <img className="aboutImg" src={me1} alt="" />
        </div>
        <div className="about_right">
          <div className="about_cards">
            <article className="about_card">
              <RiAwardFill className="about_icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about_card">
              <FaUserCircle className="about_icon" />
              <h5>Clients</h5>
              <small>1+</small>
            </article>
            <article className="about_card">
              <FaFileContract className="about_icon" />
              <h5>Projects</h5>
              <small>2+</small>
            </article>
          </div>
          <div className="about_para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, adipisci. Magnam quidem dignissimos eveniet alias
              aliquam sit atque voluptatem tempora?
            </p>
          </div>
          <div className="about_skills">
            <div className="about_skill">
              <p>HTML(70%)</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about_skill">
              <p>CSS(70%)</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about_skill">
              <p>React Js(50%)</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about_skill">
              <p>JavaScript(60%)</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about_skill">
              <p>Bootstrap(70%)</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
