import React, { useEffect, useState } from "react";
import { Link, useLoaderData,  useParams } from "react-router";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { TbFileLike } from "react-icons/tb";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getAppsButton, saveAppsButton } from "./saveLocalStorge";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";



const MySwal = withReactContent(Swal);
const AppsDetails = () => {
  const [toggle, setToggle] = useState(false);
  const { id } = useParams();
  const idParse = parseInt(id);
  const appData = useLoaderData();

  useEffect(()=>{
    const reloadApps=getAppsButton()
    const isAlready=reloadApps.includes(idParse)
    if(isAlready){
      setToggle(true)
    }
  },[idParse])

  const appfind = appData?.find((apps) => apps.id === idParse);
  if(!appfind){
   return (
     <div className="w-full  md:w-full lg:w-[940px] xl:w-full">
            <div className="flex flex-col   justify-center items-center bg-gray-300 ">
              <img
                className="w-full items-center  mx-center"
                src="https://i.ibb.co.com/twJhzSDH/images.png"
                alt=""
              />
              <h1 className="mx-2 text-4xl font-bold">OPPS!! APP NOT FOUND</h1>
              <p className=" mx-2 text-xl font-normal">
                The App you are requesting is not found on our system. please
                try another apps
              </p>
             <Link to="/apps"><button
                className="btn bg-linear-to-bl from-[#6b35e5] to-[#975bf0]  mt-10 mb-10"
               
              >
                Show all apps{" "}
              </button></Link> 
            </div>
          </div>
   )
  }
  console.log(appfind);
  const {
    image,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    title,
    size,

    ratings,
  } = appfind || {};
  const million = downloads / 1000000;
  const totalReview = reviews / 1000;
// const navigate = useNavigate()
  const installButton = (id) => {
    saveAppsButton(id);
    setToggle(true);

      MySwal.fire({
      title: "Done!!!",
      text: "App installed successfully.",
      icon: "success",
    })
    // navigate("/installation")
  };



  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 m-10 ">
        <div className="w-72 md:w-80 lg:w-96 rounded-2xl">
          <img
            className="w-72 md:w-80 lg:w-96 h-80 bg-gray-300 p-5 rounded-xl"
            src={image}
            alt=""
          />
        </div>
        <div className="w-2/3">
          <h1 className="p-2 text-3xl font-medium">{title}</h1>
          <h1 className="text-xl font-normal p-2">
            Developed by {companyName}
          </h1>
          <div className="divider w-full"></div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="p-4">
              <h1 className="text-3xl text-green-500">
                <MdOutlineFileDownload />
              </h1>
              <h1 className="font-normal text-xl">Downloads</h1>
              <h1 className="font-bold text-3xl">
                {" "}
                {million} <span className="font-bold text-3xl">M</span>
              </h1>
            </div>
            <div className="p-4">
              <h1 className="text-3xl text-amber-600">
                <FaStar />
              </h1>
              <h1 className="font-normal text-xl">Average Ratings</h1>
              <h1 className="font-bold text-3xl"> {ratingAvg} </h1>
            </div>
            <div className="p-4">
              <h1 className="text-3xl ">
                <TbFileLike className="text-purple-500" />
              </h1>
              <h1 className="font-normal text-xl">Total Reviews</h1>
              <h1 className="font-bold text-3xl">
                {" "}
                {totalReview} <span className="font-bold text-3xl">K</span>{" "}
              </h1>
            </div>
          </div>

          <button
            disabled={toggle}
            onClick={() => {
              setToggle(!toggle);
              installButton(idParse);
            }}
            className="btn w-72  text-xl bg-emerald-500 "
          >
            {" "}
            <span>{toggle ? "Installed" : `Install Now (${size} MB)`}</span> 
            {/* ({" "} <span>{size}</span>){" "} */}
          </button>
        </div>
      </div>
      <div className="divider w-full"></div>
      <h1 className="font-semibold text-2xl mx-10 mb-4">Ratings</h1>

      {/* !!! bar chat is readi */}
      <div className="-mx-6 md:mx-5 lg:mx-8 w-full h-[400px]">
         <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ratings} layout="vertical">
          <XAxis axisLine={false} tickLine={false} type="number" />
          <YAxis
            axisLine={false}
            tickLine={false}
            dataKey="name"
            type="category"
            reversed
          />
          <Tooltip />
          <Bar dataKey="count" fill="#ff8811" />
        </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="divider w-full"></div>
      <h1 className="font-semibold text-2xl md:mx-10 mb-4">Description</h1>
      <p className="font-normal mb-10 text-xl md:mx-10   text-justify">
        {description}
      </p>
      
    </div>
  );
};

export default AppsDetails;
