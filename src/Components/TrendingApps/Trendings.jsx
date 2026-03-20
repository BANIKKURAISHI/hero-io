import React from "react";
import EightApps from "./EightApps";
import { useNavigation } from "react-router";

const Trendings = ({ eightApps }) => {
 const natigation=useNavigation()
  

  return (
    <div>
      <div className="text-center p-5">
        <h1 className="font-semibold text-4xl p-4">Trending Apps</h1>
        <p className="font-normal text-[#748390] text-xl">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-6">
        {natigation.state ==="loading"?<h1>Loading.....</h1> : eightApps.slice(0, 8).map((eight) => (
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
