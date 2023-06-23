import React from "react";
import chain from "../../helpers/images/chain.jpg";
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import { Avatar } from "@mui/material";

const BlogCard=()=>{
    return(
        <div className="py-4">
                <div className="flex items-center">
                    <Avatar>A</Avatar>
                    <div className="mx-4">
                        <p>Avaneesh</p>
                        <p>21 June, 2023</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <h1 className="font-bold text-2xl my-4">Javascript Design Patterns : Chain Of Responsibility.</h1>
                        <p className="flex items-center font-bold text-lg my-2"><ChromeReaderModeOutlinedIcon/> 5 min read</p>
                        <p>At Hashnode, we have always been passionate about helping developers access quality content. Through our user-friendly blogging platform and integrated developer community, we make it easy for our users to find relevant knowledge. However, with the rise of powerful AI models, we started ...</p>
                    </div>
                    <div className="mx-40 w-full">
                        <img src={chain}/>
                    </div>
                </div>
                <div className="my-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <BookmarkAddOutlinedIcon/>
                        <div className="flex items-center">
                            <p className="p-1 border border-slate-200 mx-2 rounded-xl">Javascript</p>
                            <p className="p-1 border border-slate-200 mx-2 rounded-xl">Pattern</p>
                            <p className="p-1 border border-slate-200 mx-2 rounded-xl">+3</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="mx-4"><FavoriteBorderOutlinedIcon/> 69</p>
                        <p className="mx-4"><MessageOutlinedIcon/> 11</p>
                    </div>
                </div>
            </div>
    );
}

export default BlogCard;