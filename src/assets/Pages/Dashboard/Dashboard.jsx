

import React, { useContext, useState } from 'react';
import { CgClipboard } from "react-icons/cg";
import { BiMessageSquareAdd } from "react-icons/bi";
import {
    BsPeople, BsCalendar, BsCheckAll, BsPlusCircle, BsGear, BsPerson, BsEnvelope, BsBox,
    BsPersonBoundingBox, BsHouseDoor, BsPower
} from "react-icons/bs";
import { FaChevronLeft, FaChevronRight, } from "react-icons/fa";
import Home from '../Home/Home';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import AddTraining from './AddTraining';
import ManageTraining from './ManageTraining';
import AddParking from '../AddParkingSpace/AddParking';

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedSection, setSelectedSection] = useState('addTraining');

    const handleToggleSidebar = () => {
        console.log('Toggle Sidebar');
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    const handleLogOut = () => {

        logOut()
            .then()
            .catch(error => {
                console.error(error.message)
            })

    }

    const data = {
        totalAthletes: 50,
        upcomingEvents: 5,
        completedSessions: 30,
    };

    const sidebarItems = [
        'addTraining',
        'manageTraining',
        'enrollment',
        'inbox',
        'profile',
        'settings',
        'home',
        'logout',
    ];

    const sidebarIcons = {
        addTraining: <BiMessageSquareAdd size={20} />,
        manageTraining: <CgClipboard size={20} />,
        enrollment: <BsPersonBoundingBox size={16} />,
        inbox: <BsEnvelope size={18} />,
        profile: <BsPerson size={20} />,
        settings: <BsGear size={18} />,
        home: <BsHouseDoor size={20} />,
        logout: <BsPower size={20} />,
    };

    return (
        <div className="relative flex mx-auto max-w-7xl ">
            <div className={` ${isSidebarOpen ? 'bg-slate-200' : 'bg-slate-200'}`}>
                <button
                    className="top-0"
                    onClick={handleToggleSidebar}
                    aria-label="Toggle Sidebar"
                >
                    {isSidebarOpen ? <FaChevronLeft className='w-6 h-6 my-3 text-blue-900' /> : <FaChevronRight className='w-6 h-6 my-3 text-blue-900' />}
                </button>
            </div>

            {/* Sidebar */}
            {isSidebarOpen && (
                <div className="w-1/2 p-3 sm:w-1/3 md:w-1/4 bg-slate-200">
                    {user && (
                        <div className="user-info">
                            <div className='flex items-center mb-5'>
                                <img
                                    src={user.photoURL}
                                    alt="User Photo"
                                    className="w-8 h-8 mr-2 rounded-full sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                                />
                                <span className="text-sm font-semibold uppercase sm:text-md md:text-lg">{user.displayName}</span>
                            </div>
                        </div>
                    )}
                    {sidebarItems.map((item) => (
                        <div
                            key={item}
                            className={`p-1 mb-2 sm:py-2 sm:px-2 sm:mb-4 rounded cursor-pointer ${selectedSection === item
                                ? 'bg-blue-500 text-white'
                                : 'hover:bg-slate-300'
                                }`}
                            onClick={() => handleSectionClick(item)}
                        >
                            <div className="flex items-center">
                                {sidebarIcons[item]} {/* Display the corresponding icon */}
                                <span className="ml-2 text-sm font-semibold md:text-md text-slate-700 ">
                                    {item === 'addTraining' ? 'Add Training' :
                                        item === 'manageTraining' ? 'Manage Training' :
                                            item === 'enrollment' ? 'Enrollment' :
                                                item === 'inbox' ? 'Inbox' :
                                                    item === 'profile' ? 'Profile' :
                                                        item === 'settings' ? 'Settings' :
                                                            item === 'home' ? (

                                                                <Link to="/" className="text-sm font-semibold md:text-md text-slate-700">
                                                                    Go to Home
                                                                </Link>
                                                            ) :
                                                                item === 'logout' ? (
                                                                    <Link to="/login" onClick={handleLogOut} className="text-sm font-semibold md:text-md text-slate-700">
                                                                        Logout
                                                                    </Link>
                                                                ) : item.charAt(0).toUpperCase() + item.slice(1)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 ">
                <div>
                    {/* Your content based on the selected section */}
                    {selectedSection === 'addTraining' && (
                        <>
                            <AddParking></AddParking>
                        </>
                    )}
                    {selectedSection === 'manageTraining' && (
                        <>
                            <ManageTraining></ManageTraining>
                        </>
                    )}
                    {selectedSection === 'enrollment' && (
                        <h2>Enrollment: Handle enrollment details and forms here</h2>
                    )}
                    {selectedSection === 'inbox' && <h2>Inbox: Display messages and notifications here</h2>}
                    {selectedSection === 'profile' && (
                        <h2>Profile: Show user profile information and settings</h2>
                    )}
                    {selectedSection === 'settings' && (
                        <h2>Settings: Implement user settings and preferences here</h2>
                    )}
                    {selectedSection === 'home' &&
                        (
                            <>
                                <Link to="/">
                                    <button className="px-3 py-2 m-3 font-semibold text-white rounded-full bg-blue-500">Go to home</button>
                                </Link>
                            </>

                        )}
                    {selectedSection === 'logout' && (
                        <>
                            {/* <Link to="/">
                                <button onClick={handleLogOut} className="px-3 py-2 font-semibold text-white rounded-full bg-blue-500">Log out</button>
                            </Link> */}


                        </>

                    )}

                </div>
            </div>
        </div>
    );
};

export default Dashboard;


