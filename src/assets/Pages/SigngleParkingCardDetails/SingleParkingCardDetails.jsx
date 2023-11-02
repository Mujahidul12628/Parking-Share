import React from 'react';
import Swal from "sweetalert2";
import { BiTimeFive } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineDateRange, MdUpdate } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight, BsArrowRightCircle } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const SingleParkingCardDetails = () => {
    return (
        <div className="mx-auto border border-blue-200 shadow-xl sm:w-full bg-base-100">
            <figure><img src="https://i.ibb.co/0cqNPMK/car.png" alt="" className="w-6/12 bg-blue-50" /></figure>
            <div className="p-4 card-body">
                <h2 className="flex items-center justify-between text-lg font-bold card-title">
                    <div className="text-xl"><span className="uppercase">CAR </span> Parking</div>
                    <div className="font-medium text-white bg-blue-500 badge">
                        Open
                    </div>
                </h2>
                <div className="flex items-center justify-start">
                    <FaLocationDot className="w-5 h-5 mr-1 text-blue-400" />
                    <span className="">21/3, Dhanmondi 32</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <div>Price: <span className="font-semibold"> 20$</span></div>
                    <div className="flex items-center justify-center">
                        <AiFillStar className="w-5 h-5 text-amber-400" />
                        <AiFillStar className="w-5 h-5 text-amber-400" />
                        <AiFillStar className="w-5 h-5 text-amber-400" />
                        <AiFillStar className="w-5 h-5 text-amber-400" />
                        <AiFillStar className="w-5 h-5 text-amber-400" />


                    </div>
                </div>
                <div>

                    <div className="my-3">
                        <p className="mb-1 font-semibold border-b border-blue-100">Reservation Start</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center "><MdOutlineDateRange className="w-5 h-5 mr-1" />
                                <span className="text-sm">5:32</span>
                            </div>

                            <div className="flex items-center"><BiTimeFive className="w-5 h-5 mr-1" /> 23/03/23</div>
                        </div>
                    </div>

                    <div className="my-3">
                        <p className="mb-1 font-semibold border-b border-blue-100">Reservation End</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center"><MdOutlineDateRange className="w-5 h-5 mr-1" />
                                <span className="text-sm">7:23</span>
                            </div>
                            <div className="flex items-center"> <BiTimeFive className="w-5 h-5 mr-1" /> 25/03/23</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between card-actions">
                </div>
            </div>
        </div>
    );
};

export default SingleParkingCardDetails;