import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { LuMousePointerClick } from "react-icons/lu";

const Home = () => {
  return (
    <div className="w-full h-screen pt-28">
      <h1 className="p-12 text-5xl text-gray-100 font-extrabold text-center tracking-wide font-noto">
        Take your coding to the next level with CodeNest - The ultimate code
        snippet manager.
      </h1>
      <p className="p-16 pt-1 text-lg text-gray-600 font-extrabold text-center tracking-wide font-noto">
        Simplify your coding process and collaborate with ease using CodeNest -
        the ultimate code snippet manager for developers and content creators.
      </p>
      <div className="flex justify-center items-center">
        <button className="flex justify-center items-center w-36 h-12 rounded-md text-base text-white hover:text-blue-600 font-normal tracking-wide font-noto bg-blue-600 hover:bg-blue-200">
          Get Started <FaArrowRight className="ml-1" />
        </button>
        <button className="ml-4 flex justify-center items-center w-36 h-12 rounded-md text-base text-blue-600 hover:text-white font-normal tracking-wide font-noto bg-blue-200 hover:bg-blue-600">
          Book a demo <LuMousePointerClick className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Home;
