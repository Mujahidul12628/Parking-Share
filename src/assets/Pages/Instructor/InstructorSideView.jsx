/* eslint-disable react/prop-types */
// import React from 'react';

// import { FaUser, FaEnvelope, FaCalendar, FaStar, FaBook, FaBriefcase, FaCode, FaMapMarkerAlt, FaLanguage, FaTwitter } from 'react-icons/fa';

// const InstructorSideView = () => {
//     const instructorInformation = [
//         { label: 'Name', value: 'John Doe', icon: <FaUser /> },
//         { label: 'Email', value: 'john.doe@example.com', icon: <FaEnvelope /> },
//         { label: 'Joined', value: 'October 10, 2022', icon: <FaCalendar /> },
//         { label: 'Rating', value: '4.5', icon: <FaStar /> },
//         { label: 'Courses Taught', value: '10', icon: <FaBook /> },
//         { label: 'Experience', value: '5 years', icon: <FaBriefcase /> },
//         { label: 'Specialization', value: 'Web Development', icon: <FaCode /> },
//         { label: 'Location', value: 'New York, USA', icon: <FaMapMarkerAlt /> },
//         { label: 'Languages', value: 'English, Spanish', icon: <FaLanguage /> },
//         { label: 'Social Media', value: '@john.doe', icon: <FaTwitter /> },
//         // Add more information as needed
//     ];


//     return (
//         <div className="border-gray-100">
//             {instructorInformation.map(({ label, value, icon }) => (
//                 <div
//                     className="flex px-2 py-5 text-sm transition-all duration-300 transform border-b border-gray-400 border-dotted rounded-md shadow-md hover:-translate-y-1 hover:shadow-lg"
//                     key={label}
//                 >
//                     <div className="w-full text-start sm:w-2/5">
//                         <h3 className="flex items-center text-sm font-semibold justify-normal">
//                             <span className='mr-2 text-slate-500'>
//                                 {icon}
//                             </span>
//                             <span className='text-slate-500'>
//                                 {label}
//                             </span>
//                         </h3>
//                     </div>
//                     <div className="flex flex-col justify-end w-full sm:justify-center sm:items-start sm:flex-wrap sm:flex-row md:w-3/5">
//                         <p className="font-semibold text-gray-600 text-end sm:ml-10">
//                             {value}
//                         </p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default InstructorSideView;

import React from 'react';
import { FaUser, FaEnvelope, FaCalendar, FaStar, FaBook, FaBriefcase, FaCode, FaMapMarkerAlt, FaLanguage, FaTwitter } from 'react-icons/fa';

const InstructorSideView = ({ instructorData }) => {
    const instructorInformation = [
        { label: 'Joined', value: instructorData?.teacherJoined, icon: <FaCalendar /> },
        { label: 'Rating', value: instructorData?.rating, icon: <FaStar /> },
        { label: 'Courses Taught', value: instructorData?.takenClasses, icon: <FaBook /> },
        { label: 'Experience', value: instructorData?.experience, icon: <FaBriefcase /> },
        { label: 'Specialization', value: instructorData?.category, icon: <FaCode /> },
        { label: 'Location', value: 'Academy Camp', icon: <FaMapMarkerAlt /> },
        { label: 'Languages', value: 'English, Bangla', icon: <FaLanguage /> },
    ];

    return (
        <div className="border-gray-100">
            {instructorInformation.map(({ label, value, icon }) => (
                <div
                    className="flex px-2 py-5 text-sm transition-all duration-300 transform border-b border-gray-400 border-dotted rounded-md shadow-md hover:-translate-y-1 hover:shadow-lg"
                    key={label}
                >
                    <div className="w-full text-start sm:w-2/5">
                        <h3 className="flex items-center text-sm font-semibold justify-normal">
                            <span className='mr-2 text-slate-500'>
                                {icon}
                            </span>
                            <span className='text-slate-500'>
                                {label}
                            </span>
                        </h3>
                    </div>
                    <div className="flex flex-col justify-end w-full sm:justify-center sm:items-start sm:flex-wrap sm:flex-row md:w-3/5">
                        <p className="font-semibold text-gray-600 text-end sm:ml-10">
                            {value}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InstructorSideView;
