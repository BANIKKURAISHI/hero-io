import React from 'react';
import { useLoaderData } from 'react-router';
import App from './App';
import { IoSearchOutline } from "react-icons/io5";

const Apps = () => {
    const totalApps=useLoaderData()
    return (
        <div>
          
          <div className='text-center p-5'>
                <h1 className='font-semibold text-4xl p-4'>Our All Applications</h1>
                <p className='font-normal text-[#748390] text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex flex-row justify-between'>
              <h1 className='fond-semibold text-2xl ml-12'>Apps Found ({totalApps.length}) </h1>
              <div className='border-1 rounded-sm mr-16 border-gray-200 flex flex-row justify-between'><IoSearchOutline className='m-2 mt-2 text-xl' />
              <input className='border-none ' type="text" placeholder='search apps' /></div>
            </div>
          <div className='grid grid-cols-4 gap-5 p-10'>
            {
             totalApps.map(app=><App app={app}></App>)   
            }
          </div>
        </div>
    );
};

export default Apps;