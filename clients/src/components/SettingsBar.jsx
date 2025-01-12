import React from "react";
import sumon from "../assets/sumon.jpg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoIosCall } from "react-icons/io";

const SettingsBar = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col items-center gap-4 mt-5">
        <IoMdMenu className="text-2xl cursor-pointer duration-300 hover:text-custom_bg_three" />
        <LuMessageCircleMore className="text-2xl cursor-pointer duration-300 hover:text-custom_bg_three" />
        <IoIosCall className="text-2xl cursor-pointer duration-300 hover:text-custom_bg_three" />
      </div>

      <div className="flex flex-col items-center gap-5">
        <IoSettingsOutline className="text-2xl cursor-pointer duration-300 hover:text-custom_bg_three" />
        <div className="avatar online mb-5">
          <div className="w-7 lg:w-12">
            <img src={sumon} alt="User" className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsBar;
