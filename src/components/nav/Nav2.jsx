import React, { useState } from 'react'
import './Nav2.css'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";



const Nav2 = () => {
    const[activeNav,setActiveNav]=useState('#Homepage')
  return (
    <div className='nav'>
      <a href='#Homepage' onClick={()=>setActiveNav('#Homepage')} className={activeNav==='#Homepage' ?'active' : ''}><IoHomeOutline /></a>
      <a href='#About' onClick={()=>setActiveNav('#About')} className={activeNav==='#About' ?'active' : ''}><FaRegUser /></a>
      <a href='#Services' onClick={()=>setActiveNav('#Services')} className={activeNav==='#Services' ?'active' : ''}><RiServiceLine /></a>
      <a href='#Portfolio' onClick={()=>setActiveNav('#Portfolio')} className={activeNav==='#Portfolio' ?'active' : ''}><BiBook /></a>
      <a href='#Contact' onClick={()=>setActiveNav('#Contact')} className={activeNav==='#Contact' ?'active' : ''}><FiPhoneCall /></a>
    </div>
  )
}

export default Nav2
