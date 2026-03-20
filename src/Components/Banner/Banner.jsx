import React from 'react';
import { GrAppleAppStore } from "react-icons/gr";
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div>
            <div className='text-center md:p-5'>
                <h1 className='font-bold text-6xl p-4'>We Build <br />
                <span className='text-[#804fe8]'>Productive</span> Apps</h1>
                <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
              <div className='flex flex-row justify-center gap-6 p-5'>
                  <Link to="https://play.google.com/store/apps"  ><button className='btn flex justify-between p-2'>
                    <img src="https://i.ibb.co.com/tpPFfR7G/fi-16076057.png" alt="" />
                    <h1>Google Play</h1>
                    </button></Link>  
                <Link to="https://www.apple.com/app-store"><button className='w-33 btn flex justify-between'>
                    <h1 className='bg-[#00a9fa] text-2xl rounded'><GrAppleAppStore /></h1>
                    <h1>App Store</h1>
                    </button>
                </Link>  
              </div>
              
            </div>
            
        </div>
    );
};

export default Banner;