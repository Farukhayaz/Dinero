import React from "react";
import { FaRegEye } from "react-icons/fa";

export default function Project() {
  return (
    <>
      <div>
        <div className="flex justify-between w-[90%] mx-auto mt-14 mb-10">
          <div className="w-[97%] mx-auto flex items-center justify-between">
            <h1 className="xl:text-[30px] lg:text-[30px] md:text-[30px] text-[27px] font-medium">
              Handpicked Projects...
            </h1>
            <h3 className="xl:text-[18px] lg:text-[18px] md:text-[18px] text-[14px]  font-medium">
              View_all
            </h3>
          </div>
        </div>
        <div className="flex flex-wrap w-[90%] mx-auto gap-8 mb-20">
          <div class=" flex flex-col  items-center justify-center xl:w-[45%] lg:w-[45%] md:w-[45%] w-[100%] max-w-xl mx-auto">
            <div class="img2 w-full xl:h-64 lg:h-64 md:h-64 h-[200px] bg-gray-300 bg-center bg-cover rounded-lg shadow-md"></div>

            <div class=" w-[85%] -mt-10   bg-white rounded-lg shadow-lg md:w-[80%] mx-auto dark:bg-gray-800">
              <div class="flex relative items-center justify-between -mt-12 ml-4 md:justify-start">
                <img
                  class="object-cover w-24 h-24  rounded-full"
                  alt="Testimonial avatar"
                  src="/images/Ellipse 8.png"
                />
                <FaRegEye className="absolute right-6 text-[20px] text-[#1488CC] top-14" />
              </div>

              <div class="flex flex-col justify-end mt-6 w-[90%] mx-auto  mb-6">
                <h2 class="mt-2 font-poppins text-2xl font-medium leading-64 tracking-wide text-left text-black md:mt-0">
                  Prestige Botanique{" "}
                </h2>

                <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">
                  3 BHK Apartment, Doha Central
                </p>

                <h2 class="font-poppins text-[16px] font-bold  mt-2 text-left text-black ">
                  QAR 3.5 M - 4.5 M{" "}
                </h2>
              </div>
            </div>
          </div>
          <div class=" flex flex-col  items-center justify-center xl:w-[45%] lg:w-[45%] md:w-[45%] w-[100%] max-w-xl mx-auto">
            <div class="img1 w-full xl:h-64 lg:h-64 md:h-64 h-[200px] bg-gray-300 bg-center bg-cover rounded-lg shadow-md"></div>

            <div class=" w-[85%] -mt-10   bg-white rounded-lg shadow-lg md:w-[80%] mx-auto dark:bg-gray-800">
              <div class="flex relative items-center justify-between -mt-12 ml-4 md:justify-start">
                <img
                  class="object-cover w-24 h-24  rounded-full"
                  alt="Testimonial avatar"
                  src="/images/Ellipse 9.png"
                />
                <FaRegEye className="absolute right-6 text-[20px] text-[#1488CC] top-14" />
              </div>

              <div class="flex flex-col justify-end mt-6 w-[90%] mx-auto  mb-6">
                <h2 class="mt-2 font-poppins text-2xl font-medium leading-64 tracking-wide text-left text-black md:mt-0">
                  Prestige Botanique{" "}
                </h2>

                <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">
                  3 BHK Apartment, Doha Central
                </p>

                <h2 class="font-poppins text-[16px] font-bold  mt-2 text-left text-black ">
                  QAR 3.5 M - 4.5 M{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-[15%] lg:w-[15%] mt-10 md:w-[15%] w-[35%] bg-blue-500 h-1 mx-auto mb-10 rounded"></div>
      </div>
    </>
  );
}
