import React, { useRef } from "react";
import "./Portfolio.css";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React app",
    img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, molestias! Culpa in iusto aliquam? Molestias dolor saepe fuga vitae! Amet!",
  },
  {
    id: 2,
    title: "Next.js app",
    img: "https://images.pexels.com/photos/4050464/pexels-photo-4050464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, molestias! Culpa in iusto aliquam? Molestias dolor saepe fuga vitae! Amet!",
  },
  {
    id: 3,
    title: "Music app",
    img: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, molestias! Culpa in iusto aliquam? Molestias dolor saepe fuga vitae! Amet!",
  },
  {
    id: 4,
    title: "Vanilla app",
    img: "https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, molestias! Culpa in iusto aliquam? Molestias dolor saepe fuga vitae! Amet!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 140]);

  return (
    <section>
      <div className="sectionContainer">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="img" />
          </div>
          <motion.div className="textContainer1" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button className="portbtn">See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <div id="Portfolio" className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
