import React from "react";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

const Sidebar = () => {
  return (
    <div className="bg-white w-1/6 p-4 rounded-lg sticky top-0 h-max">
      <div>
        <ul>
          <li className="flex p-4 items-center">
            <ExploreOutlinedIcon />
            <p className="text-2xl mx-4">Explore</p>
          </li>
          <li className="flex p-4 items-center">
            <BookmarksOutlinedIcon />
            <p className="text-2xl mx-4">Bookmarks</p>
          </li>
          <li className="flex p-4 items-center">
            <InfoOutlinedIcon />
            <p className="text-2xl mx-4">About</p>
          </li>
          <li className="flex p-4 items-center">
            <QuestionAnswerOutlinedIcon />
            <p className="text-2xl mx-4">Feedback</p>
          </li>
        </ul>
      </div>
      <hr />
      <div className="my-4">
        <h1 className="text-2xl font-bold">Trending Tags</h1>
        <ul>
          <li className="flex justify-between p-4 items-center">
            <p className="text-l font-medium">Programming blogs</p>
            <p className="bg-slate-200 py-2 px-3 rounded-full">+130</p>
          </li>
          <li className="flex justify-between p-4 items-center">
            <p className="text-l font-medium">Programming blogs</p>
            <p className="bg-slate-200 py-2 px-3 rounded-full">+130</p>
          </li>
          <li className="flex justify-between p-4 items-center">
            <p className="text-l font-medium">Programming blogs</p>
            <p className="bg-slate-200 py-2 px-3 rounded-full">+130</p>
          </li>
          <li className="flex justify-between p-4 items-center">
            <p className="text-l font-medium">Programming blogs</p>
            <p className="bg-slate-200 py-2 px-3 rounded-full">+130</p>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <hr />
      <h2 className="my-4">copyright 2023 Vblog</h2>
    </div>
  );
};

export default Sidebar;
