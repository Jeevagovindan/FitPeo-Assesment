import React from "react";
import { FaHouse, FaClipboardCheck } from "react-icons/fa6";
import { LuBarChart3 } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import Menu from "../images/menu.png";

const Sidebar = () => {
  return (
    <aside className="bg-primary w-[45px] md:w-[55px] sm:w-[50px] lg:w-[60px] min-h-screen flex flex-col content-between relative">
      <div className="flex flex-col">
        <div className="rounded-lg text-white mb-3 px-1 flex justify-center">
          <img src={Menu} alt="Menu" className="w-9 py-3" />
        </div>
        <div className="rounded-lg text-white mb-4 mt-4 px-1 flex justify-center">
          <FaHouse className="text-[1.7rem]" />
        </div>
        <div className="rounded-lg text-white mb-4 mt-4 px-1 flex justify-center">
          <LuBarChart3 className="text-[1.7rem]" />
        </div>
        <div className="rounded-lg text-white mb-4 mt-4 px-1 flex justify-center">
          <FaClipboardCheck className="text-[1.7rem]" />
        </div>
        <div className="rounded-lg text-white mb-4 mt-4 px-1 flex justify-center">
          <CiWallet className="text-[1.7rem]" />
        </div>
        <div className="rounded-lg text-white mb-4 mt-4 px-1 flex justify-center">
          <FiShoppingBag className="text-[1.7rem]" />
        </div>
      </div>

      <div className="rounded-lg text-white flex justify-center bottom-10 absolute items-center px-3">
        <IoMdLogOut className="text-[1.7rem]" />
      </div>
    </aside>
  );
};

export default Sidebar;
