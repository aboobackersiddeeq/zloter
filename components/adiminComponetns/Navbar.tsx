"use client";
import { Close, Menu, SearchOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useEffect, useLayoutEffect, useState } from "react";
import Sidebar from "./Sidebar";

// interface NavbarProps {
//   sendData: (data: boolean) => void;
// }
const Navbar  = ( ) => {
  // inner width
  const [screenWidth, setScreenWidth] = useState(0);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Add event listener on component mount
      window.addEventListener("resize", updateScreenWidth);
      // Initialize screen width
      setScreenWidth(window.innerWidth);
      return () => {
        window.removeEventListener("resize", updateScreenWidth);
      };
    }
  }, []);
  //
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (screenWidth >= 760) {
      setOpen(false);
    }
  }, [screenWidth]);
  return (
    <div className=" flex-row h-16 w-full border  relative">
      {open && (
        <div className="absolute flex    z-50 shadow-2xl bg-white border- border md:hidden ">
          <Sidebar />
          <div
            className="relative"
            onClick={() => {
              setOpen(false);
         
            }}
          >
            <Close className="  absolute  shadow-2xl top-1" />
          </div>
        </div>
      )}
      <div className="flex justify-between">
        <div
          className="p-3 pt-5 md:hidden "
          onClick={() => {
            setOpen(true);
          }}
        >
          <Menu />
        </div>
        <div className="relative   p-3">
          <SearchOutlined color="disabled" className="absolute left-7 top-5 " />
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className=" pl-12 px-4  rounded-3xl py-2.5  focus:outline-none placeholder:text-gray-400 text-sm "
          />
        </div>
        <div className="p-3">
          <Avatar alt="Admin" src="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
