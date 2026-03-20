import React, { useState } from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router";
import App from "./App";
import { IoSearchOutline } from "react-icons/io5";

const Apps = () => {
  const totalApps = useLoaderData();
  const [search, setSearch] = useState("");
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate();

  ////!!***** work for a live search bar  *****1!!////
  const liveSeachBar = (e) => {
    setLoading(true)
   setTimeout(() => {
    setLoading(false);
  }, 300)
    setSearch(e.target.value);
  };
  const filterSearch = totalApps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );
  ////!!***** work for a search bar  *****1!!///////
  return (
    <div>
      <div className="text-center p-5">
        <h1 className="font-semibold text-4xl p-4">Our All Applications</h1>
        <p className="font-normal text-[#748390] text-xl">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="fond-semibold text-2xl mb-4 ml-20 md:ml-12">
          Apps Found ({totalApps.length}){" "}
        </h1>
        <div className="border-1 ml-14 p-3 w-60 rounded-sm border-gray-200 flex flex-row justify-between md:mr-16">
          <IoSearchOutline className="mt-2  md:m-2  text-xl" />
          <input
            onChange={liveSeachBar}
            value={search}
            className="border-none text-black"
            type="text"
            placeholder="search apps"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-6">
        {loading?(<div>
             <span className="loading loading-spinner text-primary"></span>

        </div>) : (filterSearch.length > 0 ? (
          filterSearch?.map((app) => <App key={app.id} app={app}></App>)
        ) : (
         
          <div className="w-80 md:w-[700px] lg:w-[900px] xl:w-[1300px]">
            <div className="flex flex-col justify-center items-center bg-gray-300 ">
              <img
                className=" items-center "
                src="https://i.ibb.co.com/v68kyFDH/App-Error.png"
                alt=""
              />
              <h1 className="mx-2 text-4xl font-bold">OPPS!! APP NOT FOUND</h1>
              <p className=" mx-2 text-xl font-normal">
                The App you are requesting is not found on our system. please
                try another apps
              </p>
              <button
                className="btn bg-linear-to-bl from-[#6b35e5] to-[#975bf0]  mt-10 mb-10"
                onClick={() => setSearch('')}
              >
                Show all apps{" "}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Apps;
