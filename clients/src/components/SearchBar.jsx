import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center px-1 rounded-md gap-1 bg-custom_bg_one ">
        <FiSearch className="text-2xl text-gray-400"/>
        <input className="w-full py-2 text-white bg-custom_bg_one outline-none" type="text" placeholder="Search or start a new chart" />
      </div>
    </div>
  );
};

export default SearchBar;
