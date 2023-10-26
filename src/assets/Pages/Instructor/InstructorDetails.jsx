


import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AiFillStar } from "react-icons/ai";
import { RxEnter } from "react-icons/rx";
import { FiCheck, FiX } from "react-icons/fi";
import SuggestedClass from '../SuggestedClass/SuggestedClass';
import InstructorSideView from '../Instructor/InstructorSideView';
import TrainerReview from '../TrainingReview/TrainerReview';


const InstructorDetails = () => {
    const { id } = useParams();
    const [instructorData, setInstructorData] = useState(null);
    const [activeTab, setActiveTab] = useState(1);

    const travelInformation = [

        { label: 'Training Type', value: ['Physical'] },
        { label: 'Provided By Trainer', value: ['✓ Certificate', '✓ Personal Advice', '✓ Learning Resources', '✓ Practical Sessions', '✓ Personal Support', '✓ Career Counseling'] },
        { label: 'Not Provided By Trainer', value: ['✕ Trainee Equipment', '✕ Trainee Clothing and Footwear', '✕ Trainee Personal Accessories', '✕ Trainee Accommodation', '✕ Trainee Meals'] }
    ];

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    useEffect(() => {
        fetch(`https://virtual-academy-server.vercel.app/campData/${id}`)
            .then((res) => res.json())
            .then((data) => setInstructorData(data));
    }, [id]);

    return (
        <div className='mx-auto max-w-7xl'>
            <div className='grid grid-cols-12 gap-4 mx-auto max-w-7xl md:grid-cols-12'>
                {instructorData ? (
                    <>
                        {/* Left Side - Class Information */}
                        <div className="col-span-12 mt-5 md:col-span-8 class-image">
                            <div className='flex items-center justify-center mb-10'>
                                <h2 className='text-xl font-semibold text-center md:text-3xl '>{instructorData?.instructorJob}
                                    <span className='text-cyan-500'> {instructorData?.instructorName} </span>
                                    Info</h2>
                            </div>

                            <div>
                                <div className="flex my-5 space-x-2">
                                    <button
                                        onClick={() => handleTabClick(1)}
                                        className={`ml-4 py-1 px-4 rounded ${activeTab === 1 ? 'bg-cyan-500 text-white' : 'bg-gray-300 text-gray-700'
                                            }`}
                                    >
                                        Instructor Overview
                                    </button>
                                    <button
                                        onClick={() => handleTabClick(2)}
                                        className={`ml-4 py-1 px-4 rounded ${activeTab === 2 ? 'bg-cyan-500 text-white' : 'bg-gray-300 text-gray-700'
                                            }`}
                                    >
                                        Content & Review
                                    </button>


                                </div>

                                <div>
                                    {activeTab === 1 && (
                                        <div className='mx-4'>
                                            <div>
                                                <p className='mb-2 text-xl font-semibold md:text-2xl text-cyan-500'>Trainer Description</p>
                                                <h1 className='text-justify'>
                                                    Experienced Trainer Providing In-Depth Workshops and Guidance. Specialized in Maximizing Learning through Practical Sessions and Personalized Support.
                                                </h1>
                                            </div>
                                            <div className='my-5'>
                                                <p className='mb-2 text-xl font-semibold md:text-2xl text-cyan-500'>Trainer At a Glance</p>
                                                <h1 className='mb-3 text-justify'>
                                                    Seasoned Trainer with Expertise in In-Depth Workshops and Tailored Guidance for Optimal Learning. </h1>
                                                <div className="border-gray-100">

                                                    {travelInformation.map(({ label, value }) => (
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
                                                </div>
                                                <div>
                                                    <h1 className='p-1 my-8 text-xl font-semibold text-cyan-500 text-start'>Suggested Training</h1>
                                                    <SuggestedClass></SuggestedClass>

                                                </div>
                                            </div>

                                        </div>
                                    )}
                                    {activeTab === 2 && (
                                        <>
                                            {instructorData.course_content && instructorData.course_content.length > 0 ? (
                                                <table className="min-w-full p-1 border bg-slate-300 border-slate-400">
                                                    <thead>
                                                        <tr>
                                                            <th className="py-2 font-medium tracking-wider text-center text-gray-900 uppercase border sm:px-6 sm:py-3 text-md border-slate-400">Training</th>
                                                            <th className="py-2 font-medium tracking-wider text-center text-gray-900 uppercase border sm:px-6 sm:py-3 text-md border-slate-400">Course Content</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {instructorData.course_content.map((content, index) => (
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
                                            <div className='my-10'>
                                                <h1 className='text-2xl font-semibold text-center text-cyan-500'>Trainer Review</h1>

                                                <TrainerReview></TrainerReview>
                                            </div>
                                        </>
                                    )}


                                </div>
                            </div>


                        </div>

                        {/* Right Side - Teacher Information */}
                        <div className="w-full col-span-12 mx-auto sideShadow md:col-span-4 teacher-info">
                            <img className='w-full p-3 mx-auto rounded-md' src={instructorData?.instructorImg} alt="Instructor" />

                            <div className='flex items-center justify-between px-4 text-lg font-semibold'>
                                <h2 className='text-xl font-semibold text-start text-cyan-500'>{instructorData?.instructorName}</h2>
                                <div className='flex item-center text-amber-400'>
                                    <AiFillStar size={15} />
                                    <AiFillStar size={15} />
                                    <AiFillStar size={15} />
                                    <AiFillStar size={15} />
                                    <AiFillStar size={15} />
                                </div>
                            </div>

                            <div className='px-4'>
                                <div className='flex items-center justify-between py-2 font-semibold'>
                                    <h1>Position:</h1>
                                    <h2 className='text-center '>{instructorData?.instructorJob}</h2>
                                </div>
                                <div className='flex items-center justify-between font-semibold'>
                                    <h1>Course Fee:</h1>
                                    <h2 className='text-lg text-center '>${instructorData?.price}</h2>
                                </div>
                                <Link to={`/payment`}>
                                    <button className='flex items-center justify-center w-full py-1 mt-5 font-semibold text-white rounded-md bg-cyan-500'>
                                        <span >Enroll Now</span> <RxEnter className='pl-3' size={28}></RxEnter>
                                    </button>
                                </Link>



                                <div>
                                    <h1 className='pt-5 font-semibold text-start text-slate-700'>This Course Include:</h1>
                                    <InstructorSideView instructorData={instructorData}></InstructorSideView>
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

export default InstructorDetails;


