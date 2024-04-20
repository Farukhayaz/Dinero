import React from 'react'

export default function Feature() {
  return (
    <>
    <section class="text-gray-600 w-[80%] mx-auto">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h2 class="font-poppins text-base font-medium leading-8 tracking-wider text-left text-[#1488CC]">Featured Residentials</h2>
                <h1 class="font-poppins text-5xl text-black font-semibold leading-16 tracking-tighter text-left ">8486 E. Gulf Street New Doha</h1>    
                {/* 1*/}
   <div className='flex justify-between w-[100%] mt-14'>
   <div class="md:flex md:items-start md:-mx-4">
                    <span class="inline-block p-2 text-blue-500 bg-white rounded-full border border-blue-500 md:mx-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-medium text-gray-700 capitalize dark:text-white">3 Beds</h1>

                    </div>
                </div>

                <div class="md:flex md:items-start md:-mx-4">
                    <span class="inline-block p-2 text-blue-500 bg-white rounded-full border border-blue-500  md:mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-medium text-gray-700 capitalize dark:text-white">3 Baths</h1>
                    </div>
                </div>
   </div>

   {/* 2 */}
   <div className='flex justify-between w-[100%] mt-14'>
   <div class="md:flex md:items-start md:-mx-4">
                    <span class="inline-block p-2 text-blue-500 bg-white rounded-full border border-blue-500  md:mx-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-medium text-gray-700 capitalize dark:text-white">3900 sq ft</h1>
                    </div>
                </div>

   <div class="md:flex md:items-start md:-mx-4">
                    <span class="inline-block p-2 text-blue-500 bg-white rounded-full border border-blue-500  md:mx-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-medium text-gray-700 capitalize dark:text-white">2019</h1>
                    </div>
                </div>

   </div>

            
      <div class="flex w-full md:justify-between justify-between items-end">
        
      <button class="flex  text-white bg-[#1488CC] border-0 py-2 px-6  rounded mt-8">View More</button>
        <h1 class="font-karla text-xl text-black font-extrabold leading-8 text-left ">QAR 3,500,000</h1> 
      </div>
    
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/images/Rectangle 800.png"/>
    </div>
  </div>
</section>

    </>
  )
}
