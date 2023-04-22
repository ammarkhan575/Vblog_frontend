import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="w-32 bg-cyan-400 px-6 py-4 text-xl font-bold uppercase rounded-full">
        {text}
      </button>
    </div>
  );
};

export default Button;
