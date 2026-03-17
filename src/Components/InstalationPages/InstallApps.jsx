import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";






const InstallApps = ({install}) => {
    console.log(install)
   const { image, downloads, ratingAvg, title, size } = install || {};
   const million =downloads/1000000
    
  return (
   <div className="flex flex-row justify-between bg-gray-300 border-2">
   
      <div className="flex flex-row justify-between p-4">
        <div className="" >
          <img src={image} className="w-32 h-32 p-2 rounded-2xl" alt="" srcset="" />
        </div>
        <div className="ml-10 justify-center">
          <div className="">
            <h1 className="font-semibold text-3xl mt-2 mb-2">{title}</h1>
          </div>
          <div className="card-actions justify-between mt-2">
            <div className="btn  p-3 mr-5 border-0 text-xl text-green-400">
              <span>
                <MdOutlineFileDownload />
              </span>{" "}
              {million} <span className="text-xl font-normal">M</span>
            </div>
            <div className="flex  mr-5 p-3 flex-row justify-between btn border-0 text-xl text-amber-600">
              <h1>
                <FaStar />
              </h1>{" "}
              <h1> {ratingAvg}</h1>
            </div>
            <div className="flex  mr-5 p-3 flex-row justify-between btn border-0 text-xl text-amber-600">
              <h1></h1> <h1> {size}</h1> MB
            </div>
          </div>
        </div>
        
      </div>
     
   <button className="btn m-16 text-md text-white bg-green-500">Unstall</button>
   </div>
  );
};

export default InstallApps;
