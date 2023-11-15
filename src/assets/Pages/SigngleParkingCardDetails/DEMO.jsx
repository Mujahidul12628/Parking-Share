import React from 'react';

const DEMO = () => {
    return (
        <div>

        </div>
    );
};

export default DEMO;
// import React, { useState, useEffect } from 'react';
// import { Link, useLoaderData, useParams } from 'react-router-dom';
// import { AiFillStar } from "react-icons/ai";
// import { FaLocationDot } from "react-icons/fa6";
// import { RxEnter } from "react-icons/rx";
// import { FiCheck, FiX } from "react-icons/fi";

// import SideView from './SideView';
// import Review from './Review';

// const SingleParkingCardDetails = () => {
//     const parking = useLoaderData();
//     const { _id, name, location, contactInformation, reservationStatus, rates, startingTime, endTime, vehicleCategory } = parking;

//     // State variables
//     const { id } = useParams();
//     const [parkingDetails, setParkingDetails] = useState(null);
//     const [activeTab, setActiveTab] = useState(1);

//     // Parking information structure
//     const parkingInformation = [
//         { label: 'Parking Type', value: ['Shared Parking'] },
//         { label: 'Included', value: ['✓ Parking Space Reservation', '✓ Security Monitoring', '✓ Access to Shared Facilities', '✓ Assistance with Parking Issues', '✓ Community Events'] },
//         { label: 'Not Included', value: ['✕ Vehicle Maintenance', '✕ Fuel', '✕ Personal Belongings Storage', '✕ Exclusive Parking Spaces', '✕ Valet Service', '✕ Insurance Coverage'] }
//     ];

//     // Handle tab click
//     const handleTabClick = (tabNumber) => {
//         setActiveTab(tabNumber);
//     };

//     // Fetch parking details from the server
//     useEffect(() => {
//         fetch(`http://localhost:5111/parking/${id}`)
//             .then((res) => res.json())
//             .then((data) => setParkingDetails(data));
//     }, [id]);

//     return (
//         <div className='mx-auto max-w-7xl'>
//             <div className='grid grid-cols-12 gap-4 mx-auto max-w-7xl md:grid-cols-12'>
//                 {parkingDetails ? (
//                     <>
//                         {/* Left Side - Parking Details and User Reviews */}
//                         <div className="col-span-12 mt-5 md:col-span-8 class-image">

//                             {/* Tab Buttons for Parking Details and User Reviews */}
//                             <div>
//                                 <div className="flex space-x-2">
//                                     <button
//                                         onClick={() => handleTabClick(1)}
//                                         className={`hidden ml-4 py-1 px-4 rounded ${activeTab === 1 ? 'bg-blue-400 text-white' : 'bg-gray-300 text-gray-700'
//                                             }`}
//                                     >
//                                         Parking Details
//                                     </button>
//                                     <button
//                                         onClick={() => handleTabClick(2)}
//                                         className={`hidden ml-4 py-1 px-4 rounded ${activeTab === 2 ? 'bg-blue-400 text-white' : 'bg-gray-300 text-gray-700'
//                                             }`}
//                                     >
//                                         User Review
//                                     </button>
//                                 </div>

//                                 {/* Display Parking Details or User Reviews based on the active tab */}
//                                 <div>
//                                     {activeTab === 1 && (
//                                         <div className='mx-4'>
//                                             {/* Course Description */}
//                                             <div>
//                                                 <p className='mb-2 text-xl font-semibold text-blue-400 md:text-2xl'>{parkingDetails?.vehicleCategory} Parking Description</p>


//                                                 <h1 className='text-justify'>
//                                                     Maximus Ligula Eleifend Id Nisl Quis Interdum. Sed Malesuada Tortor Non Turpis Semper Bibendum. Ut Ac Nisi Porta, Malesuada Risus Non Viverra Dolor. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae In Tristique Libero.
//                                                 </h1>
//                                             </div>
//                                             {/* Parking Details */}
//                                             <div className='my-5'>
//                                                 <p className='mb-2 text-xl font-semibold text-blue-400 md:text-2xl'>Parking Details</p>
//                                                 <h1 className='mb-3 text-justify'>
//                                                     Maximus Ligula Eleifend Id Nisl Quis Interdum. Sed Malesuada Tortor Non Turpis Semper Bibendum.
//                                                 </h1>
//                                                 {/* Display Parking Information */}
//                                                 <div className="border-gray-100">
//                                                     {parkingInformation.map(({ label, value }) => (
//                                                         <div
//                                                             className="flex p-4 text-sm transition-all duration-300 transform border border-gray-600 border-dotted rounded-md shadow-md hover:-translate-y-1 hover:shadow-lg"
//                                                             key={label}
//                                                         >
//                                                             <div className="w-full text-start sm:w-2/5 ">
//                                                                 <h3 className="text-sm font-semibold">{label}</h3>
//                                                             </div>
//                                                             <div className="flex flex-col w-full sm:justify-start sm:items-start sm:flex-wrap sm:flex-row md:w-3/5">
//                                                                 {value.map((item, index) => (
//                                                                     <p className="ml-0 text-gray-800 sm:ml-10" key={index}>
//                                                                         {item}
//                                                                         {index !== value.length - 1 && ', '}
//                                                                     </p>
//                                                                 ))}
//                                                             </div>
//                                                         </div>
//                                                     ))}
//                                                     {/* Display Reviews Component */}
//                                                     <Review></Review>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )}
//                                     {/* Display User Reviews */}
//                                     {activeTab === 2 && (
//                                         <>
//                                             {parkingDetails.course_content && parkingDetails.course_content.length > 0 ? (
//                                                 <p></p>
//                                             ) : (
//                                                 <p>No course content available.</p>
//                                             )}
//                                         </>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Side - Teacher Information */}
//                         <div className="w-full col-span-12 mx-auto sideShadow md:col-span-4 teacher-info">
//                             {/* Teacher Image and Basic Info */}
//                             <img className='w-full p-3 mx-auto bg-blue-100 rounded-md' src={parkingDetails?.imageUrl} alt="parking" />

//                             {/* Parking Category, Rating, and Location */}
//                             <div className='flex items-center justify-between px-4 text-lg font-semibold'>
//                                 <h2 className='text-xl font-semibold text-blue-400 capitalize text-start'>{parkingDetails?.vehicleCategory} Parking</h2>
//                                 <div className='flex item-center text-amber-400'>
//                                     <AiFillStar size={15} />
//                                     <AiFillStar size={15} />
//                                     <AiFillStar size={15} />
//                                     <AiFillStar size={15} />
//                                     <AiFillStar size={15} />
//                                 </div>
//                             </div>

//                             {/* Location and Per-Hour Charge */}
//                             <div className='px-4'>
//                                 <div className="flex items-center justify-start my-2">
//                                     <FaLocationDot className="w-5 h-5 mr-1 text-blue-400" />
//                                     <span className="">{parkingDetails?.location}</span>
//                                 </div>
//                                 <div className='flex items-center justify-between font-semibold'>
//                                     <h1>Per Hour Charge:</h1>
//                                     <h2 className='text-lg text-center '>{parkingDetails?.rates}</h2>
//                                 </div>

//                                 {/* Link to Payment Page */}
//                                 <Link to={`/payment`}>
//                                     <button className='flex items-center justify-center w-full py-1 mt-5 font-semibold text-white bg-blue-400 rounded-md'>
//                                         <span >Payment Now</span> <RxEnter className='pl-3' size={28}></RxEnter>
//                                     </button>
//                                 </Link>

//                                 {/* Display SideView Component */}
//                                 <div className='mt-5'>
//                                     <SideView></SideView>
//                                 </div>
//                             </div>
//                         </div>
//                     </>
//                 ) : (
//                     <p>Loading...</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SingleParkingCardDetails;

