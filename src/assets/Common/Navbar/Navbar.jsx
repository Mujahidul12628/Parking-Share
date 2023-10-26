import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
import { AuthContext } from '../../Provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import logo from '../../images/VA.png';
// import logo from '../../images/logo.png';


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
            <div className="w-full mx-auto shadow-lg bg-cyan-500 navbar max-w-7xl font-julius">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="p-2 mt-3 bg-white shadow menu menu-compact dropdown-content rounded-box w-52">
                            <li className=''><NavLink to="/">Home</NavLink></li>
                            {user && <>
                                <li><NavLink to="/class" >Class</NavLink></li>
                                <li><NavLink to="/instructor" >Instructor</NavLink></li>
                                <li><NavLink to="/dashboard" >Dashboard</NavLink></li>
                            </>}
                            {/* <li><NavLink to="/blogs">Blogs</NavLink></li> */}
                        </ul>
                    </div>

                    <div className='inline-flex items-center'>
                        <img src={logo} className='w-24 ml-2 md:w-3/12' alt="" />
                    </div>

                </div>

                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 mx-2 font-semibold menu menu-horizontal">
                        <li><NavLink to="/">Home</NavLink></li>

                        {user && <>
                            <li><NavLink to="/class">Class</NavLink></li>
                            <li><NavLink to="/instructor" >Instructor</NavLink></li>
                            <li><NavLink to="/dashboard" >Dashboard</NavLink></li></>}
                        {/* <li><NavLink to="/blogs">Blogs</NavLink></li> */}
                    </ul>
                </div>

                <div className="navbar-end">
                    {user ?
                        <div className='inline-flex items-center gap-2'>

                            <label tabIndex={0} className=" avatar">
                                <div className="w-10 rounded-full bg-cyan-600 ">
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

                                <button onClick={handleLogOut} className="px-3 py-2 font-semibold text-white rounded-full bg-cyan-800">Log out</button>

                            </Link>
                        </div>
                        :
                        <Link to="/login">

                            <button className="px-3 py-2 font-semibold text-white rounded-full bg-cyan-800">Login</button>

                        </Link>}
                </div>

            </div>
            <Tooltip id="my-tooltip" className='bg-[#65C3C8]' />

        </div>

    );
};

export default Navbar;
