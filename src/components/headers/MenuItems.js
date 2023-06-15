import React from "react";

const MenuItems=()=>{
    return(
        <div>
            <ul className="flex">
          <li className="p-4">
          
            <p className="text-xl mx-4 lg:mx-2">Explore</p>
          </li>
          <li className="p-4">
            
            <p className="text-xl mx-4 lg:mx-2">Bookmarks</p>
          </li>
          <li className="p-4">
            
            <p className="text-xl mx-4 lg:mx-2">About</p>
          </li>
          <li className="p-4">
            
            <p className="text-xl mx-4 lg:mx-2">Feedback</p>
          </li>
        </ul>
        </div>
    );
}

export default MenuItems;