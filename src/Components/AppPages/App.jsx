import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const App = ({app}) => {
    const { id, image, downloads, title, ratingAvg } = app
     const millions =downloads/1000000
    return (
        <div>
          <Link to={`/apps/${id}`}>
           <div className="card bg-base-100 w-72 p-5  shadow-sm">
            <figure className=" bg-gray-300 p-3">
              <img
              className="w-52 h-52 rounded-2xl mt-5 mb-5 bg-gray-300"
                src={image}
                alt="Apps logo" />
            </figure>
            <div className="mt-3 mb-2">
              <h2 className="card-title text-2xl">
              {title}
                
              </h2>
              
            
            </div>
              <div className="card-actions justify-between">
                <div className="btn w-20 p-3 border-0 text-xl text-green-400"><span><MdOutlineFileDownload /></span> {millions} <span className="text-xl font-normal">M</span></div>
                <div className="flex w-20 p-3 flex-row justify-between btn border-0 text-xl text-amber-600"><h1><FaStar /></h1> <h1> {ratingAvg}</h1></div>
              </div>
          </div>
          </Link>
           
        </div>
    );
};

export default App;