import React from "react";

const Headup = () => {
  return (
    <div className="w-full text-white py-10 flex justify-between items-center border-b-[1px] border-b-blue-600">
      <div>
        <h1 className="text-2xl font-bold">Vblog</h1>
      </div>
      <div>
        <h1 className="flex gap-6 text-sm uppercase font-semibold">
          Unleash the potential from several blogs
        </h1>
      </div>
      <div>
        <button className="bg-green-600 py-1 px-6 rounded-xl text-base uppercase font-semibold">
          Welcome
        </button>
      </div>
    </div>
  );
};

export default Headup;
