

import React from 'react';
import { FaBook, FaClock, FaChalkboard, FaClipboardList, FaLanguage, FaCertificate } from 'react-icons/fa';

import { RiCarWashingFill } from "react-icons/ri";
import {
    FaCheckCircle,
    FaHandsHelping,
    FaLightbulb,
    FaShieldAlt,
    FaBuilding,
    FaPhone,
    FaCalendarCheck,
    FaArrowsAltV,
    FaUnlockAlt,
    FaChair,
} from 'react-icons/fa';


const SideView = () => {
    const travelInformation = [
        { label: 'Checkpoints', value: ['Entrance, Exit'], icon: <FaCheckCircle /> },
        { label: 'Parking Assistance', value: ['Available'], icon: <FaHandsHelping /> },
        { label: 'Lighting', value: ['LED Lighting'], icon: <FaLightbulb /> },
        { label: 'Security', value: ['CCTV Surveillance'], icon: <FaShieldAlt /> },
        { label: 'Type', value: ['Garage'], icon: <FaBuilding /> },
        { label: 'Garage Height Limit', value: ['6.5 feet'], icon: <FaArrowsAltV /> },
        { label: 'Emergency Contact', value: ['123-456-7890'], icon: <FaPhone /> },
        { label: 'Wash Service', value: ['On Request'], icon: <RiCarWashingFill /> },
        { label: 'Reservable Spaces', value: ['Yes'], icon: <FaCalendarCheck /> },
        { label: 'Waiting Area', value: ['Comfortable Seating'], icon: <FaChair /> },
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
                    <div className="flex flex-col justify-end w-8/12 md:w-3/5 md:justify-end sm:items-start sm:flex-wrap sm:flex-row ">
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

export default SideView;

