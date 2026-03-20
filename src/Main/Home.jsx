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
            ? "font-semibold text-md btn p-5 bg-[#6b35e5] text-white underline mr-3"
            : "font-semibold p-5 btn bg-linear-to-bl from-[#6b35e5] to-[#975bf0]  text-white text-md mr-3"
      }
    >
      Show all 
    </NavLink>
      </div>
    </div>
  );
};

export default Home;
