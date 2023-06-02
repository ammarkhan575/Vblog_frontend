import React, { useState } from "react";
import Part from "./Part";
import Headup from "./Headup";
import AuthContent from "./AuthContent";
import Profile from "../components/profile/Profile";
import EditProfile from "../components/Editprofile/EditProfile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Landing = () => {
  const [name, setname] = useState("");
  const [bio, setbio] = useState("");

  const [techstack, settechstack] = useState("");
  const [avail, setavail] = useState("");

  return (
    <div className="w-full h-screen  bg-no-repeat bg-center bg-cover relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-white">
        {/* 
        <Headup />
        <AuthContent />
        <Profile/>
        */}
      </div>

      <Router>
        <Routes>
          <Route
            path="/"
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
        </Routes>
      </Router>
    </div>
  );
};

export default Landing;
