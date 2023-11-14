import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, SetNav] = useState(false);
  const handleNav = () => {
    SetNav(!nav);
  };
  return (
    <div className="shadow-md">
      <div className="flex justify-between items-center h-[70px] max-w-[1240px] mx-auto px-3 py-4 bg-white ">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text tracking-wider">Quify</h1>
          <p className="text-[10px] pt-1 text-black tracking-widest">Crafting Digital Excellence.</p>
        </div>

        <ul className="hidden md:flex text-stone-400 font-[poppins] text-lg cursor-pointer">
          <Link to="/"><li className="p-4 hover:text-emerald-500">Home</li></Link>
          <Link to="/company"><li className="p-4 hover:text-emerald-500">Company</li></Link>
          <Link to="/service"><li className="p-4 hover:text-emerald-500">Service</li></Link>
          <Link to="/about"><li className="p-4 hover:text-emerald-500">About</li></Link>
          <Link to="/contact"><li className="p-4 hover:text-emerald-500">Contact</li></Link>
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

            <Link to="/"><li className="p-4 border-b border-gray-300 hover:text-emerald-500">Home</li></Link>
            <Link to="/company"><li className="p-4 border-b border-gray-300 hover:text-emerald-500">Company</li></Link>
            <Link to="/service"><li className="p-4 border-b border-gray-300 hover:text-emerald-500">Service</li></Link>
            <Link to="/about"><li className="p-4 border-b border-gray-300 hover:text-emerald-500">About</li></Link>
            <Link to="/contact"><li className="p-4 border-b border-gray-300 hover:text-emerald-500">Contact</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
