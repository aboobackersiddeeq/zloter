"use client";
import { Avatar, Badge } from "@mui/material";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import { NotificationsOutlined, SearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Link from "next/link";

import { useSession } from "next-auth/react";
import BasicList from "./list";

export const Navbar = () => {
  const [userLog, setUserLog] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full fixed z-20">
      <div className="flex justify-between p-2 bg-white shadow-sm align-middle z-10  ">
        <div className="flex space-x-6">
          <h1 className=" py-1.5 pl-3  text-xl font-extrabold">
            <span className="bg-red-600 text-white p-0.5 ">ZLO</span>TER
            {/* <span className="hidden sm:block">TER</span> */}
          </h1>
          <div className="relative hidden sm:block">
            <SearchOutlined className="absolute left-3 top-2" />
            <input
              type="text"
              name="search"
              placeholder="Search"
              className=" pl-10 px-4  rounded-3xl py-2.5 bg-slate-100 focus:outline-none placeholder:text-gray-700 text-sm "
            />
          </div>
        </div>
        {userLog ? (
          <div className="flex sm:space-x-8 space-x-4">
            <div className=" hidden sm:block">
              <div className="flex py-1.5 space-x-1">
                <EditNoteOutlinedIcon />
                <h6 className="text-sm pt-0.5"> Write</h6>
              </div>
            </div>
            <div className="flex py-1.5 space-x-1 sm:hidden ">
              <SearchOutlined />
            </div>
            <div className="py-1.5 ">
              <Badge variant="dot" color="primary">
                <NotificationsOutlined />
              </Badge>
            </div>

            <div className="pr-4 py-0.5" onClick={() => {setOpen(true)}}>
              <Avatar alt="Remy Sharp" src=" " sx={{ width: 30, height: 30 }} />
            </div>
            {open && <BasicList/>}
          </div>
        ) : (
          <>
            <h6>Sign In</h6>
            <button>Get started</button>
          </>
        )}
      </div>
    </div>
  );
};
