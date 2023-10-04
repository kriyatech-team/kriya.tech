import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, SetNav] = useState(false);
  const handleNav = () => {
    SetNav(!nav);
  };
  return (
    <div className="shadow-md">
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-3 py-4 bg-white ">
      <h1 className="font-[poppins] font-bold text-3xl cursor-pointer text-emerald-500 w-full ">
        KriyaTech
      </h1>
      <ul className="hidden md:flex text-stone-400 font-[poppins] text-lg cursor-pointer">
        <li className="p-4 hover:text-emerald-500">Home</li>
        <li className="p-4 hover:text-emerald-500">Company</li>
        <li className="p-4 hover:text-emerald-500">Service</li>
        <li className="p-4 hover:text-emerald-500">About</li>
        <li className="p-4 hover:text-emerald-500">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="m-4 font-[poppins] font-bold text-3xl cursor-pointer  text-emerald-500 w-full ">
          KriyaTech
        </h1>
        <ul className=" uppercase p-4 text-stone-400 font-[poppins] text-lg cursor-pointer">
          <li className="p-4 border-b border-gray-300 hover:text-emerald-500">
            Home
          </li>
          <li className="p-4 border-b border-gray-300 hover:text-emerald-500">
            Company
          </li>
          <li className="p-4 border-b border-gray-300 hover:text-emerald-500">
            Resources
          </li>
          <li className="p-4 border-b border-gray-300 hover:text-emerald-500">
            Service
          </li>
          <li className="p-4 border-b border-gray-300 hover:text-emerald-500">
            About
          </li>
          <li className="p-4  hover:text-emerald-500">Contact</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
