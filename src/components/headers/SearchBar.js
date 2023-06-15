import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";

const SearchBar=()=>{
    return(
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
    );
}

export default SearchBar;