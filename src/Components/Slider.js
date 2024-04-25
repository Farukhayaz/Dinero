import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaTools,FaShower  } from "react-icons/fa";
import { GiOpenGate } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.scss";

// import required modules

export default function Slider() {

    const dummyData = [
        {
            icon:<FaTools className="h-8 p-1 w-8" />,
          title: "Trusted",
          description: "The sky was cloudless and of a deep dark blue the spectacle."
        },
        {
            icon:<VscWorkspaceTrusted className="h-8 p-1 w-8" />,
          title: "Better",
          description: "Cloudless and of a deep dark blue the spectacle before us was."
        },
        {
            icon:<FaShower  className="h-9 p-1 w-9" />,
          title: "Faster",
          description: "Deep dark blue the spectacle before us was indeed sublime."
        },
        {
            icon:<GiOpenGate  className="h-8 p-1 w-8" />,
          title: "Luxury",
          description: "Blue the spectacle before us was indeed sublime."
        }
      ];
  return (
    <>
      <div className="w-[90%] mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          // modules={[]}
          className="mySwiper"
        >
              {dummyData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="text-left pb-10 p-2">
            <span className="di inline-block p-3 ml-2 text-blue-500 bg-white shadow-custom rounded-md">
              {item.icon}
            </span>

            <h1 className="text-xl font-semibold mt-14 text-black capitalize dark:text-white font-[500]">
              {item.title}
            </h1>

            <p className="text-black dark:text-gray-300 text-[15px] mt-4">
              {item.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
        </Swiper>
      </div>
    </>
  );
}
