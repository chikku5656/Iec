import React from 'react'
import logo from './../assets/u logo.png';
import name from './../assets/images.jpeg';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <div className='flex justify-between bg-[#e1d9d9] w-full py-2'>
        <div className=''>
          <img src={logo} className='h-20 '></img>
        </div>
        <div className=' hidden sm:block'>
        <div className=' flex gap-5 mt-7'>
        <div><NavLink to="/" >Home</NavLink></div>
        <div><NavLink to="/resume" >Resume</NavLink></div>
        <div><NavLink to="/work" >Work</NavLink></div>
        <div><NavLink to="/contact" >Contact</NavLink></div>
        </div>
        </div>
        
        <div className='font-bold  justify-end text-6xl mt-2 mx-2 active:opacity-0 cursor-pointer '>
          <img src={name} className=' border h-20 w-20 rounded-full shadow-2xl' />
        </div>
      </div>


    </div>

  )
}

export default Nav
