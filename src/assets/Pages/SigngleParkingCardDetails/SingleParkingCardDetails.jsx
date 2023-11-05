

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { RxEnter } from "react-icons/rx";
import { FiCheck, FiX } from "react-icons/fi";

import SideView from './SideView';
import Review from './Review';


const ClassDetails = () => {
    const { id } = useParams();
    const [parkingDetails, setParkingDetails] = useState(null);
    const [activeTab, setActiveTab] = useState(1);

    const parkingInformation = [

        { label: 'Parking Type', value: ['Shared Parking'] },
        { label: 'Included', value: ['✓ Parking Space Reservation', '✓ Security Monitoring', '✓ Access to Shared Facilities', '✓ Assistance with Parking Issues', '✓ Community Events'] },
        { label: 'Not Included', value: ['✕ Vehicle Maintenance', '✕ Fuel', '✕ Personal Belongings Storage', '✕ Exclusive Parking Spaces', '✕ Valet Service', '✕ Insurance Coverage'] }
    ];

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    useEffect(() => {
        fetch(`https://parking1-phi.vercel.app/parking/${id}`)
            .then((res) => res.json())
            .then((data) => setParkingDetails(data));
    }, [id]);

    return (
        <div className='mx-auto max-w-7xl'>
            <div className='grid grid-cols-12 gap-4 mx-auto max-w-7xl md:grid-cols-12'>
                {parkingDetails ? (
                    <>
                        {/* Left Side - Class Information */}
                        <div className="col-span-12 mt-5 md:col-span-8 class-image">
                            {/* <h2 className='text-2xl font-semibold text-center text-blue-400 md:text-3xl'>{parkingDetails?.name}</h2> */}

                            <div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => handleTabClick(1)}
                                        className={`hidden ml-4 py-1 px-4 rounded ${activeTab === 1 ? 'bg-blue-400 text-white' : 'bg-gray-300 text-gray-700'
                                            }`}
                                    >
                                        Parking Details
                                    </button>
                                    <button
                                        onClick={() => handleTabClick(2)}
                                        className={`hidden ml-4 py-1 px-4 rounded ${activeTab === 2 ? 'bg-blue-400 text-white' : 'bg-gray-300 text-gray-700'
                                            }`}
                                    >
                                        User Review
                                    </button>

                                </div>

                                <div>
                                    {activeTab === 1 && (
                                        <div className='mx-4'>
                                            {/* <div>
                                                <p className='mb-2 text-xl font-semibold text-blue-400 md:text-2xl'>Course Description</p>
                                                <h1 className='text-justify'>
                                                    Maximus Ligula Eleifend Id Nisl Quis Interdum. Sed Malesuada Tortor Non Turpis Semper Bibendum. Ut Ac Nisi Porta, Malesuada Risus Non Viverra Dolor. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae In Tristique Libero.</h1>
                                            </div> */}
                                            <div className='my-5'>
                                                <p className='mb-2 text-xl font-semibold text-blue-400 md:text-2xl'>Parking Details</p>
                                                <h1 className='mb-3 text-justify'>
                                                    Maximus Ligula Eleifend Id Nisl Quis Interdum. Sed Malesuada Tortor Non Turpis Semper Bibendum. </h1>
                                                <div className="border-gray-100">

                                                    {parkingInformation.map(({ label, value }) => (
                                                        <div
                                                            className="flex p-4 text-sm transition-all duration-300 transform border border-gray-600 border-dotted rounded-md shadow-md hover:-translate-y-1 hover:shadow-lg"
                                                            key={label}
                                                        >
                                                            <div className="w-full text-start sm:w-2/5 ">
                                                                <h3 className="text-sm font-semibold">{label}</h3>
                                                            </div>
                                                            <div className="flex flex-col w-full sm:justify-start sm:items-start sm:flex-wrap sm:flex-row md:w-3/5">
                                                                {value.map((item, index) => (
                                                                    <p className="ml-0 text-gray-800 sm:ml-10" key={index}>
                                                                        {item}
                                                                        {index !== value.length - 1 && ', '}
                                                                    </p>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <Review></Review>
                                                </div>

                                            </div>

                                        </div>
                                    )}
                                    {activeTab === 2 && (
                                        <>
                                            {parkingDetails.course_content && parkingDetails.course_content.length > 0 ? (
                                                <table className="min-w-full p-1 border bg-slate-300 border-slate-400">
                                                    <thead>
                                                        <tr>
                                                            <th className="py-2 font-medium tracking-wider text-center text-gray-900 uppercase border sm:px-6 sm:py-3 text-md border-slate-400">Training</th>
                                                            <th className="py-2 font-medium tracking-wider text-center text-gray-900 uppercase border sm:px-6 sm:py-3 text-md border-slate-400">Course Content</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {parkingDetails.course_content.map((content, index) => (
                                                            <tr key={index} className={index % 2 === 0 ? 'bg-slate-100' : 'bg-gray-100'}>
                                                                <td className="px-6 py-4 border border-slate-400">{content.title}</td>
                                                                <td className="px-6 py-4 border border-slate-400">{content.description}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>


                                                </table>

                                            ) : (
                                                <p>No course content available.</p>
                                            )}
                                            {/* <div className='my-10'>
                                                <h1 className='text-2xl font-semibold text-center text-blue-400'>Training Review</h1>
                                                <Review></Review>
                                            </div> */}
                                        </>
                                    )}
                                    {/* {activeTab === 3 && (
                                        <>
                                            <h2>Course Instructor</h2>
                                            <p>Course Instructor content goes here.</p>
                                        </>
                                    )} */}
                                    {/* {activeTab === 4 && (
                                        <>
                                            <h2>Review</h2>
                                            <p>Review content goes here.</p>
                                        </>
                                    )} */}
                                </div>
                            </div>
                            {/* <img className='w-1/2 p-2 mx-auto border-2 border-blue-400 rounded lg:w-2/3 shadowAlll' src={parkingDetails?.classImg} alt="Instructor" />
                            <h2 className='text-xl font-bold text-center text-blue-400'>{parkingDetails?.className}</h2>
                            <div className='text-center'>
                                <p>Instructor: {parkingDetails?.instructorName}</p>
                                <p>Available Seats: {parkingDetails?.availableSeats}</p>
                                <p>Price: ${parkingDetails?.price}</p>
                            </div> */}

                        </div>

                        {/* Right Side - Teacher Information */}
                        <div className="w-full col-span-12 mx-auto sideShadow md:col-span-4 teacher-info">
                            <img className='w-full p-3 mx-auto bg-blue-100 rounded-md' src={parkingDetails?.imageUrl} alt="Instructor" />

                            <div className='flex items-center justify-between px-4 text-lg font-semibold'>
                                <h2 className='text-xl font-semibold text-blue-400 capitalize text-start'>{parkingDetails?.vehicleCategory} Parking</h2>
                                <div className='flex item-center text-amber-400'>
                                    <AiFillStar size={15} />
                                    <AiFillStar size={15} />
                                    <AiFillStar size={15} />
                                    <AiFillStar size={15} />
                                    <AiFillStar size={15} />
                                </div>
                            </div>

                            <div className='px-4'>
                                <div className="flex items-center justify-start my-2">
                                    <FaLocationDot className="w-5 h-5 mr-1 text-blue-400" />
                                    <span className="">{parkingDetails?.location}</span>
                                </div>
                                <div className='flex items-center justify-between font-semibold'>
                                    <h1>Per Hour Charge:</h1>
                                    <h2 className='text-lg text-center '>{parkingDetails?.rates}</h2>
                                </div>
                                <Link to={`/payment`}>
                                    <button className='flex items-center justify-center w-full py-1 mt-5 font-semibold text-white bg-blue-400 rounded-md'>
                                        <span >Payment Now</span> <RxEnter className='pl-3' size={28}></RxEnter>
                                    </button>
                                </Link>



                                <div className='mt-5'>

                                    <SideView></SideView>
                                </div>
                            </div>

                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div >
    );
};

export default ClassDetails;

