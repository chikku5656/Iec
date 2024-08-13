import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";
import { LuMailOpen } from "react-icons/lu";
import { MdDownload } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import name from './../assets/images.jpeg';
import { Link, NavLink } from 'react-router-dom';
const Slider = () => {
    return (
        <>
            <div className='bg-[#ffffff] mt-10 md:ml-4 md:mt-12 xl:ml-10'>

                <div className='bg-gray-300 rounded-xl h-[full]   flex flex-col  items-center'>
                    <img src={name} className='relative bottom-9 border h-20 w-20 rounded-full border-black' />
                    <p className="  font-bold text-4xl pt-10">Ujjwal Kr. Singh</p>
                    <p className='text-[blue] mt-2'>FullStack Developer</p>
                    <div className='flex mt-3 text-4xl '>
                        <NavLink to="https://www.linkedin.com/feed/" target='_blank' className=' text-sky-600'><FaLinkedin /></NavLink>
                        <NavLink to="https://github.com/" target='_blank' className=' text-black ml-2'><FaGithub /></NavLink>
                        <NavLink to="https://www.instagram.com/chikuuu_1301" className='text-pink-500 ml-2'><FaInstagram /></NavLink>
                        <NavLink className=' text-gray-600 ml-2'><BsTwitterX /></NavLink>
                    </div>
                    <div>
                    </div>
                    <div className='bg-[#fffff]  rounded-xl mt-4'>
                        <div className='  flex mt-6 mr-[7rem] ml-2'><span className='flex text-4xl mr-10 text-sky-600'><IoIosPhonePortrait /> </span>
                            <p className='text-2xl text-gray'>Phone</p></div>

                        <p className='text-[blue] ml-20 '>+91 8544717963</p>
                        <hr className='mt-6 mx-6 text-red' />
                        <div className='  flex mt-6 mr-[6.5rem] ml-3'><span className='flex text-4xl mr-10 text-black'><LuMailOpen />
                        </span>
                            <p className='text-2xl text-gray'>Gmail</p></div>
                        <p className='text-[blue] ml-20'>uksujjawalkumarsingh</p>
                        <hr className='mt-6 mx-6 text-red' />
                        <div className='  flex mt-6 mr-[7rem] ml-2'><span className='flex text-4xl mr-10 text-pink-500'><GrLocation /> </span>
                            <p className='text-2xl text-gray'>Location</p></div>
                        <p className='text-[blue] ml-20'>Baddi Solan HP</p>
                    </div>
                    <button className='w-[200px] h-[40px] bg-[#c1d12d6c] rounded-full my-8'>
                        <div className='flex'>
                            <span className='text-white text-2xl ml-3'><MdDownload /></span>
                            <Link className='text-white ml-4'>Download Resume</Link>
                        </div>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Slider
