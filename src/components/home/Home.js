import React, { useState } from "react";
import HomeGuest from "./HomeGuest";
import MainHome from "./MainHome";

const Home=()=>{
    const [auth,setAuth]=useState(true);
    return(
        <div>
            {auth===false && <HomeGuest/>}
            {auth===true && <MainHome/>}
        </div>
    );
}

export default Home;