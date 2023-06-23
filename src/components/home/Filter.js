import React from "react";

const Filter=()=>{
    return(
        <div className="flex items center justify-around border-b-2 border-slate-200">
                <div className="flex flex-col">
                    <label>Read Time</label>
                    <select className="border border-slate-200">
                        <option>{"<5 min"}</option>
                        <option>5-10 min</option>
                        <option>10-20 min</option>
                        <option>{">20 min"}</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label>Tags</label>
                    <input className="text-lg" type="text"/>
                </div>

                <div><p className="text-blue-500 border border-blue-500 rounded-full py-2 px-4">Apply</p></div>
                <p>clear Filter</p>
            </div>
    );
}

export default Filter;