import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SideViewClass from './SideViewClass';
import { AiFillStar } from "react-icons/ai";
import { RxEnter } from "react-icons/rx";
import { FiCheck, FiX } from "react-icons/fi";
import SuggestedClass from '../SuggestedClass/SuggestedClass';
import TrainingReview from '../TrainingReview/TrainingReview';


const ClassDetails = () => {
    const { id } = useParams();
    const [classData, setClassData] = useState(null);
    const [activeTab, setActiveTab] = useState(1);

    const travelInformation = [




        { label: 'Course Type', value: ['Training'] },
        { label: 'Included', value: ['✓ Certificate', '✓ Competition Opportunities', '✓ Learning Resources', '✓ Practical Sessions', '✓ Personal Support', '✓ Career Counseling'] },
        { label: 'Not Included', value: ['✕ Sports Equipment', '✕ Clothing and Footwear', '✕ Personal Accessories', '✕ Tournament Entry Fees', '✕ Accommodation', '✕ Meals'] }
    ];

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    useEffect(() => {
        fetch(`https://virtual-academy-server.vercel.app/campData/${id}`)
            .then((res) => res.json())
            .then((data) => setClassData(data));
    }, [id]);

    return (
        <div className='mx-auto max-w-7xl'>
            <div className='grid grid-cols-12 gap-4 mx-auto max-w-7xl md:grid-cols-12'>
                {classData ? (
                    <>
                        {/* Left Side - Class Information */}
                        <div className="col-span-12 mt-5 md:col-span-8 class-image">
                            <h2 className='text-2xl font-semibold text-center md:text-3xl text-cyan-500'>{classData?.className}</h2>

                            <div>
                                <div className="flex my-5 space-x-2">
                                    <button
                                        onClick={() => handleTabClick(1)}
                                        className={`ml-4 py-1 px-4 rounded ${activeTab === 1 ? 'bg-cyan-500 text-white' : 'bg-gray-300 text-gray-700'
                                            }`}
                                    >
                                        Course Overview
                                    </button>
                                    <button
                                        onClick={() => handleTabClick(2)}
                                        className={`ml-4 py-1 px-4 rounded ${activeTab === 2 ? 'bg-cyan-500 text-white' : 'bg-gray-300 text-gray-700'
                                            }`}
                                    >
                                        Content & Review
                                    </button>
                                    {/* <button
                                        onClick={() => handleTabClick(3)}
                                        className={`py-2 px-4 rounded ${activeTab === 3 ? 'bg-cyan-500 text-white' : 'bg-gray-300 text-gray-700'
                                            }`}
                                    >
                                        Course Instructor
                                    </button> */}
                                    {/* <button
                                        onClick={() => handleTabClick(4)}
                                        className={`py-2 px-4 rounded ${activeTab === 4 ? 'bg-cyan-500 text-white' : 'bg-gray-300 text-gray-700'
                                            }`}
                                    >
                                        Review
                                    </button> */}
                                </div>

                                <div>
                                    {activeTab === 1 && (
                                        <div className='mx-4'>
                                            <div>
                                                <p className='mb-2 text-xl font-semibold md:text-2xl text-cyan-500'>Course Description</p>
                                                <h1 className='text-justify'>
                                                    Maximus Ligula Eleifend Id Nisl Quis Interdum. Sed Malesuada Tortor Non Turpis Semper Bibendum. Ut Ac Nisi Porta, Malesuada Risus Non Viverra Dolor. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae In Tristique Libero.</h1>
                                            </div>
                                            <div className='my-5'>
                                                <p className='mb-2 text-xl font-semibold md:text-2xl text-cyan-500'>What Will I Learn From This Training?</p>
                                                <h1 className='mb-3 text-justify'>
                                                    Maximus Ligula Eleifend Id Nisl Quis Interdum. Sed Malesuada Tortor Non Turpis Semper Bibendum. </h1>
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
                                            {classData.course_content && classData.course_content.length > 0 ? (
                                                <table className="min-w-full p-1 border bg-slate-300 border-slate-400">
                                                    <thead>
                                                        <tr>
                                                            <th className="py-2 font-medium tracking-wider text-center text-gray-900 uppercase border sm:px-6 sm:py-3 text-md border-slate-400">Training</th>
                                                            <th className="py-2 font-medium tracking-wider text-center text-gray-900 uppercase border sm:px-6 sm:py-3 text-md border-slate-400">Course Content</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {classData.course_content.map((content, index) => (
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
                                                <h1 className='text-2xl font-semibold text-center text-cyan-500'>Training Review</h1>
                                                <TrainingReview></TrainingReview>
                                            </div>
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
                            {/* <img className='w-1/2 p-2 mx-auto border-2 rounded lg:w-2/3 border-cyan-500 shadowAlll' src={classData?.classImg} alt="Instructor" />
                            <h2 className='text-xl font-bold text-center text-cyan-500'>{classData?.className}</h2>
                            <div className='text-center'>
                                <p>Instructor: {classData?.instructorName}</p>
                                <p>Available Seats: {classData?.availableSeats}</p>
                                <p>Price: ${classData?.price}</p>
                            </div> */}

                        </div>

                        {/* Right Side - Teacher Information */}
                        <div className="w-full col-span-12 mx-auto sideShadow md:col-span-4 teacher-info">
                            <img className='w-full p-3 mx-auto rounded-md' src={classData?.classImg} alt="Instructor" />

                            <div className='flex items-center justify-between px-4 text-lg font-semibold'>
                                <h2 className='text-xl font-semibold text-start text-cyan-500'>{classData?.className}</h2>
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
                                    <h1>Instructor:</h1>
                                    <h2 className='text-center '>{classData?.instructorName}</h2>
                                </div>
                                <div className='flex items-center justify-between font-semibold'>
                                    <h1>Course Fee:</h1>
                                    <h2 className='text-lg text-center '>${classData?.price}</h2>
                                </div>
                                <Link to={`/payment`}>
                                    <button className='flex items-center justify-center w-full py-1 mt-5 font-semibold text-white rounded-md bg-cyan-500'>
                                        <span >Enroll Now</span> <RxEnter className='pl-3' size={28}></RxEnter>
                                    </button>
                                </Link>



                                <div>
                                    <h1 className='pt-5 font-semibold text-start text-slate-700'>This Course Include:</h1>
                                    <SideViewClass></SideViewClass>
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
