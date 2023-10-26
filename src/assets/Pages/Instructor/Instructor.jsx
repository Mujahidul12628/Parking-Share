/* eslint-disable react/jsx-no-target-blank */

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Instructor.css';
import { FaHeart } from "react-icons/fa";
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGooglePlusCircular, TiSocialTwitterCircular } from "react-icons/ti";

const Instructor = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://virtual-academy-server.vercel.app/campData')
            .then((response) => response.json())
            .then((data) => {
                setInstructors(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
        );
    }

    return (

        <div className='mx-auto max-w-7xl'>
            <h1 className='my-3 text-3xl font-bold text-center text-cyan-500'>Instructor</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
                {instructors.map((instructor) => (
                    <div key={instructor.id} className="p-4 my-5 bg-white rounded shadowAlll">
                        <div className="relative w-full rounded-t-md">
                            {/* <div
                                src={
                                    instructor.instructorImg ||
                                    "https://i.ibb.co/6H8F3BW/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
                                }
                                className="w-full h-full rounded-t-md"
                                alt="Chef Avatar"
                            /> */}
                            <img className='rounded' src={instructor.instructorImg} alt={instructor.instructorName} />
                            <div className="absolute flex items-center gap-1 p-1 rounded bg-rose-200 bg-opacity-60 w-fit text-rose-500 bottom-1 left-1">
                                <FaHeart></FaHeart>
                                <small className="text-sm font-semibold text-slate-600">
                                    {instructor.rating}
                                </small>
                            </div>
                        </div>
                        <div className="ml-2">
                            <h5 className="mt-2 mb-1 text-2xl font-semibold text-cyan-500">{instructor.instructorName}</h5>
                            <h5 className="text-lg font-semibold ">{instructor.instructorJob}</h5>
                            <div className="flex justify-start my-2">
                                <a href="https://www.facebook.com/muzahidulislam.rony" target="_blank"><TiSocialFacebookCircular className='mr-1 rounded-full text-cyan-500' size={40} /></a>
                                <a href="https://www.linkedin.com/in/mujahidulislam628/" target="_blank"><TiSocialLinkedinCircular className='mr-1 rounded-full text-cyan-500' size={40} /></a>

                                <TiSocialGooglePlusCircular className='mr-1 rounded-full text-cyan-500' size={40} />
                                <TiSocialTwitterCircular className='mr-1 rounded-full text-cyan-500' size={40} />
                            </div>

                            <p className="text-md">
                                <span className="">Email: {instructor.email} years</span>
                            </p>
                            <p className="mb-5 text-md">
                                Course Conduct:{" "}
                                <span className="font-semibold">{instructor.takenClasses} times</span>
                            </p>
                        </div>
                        {/* <Link
                            to={`/chef/${chef_id}`}
                            onClick={() => {
                                setChef(chef), scrollTop();
                            }}
                            className="block w-full py-2 text-center text-white duration-200 rounded-md bg-cyan-500 text-semibold hover:text-cyan-500 hover:border-2 hover:border-cyan-300 bottom hover:bg-transparent"
                        >
                            Details
                        </Link> */}
                        <Link to={`/instructor/${instructor?.id}`}>
                            <button className='block w-full py-2 text-center text-white duration-200 rounded-md bg-cyan-500 text-semibold hover:text-cyan-500 hover:border-2 hover:border-cyan-300 bottom hover:bg-transparent'>See Class</button>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Instructor;























// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import './Instructor.css';

// const Instructor = () => {
//     const [instructors, setInstructors] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch('https://virtual-academy-server.vercel.app/campData')
//             .then((response) => response.json())
//             .then((data) => {
//                 setInstructors(data);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return (
//             <div className="spinner-container">
//                 <div className="spinner"></div>
//             </div>
//         );
//     }

//     return (

//         <div className='mx-auto max-w-7xl'>
//             <h1 className='my-3 text-3xl font-bold text-center text-cyan-500'>Instructor</h1>
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
//                 {instructors.map((instructor) => (
//                     <div key={instructor.id} className="p-4 my-5 bg-white rounded shadowAlll">
//                         <img className='rounded' src={instructor.instructorImg} alt={instructor.instructorName} />
//                         <h3 className="my-2 text-lg font-semibold">Instructor Name: {instructor.instructorName}</h3>
//                         <p className="my-2 text-gray-600">Instructor Email: {instructor.email}</p>
//                         <p className="my-2 text-gray-600">Number of Taken Class: {instructor.takenClasses}</p>
//                         <Link to={`/instructor/${instructor?.id}`}>
//                             <button className='px-4 py-2 my-3 text-white rounded bg-cyan-500'>See Class</button>
//                         </Link>
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default Instructor;



