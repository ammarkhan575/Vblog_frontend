import React from "react";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { grey } from "@mui/material/colors";

const Sidebar = () => {
  return (
    <div className="bg-white w-1/6 p-4 rounded-lg sticky top-0 h-max">
      <div>
        <ul>
          <li className="flex p-4 items-center">
            <ExploreOutlinedIcon />
            <p className="text-xl mx-4">Explore</p>
          </li>
          <li className="flex p-4 items-center">
            <BookmarksOutlinedIcon />
            <p className="text-xl mx-4">Bookmarks</p>
          </li>
          <li className="flex p-4 items-center">
            <InfoOutlinedIcon />
            <p className="text-xl mx-4">About</p>
          </li>
          <li className="flex p-4 items-center">
            <QuestionAnswerOutlinedIcon />
            <p className="text-xl mx-4">Feedback</p>
          </li>
        </ul>
      </div>
      <hr />
      <div className="my-4">
        <h1 className="text-2xl mb-4 font-bold">
          Trending Tags
          <span className="ml-4">
            <TrendingUpIcon sx={{ fontSize: 30, color: grey[600] }} />
          </span>
        </h1>
        <ul>
          <li className="flex justify-between p-4 items-center">
            <p className="text-slate-500 font-medium">Javascript</p>
            <p className="bg-slate-200 text-xs py-2 px-3 rounded-full">+130</p>
          </li>
          <li className="flex justify-between p-4 items-center">
            <p className="text-slate-500 font-medium">ReactJS</p>
            <p className="bg-slate-200 text-xs py-2 px-3 rounded-full">+130</p>
          </li>
          <li className="flex justify-between p-4 items-center">
            <p className="text-slate-500 font-medium">Tailwind CSS</p>
            <p className="bg-slate-200 text-xs py-2 px-3 rounded-full">+130</p>
          </li>
          <li className="flex justify-between p-4 items-center">
            <p className="text-slate-500 font-medium">Programming blogs</p>
            <p className="bg-slate-200 text-xs py-2 px-3 rounded-full">+130</p>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex">
          <li className="m-4">
            <TwitterIcon sx={{ fontSize: 40, color: grey[600] }} />
          </li>
          <li className="m-4">
            <InstagramIcon sx={{ fontSize: 40, color: grey[600] }} />
          </li>
          <li className="m-4">
            <LinkedInIcon sx={{ fontSize: 40, color: grey[600] }} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
