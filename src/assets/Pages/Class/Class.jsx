



import React, { useState, useEffect } from 'react';
import { FaHeart, FaShare, FaAngleDown } from 'react-icons/fa';
import { FiShare2 } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { GrLinkNext } from "react-icons/gr";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Class = () => {
    const [expanded, setExpanded] = useState(false);
    const [classData, setClassData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

    useEffect(() => {
        fetch('https://virtual-academy-server.vercel.app/campData')
            .then((response) => response.json())
            .then((data) => {
                console.log('Data from backend:', data); // Log the data here
                setClassData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching blog data:', error);
                setLoading(false);
            });
    }, []);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleAddToFavorites = () => {
        if (isAddedToFavorites) {
            toast.info('Item is already in your favorites!', { position: toast.POSITION.BOTTOM_RIGHT });
        } else {
            setIsAddedToFavorites(true);
            toast.success('Item added to your favorites!', { position: toast.POSITION.BOTTOM_RIGHT });
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className="grid grid-cols-1 gap-4 mx-auto my-4 sm:grid-cols-2 lg:grid-cols-3 ">
                {classData.map((classItem) => (
                    <div key={classItem.id} className="overflow-hidden bg-white rounded-md shadow-md ">
                        <div className="flex items-center justify-between p-2 text-white bg-cyan-500">
                            <div className="p-2 bg-white rounded-full">
                                <h1 className='font-semibold text-cyan-500'>{classItem.category} Game</h1>
                            </div>
                            <div>
                                <button className="text-white">
                                    <BiDotsVerticalRounded size={24} />
                                </button>
                            </div>
                        </div>

                        <img
                            className="object-cover w-full"
                            src={classItem.classImg}
                            alt={classItem.className}
                        />

                        {/* Content */}
                        <div className="px-4 pt-2">
                            <h2 className="text-2xl font-semibold text-cyan-500">{classItem.className}</h2>
                            <p className="mb-2 text-sm text-gray-600">{classItem.date}</p>
                            <p className="text-gray-700">
                                {classItem.instructorName}, {classItem.instructorJob}
                            </p>
                        </div>
                        <div className="flex items-center justify-between px-4 py-3">
                            <h2 className="text-xl font-semibold text-cyan-500">${classItem.price}</h2>
                            <div className='flex item-center text-amber-400'>
                                <AiFillStar size={18} />
                                <AiFillStar size={18} />
                                <AiFillStar size={18} />
                                <AiFillStar size={18} />
                                <AiFillStar size={18} />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between p-4 bg-gray-100">
                            <button className="text-red-400" onClick={handleAddToFavorites}>
                                <FaHeart size={24} />
                            </button>
                            <button className="text-gray-700">
                                <FiShare2 size={24} />
                            </button>

                            <Link to={`/class/${classItem?.id}`}>

                                <button className="text-gray-700" onClick={handleExpandClick}>
                                    <GrLinkNext size={24} className={expanded ? 'rotate-180' : 'rotate-0'} />
                                </button>
                            </Link>
                        </div>

                        {/* Collapse */}
                        {expanded && (
                            <div className="p-4 bg-gray-100">
                                <p className="mb-2 font-semibold">Details:</p>
                                <p>Email: {classItem.email}</p>
                                <p>Price: ${classItem.price}</p>
                                <p>Available Seats: {classItem.availableSeats}</p>
                                {/* Add additional details as needed */}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Class;

