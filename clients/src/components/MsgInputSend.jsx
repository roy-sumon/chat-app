import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const MsgInputSend = () => {
  return (
    <div className="w-full py-1 flex items-center justify-around bg-custom_bg_one  rounded-b-md">
      <FaPlus className="cursor-pointer hover:text-custom_bg_two"/>
      <input
        className="w-[80%] p-2 text-white bg-custom_bg_one outline-none rounded-b-md"
        type="text"
        placeholder="Write your message"
      />
      <IoMdSend className="cursor-pointer hover:text-custom_bg_two" />
    </div>
  );
};

export default MsgInputSend;
