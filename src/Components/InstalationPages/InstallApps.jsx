import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";


const InstallApps = ({install,removeButton}) => {
    console.log(install)
   const {id, image, downloads, ratingAvg, title, size } = install || {};
   const million =downloads/1000000

 
    
  return (
   <div className="flex flex-col md:flex-row justify-between bg-gray-300 border-2 rounded-xl">
   
      <div className="flex flex-col md:flex-row  justify-between p-4">
        <div className="" >
          <img src={image} className="rounded-2xl w-72 md:w-32 h-32 p-2 " alt="" srcset="" />
        </div>
        <div className="md:ml-10 justify-center">
          <div className="">
            <h1 className="font-semibold text-3xl mt-2 mb-2">{title}</h1>
          </div>
          <div className="flex flex-col gap-3 md:flex-row justify-between mt-4">
            <div className="btn  p-3 mr-5 border-0 text-xl text-green-400">
              <span>
                <MdOutlineFileDownload />
              </span>{" "}
              {million} <span className="text-xl font-normal">M</span>
            </div>
            <div className="flex   btn border-0 text-xl text-amber-600 mr-5 p-3">
              <span>
                <FaStar />
              </span>{" "}
              <span> {ratingAvg}</span>
            </div>
            <div className="flex  btn border-0 text-xl text-amber-600 mr-5 p-3">
               <span> {size}</span> <span>MB</span>
            </div>
          </div>
        </div>
        
      </div>
     
   <button onClick={()=>{removeButton(id)}} className="btn m-5 md:m-16 text-md text-white bg-green-500">Uninstall</button>
   </div>
  );
};

export default InstallApps;
