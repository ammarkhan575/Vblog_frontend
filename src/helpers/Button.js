import React from "react";

const Button = ({ text,setStatus }) => {
  return (
    <div>
      <button className="md:w-32 bg-cyan-400 px-6 py-4 text-sm md:text-xl font-bold uppercase rounded-full" onClick={setStatus}>
        {text}
      </button>
    </div>
  );
};

export default Button;
