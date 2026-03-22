import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Nav and Foot/Navbar";
import Footer from "../Components/Nav and Foot/Footer";
import Home from "./Home";

const Main = () => {

  const navigation =useNavigation()
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    let timer
    if(navigation.state==="loading"){
    setLoading(true)
    timer=setTimeout(()=>{
    setLoading(false)
    },2000)
    }
    else{
    setLoading(false)
    }
 return ()=>clearTimeout(timer)
  },[navigation.state])
  return (
    <div className="max-w-11/12 mx-auto ">
      <Navbar></Navbar>
      {
        loading? <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div> :(
        <Outlet></Outlet>
        )
      }
     
      
      <Footer></Footer>
    </div>
  );
};

export default Main;
