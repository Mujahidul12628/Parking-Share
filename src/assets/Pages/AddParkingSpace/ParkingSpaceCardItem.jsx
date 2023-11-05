


/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BiTimeFive } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineDateRange, MdUpdate } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight, BsArrowRightCircle } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";








const ParkingSpaceCardItem = ({ parking, setParkings, parkings, searchCriteria, seeAll }) => {

    const categoryImages = {
        bike: 'https://i.ibb.co/Bsrwrr4/bike.png',
        car: 'https://i.ibb.co/0cqNPMK/car.png',
        Van: 'https://i.ibb.co/jhMwNN5/van.png',
        Bus: 'https://i.ibb.co/CWpGDwW/Bus1.png',
        Pickup: 'https://i.ibb.co/CW14vPw/pickup-2.png',
        Truck: 'https://i.ibb.co/vYQkgGP/truck.png',
    };

    const { _id, name, location, contactInformation, reservationStatus, rates, startingTime, endTime, vehicleCategory } = parking;


    const imageUrl = categoryImages[vehicleCategory];

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://parking1-phi.vercel.app/parking/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your parking has been deleted.',
                                'success'
                            )
                            const remaining = parkings.filter(cof => cof._id !== _id);
                            setParkings(remaining);
                        }
                    })

            }
        })
    }

    const startingDateTime = new Date(startingTime);
    const endDateTime = new Date(endTime);

    // const matchesSearchCriteria =
    //     parking.vehicleCategory.toLowerCase().includes(searchCriteria.vehicleCategory.toLowerCase()) &&
    //     parking.location.toLowerCase().includes(searchCriteria.location.toLowerCase()) &&
    //     startingDateTime.toLocaleDateString().includes(searchCriteria.startingDate.toLowerCase());

    // if (!matchesSearchCriteria) {
    //     return null;
    // }

    const matchesSearchCriteria =
        parking.vehicleCategory.toLowerCase().includes(searchCriteria.vehicleCategory.toLowerCase()) &&
        parking.location.toLowerCase().includes(searchCriteria.location.toLowerCase()) &&
        startingDateTime.toLocaleDateString().includes(searchCriteria.startingDate.toLowerCase());

    if (!matchesSearchCriteria || (!seeAll && parkings.indexOf(parking) >= 6)) {
        return null;
    } else if (seeAll && parkings.findIndex(p => p._id === parking._id) >= parkings.length) {
        return null;
    }

    return (
        <div>
            <div className="mx-auto border border-blue-200 shadow-xl sm:w-full bg-base-100">
                <figure><img src={imageUrl} alt={`${vehicleCategory} image`} className="w-full bg-blue-50" /></figure>
                <div className="p-4 card-body">
                    <h2 className="flex items-center justify-between text-lg font-bold card-title">
                        <div className="text-xl"><span className="uppercase">{vehicleCategory}</span> Parking</div>
                        <div className="font-medium text-white bg-blue-500 badge">
                            {reservationStatus}
                        </div>
                    </h2>
                    <div className="flex items-center justify-start">
                        <FaLocationDot className="w-5 h-5 mr-1 text-blue-400" />
                        <span className="">{location}</span>
                    </div>
                    <div className="flex items-center justify-start">
                        <FaLocationDot className="w-5 h-5 mr-1 text-blue-400" />
                        <span className="">{name}</span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div>Price: <span className="font-semibold">  {rates}/hr</span></div>
                        <div className="flex items-center justify-center">
                            <AiFillStar className="w-5 h-5 text-amber-400" />
                            <AiFillStar className="w-5 h-5 text-amber-400" />
                            <AiFillStar className="w-5 h-5 text-amber-400" />
                            <AiFillStar className="w-5 h-5 text-amber-400" />
                            <AiFillStar className="w-5 h-5 text-amber-400" />


                        </div>
                    </div>
                    <div>
                        {/* <p> {location} </p>
                <p> {contactInformation} </p>
                <p> {rates} </p>
                <p>Starting Date: {startingDateTime.toDateString()}</p>
                <p>Starting Time: {startingDateTime.toLocaleTimeString()}</p> */}
                        <div className="my-3">
                            <p className="mb-1 font-semibold border-b border-blue-100">Reservation Start</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center "><MdOutlineDateRange className="w-5 h-5 mr-1" />
                                    <span className="text-sm">{startingDateTime.toDateString()}</span>
                                </div>

                                <div className="flex items-center"><BiTimeFive className="w-5 h-5 mr-1" /> {startingDateTime.toLocaleTimeString()}</div>
                            </div>
                        </div>

                        <div className="my-3">
                            <p className="mb-1 font-semibold border-b border-blue-100">Reservation End</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center"><MdOutlineDateRange className="w-5 h-5 mr-1" />
                                    <span className="text-sm">{endDateTime.toDateString()}</span>
                                </div>
                                <div className="flex items-center"> <BiTimeFive className="w-5 h-5 mr-1" /> {endDateTime.toLocaleTimeString()}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between card-actions">

                        {/* <Link to={`updateparking/${_id}`}>
                    <button className="flex items-center px-3 py-1 mt-3 font-semibold text-white bg-blue-400 rounded-md ">Edit  </button>
                </Link> */}
                        {/* <Link to="/details:">
                    <button className="flex items-center px-3 py-1 mt-3 font-semibold text-white bg-blue-400 rounded-md ">Reservation <BsArrowRightCircle className="w-6 h-6 ml-2 font-semibold text-white" /> </button>
                </Link> */}
                        <Link to={`/details/${_id}`}>
                            <button className="flex items-center px-3 py-1 mt-3 font-semibold text-white bg-blue-400 rounded-md">
                                Reservation <BsArrowRightCircle className="w-6 h-6 ml-2 font-semibold text-white" />
                            </button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="flex items-center px-3 py-1 mt-3 font-semibold text-white bg-blue-400 rounded-md ">Delete <MdDeleteForever className="w-6 h-6 ml-2 font-semibold text-white" /> </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ParkingSpaceCardItem;






