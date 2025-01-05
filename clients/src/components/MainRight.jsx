import React from "react";
import sumon from "../assets/sumon.jpg";
import { CiVideoOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import MessageSection from "./MessageSection";
import MsgInputSend from "./MsgInputSend";

const MainRight = () => {
  return (
    <div className="">
        {/* header section */}
      <div className="flex items-center justify-between p-2">
        <div className="flex gap-2 items-center">
          <img src={sumon} alt="User" className="rounded-full w-10" />
          <h2>Sumon roy</h2>
        </div>
        <div className="flex gap-8 text-xl items-center">
          <IoCallOutline className="cursor-pointer duration-300 hover:text-custom_bg_three" />
          <CiVideoOn className="cursor-pointer duration-300 hover:text-custom_bg_three" />
        </div>
      </div>

      {/* message section */}
      <div>
        <MessageSection />
        <MsgInputSend />
      </div>
    </div>
  );
};

export default MainRight;
