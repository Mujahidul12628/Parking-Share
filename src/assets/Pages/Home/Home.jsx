
import React, { useState } from 'react';
import TopBanner from './TopBanner';
import { IoIosSearch } from "react-icons/io";
import { Link, useLoaderData } from 'react-router-dom';
import ParkingSpaceCardItem from '../AddParkingSpace/ParkingSpaceCardItem';
import AddParking from '../AddParkingSpace/AddParking';
import { IoCreate } from "react-icons/io5";

const Home = () => {
    const loadedparkings = useLoaderData();
    const [parkings, setParkings] = useState(loadedparkings);
    return (
        <div>
            <TopBanner></TopBanner>
            {/* <AddParking></AddParking> */}
            {/* All Parking Item */}
            <div>
                <h1 className='my-5 text-3xl font-semibold text-center text-blue-500 '>Available Parking</h1>
                <div className="flex my-3 flex-col justify-between sm:flex-row item-center">

                    <Link to="/addparking">
                        <button className=" flex px-4 items-center rounded py-2 mt-3 text-white font-semibold bg-blue-400">Create New <IoCreate className="font-semibold ml-2 w-6 h-6 text-white" /> </button>
                    </Link>
                    <div className="relative w-full sm:w-5/12 md:w-7/12 lg:w-3/12">
                        <input
                            type="text"
                            placeholder="Search Course Name"
                            value=""
                            className="w-full p-2 border-2 rounded-md border-blue-400"
                        />
                        <IoIosSearch className="absolute transform -translate-y-1/2 text-cyan-600 top-1/2 right-1" size={30} />
                    </div>

                </div>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                    {
                        parkings.map(parking => <ParkingSpaceCardItem
                            key={parking._id}
                            parking={parking}
                            parkings={parkings}
                            setParkings={setParkings}
                        ></ParkingSpaceCardItem>)


                    }
                </div>


            </div>
        </div>
    );
};

export default Home;

