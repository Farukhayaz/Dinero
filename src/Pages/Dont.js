import React from 'react'
import "./Dont.css"

export default function Dont() {
  return (
    <div className='relative mb-14 '>
        <div class="custom-shape-divider-top-1713624079">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
   <div className='absolute top-0 w-[85%] flex flex-wrap justify-between items-center  xl:ml-20 lg:ml-20 md:ml-20 ml-5 '>
    <h1 className=' bg-[#1488cc] mb-8 mt-5 text-white font-medium text-[27px]'>
    Don’t miss our update. Subscribe us for <br/> more info 
    </h1>
    <div className='flex mb-4'>
        <input className='px-4 py-2 border-2 w-[60%] border-[#1488cc]' placeholder='Enter your email address' />
        <button className='bg-[#1488cc] border-2 border-[#1488cc] px-4 py-2 text-white'>Get Started</button>
    </div>
   </div>
</div>
    </div>
  )
}
