/* eslint-disable react/jsx-no-undef */
import React, { useContext } from "react";
import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';

import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const MainLayout = () => {
    const { loading } = useContext(AuthContext)
    return (
        <div className="p-0 m-0">
            {loading ? (
                <Loader></Loader>
            ) : (
                <>
                    <Navbar></Navbar>
                    <div className='min-h-[calc(100vh-290px)]'>
                        <Outlet />
                    </div>
                    <Footer></Footer>

                    <ToastContainer></ToastContainer>
                </>
            )}
        </div>
    );

};

export default MainLayout;

