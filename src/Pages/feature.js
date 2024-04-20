import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Feature() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div
        className="custom-dot"
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: i === currentSlide ? "#1488CC" : "#E5E7EB",
          borderRadius: "50%",
          margin: "0 5px",
        }}
      ></div>
    ),
    afterChange: (index) => {
      setCurrentSlide(index); // Update current slide index
    },
  };

  return (
    <>
      <section class="text-gray-600 xl:w-[80%] lg:w-[80%] md:w-[80%] w-[90%] mx-auto">
        <div class="container mx-auto flex px-5 py-10 justify-between flex-wrap items-center">
          <div class="lg:flex-grow lg:max-w-[50%] md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 class="font-poppins text-base font-medium leading-8 tracking-wider text-left text-[#1488CC]">
              Featured Residentials
            </h2>
            <h1
              class="font-poppins xl:text-[45px] lg:text-[45px] md:text-[45px] text-[35px] text-black font-semibold leading-16 tracking-tighter text-left mt-3"
              style={{ lineHeight: "1.2" }}
            >
              8486 E. Gulf Street New Doha
            </h1>
            {/* 1*/}
            <div className="flex justify-between w-[100%] xl:mt-14 lg:mt-14 md:mt-14 mt-8">
              <div className="flex items-center">
                <span className="inline-block p-2 text-blue-500 bg-white rounded-full border border-blue-500 md:mx-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>
                <div className=" ml-2 ">
                  <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                    3 Beds
                  </h1>
                </div>
              </div>

              <div className="flex items-center">
                <span className="inline-block p-2 text-blue-500 bg-white rounded-full border border-blue-500 md:mx-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>
                <div className="ml-2 ">
                  <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                    3 Baths
                  </h1>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="flex  justify-between w-[100%] mt-4">
              <div className="flex items-center">
                <span className="inline-block p-2 text-blue-500 bg-white rounded-full border border-blue-500 md:mx-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>
                <div className="ml-2">
                  <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                    3 Beds
                  </h1>
                </div>
              </div>

              <div className="flex items-center">
                <span className="inline-block p-2 text-blue-500 bg-white rounded-full border border-blue-500 md:mx-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>
                <div className="ml-2">
                  <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                    3 Baths
                  </h1>
                </div>
              </div>
            </div>

            <div class="flex w-[100%]  items-end ">
              <button class="flex  text-white bg-[#1488CC] border-0 py-2 px-6  rounded mt-8">
                View More
              </button>
              <h1 class="mb-[5px] xl:ml-10 lg:ml-10 md:ml-10 ml-5 text-[20px] text-black font-bold  ">
                QAR 3,500,000
              </h1>
            </div>
          </div>
          <div className="lg:max-w-[40%] lg:w-full md:w-1/2 w-[100%]">
            <Slider {...settings}>
              <div>
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="/images/Rectangle 800.png"
                />
              </div>
              <div>
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="/images/Rectangle 800.png"
                />
              </div>
              <div>
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="/images/Rectangle 800.png"
                />
              </div>
              {/* Add more slides here with additional images */}
            </Slider>
          </div>
        </div>
        <div className="xl:w-[15%] lg:w-[15%] mt-5 md:w-[15%] w-[35%] bg-blue-500 h-1 mx-auto mb-10 rounded"></div>
      </section>
    </>
  );
}
