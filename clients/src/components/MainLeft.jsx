import React from "react";
import { IoFilter } from "react-icons/io5";
import { LuSquarePen } from "react-icons/lu";
import SearchBar from "./SearchBar";

const MainLeft = () => {
  return (
    <div className="p-1 hidden sm:block">
      <div className="flex items-center justify-between p-2">
        <h1 className="text-2xl font-semibold">Chats</h1>
        <div className="flex gap-2 text-xl">
          <LuSquarePen className="cursor-pointer duration-300 hover:text-custom_bg_three" />
          <IoFilter className="cursor-pointer duration-300 hover:text-custom_bg_three" />
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default MainLeft;
