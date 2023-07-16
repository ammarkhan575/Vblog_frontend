import React from "react";
import Navbar from "./components/headers/Navbar";
import Sidebar from "./components/headers/Sidebar";
import { Route, Routes } from "react-router";
import EditProfile from "./components/Editprofile/EditProfile";
import Profile from "./components/profile/Profile";
import { useState } from "react";
import Footer from "./components/headers/Footer";
import Home from "./components/home/Home";
import UserProfile from "./components/profile/UserProfile";

const AppContainer = () => {
  const [name, setname] = useState("");
  const [bio, setbio] = useState("");

  const [techstack, settechstack] = useState("");
  const [avail, setavail] = useState("");
  return (
    <div>
      <Navbar />
      <div className="flex">
        
        <Routes>
          <Route path="/" element={<Home/>} />
          
          <Route
            path="/editProfile"
            element={
              <EditProfile
                name={name}
                setname={setname}
                bio={bio}
                setbio={setbio}
                techstack={techstack}
                settechstack={settechstack}
                avail={avail}
                setavail={setavail}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                name={name}
                setname={setname}
                bio={bio}
                setbio={setbio}
                techstack={techstack}
                settechstack={settechstack}
                avail={avail}
                setavail={setavail}
              />
            }
          />
          <Route
            path="/@vblog"
            element={
              <UserProfile/>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AppContainer;
