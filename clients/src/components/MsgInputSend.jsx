import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const MsgInputSend = () => {
const [inputMsg, setInputMsg]=useState([]);

const inputHandleMsg = (e)=>{
  setInputMsg(e.target.value)
  console.log(inputMsg);
  
}

  return (
    <div className="w-full py-1 flex items-center justify-around bg-custom_bg_one  rounded-b-md">
      <FaPlus className="cursor-pointer duration-300 hover:text-custom_bg_two"/>
      <input
      value={inputMsg}
      onChange={inputHandleMsg}
        className="w-[80%] p-2 text-white bg-custom_bg_one outline-none rounded-b-md"
        type="text"
        placeholder="Write your message"
      />
      <IoMdSend className="cursor-pointer duration-300 hover:text-custom_bg_two" />
    </div>
  );
};

export default MsgInputSend;
