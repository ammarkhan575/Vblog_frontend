import React, { useState } from "react";
import BlogCard from "./BlogCard";
import Filter from "./Filter";


const MainHome=()=>{
    const [filter,setFilter]=useState(false);
    return(
        <div className="px-4 lg:px-2">
      <div className="mx-32 my-4 xl:mx-12 sm:mx-4">
        <section className="flex items-center justify-between p-4 bg-blue-700 text-white font-bold rounded-2xl sm:flex-col sm:text-center sm:font-medium">
          <p className="sm:my-4">
            🌟 Introducing Vblog Boost your tech reading with AI-assisted
            features, exclusive perks, and more! Elevate your blogging
            experience like never before.
          </p>
          <p className="ml-8 w-40 px-8 py-4 border-white border-solid border-2 rounded-full text-center">
            Try now
          </p>
        </section>
        <section className="bg-white rounded-2xl border border-slate-200 my-6 px-12 py-12">
            <div className="flex justify-between items-center border-b-2 border-b-slate-200 mb-8">
                <ul className="flex my-4">
                    <li className="mx-4">Personalized</li>
                    <li className="mx-4">Following</li>
                    <li className="mx-4">Featured</li>
                </ul>
                <p onClick={(e)=>setFilter(!filter)}>Filter</p>
            </div>
            {filter?<Filter/>:null}
            <div className="divide-y divide-slate-700">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </section>
        </div>
        
    </div>
    );
}

export default MainHome