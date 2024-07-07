import React from 'react'
import './Nav.css'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {motion} from "framer-motion"
import Sidebar from '../sidebar/Sidebar';
import theme_patten from "../../assets/theme_pattern.svg"

const Nav = () => {
  return (
    <div id='Homepage' className='navbar'>
      <Sidebar/>
     
      <div className="logo">
        <motion.div className="navleft"  initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
        <motion.span>Shuvo</motion.span>
        <motion.img src={theme_patten} alt="logo"/>
        </motion.div>
        <div className="social">
        <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}}href='https://facebook.com' target='_blank'><FaFacebook /></motion.a>
      <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} href='https://instagram' target='_blank'><FaInstagramSquare /></motion.a>
      <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}}href='https://youtube.com' target='_blank'><FaYoutube /></motion.a>
        </div>
      </div>
    
    </div>
  
  )
}

export default Nav
