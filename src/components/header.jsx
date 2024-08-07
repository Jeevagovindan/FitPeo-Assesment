import React from "react";
import { FaSearch, FaEnvelope, FaCog, FaBell } from "react-icons/fa";
import Profile from "../images/profiles/10.png";

const Header = () => {
  return (
    <header className="bg-primary pt-3 pb-3 pr-3 flex justify-between items-center ">
      <div className="relative mx-4 items-center hidden sm:flex">
        <FaSearch className="w-5 h-5 absolute ml-3 pointer-events-none text-white cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="pr-3 pl-10 py-2 font-semibold placeholder-gray-500 bg-gray-800 text-white rounded-md"
        />
      </div>
      <div className="items-center ms-4 justify-center block sm:hidden">
        <FaSearch className="w-5 h-5 text-white cursor-pointer" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="rounded-lg bg-gray-800 flex justify-center text-white">
          <FaEnvelope className="text-[1.7rem]" />
        </button>
        <button className="rounded-full bg-gray-800 flex justify-center text-white">
          <FaCog className="text-[1.7rem]" />
        </button>
        <button className="rounded-full bg-gray-800 flex justify-center text-white">
          <FaBell className="text-[1.7rem]" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
          <img
            src={Profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
