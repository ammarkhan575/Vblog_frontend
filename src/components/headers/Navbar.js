import React, { useState } from "react";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";
import SearchBar from "./SearchBar";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const [search,setSearch]=useState(true);
  return (
    <div className="bg-white max-h-[5rem] flex justify-between items-center border border-slate-200 rounded-2xl py-4 px-16 m-4 lg:px-8">
      <div className="hidden md:block">
        <p>menu</p>
      </div>
      <div>
        <h1>Vblog</h1>
      </div>
      {search?
    <div className="flex items-center md:hidden">
    <SearchBar/>
    <div className="mx-4" onClick={()=>setSearch(!search)}>
    <SearchIcon
        sx={{ fontSize: 30, color: grey[600] }}
      />
    </div>
    </div> 
    :
    <div className="flex items-center md:hidden">
    <MenuItems/>
    <div className="mx-4" onClick={()=>setSearch(!search)}>
    <SearchIcon
        sx={{ fontSize: 30, color: grey[600] }}
      />
    </div>
    </div> 
    }
      
      <div>
        <Avatar>H</Avatar>
      </div>
    </div>
  );
};

export default Navbar;
