import React from 'react';
import { Link, useNavigate } from 'react-router';
import Navbar from '../Components/Nav and Foot/Navbar';
import Footer from '../Components/Nav and Foot/Footer';

const Error = () => {
    const navigate=useNavigate()
    return (
        <div className='w-11/12 mx-auto'>
        <Navbar></Navbar>
        <div className='flex flex-col justify-center items-center bg-gray-300 '>
          <img className='w-96 items-center ' src="https://i.ibb.co.com/4nM6t2Rm/error-404.png" alt="" />
          <h1 className='text-4xl font-bold'>Oops, page not found!</h1>
          <p className='text-xl font-normal'>The page you are looking for is not available.</p>
          <button className='btn btn-primary mt-10 mb-10' onClick={()=>navigate(-1)}>Go Back </button>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Error;