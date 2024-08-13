import React from 'react'
import { PiSlackLogoThin } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

const Resume = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:pr-[10rem] lg:mt-[-20rem] lg:grid-cols-2  xl:mt-24'>
      <div className=' flex-row sm:flex lg-flex  justify-center '>
        <div className='w-60% md:p-1  p-4 '>
          <div className=' lg:flex-col  bg-white  '>
            <h1 className='  text-4xl xl:text-6xl font-bold '>Resume</h1>
            <div className='mt-4  sm:ml-0  '>
              <p className='  bg-[#ffffff] xl:text-2xl rounded-xl shadow-2xl shadow-black p-5 '>
                <div className='flex  '>
                  <h1 className=' text-4xl'><FaGraduationCap className='text-[#151516] text-4xl px-0' /></h1>
                  <h1 className='ml-2 text-2xl '>Education</h1>
                </div>
                <div className='flex xl:text-2xl px-2 sm:px-2 pt-4 gap-4 '>
                  <h1>Btech (cse)</h1>
                  <h1>2020-24</h1>
                  <h1>SGPA-8.5</h1>
                </div>
              </p>
            </div>
            <div className='mt-4  sm:ml-0 '>
              <p className='  bg-[#ffffff] xl:text-2xl rounded-xl shadow-2xl shadow-black p-5 '>
                <div className='flex  '>
                  <h1 className=' text-4xl'><FaGraduationCap className='text-[#151516] text-4xl px-0' /></h1>
                  <h1 className='ml-2 text-2xl '>Education</h1>
                </div>
                <div className='flex xl:text-2xl px-2 sm:px-2 pt-4 gap-5 '>
                  <h1>12th (PCM)</h1>
                  <h1>2018-20</h1>
                  <h1 className='ml-2'>65%</h1>
                </div>
              </p>
            </div>
            <div className='mt-4  sm:ml-0 '>
              <p className='  bg-[#ffffff] xl:text-2xl rounded-xl shadow-2xl shadow-black p-5 '>
                <div className='flex  '>
                  <h1 className=' text-4xl'><FaGraduationCap className='text-[#151516] text-4xl px-0' /></h1>
                  <h1 className='ml-2 text-2xl '>Education</h1>
                </div>
                <div className='flex xl:text-2xl px-2 sm:px-2 pt-4 gap-4 '>
                  <h1 className='ml-2'>10th</h1>
                  <h1 className='ml-10'>2017-18</h1>
                  <h1 className='ml-6'>62%</h1>
                </div>
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className='p-2 lg:mt-2 sm:mt-0 md:px-16 lg:px-2 '>
        <p className='bg-[#ffffff]  xl:text-2xl rounded-xl  shadow-2xl  p-5 mt-10 shadow-black  '>
          <div className='flex gap-2 '>
            <h1 className=' text-4xl'><MdWorkOutline className='text-[#151516] text-4xl px-0' /></h1>
            <h1 className=' text-2xl '>Exprience</h1>
          </div>
          I have also found great joy in sharing my
          knowledge with others. Being a technical
          mentor allows me to give back to the
          community that has supported me
          throughout my career. </p>
      </div>
      <div></div>
      <div className='p-3  sm:mt-0  md:px-16 lg:px-4 lg:mt-[-14rem]'>
        <div className='bg-[#ffffff]  xl:text-2xl rounded-xl  shadow-2xl  p-5 mt-10 shadow-black  '>
          <div className='flex gap-2 '>
            <h1 className=' text-4xl'><MdWorkOutline className='text-[#151516] text-4xl px-0' /></h1>
            <h1 className=' text-2xl '>Skills</h1>
          </div>
          <div className='flex justify-between p-2' >
            <h1 className='bg-gray-300 shadow-xl shadow-gray-500 rounded-md'>HTML5</h1>
            <h1 className='bg-gray-300 shadow-xl shadow-gray-500 rounded-md'>CSS3</h1>
            <h1 className='bg-gray-300 shadow-xl shadow-gray-500 rounded-md'>Javascripts</h1>
          </div>
          <div className='flex  justify-between p-2' >
            <h1 className='bg-gray-300 shadow-xl shadow-gray-500 rounded-md'>Bootstrap</h1>
            <h1 className='bg-gray-300 shadow-xl shadow-gray-500 rounded-md'>Tailwind Css</h1>
            <h1 className='bg-gray-300 shadow-xl shadow-gray-500 rounded-md'>Chakra UI</h1>
          </div>
          <div className='flex justify-between p-2' >
            <h1 className='bg-gray-300 shadow-xl shadow-gray-500 rounded-md'>Matrial UI</h1>
            <h1 className='bg-gray-300 shadow-xl shadow-gray-500 rounded-md'>React Js</h1>
            <h1 className='bg-gray-300 shadow-xl shadow-gray-500 rounded-md'>Figma</h1>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>

  )
}

export default Resume
