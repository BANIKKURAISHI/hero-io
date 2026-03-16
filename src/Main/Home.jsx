import React from "react";
import Banner from "../Components/Banner/Banner";
import ThreeState from "../Components/Banner/ThreeState";
import Trendings from "../Components/TrendingApps/Trendings";
import { NavLink, useLoaderData } from "react-router";

const Home = () => {
  const eightApps=useLoaderData()

  return (
    <div>
      <Banner></Banner>
      <ThreeState></ThreeState>
      <Trendings eightApps={eightApps}></Trendings>
      <div className="text-center mb-4">
        <NavLink
      to="/apps"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
            ? "font-semibold text-md btn text-[#6b35e5] underline mr-3"
            : "font-semibold btn text-md mr-3"
      }
    >
      Show all 
    </NavLink>
      </div>
    </div>
  );
};

export default Home;
