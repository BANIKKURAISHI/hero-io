import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { TbFileLike } from "react-icons/tb";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
const TrendingDetails = () => {
  const { id } = useParams();
  const idNumber = parseInt(id);
  const datas = useLoaderData();
  const findApps = datas?.find((data) => data.id === idNumber);
  console.log(findApps);
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
  } = findApps || {};
  const million = downloads / 1000000;
  const totalReview = reviews / 1000;
  return (
    <div>
      <div className="flex flex-row gap-10 m-10 ">
        <div className="w-96 rounded-2xl">
          <img
            className="w-96 h-80 bg-gray-300 p-5 rounded-xl"
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
          <div className="flex flex-row gap-10">
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

          <Link><button className="btn mx-3 text-xl bg-emerald-500 ">Install Now ({size} <span>MB</span>) </button> </Link>
        </div>
        
      </div>
      <div className="divider w-full"></div>
      <h1 className="font-semibold text-2xl mx-10 mb-4">Ratings</h1>

      {/* !!! bar chat is readi */}
      <div className="mx-10">
        <BarChart width={1200} height={400} data={ratings} layout="vertical">
          <XAxis axisLine={false}  tickLine={false}  type="number" />
          <YAxis axisLine={false}  tickLine={false}  dataKey="name" type="category" reversed />
          <Tooltip />
          <Bar dataKey="count" fill="#ff8811" />
        </BarChart>
      </div>

      <div className="divider w-full"></div>
      <h1 className="font-semibold text-2xl mx-10 mb-4">Description</h1>
      <p className="font-normal text-xl mx-10 mb-10  text-justify">
        {description}
      </p>
    </div>
  );
};

export default TrendingDetails;
