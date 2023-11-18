
import React, { useEffect, useState } from 'react';
import TopBanner from './TopBanner';
import { IoIosSearch } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router-dom';
import ParkingSpaceCardItem from '../AddParkingSpace/ParkingSpaceCardItem';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AddParking from '../AddParkingSpace/AddParking';
import { IoCreate } from 'react-icons/io5';
import TeastimonialParent from '../Testimonial/TeastimonialParent';
import HowItWorks from './HowItWorks';

const Home = () => {
    const loadedparkings = useLoaderData();
    const [parkings, setParkings] = useState(loadedparkings);
    const [displayParkings, setDisplayParkings] = useState([]);

    useEffect(() => {
        // Initially show 8 parking spaces
        setDisplayParkings(parkings.slice(0, 6));
    }, [parkings]);

    const handleDisplayParkings = () => {
        if (displayParkings.length > 6) {
            // If more than 8 parking spaces are displayed, show only the first 8
            setDisplayParkings(parkings.slice(0, 6));
        } else {
            // If less than or equal to 8 parking spaces are displayed, show all
            setDisplayParkings(parkings);
        }
    };


    const [searchCriteria, setSearchCriteria] = useState({
        vehicleCategory: '',
        location: '',
        startingDate: '',
    });

    const categoryOptions = [
        { value: 'all', label: 'All' },
        { value: 'bike', label: 'Bike' },
        { value: 'car', label: 'Car' },
        { value: 'van', label: 'Van' },
        { value: 'bus', label: 'Bus' },
        { value: 'truck', label: 'Truck' },
        { value: 'pickup', label: 'Pickup' },
    ];

    const handleSearch = () => {
        console.log("Search Criteria:", searchCriteria);

        const filteredParkings = loadedparkings.filter((parking) => {
            const categoryMatch =
                searchCriteria.vehicleCategory === 'all' ||
                parking.vehicleCategory.toLowerCase().includes(searchCriteria.vehicleCategory.toLowerCase()) ||
                searchCriteria.vehicleCategory === '';

            const locationMatch =
                parking.location.toLowerCase().includes(searchCriteria.location.toLowerCase()) ||
                searchCriteria.location === '';

            const startingDateMatch =
                parking.startingTime.toLowerCase().includes(searchCriteria.startingDate.toLowerCase()) ||
                (searchCriteria.startingDate && parking.startingTime.includes(searchCriteria.startingDate));

            return categoryMatch && locationMatch && startingDateMatch;
        });

        console.log("Filtered Parkings:", filteredParkings);

        setParkings(filteredParkings);
    };

    return (
        <div className='mx-auto max-w-7xl'>
            <TopBanner></TopBanner>
            <HowItWorks></HowItWorks>
            <div className="flex flex-col justify-between my-3 sm:flex-row item-center">
                <div className='hidden w-full md:block'>
                    <div className='flex items-center w-full py-16 mx-auto space-x-4 bg-blue-50 justify-evenly'>
                        <div className=''>
                            {/* <Select
                                options={categoryOptions}
                                value={categoryOptions.find(
                                    (option) => option.value === searchCriteria.vehicleCategory
                                )}
                                onChange={(selectedOption) =>
                                    setSearchCriteria({
                                        ...searchCriteria,
                                        vehicleCategory: selectedOption ? selectedOption.value : '',
                                    })
                                }
                                placeholder='Select Vehicle Category'
                                className='w-full border-2 border-blue-400 rounded-md'
                            /> */}
                            <Select
                                options={categoryOptions}
                                value={categoryOptions.find(
                                    (option) => option.value === searchCriteria.vehicleCategory)}
                                onChange={(selectedOption) =>
                                    setSearchCriteria({
                                        ...searchCriteria,
                                        vehicleCategory: selectedOption ? selectedOption.value : '',
                                    })
                                }
                                placeholder="Select Vehicle Category"
                                className="w-full border-2 border-blue-400 rounded-md"
                            />

                        </div>
                        <div className=''>
                            <input
                                type='text'
                                placeholder='Search Location'
                                value={searchCriteria.location}
                                onChange={(e) =>
                                    setSearchCriteria({
                                        ...searchCriteria,
                                        location: e.target.value,
                                    })
                                }
                                className='w-full p-2 border-2 border-blue-400 rounded-md'
                            />
                        </div>
                        <div className=''>
                            <DatePicker
                                selected={
                                    searchCriteria.startingDate
                                        ? new Date(searchCriteria.startingDate)
                                        : null
                                }
                                onChange={(date) =>
                                    setSearchCriteria({
                                        ...searchCriteria,
                                        startingDate: date ? date.toISOString() : '',
                                    })
                                }
                                placeholderText='Select Starting Date'
                                dateFormat='yyyy-MM-dd'
                                className='w-full p-2 border-2 border-blue-400 rounded-md'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='my-5 text-3xl font-semibold text-center text-blue-500 '>
                Available Parking
            </h1>
            <div className='p-2'>
                <Link to='/addparking'>
                    <button className='flex items-center px-4 py-2 mt-3 font-semibold text-white bg-blue-400 rounded '>
                        Create New Parking<IoCreate className='w-6 h-6 ml-2 font-semibold text-white' />{' '}
                    </button>
                </Link>
            </div>

            {/* <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                {parkings.map((parking) => (
                    <ParkingSpaceCardItem
                        key={parking._id}
                        parking={parking}
                        parkings={parkings}
                        setParkings={setParkings}
                        searchCriteria={searchCriteria}
                    ></ParkingSpaceCardItem>
                ))}
            </div> */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {/* Display parking spaces based on the state */}
                {displayParkings.map((parking) => (
                    <ParkingSpaceCardItem
                        key={parking._id}
                        parking={parking}
                        parkings={parkings}
                        setParkings={setParkings}
                        searchCriteria={searchCriteria}
                    />
                ))}
            </div>
            {/* Button to toggle between showing 8 and all parking spaces */}
            {/* <button onClick={handleDisplayParkings}>
                {displayParkings.length > 6 ? <FaChevronUp /> : <FaChevronDown />}
            </button> */}

            <div className="flex items-center justify-center mt-4 text-lg text-center">
                <button
                    onClick={handleDisplayParkings}
                    className="px-4 py-1 text-blue-500 border border-blue-200 rounded-full shadowInput bg-blue-50"
                >
                    {displayParkings.length > 8 ? <div className='flex flex-col items-center justify-center'><span>See Less</span> <FaChevronUp /> </div> : <div className='flex flex-col items-center justify-center'><span>Show All</span> <FaChevronDown /> </div>}
                </button>
            </div>

            <TeastimonialParent></TeastimonialParent>

        </div>
    );
};

export default Home;
