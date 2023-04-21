import React from "react";
import Part from "./Part";
import Headup from "./Headup";
import AuthContent from "./AuthContent";

const Landing = () => {
  return (
    <div className="w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-white">
        <Headup />
        <AuthContent />
      </div>
      <div className="w-full h-screen absolute top-0 left-0">
        <Part />
      </div>
    </div>
  );
};

export default Landing;
