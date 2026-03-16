import React from "react";
import EightApps from "./EightApps";

const Trendings = ({ eightApps }) => {
  

  return (
    <div>
      <div className="text-center p-5">
        <h1 className="font-semibold text-4xl p-4">Trending Apps</h1>
        <p className="font-normal text-[#748390] text-xl">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 p-10">
        {eightApps.slice(0, 8).map((eight) => (
          <EightApps
            key={eight.id}
            
            eight={eight}
          ></EightApps>
        ))}
      </div>
    </div>
  );
};

export default Trendings;
