import React from 'react';

const ThreeState = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
              <img className='' src="https://i.ibb.co.com/wFtN6tJ3/hero.png" alt="" />
             <div className='w-full text-center bg-gradient-to-r from-[#6d37e5] via-[#7f46ea] to-[#9c66f0] '>
                <h1 className='text-4xl mt-4 text-white p-5  font-semibold' >Trusted by Millions, Built for You</h1>
                <div className='grid grid-cols-3'>
                    <div className='text-white p-10'>
                        <h1 className='forn-nomal text-xl p-2'>Total Downloads</h1>
                        <h1 className='font-bold p-2 text-5xl'>29.6M</h1>
                        <h1 className='forn-nomal text-xl p-2'>21% more than last month</h1>
                    </div>
                    <div className='text-white p-10'>
                        <h1 className='forn-nomal text-xl p-2'>Total Reviews</h1>
                        <h1 className='font-bold p-2 text-5xl'>906K</h1>
                        <h1 className='forn-nomal text-xl p-2'>46% more than last month</h1>
                    </div>
                    <div className='text-white p-10'>
                        <h1 className='forn-nomal text-xl p-2'>Active Apps</h1>
                        <h1 className='font-bold p-2 text-5xl'>132+</h1>
                        <h1 className='forn-nomal text-xl p-2'>31 more will Launch</h1>
                    </div>
                    
                   
                </div>
             </div>
        </div>
    );
};

export default ThreeState;