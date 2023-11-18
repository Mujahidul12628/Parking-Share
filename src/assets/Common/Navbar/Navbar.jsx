import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
import { AuthContext } from '../../Provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import logo from '../../images/logo2.png';
import { LuParkingCircle } from "react-icons/lu";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {

        logOut()
            .then()
            .catch(error => {
                console.error(error.message)
            })

    }

    return (
        <div className=''>
            <div className="w-full mx-auto shadow-lg navBg navbar max-w-7xl font-julius">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="p-2 mt-3 bg-white shadow menu menu-compact dropdown-content rounded-box w-52">
                            <li className=''><NavLink to="/">Home</NavLink></li>
                            {user && <>

                                <li><NavLink to="/dashboard" >Dashboard</NavLink></li>
                            </>}
                            {/* <li><NavLink to="/blogs">Blogs</NavLink></li> */}
                        </ul>
                    </div>

                    <div className='inline-flex items-center ml-2 lg:ml-0'>
                        <img src={logo} className='w-2/12 mr-1 sm:w-1/12' alt="" />
                        <p className='font-semibold text-white md:text-xl md:text-2xl lg:text-3xl tex-white'> Share Parking</p>
                    </div>

                </div>

                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 mx-2 font-semibold menu menu-horizontal">
                        <li><NavLink to="/">Home</NavLink></li>

                        {user && <>

                            <li><NavLink to="/dashboard" >Dashboard</NavLink></li></>}
                        {/* <li><NavLink to="/blogs">Blogs</NavLink></li> */}
                    </ul>
                </div>

                <div className="navbar-end">
                    {user ?
                        <div className='inline-flex items-center gap-2'>

                            <label tabIndex={0} className=" avatar">
                                <div className="w-10 rounded-full bg-slate-600 ">
                                    <img
                                        src={user.photoURL || 'https://i.ibb.co/Qv83f2q/3177440.png'}
                                        className="w-10 h-10 rounded-full"
                                        alt=""
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={user?.displayName}
                                    />
                                </div>
                            </label>

                            <Link to="/">

                                <button onClick={handleLogOut} className="font-semibold text-white rounded-full  sm:px-3 sm:py-2 bg-slate-700">Log out</button>

                            </Link>
                        </div>
                        :
                        <Link to="/login">

                            <button className="p-1 px-2 font-semibold text-white rounded-full sm:px-3 sm:py-2 bg-slate-700">Login</button>

                        </Link>}
                </div>

            </div>
            <Tooltip id="my-tooltip" className='bg-[#65C3C8]' />

        </div>

    );
};

export default Navbar;
