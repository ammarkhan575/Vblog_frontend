import React from "react";

const TextField = ({ name, placeholder, type }) => {
  return (
    <div className="flex flex-col my-2">
      <label className="" for={name}>
        {name}
      </label>
      <input
        className="px-8 py-2 rounded-lg text-black"
        type={type}
        placeholder={placeholder}
        id={name}
      />
    </div>
  );
};

export default TextField;
