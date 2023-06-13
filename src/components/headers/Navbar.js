import React from "react";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between items-center border border-slate-200 rounded-2xl py-4 px-16 m-4 lg:px-8">
      <div className="hidden md:block">
        <p>menu</p>
      </div>
      <div>
        <h1>Vblog</h1>
      </div>
      <div className="flex md:hidden">
        <SearchIcon
          sx={{ fontSize: 30, color: grey[600] }}
          className="relative top-3 left-12"
        />
        <input
          placeholder="Search Vblog"
          className="bg-white min-w-[40rem] text-md pl-20 pr-4 py-2 rounded-full m-0 lg:min-w-[25rem] "
          type="text"
        />
      </div>
      <div>
        <Avatar>H</Avatar>
      </div>
    </div>
  );
};

export default Navbar;
