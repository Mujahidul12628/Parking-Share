import React, { useState, useEffect } from 'react';
import { FaHeart, FaShare, FaAngleDown } from 'react-icons/fa';
import { FiShare2 } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Blog = () => {
    const [expanded, setExpanded] = useState(false);
    const [blogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://virtual-academy-server.vercel.app/campData')
            .then((response) => response.json())
            .then((data) => {
                console.log('Data from backend:', data); // Log the data here
                setBlogData(data);
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

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1 className='my-10 text-2xl font-semibold text-center text-cyan-600'>Blog Item</h1>
            <div className="grid grid-cols-1 gap-4 mx-auto my-4 sm:grid-cols-2 lg:grid-cols-3 ">
                {blogData.map((classItem) => (
                    <div key={classItem.id} className="overflow-hidden bg-white rounded-md shadow-md ">
                        <div className="flex items-center justify-between p-4 text-white bg-slate-300">
                            <div className="p-2 bg-white rounded-full">
                                <h1 className='font-semibold text-cyan-500'>{classItem.category}</h1>
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
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{classItem.className}</h2>
                            <p className="mb-4 text-sm text-gray-600">{classItem.date}</p>
                            <p className="text-gray-700">
                                {classItem.instructorName}, {classItem.instructorJob}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between p-4 bg-gray-100">
                            <button className="text-red-500">
                                <FaHeart size={24} />
                            </button>
                            <button className="text-gray-700">
                                <FiShare2 size={24} />
                            </button>
                            <button className="text-gray-700" onClick={handleExpandClick}>
                                <FaAngleDown size={24} className={expanded ? 'rotate-180' : 'rotate-0'} />
                            </button>
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

export default Blog;


