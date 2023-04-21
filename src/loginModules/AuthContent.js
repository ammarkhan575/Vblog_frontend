import React from "react";

const AuthContent = () => {
  return (
    <div className="w-full flex justify-between items-center mt-32">
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
        <button className="w-44 bg-cyan-400 px-6 py-4 text-xl font-bold uppercase rounded-full">
          SignUp
        </button>
      </div>
      <div>
        <h1>login form</h1>
      </div>
    </div>
  );
};

export default AuthContent;
