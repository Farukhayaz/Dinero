import React from "react";
import { Map } from "./Map";

export default function Footer() {
  return (
    <div>
      <footer class="bg-white dark:bg-gray-900">
        <div class=" p-6 mx-auto">
          <div class=" lg:flex w-[100%]">
            <div class="w-full -mx-6 lg:w-[21%] ">
              <div class="px-6">
                <a href="#">
                  <img class="w-auto h-16" src="/images/logo.png" alt="" />
                </a>

                <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                  Doha, Qatar
                </p>
                <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                  Call us: 123-456-7890
                </p>
                <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                  Terms of Use
                </p>
                <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                  Privacy Policy
                </p>
                <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                  Copyright @ 2022. DINERO <br /> all Rights Reserved
                </p>
              </div>
            </div>

            <div class="mt-6 lg:mt-0 lg:flex-1 ">
              <div class="grid grid-cols-2 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <div>
                  <h3 class="text-gray-700 uppercase dark:text-white">
                    Our Products
                  </h3>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    The Support Suite
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    The Sales Suite
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Guide
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Explore
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Connect
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Integrations & Apps
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Product Updates
                  </a>
                </div>

                <div>
                  <h3 class="text-gray-700 uppercase dark:text-white">
                    Top Features
                  </h3>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Ticketing System
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Knowledge Base
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Community Forums
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Help Desk Software
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Security
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Human Resources
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Media
                  </a>
                </div>

                <div>
                  <h3 class="text-gray-700 uppercase dark:text-white">
                    Recources
                  </h3>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Product Support
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Request Demo
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Library
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Real Estate Blog
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Training
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Service & Partners
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Relate by Zendesk
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Webinars
                  </a>
                </div>

                <div>
                  <h3 class="text-gray-700 uppercase dark:text-white">
                    Company
                  </h3>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    About Us
                  </span>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    Press
                  </span>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    Investors
                  </span>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    Events
                  </span>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    Career
                  </span>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    Diversity & Inclusion
                  </span>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    Contact Us
                  </span>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    Sitemaps
                  </span>
                </div>
                <div>
                  <h3 class="text-gray-700 uppercase dark:text-white">
                    Favourite Things
                  </h3>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    For Enterprise
                  </span>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    For Startups
                  </span>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    For Benchmarks
                  </span>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    For Small Business
                  </span>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    CRM Quadrant
                  </span>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    Experiences
                  </span>
                  <span class="block mt-2 text-[13px] text-gray-600 dark:text-gray-400 hover:underline">
                    Trends
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Map />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
