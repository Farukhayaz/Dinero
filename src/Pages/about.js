import React from "react";

export default function About() {
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-[90%]  mx-auto flex justify-between flex-wrap">
            <div class="flex justify-center lg:w-[50%] md:w-[50%] w-[90%] ">
            <div className="w-[100%] mx-auto rounded overflow-hidden ">
      <div className="flex">
        <img className="w-1/2 mt-20 mr-3" src="/images/Rectangle 798.png" alt="Building" />
        <img className="w-1/2 mb-20" src="/images/Rectangle 799.png" alt="Keychain" />
      </div>
      <div className="px-6 flex justify-end py-2 mt-[-60px]">
      <img className="w-[35%] h-[100px] mr-10 mb-10" src="/images/home.png" alt="Keychain" />
      </div>
    </div>
            </div>
            <div class="lg:w-[45%] w-full lg:pl-10 lg:py-6 mt-6 lg:mt-10">
              <h2 class="font-poppins text-[17px] font-medium leading-8 tracking-wider text-left text-[#1488CC]">
                ABOUT
              </h2>
              <h1 class="font-poppins text-[43px] mt-3 font-semibold text-black " style={{lineHeight:"1.2"}}>
                Residential Development
              </h1>

              <p class="font-poppins text-base font-normal leading-8 tracking-tighter text-left mt-8">
                The sky was cloudless and of a deep dark blue the spectacle
                before us was indeed sublime. The sky was cloudless and of a
                deep dark blue the spectacle before us was indeed sublime.
              </p>

              <div class="flex">
                <button class="flex  text-white bg-[#1488CC] border-0 py-2 px-6  rounded mt-8">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white w-[80%] mx-auto dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-4">
            {/* 1 */}
            <div class="space-y-3">
              <span class="inline-block p-3 text-blue-500 bg-white shadow-custom rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Trusted
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
                The sky was cloudless and of a deep dark blue the spectacle.
              </p>
            </div>
            {/* 2 */}
            <div class="space-y-3 border border-solid border-blue-500 shadow-custom rounded-bl-lg rounded-br-lg px-4">
              <span class="inline-block p-3 text-white bg-[#1488CC] shadow-custom rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Butter
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
                Cloudless and of a deep dark blue the spectacle before us was.
              </p>
            </div>
            {/* 3 */}
            <div class="space-y-3">
              <span class="inline-block p-3 text-blue-500 bg-white shadow-custom rounded-md ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Faster
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
                Deep dark blue the spectacle before us was indeed sublime.
              </p>
            </div>
            {/* 4 */}
            <div class="space-y-3">
              <span class="inline-block p-3 text-blue-500 bg-white shadow-custom rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Luxury
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
                Blue the spectacle before us was indeed sublime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


