import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const Phone_i = () => {
  return (
    <>
      <div className=' flex  sticky bottom-2 sm:hidden   mt-4'>
        <div className='p-2 hover:bg-[#f66212] active:opacity-0 bg-[#e1dcd9] hover:cursor-pointer rounded-lg flex flex-col items-center h-12 w-20 pt-2'>
          <NavLink to="/"><IoHomeOutline className='text-center ' /></NavLink>
          Home
        </div>
        <div className='p-2 hover:bg-[#f66212] active:opacity-0 bg-[#e1dcd9] hover:cursor-pointer rounded-lg flex flex-col items-center ml-4 h-12 w-20 pt-2'>
          <NavLink to="/resume"><CgNotes className='text-center' /></NavLink>
          Resume
        </div>
        <div className='p-2 hover:bg-[#f66212] active:opacity-0 bg-[#e1dcd9] hover:cursor-pointer rounded-lg flex flex-col items-center  ml-4 h-12 w-20 pt-2  '>
          <NavLink to="/work" className=''><MdOutlineWorkOutline className='' /> </NavLink>
          Work
        </div>
        <div className='p-2 hover:bg-[#f66212] active:opacity-0 bg-[#e1dcd9] hover:cursor-pointer rounded-lg flex flex-col items-center  ml-4  h-12 w-20 pt-2'>
          <NavLink to="/contact" ><FaUserLarge className='' />
          </NavLink>
          Contact
        </div>
      </div>
    </>
  )
}

export default Phone_i
