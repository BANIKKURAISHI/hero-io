import React from "react";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { getAppsButton, remove } from "../AppPages/saveLocalStorge";
import InstallApps from "../InstalationPages/InstallApps";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const Instalations = () => {
  const [loading,setLoading]=useState(true)
  const [installs, setInstalls] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();
 
  useEffect(() => {
  if (!data) {
    setLoading(false);
    return;
  }
    const storeApps = getAppsButton() || [];
    const storeAppsConvert = storeApps?.map((id) => parseInt(id));
    const installapps = data?.filter((app) =>
      storeAppsConvert.includes(app.id),
    );
    setInstalls(installapps || []);
    setLoading(false)
  }, [data]);

  const sortHandleButton = (type) => {
    setSort(type);

    if (type === "High to Low") {
      const high = [...installs].sort((a, b) => b.size - a.size);
      setInstalls(high);
    }
    if (type === "Low to High") {
      const low = [...installs].sort((a, b) => a.size - b.size);
      setInstalls(low);
    }
  };
  const removeButton = (id) => {
    remove(id);
    const update = installs.filter((app) => app.id !== id);
    setInstalls(update);
    MySwal.fire({
      title: "Uninstalled!!!",
      text: "App uninstalled successfully.",
      icon: "success",
    });
  };

  return (
    <div>
      <div>
        <div className="text-center p-4">
          <h1 className="font-bold text-5xl p-4">Your Installed Apps</h1>
          <p className="font-normal text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex flex-row justify-between mb-14">
          <h1 className="text-2xl btn md:ml-20">Apps Found {installs.length} </h1>
          <details className="dropdown md:mr-24">
            <summary className="btn m-1 md:w-52">
              Sort By {sort ? sort : ""}
            </summary>
            <ul className="menu  md:w-52 ml-1 dropdown-content bg-base-100 rounded-box z-1 p-2 shadow-sm">
              <li>
                <a
                  onClick={() => sortHandleButton("High to Low")}
                  className="btn mt-2 w-full"
                >
                  High to Low
                </a>
              </li>
              <li>
                <a
                  onClick={() => sortHandleButton("Low to High")}
                  className="btn mt-2 w-full"
                >
                  Low to High
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-5 mb-5">
        {loading?<div className="text-center">
          <span className="loading loading-spinner text-primary"></span>

        </div> : installs?.map((install) => (
          <InstallApps
          key={install.id}
            removeButton={removeButton}
            install={install}
          ></InstallApps>
        ))}
      </div>
    </div>
  );
};

export default Instalations;
