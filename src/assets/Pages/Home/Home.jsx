import React, { useState } from 'react';
import TopBanner from './TopBanner';
import { IoIosSearch } from "react-icons/io";
import { Link, useLoaderData } from 'react-router-dom';
import ParkingSpaceCardItem from '../AddParkingSpace/ParkingSpaceCardItem';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import AddParking from '../AddParkingSpace/AddParking';
import { IoCreate } from "react-icons/io5";
import Review from '../SigngleParkingCardDetails/Review';
import SideView from '../SigngleParkingCardDetails/SideView';
import Form from '../Payment/Form';


const Home = () => {
    const loadedparkings = useLoaderData();
    const [parkings, setParkings] = useState(loadedparkings);
    const [seeAll, setSeeAll] = useState(false);

    const [searchCriteria, setSearchCriteria] = useState({
        vehicleCategory: "",
        location: "",
        startingDate: "",
    });

    const categoryOptions = [
        { value: 'bike', label: 'Bike' },
        { value: 'car', label: 'Car' },
        { value: 'van', label: 'Van' },
        { value: 'bus', label: 'Bus' },
        { value: 'truck', label: 'Truck' },
        { value: 'pickup', label: 'Pickup' },
    ];

    const handleSearch = () => {

        const filteredParkings = loadedparkings.filter((parking) => {
            const categoryMatch =
                parking.vehicleCategory
                    .toLowerCase()
                    .includes(searchCriteria.vehicleCategory.toLowerCase()) ||
                searchCriteria.vehicleCategory === "";

            const locationMatch =
                parking.location
                    .toLowerCase()
                    .includes(searchCriteria.location.toLowerCase()) ||
                searchCriteria.location === "";

            const startingDateMatch =
                parking.startingTime
                    .toLowerCase()
                    .includes(searchCriteria.startingDate.toLowerCase()) ||
                searchCriteria.startingDate === "";

            return categoryMatch && locationMatch && startingDateMatch;
        });
        setParkings(filteredParkings);
        setSeeAll(false);
    };
    const handleSeeAll = () => {
        setSeeAll(true);
        setParkings(loadedparkings);
    };

    return (
        <div>
            <TopBanner></TopBanner>
            <div className="flex flex-col justify-between my-3 sm:flex-row item-center">


                <div className='w-full hidden md:block'>
                    <div className=' bg-blue-50 w-full py-16 flex justify-evenly items-center mx-auto space-x-4'>
                        <div className="">
                            <Select
                                options={categoryOptions}
                                value={categoryOptions.find(option => option.value === searchCriteria.vehicleCategory)}
                                onChange={(selectedOption) =>
                                    setSearchCriteria({
                                        ...searchCriteria,
                                        vehicleCategory: selectedOption ? selectedOption.value : "",
                                    })
                                }
                                placeholder="Select Vehicle Category"
                                className="w-full border-2 border-blue-400 rounded-md"
                            />
                        </div>
                        <div className="">
                            <input
                                type="text"
                                placeholder="Search Location"
                                value={searchCriteria.location}
                                onChange={(e) =>
                                    setSearchCriteria({
                                        ...searchCriteria,
                                        location: e.target.value,
                                    })
                                }
                                className="w-full p-2 border-2 border-blue-400 rounded-md"
                            />
                        </div>
                        <div className="">
                            <DatePicker
                                selected={searchCriteria.startingDate ? new Date(searchCriteria.startingDate) : null}
                                onChange={(date) =>
                                    setSearchCriteria({
                                        ...searchCriteria,
                                        startingDate: date ? date.toISOString() : "",
                                    })
                                }
                                placeholderText="Select Starting Date"
                                dateFormat="yyyy-MM-dd"
                                className="w-full p-2 border-2 border-blue-400 rounded-md"
                            />
                        </div>
                    </div>
                </div>



            </div>

            <h1 className='my-5 text-3xl font-semibold text-center text-blue-500 '>Available Parking</h1>
            <div className='p-2'>
                <Link to="/addparking">
                    <button className="flex items-center px-4 py-2 mt-3 font-semibold text-white bg-blue-400 rounded ">Create New Parking<IoCreate className="w-6 h-6 ml-2 font-semibold text-white" /> </button>
                </Link>
            </div>


            {/* <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                {parkings.map((parking) => (
                    <ParkingSpaceCardItem
                        key={parking._id}
                        parking={parking}
                        parkings={parkings}
                        setParkings={setParkings}
                        searchCriteria={searchCriteria} // Pass the search criteria
                    ></ParkingSpaceCardItem>
                ))}
            </div> */}
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                {seeAll
                    ? loadedparkings.map((parking) => (
                        <ParkingSpaceCardItem
                            key={parking._id}
                            parking={parking}
                            parkings={parkings}
                            setParkings={setParkings}
                            searchCriteria={searchCriteria}
                        ></ParkingSpaceCardItem>
                    ))
                    : parkings.slice(0, 6).map((parking) => (
                        <ParkingSpaceCardItem
                            key={parking._id}
                            parking={parking}
                            parkings={parkings}
                            setParkings={setParkings}
                            searchCriteria={searchCriteria}
                        ></ParkingSpaceCardItem>
                    ))}
            </div>
            <div className='p-2'>
                <button
                    onClick={handleSeeAll}
                    className="flex  mx-auto px-4 py-2 mt-3 font-semibold text-white bg-blue-400 rounded "
                >
                    {seeAll ? 'See Less' : 'See All'}
                </button>
            </div>
        </div>
    );
};

export default Home;


