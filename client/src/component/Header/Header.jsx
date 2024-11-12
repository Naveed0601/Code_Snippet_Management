import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-950 z-50 p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" className="w-[70px] h-auto" />
        </div>

        <div>
          <ul className="flex ml-10 space-x-8">
            {[
              "Home",
              "About",
              "Features",
              "Testimonials",
              "Faq",
              "Review",
              "Footer",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="text-gray-500 hover:text-blue-400 cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-4">
          <FaFacebookF className="text-gray-600 text-xl cursor-pointer hover:text-blue-600 transition-colors duration-300" />
          <FaInstagram className="text-gray-600 text-xl cursor-pointer hover:text-pink-500 transition-colors duration-300" />
          <FaPinterestP className="text-gray-600 text-xl cursor-pointer hover:text-red-500 transition-colors duration-300" />
          <FaTwitter className="text-gray-600 text-xl cursor-pointer hover:text-blue-400 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Header;
