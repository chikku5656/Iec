import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const Icons = () => {
  return (
    <>
      <div className='hidden sm:block  mt-4  '>

        <div className='   sm:flex sm:justify-end sm:gap-5 sm:p-5  sm:items-center hover:cursor-pointer md:mt-[-15rem] lg:mb-[20rem]  '>
          <div className='hover:bg-[#f66212]  p-2 pt-2  active:opacity-0 bg-[#e1dcd9]  rounded-lg flex flex-col items-center '>
            <NavLink><IoHomeOutline className='text-center' /></NavLink>
            Home
          </div>
          <div className='hover:bg-[#f66212] active:opacity-0 p-2 pt-2  bg-[#e1dcd9] hover:cursor-pointer rounded-lg flex flex-col items-center'>
            <NavLink ><CgNotes className='text-center' /></NavLink>
            Resume
          </div>
          <div className=' hover:bg-[#f66212] active:opacity-0 p-2 pt-2 bg-[#e1dcd9] hover:cursor-pointer rounded-lg flex flex-col items-center    '>
            <NavLink className=''><MdOutlineWorkOutline className='' /> </NavLink>
            Work
          </div>
          <div className='hover:bg-[#f66212] active:opacity-0 p-2 pt-2 bg-[#e1dcd9] hover:cursor-pointer rounded-lg flex flex-col items-center   '>
            <NavLink ><FaUserLarge className='' />

            </NavLink>
            Contact
          </div>
        </div>
      </div>
    </>
  )
}

export default Icons
