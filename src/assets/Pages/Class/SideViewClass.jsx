

import React from 'react';
import { FaBook, FaClock, FaChalkboard, FaClipboardList, FaLanguage, FaCertificate } from 'react-icons/fa';
import { TbCategory } from "react-icons/tb";

const SideViewClass = () => {
    const travelInformation = [
        { label: 'Course Level', value: ['Intermidiate'], icon: <FaChalkboard /> },
        { label: 'Duration', value: ['6 Hours'], icon: <FaClock /> },
        { label: 'Syllebus', value: ['10 Lesson'], icon: <FaBook /> },
        { label: 'Quizes', value: ['10 Time'], icon: <FaClipboardList /> },
        { label: 'Type', value: ['Training'], icon: <TbCategory /> },
        { label: 'Language', value: ['English'], icon: <FaLanguage /> },
        { label: 'Certificate', value: ['✓ Given'], icon: <FaCertificate /> },
    ];

    return (
        <div className="border-gray-100">
            {travelInformation.map(({ label, value, icon }) => (
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
                        {value.map((item, index) => (
                            <p className="font-semibold text-gray-600 text-end sm:ml-10" key={index}>
                                {item}
                                {index !== value.length - 1 && ', '}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SideViewClass;

