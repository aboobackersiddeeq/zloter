"use client";
import { Avatar, Badge } from "@mui/material";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import { NotificationsOutlined, SearchOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useSession } from "next-auth/react";
import BasicList from "./List";

export const Navbar = () => {
  const { data: session } = useSession();
  const [userLog, setUserLog] = useState(false);
  useEffect(() => {
    if (session) {
      setUserLog(true);
    } else {
      setUserLog(false);
    }
  },[session]);
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full   z-20">
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

            <div
              className="pr-4 py-0.5 relative"
              onClick={() => {
                !open ? setOpen(true) : setOpen(false);
              }}
            >
              <Avatar alt={ session?.user.name || 'A'} src={session?.user.image|| ''}  sx={{ width: 30, height: 30 }} />
              {open && (
                <div className="absolute mt-2 right-2 z-50 shadow-2xl bg-white border- border ">
                  <BasicList />
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="flex sm:space-x-8 space-x-4">
              <div className="flex py-1.5 space-x-1 sm:hidden ">
                <SearchOutlined />
              </div>
              <div className=" ">
                <Link href={"/login "}>
                  <div className="flex py-2 space-x-1">
                    <button className="text-sm">Sign In</button>
                  </div>
                </Link>
              </div>

              <div className="">
                <button className="bg-black text-white text-sm rounded-3xl p-2 px-3">
                  Get started
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
