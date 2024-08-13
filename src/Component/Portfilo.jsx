
import React from 'react';
import { CgWebsite } from "react-icons/cg";
import Yep from './../assets/pexels-wdnet-230544.jpg';
import { NavLink } from 'react-router-dom';
import minner from './../assets/pexels-pixabay-39284.jpg';
import Hotel from './../assets/pexels-polina-semernina-497042591-22469110.jpg';
import ar from './../assets/pexels-kevin-ku-92347-577585.jpg';
const Portfilo = () => {
  return (

    <div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 md:mt-[-7rem] lg:mt-[-1rem] mx-4'> 
        <div className='pt-20 px-5 sm:ml-0 xl:px-20  xl:mx-10 '>
              <p className='  bg-[#ffffff] xl:text-2xl rounded-xl shadow-2xl shadow-black p-5 '>
                <div className='flex  '>
                  <h1 className=' text-4xl'><CgWebsite className='text-[#151516] text-4xl px-0' /></h1>
                  <h1 className='ml-2 text-2xl  md:text-sm  '>YepCart</h1>
                </div>
                <div className='flex xl:text-2xl px-2 sm:px-2 pt-4 gap-4 '>
                <img src={Yep} alt="" className='rounded-lg'/>  
                </div>
                <div className='flex justify-between mt-5'>
                    <p className='text-gray-400 text-sm'>E-Commerce Website</p>
                     <NavLink to="https://yep-cart.vercel.app/" target='_blank' className=' text-sky-600'>Visit</NavLink>
                </div>
              </p>
            </div>
            <div className='pt-20 px-5 xl:px-20 xl:mx-10 sm:ml-0  '>
              <p className='  bg-[#ffffff] xl:text-2xl rounded-xl shadow-2xl shadow-black p-5 '>
                <div className='flex  '>
                  <h1 className=' text-4xl'><CgWebsite className='text-[#151516] text-4xl px-0' /></h1>
                  <h1 className='ml-2 text-2xl  md:text-sm '>MindSeeds</h1>
                </div>
                <div className='flex xl:text-2xl px-2 sm:px-2 pt-4 gap-4 '>
                <img src={minner} alt="" className='rounded-lg'/>  
                </div>
                <div className='flex justify-between mt-5'>
                    <p className='text-gray-400 text-sm'>RE-THINK YOUR THOUGHTS</p>
                     <NavLink to="https://mind-seeds.vercel.app/" target='_blank' className=' text-sky-600'>Visit</NavLink>
                </div>
              </p>
            </div>
            <div>
            <div className='pt-20 px-5 xl:px-20  xl:mx-10  sm:ml-0  '>
              <p className='  bg-[#ffffff] xl:text-2xl rounded-xl shadow-2xl shadow-black p-5 '>
                <div className='flex'>
                  <h1 className=' text-4xl'><CgWebsite className='text-[#151516] text-4xl px-0' /></h1>
                  <h1 className='ml-2 md:text-sm text-2xl '>Room Booking WebSite</h1>
                </div>
                <div className='flex xl:text-2xl px-2 sm:px-2 pt-4 gap-4 '>
                <img src={Hotel} alt="" className='rounded-lg'/>  
                </div>
                <div className='flex justify-between mt-5'>
                    <p className='text-gray-400 text-sm'>Hotel Booking Website</p>
                     <NavLink to="https://hotel-booking-nu-dun.vercel.app/" target='_blank' className=' text-sky-600'>Visit</NavLink>
                </div>
              </p>
            </div>
            </div>
            <div className='pt-20 px-5 xl:px-20  xl:mx-10  sm:ml-0  '>
              <p className='  bg-[#ffffff] xl:text-2xl rounded-xl shadow-2xl shadow-black p-5 '>
                <div className='flex'>
                  <h1 className=' text-4xl'><CgWebsite className='text-[#151516] text-4xl px-0' /></h1>
                  <h1 className='ml-2 md:text-sm text-2xl '>Room Booking WebSite</h1>
                </div>
                <div className='flex xl:text-2xl px-2 sm:px-2 pt-4 gap-4 '>
                <img src={Hotel} alt="" className='rounded-lg'/>  
                </div>
                <div className='flex justify-between mt-5'>
                    <p className='text-gray-400 text-sm'>Hotel Booking Website</p>
                     <NavLink to="https://hotel-booking-nu-dun.vercel.app/" target='_blank' className=' text-sky-600'>Visit</NavLink>
                </div>
              </p>
            </div>
        </div>

    </div>
    
            
            
          
    


    


  )
}

export default Portfilo

