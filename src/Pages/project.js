import React from 'react'

export default function Project() {
  return (
   <>
   <div>
    <div className='flex justify-between w-[90%] mx-auto mt-14 mb-10'>
    <div class="md:flex md:items-start md:-mx-4 ">
                        <div class="mt-4 md:mx-4 md:mt-0">
                            <h1 class="font-poppins text-4xl font-semibold text-black">Handpicked Projects...</h1>
                        </div>
                    </div>

    <div class="md:flex md:items-start md:-mx-4">
                        <div class="mt-4 md:mx-4 md:mt-0">
                            <h1 class="font-poppins text-4xl font-semibold text-black">View all</h1>
                        </div>
                    </div>

    </div>
<div className='flex w-[90%] mx-auto gap-8'>
    {/* 1 */}
   <div class=" flex flex-col items-center justify-center w-full max-w-xl mx-auto">
    <div class="img2 w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" ></div>

    <div class=" w-56 -mt-10  bg-white rounded-lg shadow-lg md:w-[80%] mx-auto dark:bg-gray-800">
    <div class="flex justify-center -mt-16 md:justify-start">
        <img class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full" alt="Testimonial avatar" src="/images/Ellipse 8.png"/>
    </div>

    <div class="flex flex-col justify-end mt-6 w-[80%] mx-auto  mb-6">
    <h2 class="mt-2 font-poppins text-2xl font-medium leading-64 tracking-wide text-left text-black md:mt-0">Prestige Botanique </h2>

<p class="mt-2 text-sm text-gray-600 dark:text-gray-200">3 BHK Apartment, Doha Central</p>

<h2 class="mt-2 font-poppins text-xl font-bold leading-64 tracking-wide text-left text-black  md:mt-4 ">QAR 3.5 M - 4.5 M </h2>
    </div>
    
    </div>
</div>
{/* 2 */}
<div class="flex flex-col items-center justify-center w-full max-w-xl mx-auto">
    <div class=" img1 w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"></div>

    <div class=" w-56 -mt-10  bg-white rounded-lg shadow-lg md:w-[80%] mx-auto dark:bg-gray-800">
    <div class="flex justify-center -mt-16 md:justify-start">
        <img class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full" alt="Testimonial avatar" src="/images/Ellipse 9.png"/>
    </div>

    

    <div class="flex flex-col justify-end mt-6 w-[80%] mx-auto  mb-6">
    <h2 class="mt-2 font-poppins text-2xl font-medium leading-64 tracking-wide text-left text-black md:mt-0">Prestige Botanique </h2>

<p class="mt-2 text-sm text-gray-600 dark:text-gray-200">3 BHK Apartment, Doha Central</p>

<h2 class="mt-2 font-poppins text-xl font-bold leading-64 tracking-wide text-left text-black  md:mt-4 ">QAR 3.5 M - 4.5 M </h2>
    </div>
    </div>
</div>
</div>
   </div>
   
   </>
  )
}
