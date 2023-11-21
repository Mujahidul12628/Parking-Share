import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { RxEnter } from "react-icons/rx";

import SideView from './SideView';
import Review from './Review';
import Swal from 'sweetalert2';

const SingleParkingCardDetails = () => {
    const parking = useLoaderData();
    const { id } = useParams();
    console.log(id)
    const [activeTab, setActiveTab] = useState(1);

    const { _id, name, location, contactInformation, reservationStatus, rates, startingTime, endTime, vehicleCategory } = parking;

    const parkingInformation = [
        { label: 'Parking Type', value: ['Shared Parking'] },
        { label: 'Included', value: ['✓ Parking Space Reservation', '✓ Security Monitoring', '✓ Access to Shared Facilities', '✓ Assistance with Parking Issues', '✓ Community Events'] },
        { label: 'Not Included', value: ['✕ Vehicle Maintenance', '✕ Fuel', '✕ Personal Belongings Storage', '✕ Exclusive Parking Spaces', '✕ Valet Service', '✕ Insurance Coverage'] }
    ];

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };


    const handleAddParking = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const currency = form.currency.value;
        const postCode = form.postCode.value;
        const address = form.address.value;
        const contactInformation = form.contactInformation.value;

        if (!name || !currency || !postCode || !address || !contactInformation) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all the required fields',
                icon: 'error',
                confirmButtonText: 'Ok',
            });
            return;
        }

        const newParking = { id, name, currency, postCode, address, contactInformation };
        console.log(newParking);
        const productId = newParking.id;
        console.log(productId);

        fetch('https://parking-sharing-server.vercel.app/parking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newParking)
        })
            .then(res => res.json())
            .then(data => {
                console.log("URL are", data);
                // window.location.replace(data.url)
                window.location.replace("https://sandbox.sslcommerz.com/EasyCheckOut/testcde6be401ffff636fa4ba948dab47cd2283")
            })
    };



    return (
        <div className='mx-auto max-w-7xl'>
            <div className='grid grid-cols-12 gap-4 mx-auto max-w-7xl md:grid-cols-12'>
                {parking ? (
                    <>
                        {/* Left Side - Parking Details and User Reviews */}
                        <div className="col-span-12 mt-5 md:col-span-8 class-image">

                            {/* Tab Buttons for Parking Details and User Reviews */}
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

                                {/* Display Parking Details or User Reviews based on the active tab */}
                                <div>
                                    {activeTab === 1 && (
                                        <div className='mx-4'>
                                            {/* Course Description */}
                                            <div>
                                                <p className='mb-2 text-xl font-semibold text-blue-400 md:text-2xl'>{vehicleCategory} Parking Description</p>
                                                <h1 className='text-justify'>
                                                    Maximus Ligula Eleifend Id Nisl Quis Interdum. Sed Malesuada Tortor Non Turpis Semper Bibendum. Ut Ac Nisi Porta, Malesuada Risus Non Viverra Dolor. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae In Tristique Libero.
                                                </h1>
                                            </div>
                                            {/* Parking Details */}
                                            <div className='my-5'>
                                                <p className='mb-2 text-xl font-semibold text-blue-400 md:text-2xl'>Parking Details</p>
                                                <h1 className='mb-3 text-justify'>
                                                    Maximus Ligula Eleifend Id Nisl Quis Interdum. Sed Malesuada Tortor Non Turpis Semper Bibendum.
                                                </h1>
                                                {/* Display Parking Information */}
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
                                                    {/* Display Reviews Component */}
                                                    <Review></Review>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {/* Display User Reviews */}
                                    {activeTab === 2 && (
                                        <>
                                            {parking.course_content && parking.course_content.length > 0 ? (
                                                <p></p>
                                            ) : (
                                                <p>No course content available.</p>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Teacher Information */}
                        <div className="w-full col-span-12 mx-auto sideShadow md:col-span-4 teacher-info">
                            {/* Teacher Image and Basic Info */}
                            <img className='w-full p-3 mx-auto bg-blue-100 rounded-md' src={parking?.imageUrl} alt="parking" />

                            {/* Parking Category, Rating, and Location */}
                            <div className='flex items-center justify-between px-4 text-lg font-semibold'>
                                <h2 className='text-xl font-semibold text-blue-400 capitalize text-start'>{vehicleCategory} Parking</h2>
                                {/* Display Rating */}
                                <div className='flex item-center text-amber-400'>
                                    <AiFillStar size={15} />
                                    <AiFillStar size={15} />
                                    <AiFillStar size={15} />
                                    <AiFillStar size={15} />
                                    <AiFillStar size={15} />
                                </div>
                            </div>

                            {/* Location and Per-Hour Charge */}
                            <div className='px-4'>
                                {/* Display Location */}
                                <div className="flex items-center justify-start my-2">
                                    <FaLocationDot className="w-5 h-5 mr-1 text-blue-400" />
                                    <span className="">{location}</span>
                                </div>
                                {/* Display Per-Hour Charge */}
                                <div className='flex items-center justify-between font-semibold'>
                                    <h1>Per Hour Charge:</h1>
                                    <h2 className='text-lg text-center '>{rates}</h2>
                                </div>

                                {/* Link to Payment Page */}
                                <Link to="https://sandbox.sslcommerz.com/EasyCheckOut/testcdefca6f04d702a1d3fc4cfb33af7f7d631">
                                    <button className='flex items-center justify-center w-full py-1 mt-5 font-semibold text-white bg-blue-400 rounded-md'>
                                        <span >Payment Now</span> <RxEnter className='pl-3' size={28}></RxEnter>
                                    </button>
                                </Link>

                                {/* Display SideView Component */}
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
            {/* ..........................
            ..............................
            ..............................
            ..............................
            .............................. */}
            {/* <div className="w-9/12 p-5 pb-8 mx-auto bg-blue-50">
                <h2 className="mb-5 text-3xl font-semibold text-center">Add a parking</h2>
                <form onSubmit={handleAddParking} className="grid grid-cols-2 gap-2">
                    
                    <div className="mb-2">
                        <label className="label">
                            <span className="label-text">Service Provider Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Parking Name" className="w-full input input-bordered" />
                        </label>
                    </div>

                    <div className="mb-2">
                        <label className="label">
                            <span className="label-text">Currency</span>
                        </label>
                        <label className="select">
                            <select name="currency" value={selectedCategory} onChange={handleCategoryChange} className="select-bordered">
                                <option value="" disabled>Select Currency</option>
                                <option value="BDT">BDT</option>
                                <option value="USD">USD</option>
                                <option value="EURO">EURO</option>
                            </select>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label className="label">
                            <span className="label-text">Post Code</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="postCode" placeholder="Post Code" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="mb-2">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="address" placeholder="Address" className="w-full input input-bordered" />
                        </label>
                    </div>

           
                    <div className="mb-2">
                        <label className="label">
                            <span className="label-text">Contact Information</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="contactInformation" placeholder="Contact Information" className="w-full input input-bordered" />
                        </label>
                    </div>

                 
                    <input type="submit" value="Add Parking" className="col-span-2 py-2 mt-5 font-semibold text-white bg-blue-400 border-2 border-blue-400 rounded-md hover:bg-transparent hover:text-blue-500" />
                </form>
            </div> */}
        </div>
    );
};

export default SingleParkingCardDetails;










/* eslint-disable no-unused-vars */


// import React from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import { useState } from 'react';
// import Swal from 'sweetalert2';

// const SingleParkingCardDetails = () => {

//     const parking = useLoaderData();
//     const { id } = useParams();
//     const [selectedCategory, setSelectedCategory] = useState('');

//     const handleCategoryChange = (event) => {
//         setSelectedCategory(event.target.value);
//     };


//     const handleAddParking = (event) => {

//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const currency = form.currency.value;
//         const postCode = form.postCode.value;
//         const address = form.address.value;
//         const contactInformation = form.contactInformation.value;

//         if (!name || !currency || !postCode || !address || !contactInformation) {
//             Swal.fire({
//                 title: 'Error!',
//                 text: 'Please fill in all the required fields',
//                 icon: 'error',
//                 confirmButtonText: 'Ok',
//             });
//             return;
//         }

//         const newParking = { id, name, currency, postCode, address, contactInformation };
//         console.log(newParking);


//         fetch('https://parking-sharing-server.vercel.app/parking', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(newParking)
//         })
            
//         .then(res => res.json())
//         .then(data => {
//             console.log("My data are ", data);
//             window.location.replace(data.url)
//             if (data.insertedId) {
//                 Swal.fire({
//                     title: 'Success!',
//                     text: 'Parking Added Successfully',
//                     icon: 'success',
//                     confirmButtonText: 'Cool'
//                 })
//             }
//         })


//     };

//     // const { name, price, quantity, supplier, taste, category, details, photo } = coffee;
//     const { _id, name, location, contactInformation, imageUrl, reservationStatus, rates, startingTime, endTime, vehicleCategory } = parking;



//     return (
//         <div className="bg-[#F4F3F0] p-24">

//             <div className="grid grid-cols-2 gap-4">
//                 <div className="flex flex-col items-center justify-center mx-auto bg-red-100 ">
//                     <img className="w-7/12 p-2" src={imageUrl} alt="" />
//                     <div className="text-start">
//                         <div className="text-xl font-semibold text-red-500 ">Provider Name: {name}</div>
//                         <div className="text-gray-700">Price: {rates}</div>
//                         <div className="text-gray-700">Category: {vehicleCategory}</div>
//                         <div className="text-gray-700">Location: {location}</div>
//                         <div className="text-gray-700">Contact: {contactInformation}</div>
//                         <div className="text-gray-700">Starting Time: {startingTime}</div>
//                         <div className="text-gray-700">Ending Time: {endTime}</div>
//                     </div>
//                 </div>
//                 <div className="p-5 pb-8 mx-auto bg-red-100">
//                     <h2 className="mb-5 text-3xl font-semibold text-center">Add a parking</h2>
//                     <form onSubmit={handleAddParking} className="grid grid-cols-2 gap-2">
//                         {/* Parking Name */}
//                         <div className="mb-2">
//                             <label className="label">
//                                 <span className="label-text">Service Provider Name</span>
//                             </label>
//                             <label className="input-group">
//                                 <input type="text" name="name" placeholder="Parking Name" className="w-full input input-bordered" />
//                             </label>
//                         </div>

//                         <div className="mb-2">
//                             <label className="label">
//                                 <span className="label-text">Currency</span>
//                             </label>
//                             <label className="select">
//                                 <select name="currency" value={selectedCategory} onChange={handleCategoryChange} className="select-bordered">
//                                     <option value="" disabled>Select Currency</option>
//                                     <option value="BDT">BDT</option>
//                                     <option value="USD">USD</option>
//                                     <option value="EURO">EURO</option>
//                                 </select>
//                             </label>
//                         </div>
//                         <div className="mb-2">
//                             <label className="label">
//                                 <span className="label-text">Post Code</span>
//                             </label>
//                             <label className="input-group">
//                                 <input type="text" name="postCode" placeholder="Post Code" className="w-full input input-bordered" />
//                             </label>
//                         </div>
//                         <div className="mb-2">
//                             <label className="label">
//                                 <span className="label-text">Address</span>
//                             </label>
//                             <label className="input-group">
//                                 <input type="text" name="address" placeholder="Address" className="w-full input input-bordered" />
//                             </label>
//                         </div>

//                         {/* Contact Information */}
//                         <div className="mb-2">
//                             <label className="label">
//                                 <span className="label-text">Contact Information</span>
//                             </label>
//                             <label className="input-group">
//                                 <input type="text" name="contactInformation" placeholder="Contact Information" className="w-full input input-bordered" />
//                             </label>
//                         </div>

//                         {/* Submit Button */}
//                         <input type="submit" value="Add Parking" className="col-span-2 py-2 mt-5 font-semibold text-white bg-red-400 border-2 border-red-400 rounded-md hover:bg-transparent hover:text-red-500" />
//                     </form>
//                 </div>

//             </div>
//         </div>



//     );
// };

// export default SingleParkingCardDetails;
