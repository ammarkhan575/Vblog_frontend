import React from "react";
import LoginForm from "./LoginForm";
import Button from "../helpers/Button";

const AuthContent = () => {
  return (
    <div className="w-full flex justify-between items-center mt-12">
      <div className="flex flex-col gap-6">
        <h3 className="text-xl text-cyan-400 font-semibold">
          SPREADING LEARNING THROUGH BLOGS
        </h3>
        <h1 className="text-6xl text-gray-300 leading-tight">
          We make you <br />{" "}
          <span className="font-bold text-white">"Love Blogs"</span>
        </h1>
        <p className="text-m text-gray-300 font-semibold">
          New to this platform ?
        </p>
        <Button text="Signup" />
      </div>
      <LoginForm />
    </div>
  );
};

export default AuthContent;
