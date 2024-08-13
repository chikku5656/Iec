import React from 'react'
import { PiSlackLogoThin } from "react-icons/pi";
const Profile = () => {
    return (
        <div className=' flex-row sm:flex '>
            <div className='w-50%   p-4'>
                <div className='mt-10 sm:mt-0'>
                    <h1 className='  text-4xl xl:text-6xl font-bold '>About me</h1>
                    <p className='mt-4  bg-[#ffffff] xl:text-2xl rounded-xl'>Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
                        full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
                        My journey in the world of web development has been nothing short of exhilarating, and
                        I constantly strive to enhance my skills and embra
                        ce emerging trends in the industry.</p>
                </div>
                <h1 className='text-4xl xl:text-5xl whitespace-nowrap mt-2  mb-[-1rem] font-bold '>What I do!</h1>
                <div className=' lg:flex  bg-white  '>
                    <div className='mt-10  sm:ml-0 '>
                        <p className='  bg-[#ffffff] xl:text-2xl rounded-xl shadow-2xl shadow-black p-5 '>
                            <div className='flex  '>
                                <h1 className=' text-4xl'><PiSlackLogoThin className='text-[#151516] text-4xl px-0' /></h1>
                                <h1 className='ml-2 text-2xl '>Web Development</h1>
                            </div>
                            As a developer, I find myself most
                            captivated by the power and flexibility of
                            NEXT.js. I'm always eager to dive into new
                            projects that leverage NEXT.js and
                            discover innovative ways to create fast,
                            scalable, and user-friendly applications.</p>
                    </div>
                    <div className='  sm:px-0 lg:px-5 '>
                        <p className='bg-[#ffffff]  xl:text-2xl rounded-xl  shadow-2xl  p-5 mt-10 shadow-black  '>
                            <div className='flex gap-2 '>
                                <h1 className=' text-4xl'><PiSlackLogoThin className='text-[#151516] text-4xl ' /></h1>
                                <h1 className=' text-2xl '>Mentorship</h1>
                            </div>
                            I have also found great joy in sharing my
                            knowledge with others. Being a technical
                            mentor allows me to give back to the
                            community that has supported me
                            throughout my career. </p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default Profile

