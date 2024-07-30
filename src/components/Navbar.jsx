import Avatar from "react-avatar";
import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import logo from "../../public/logo.png";
import user_profile_pic from "../../public/user_profile.jpg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="flex justify-between px-6 pt-3 pb-5">
      <div className="flex items-center gap-2">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <Link to="/">
          <img src={logo} alt="Youtube Logo" className="w-28 cursor-pointer" />
        </Link>
      </div>
      <div className="flex w-[35%]">
        <div className="w-[100%] px-3 py-2 border border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className=" outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border border-gray-400 bg-gray-100 hover:bg-gray-200 duration-200 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch className="text-xl" />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex justify-around items-center space-x-5">
        <RiVideoAddLine className="text-2xl cursor-pointer" />
        <AiOutlineBell className="text-2xl cursor-pointer" />
        <Avatar
          src={user_profile_pic}
          size="32"
          round={true}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
