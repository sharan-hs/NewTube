import Avatar from "react-avatar";
import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import logo from "../../public/logo.png";
import user_profile_pic from "../../public/user_profile.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-between px-6 py-2">
      <div className="flex items-center gap-2">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="Youtube Logo" className="w-28 cursor-pointer" />
      </div>
      <div className="flex w-[35%] items-center">
        <div className="w-[100%] px-3 py-2 border rounded-l-full">
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
        <button className="px-4 py-2 border bg-gray-200 rounded-r-full">
          <CiSearch className="text-xl" />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex justify-around items-center space-x-5">
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <Avatar src={user_profile_pic} size="32" round={true} />
      </div>
    </div>
  );
};

export default Navbar;
