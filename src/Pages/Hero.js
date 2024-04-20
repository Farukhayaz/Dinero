import React, { useEffect, useState } from "react";
import "./Hero.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define an array of image paths
  const images = [
    "/images/group.png",
    "/images/group2.png",
    "/images/group3.png",
  ];

  // Function to update the current image index
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPreviousSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div
        className="xl:w-[90%] lg:w-[90%] md:w-[90%] w-[90%] mx-auto"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div
          className="w-full border bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          <div className="xl:h-[80vh] lg:h-[80vh] md:h-[50vh] h-[50vh] xl:w-[87%] lg:w-[87%] md:w-[87%] w-[90%] flex flex-col justify-center  mx-auto">
            <h1
              className="xl:text-[40px] lg:text-[40px] md:text-[40px] text-[24px] text-white text-start xl:w-[58%] lg:w-[58%] md:w-[70%] w-[88%] mb-8 font-[600]"
              style={{ fontFamily: "Poppins" }}
            >
              Buy or sell your property without commission
            </h1>
            <div className="xl:w-[65%] lg:w-[65%] md:w-[90%] w-[100%]   shadow">
              <div className="flex justify-between  items-center">
                <div className="">
                  <button
                    onClick={() => handleTabClick("home")}
                    className={`tab-btn px-5 py-2 font-medium text-[16px]  ${
                      activeTab === "home"
                        ? "active bg-white text-[#1488CC]"
                        : "bg-gray-300"
                    }`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => handleTabClick("buy")}
                    className={`tab-btn px-5 py-2 font-medium text-[16px]  ${
                      activeTab === "buy"
                        ? "active  bg-white text-[#1488CC]"
                        : "bg-gray-300"
                    }`}
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => handleTabClick("sell")}
                    className={`tab-btn px-5 py-2  font-medium text-[16px] ${
                      activeTab === "sell"
                        ? "active  bg-white text-[#1488CC]"
                        : "bg-gray-300"
                    }`}
                  >
                    Sell
                  </button>
                </div>
              </div>
              <div className="bg-white p-5">
                <div
                  id="home-tab-content"
                  className={`tab-content ${
                    activeTab === "home" ? "active" : "hidden"
                  }`}
                >
                  {/* Home tab content */}
                  <div className="flex justify-around flex-wrap items-center">
                    <div className="relative xl:w-auto lg:w-auto md:w-auto w-[50%] flex flex-col">
                      <label
                        htmlFor="dates"
                        className="  text-[14px] text-start ml-5  font-medium"
                      >
                        Where
                      </label>
                      <select
                        id="dates"
                        className="bg-white h-10 px-5  rounded-lg text-sm focus:outline-none"
                        name="dates"
                      >
                        <option>Select Move-in Date1</option>
                        <option>Select Move-in Date2</option>
                        <option>Select Move-in Date3</option>
                        <option>Select Move-in Date4</option>
                        {/* Date options would go here */}
                      </select>
                    </div>
                    <div className="relative xl:w-auto lg:w-auto md:w-auto w-[50%] flex flex-col">
                      <label
                        htmlFor="dates"
                        className="  text-[14px] text-start ml-5  font-medium"
                      >
                        When
                      </label>
                      <select
                        id="dates"
                        className="bg-white h-10 px-5  rounded-lg text-sm focus:outline-none"
                        name="dates"
                      >
                        <option>Select Move-in Date1</option>
                        <option>Select Move-in Date2</option>
                        <option>Select Move-in Date3</option>
                        <option>Select Move-in Date4</option>
                        {/* Date options would go here */}
                      </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-[45px] px-4 rounded">
                      Browse Home
                    </button>
                  </div>
                </div>
                <div
                  id="buy-tab-content"
                  className={`tab-content ${
                    activeTab === "buy" ? "active" : "hidden"
                  }`}
                >
                  {/* Buy tab content */}
                  <div className="flex justify-around flex-wrap items-center">
                    <div className="relative xl:w-auto lg:w-auto md:w-auto w-[50%] flex flex-col">
                      <label
                        htmlFor="dates"
                        className="  text-[14px] text-start ml-5  font-medium"
                      >
                        Where
                      </label>
                      <select
                        id="dates"
                        className="bg-white h-10 px-5  rounded-lg text-sm focus:outline-none"
                        name="dates"
                      >
                        <option>Select Move-in Date1</option>
                        <option>Select Move-in Date2</option>
                        <option>Select Move-in Date3</option>
                        <option>Select Move-in Date4</option>
                        {/* Date options would go here */}
                      </select>
                    </div>
                    <div className="relative xl:w-auto lg:w-auto md:w-auto w-[50%] flex flex-col">
                      <label
                        htmlFor="dates"
                        className="  text-[14px] text-start ml-5  font-medium"
                      >
                        When
                      </label>
                      <select
                        id="dates"
                        className="bg-white h-10 px-5  rounded-lg text-sm focus:outline-none"
                        name="dates"
                      >
                        <option>Select Move-in Date1</option>
                        <option>Select Move-in Date2</option>
                        <option>Select Move-in Date3</option>
                        <option>Select Move-in Date4</option>
                        {/* Date options would go here */}
                      </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-[45px] px-4 rounded">
                      Browse Buy
                    </button>
                  </div>
                </div>
                <div
                  id="sell-tab-content"
                  className={`tab-content ${
                    activeTab === "sell" ? "active" : "hidden"
                  }`}
                >
                  {/* Sell tab content */}
                  <div className="flex justify-around  flex-wrap items-center">
                    <div className="relative xl:w-auto lg:w-auto md:w-auto w-[50%] flex flex-col">
                      <label
                        htmlFor="dates"
                        className="  text-[14px] text-start ml-5  font-medium"
                      >
                        Where
                      </label>
                      <select
                        id="dates"
                        className="bg-white h-10 px-5  rounded-lg text-sm focus:outline-none"
                        name="dates"
                      >
                        <option>Select Move-in Date1</option>
                        <option>Select Move-in Date2</option>
                        <option>Select Move-in Date3</option>
                        <option>Select Move-in Date4</option>
                        {/* Date options would go here */}
                      </select>
                    </div>
                    <div className="relative xl:w-auto lg:w-auto md:w-auto w-[50%] flex flex-col">
                      <label
                        htmlFor="dates"
                        className="  text-[14px] text-start ml-5  font-medium"
                      >
                        When
                      </label>
                      <select
                        id="dates"
                        className="bg-white h-10 px-5  rounded-lg text-sm focus:outline-none"
                        name="dates"
                      >
                        <option>Select Move-in Date1</option>
                        <option>Select Move-in Date2</option>
                        <option>Select Move-in Date3</option>
                        <option>Select Move-in Date4</option>
                        {/* Date options would go here */}
                      </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-[45px] px-4 rounded">
                      Browse Sell
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute xl:top-[42%] lg:top-[42%] md:top-[42%] top-[25%] xl:left-12  lg:left-12 md:left-12 left-2 transform -translate-y-1/2 bg-white  text-[#1488CC] border-2 border-[#1488CC] xl:p-2 lg:p-2 md:p-2 p-1 xl:text-[25px] lg:text-[25px] md:text-[25px] text-[18px] rounded-full"
            onClick={goToPreviousSlide}
          >
            <IoIosArrowBack />
          </button>
          <button
            className="absolute xl:top-[42%] lg:top-[42%] md:top-[42%] top-[25%] xl:right-12 lg:right-12 md:right-12 right-2  transform -translate-y-1/2 bg-white  text-[#1488CC] border-2 border-[#1488CC] xl:p-2 lg:p-2 md:p-2 p-1 xl:text-[25px] lg:text-[25px] md:text-[25px] text-[18px] rounded-full"
            onClick={goToNextSlide}
          >
            <IoIosArrowForward />
          </button>
        </div>
        <div className="flex justify-end absolute mt-[-30px]  w-[90%] ">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="img"
              className="xl:h-12 lg:h-12 md:h-12 h-10 xl:w-14 lg:w-14 md:w-14 w-10 mr-5"
            />
          ))}
        </div>
      </div>
    </>
  );
}
