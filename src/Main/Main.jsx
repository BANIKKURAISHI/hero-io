import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Nav and Foot/Navbar";
import Footer from "../Components/Nav and Foot/Footer";

const Main = () => {
  return (
    <div className="max-w-11/12 mx-auto ">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
