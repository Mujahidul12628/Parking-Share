import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaCalendar, FaStar, FaBook, FaBriefcase, FaCode, FaMapMarkerAlt, FaLanguage, FaTwitter } from 'react-icons/fa';

const InstructorDashboard = () => {
    const [instructorInformation, setInstructorInformation] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://virtual-academy-server.vercel.app/campData');
                const data = await response.json();

                // Assuming the API response structure matches your data
                setInstructorInformation(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once when the component mounts

    return (
        <div className="border-gray-100">
            {instructorInformation.map(({
                id,
                instructorImg,
                instructorName,
                email,
                teacherJoined,
                experience,
                coursesTaught,
                availableSeats,
                price,
                takenClasses,
                rating,
                category,
                date,
            }) => (
                <div
                    className="flex px-2 py-5 text-sm transition-all duration-300 transform border-b border-gray-400 border-dotted rounded-md shadow-md hover:-translate-y-1 hover:shadow-lg"
                    key={id}
                >
                    <div className="w-full text-start sm:w-2/5">
                        <h3 className="flex items-center text-sm font-semibold justify-normal">
                            <span className='mr-2 text-slate-500'>
                                <img src={instructorImg} alt={instructorName} className="w-8 h-8 rounded-full" />
                            </span>
                            <span className='text-slate-500'>
                                {instructorName}
                            </span>
                        </h3>
                    </div>
                    <div className="flex flex-col justify-end w-full sm:justify-center sm:items-start sm:flex-wrap sm:flex-row md:w-3/5">
                        <p className="font-semibold text-gray-600 text-end sm:ml-10">
                            {email}
                        </p>
                    </div>
                    {/* Add more details as needed */}
                </div>
            ))}
        </div>
    );
};

export default InstructorDashboard;
