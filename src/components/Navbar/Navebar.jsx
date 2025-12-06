import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navebar = () => {
  return (
    <div className="flex justify-between items-center">
      <a href="#" className="md:text-3xl text-2xl font-bold">
        Gr<span className="text-orange-700">O</span>cry
      </a>
      <div>
        <ul className=" md:flex items-center gap-x-10 text-xl font-semibold hidden">
          <li>
            <a href="#" className="hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500">
              Process
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="md:flex items-center gap-x-3 hidden">
        <div className="px-2 py-1 border-black border-2 rounded-full">
          <input
            type="text"
            placeholder="Searching..."
            className="px-2 py-1 outline-none text-sm"
          />
          <button className="bg-amber-300 rounded-full items-center px-2 py-2">
            <IoSearch />
          </button>
        </div>
        <div className="flex gap-5">
          <button className="text-xl">
            <FaHeart />
          </button>
          <button className="text-xl">
            <FaShoppingCart />
          </button>
        </div>
      </div>
      <button className="text-xl md:hidden">
        <IoMenu />
      </button>
    </div>
  );
};

export default Navebar;
