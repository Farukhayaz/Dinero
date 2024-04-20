import React from "react";
import Slider from "../Components/Slider";

export default function About() {
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5  mt-20 mb-2 mx-auto">
          <div class="lg:w-[90%]  mx-auto flex justify-between flex-wrap">
            <div class="flex justify-center lg:w-[50%] md:w-[50%] w-[100%] ">
              <div className="w-[100%] mx-auto rounded overflow-hidden ">
                <div className="flex">
                  <img
                    className="w-1/2 mt-20 mr-3"
                    src="/images/Rectangle 798.png"
                    alt="Building"
                  />
                  <img
                    className="w-1/2 mb-20"
                    src="/images/Rectangle 799.png"
                    alt="Keychain"
                  />
                </div>
                <div className="px-6 flex justify-end py-2 mt-[-60px]">
                  <img
                    className="w-[35%] xl:h-[100px] lg:h-[100px] md:h-[100px] h-[60px] mr-5 mb-10"
                    src="/images/home.png"
                    alt="Keychain"
                  />
                </div>
              </div>
            </div>
            <div class="lg:w-[45%] md:w-[45%]  w-full lg:pl-10 lg:py-6 mt-6 lg:mt-10">
              <h2 class="font-poppins text-[17px] font-medium leading-8 tracking-wider text-left text-[#1488CC]">
                ABOUT
              </h2>
              <h1
                class="font-poppins xl:text-[43px] lg:text-[43px] md:text-[43px] text-[35px] mt-3 font-semibold text-black "
                style={{ lineHeight: "1.2" }}
              >
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
{/* ----section2------------ */}
     
<Slider/>
    </>
  );
}
