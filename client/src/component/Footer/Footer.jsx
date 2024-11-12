import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

import { AiOutlineGithub } from "react-icons/ai";

import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="h-full flex pb-12">
      <img src={logo} alt="logo" className="rounded-full w-20 h-20 mx-8" />
      <h1 className="text-3xl text-fuchsia-600 font-noto ">
        CodeNest
        <p className="text-base text-white text-justify">
          Elevate your coding game with CodeNest's intuitive snippet manager.
          Organize, store, and collaborate on your code snippets for a more
          efficient workflow.
        </p>
      </h1>
      <p className="text-fuchsia-600 font-noto ml-10">
        © 2022 CodeNest. All rights reserved.
        <span className="flex space-x-6">
          <AiFillTwitterCircle className="text-gray-100 mt-8 text-4xl mr-2 hover:text-blue-600" />
          <AiOutlineGithub className="text-gray-100 mt-8 text-4xl mr-2 hover:text-yellow-400" />
          <FaFacebook className="text-gray-100 mt-8 text-4xl mr-2 hover:text-blue-600" />
        </span>
      </p>
    </div>
  );
};

export default Footer;
