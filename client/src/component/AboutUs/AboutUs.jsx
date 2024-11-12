import React from "react";
import about_us from "../../assets/about_us.png";
import { FaArrowRight } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="flex w-full h-full  pt-28">
      <img
        src={about_us}
        alt="about us"
        className="w-[500px] h-[550px] p-2 m-2 rounded-full"
      />
      <div className="pr-12 pl-10">
        <h1 className="font-bold  tracking-wide text-3xl text-teal-400 font-noto">
          ABOUT US
        </h1>
        <h1 className=" mt-2 text-4xl text-blue-800 font-extrabold tracking-wide font-noto ">
          Streamline Your Coding Process with CodeNest{" "}
          <p className="text-gray-400">The Ultimate Code Snippet Manager</p>
        </h1>
        <p className="mt-10 text-gray-50 text-justify font-noto tracking-wide font-bold">
          CodeNest was born out of a simple need - to make the lives of software
          developers and content creators easier. As developers ourselves, we
          understand the struggle of managing hundreds of lines of code and
          trying to find that one specific snippet when you need it.That's why
          we created Code Snippet Manager - a powerful tool designed with
          efficiency in mind. With features like tagging, syntax highlighting,
          and easy collaboration, we strive to make organizing, storing, and
          sharing code snippets a seamless experience for our users.We believe
          that every line of code is valuable, and by providing a platform for
          developers to efficiently manage their snippets, we are contributing
          to the growth and success of the coding community. So whether you're a
          seasoned developer or just starting out on your coding journey, let
          CodeNest be your go-to resource for all your code management needs.
          Join us today and see how we can help take your coding skills to new
          heights!
        </p>
        <button className="mt-10 flex justify-center items-center w-36 h-12 rounded-md text-base text-white hover:text-blue-600 font-normal tracking-wide font-noto bg-blue-600 hover:bg-blue-200">
          Get Started <FaArrowRight className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
