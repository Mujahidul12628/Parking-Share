
import React from 'react';
import Search from './Search';

const TopBanner = () => {
    const imageUrl = 'https://i.ibb.co/K53Sw4h/JJJ.jpg';

    return (

        <div className='pt-3 shadow-xl'>
            <div className="grid grid-cols-2 bg-white sm:grid-cols-12 ">
                <div className='order-1 col-span-1 sm:col-span-4'>
                    <img className='w-11/12' src="https://i.ibb.co/nPtGGtJ/parking-Share.jpg" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center order-2 col-span-1 sm:col-span-8 ">
                    <div className="w-3/4">
                        <div className="flex items-center my-2 text-2xl font-semibold text-blue-500">
                            <span className='hidden lg:block'>Share, Discover, and </span> <span> Enjoy Stress Free Parking</span></div>
                        <h1 className="hidden my-3 text-lg text-blue-500 lg:block opacity-90">Share your parking space and rent appropriate parking slot</h1>
                        <p className="hidden text-justify sm:block">Revolutionizing Parking: Your Spot, Your Sharing, Save, and Simplify.</p>

                        <div className='mt-5'>
                            <Search></Search>
                        </div>

                        <button className="max-w-md px-3 py-2 my-5 text-white bg-blue-500 rounded-lg" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
