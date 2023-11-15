"use client";
import { MoreVert } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";

const UserCard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-2 flex w-full  md:w-56  border space-x-3 m-2 mb-3 mr-auto  ">
      <Avatar
        alt="Pofile"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
      <div className="w-full ">
        <div className="relative flex justify-between ">
          <h1 className=" ">User Name</h1>

          <MoreVert
            color="disabled"
            className="   "
            onClick={() => {
              !open ? setOpen(true) : setOpen(false);
            }}
          />
          {open && (
            <div className="absolute  cursor-pointer text-sm  z-50 shadow-2xl bg-white border- border left-10 ">
              <p className="p-2 px-4 hover:bg-slate-50">Block</p>
              <p className="p-2 px-4 hover:bg-slate-50">UnBlock</p>
            </div>
          )}
        </div>
        <h1 className=" ">email</h1>
        <h1 className="cursor-pointer text-green-400 text-xs ">View Profile</h1>
      </div>
    </div>
  );
};

export default UserCard;
