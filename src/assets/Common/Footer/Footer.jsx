
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
// import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="text-white p-10 footer-bg max-w-7xl mx-auto">
            <div className="w-full max-w-6xl mx-auto gap-10 justify-between items-start grid grid-cols-2   sm:grid-cols-2 md:grid-cols-4">
                <div className='About-us max-w-xs text-justify flex flex-col gap-2'>
                    <h3 className='text-start'>About Us</h3>

                    <div className='text-left text-sm text-slate-200'>
                        <p className='footer-text text-xs'>We are a team of designers and developers that create high-quality websites.</p>
                        <div className="flex mt-3 gap-4 md:place-self-center md:justify-self-end">
                            <Link to="https://twitter.com/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </Link>
                            <Link to="https://www.youtube.com/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </Link>
                            <Link to="https://www.facebook.com/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </Link>
                            <Link to="https://www.google.com/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current hidden sm:block "
                                >
                                    <path d="M23.61 10.667h-11.61v3.806h8.333c-.28 1.71-1.948 5.03-5.768 5.03-3.474 0-6.314-2.955-6.314-6.604s2.84-6.604 6.314-6.604c1.999 0 3.334.855 4.093 1.622l2.8-2.697c-1.862-1.76-4.284-2.81-6.893-2.81-5.87 0-10.667 4.962-10.667 11.074s4.797 11.074 10.667 11.074c6.438 0 9.582-4.663 9.582-8.432 0-.642-.07-1.258-.201-1.853z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-left'>Information</h3>
                    <hr />
                    <div className="flex flex-col gap-1 text-left text-xs text-white ">
                        <Link to="/" className="link link-hover">
                            Home
                        </Link>
                        <Link to="/class" className="link link-hover">
                            Class
                        </Link>
                        <Link to="/instructor" className="link link-hover">
                            Instructor
                        </Link>
                        <Link to="/dashboard" className="link link-hover">
                            Dashboard
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-start'>Contact US</h3>
                    <hr />
                    <div className='flex flex-col gap-1 text-left text-xs sm:text-sm  text-slate-200'>
                        <div className='flex justify-start items-center'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 0 27 27" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            </span>
                            <span> Sukrabad, Dhanmondi</span>
                        </div>
                        <div className='flex justify-start items-center'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="1 0 29 29" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                            </svg></span>
                            <span> info@example.com</span>
                        </div>
                        <div className='flex justify-start items-center'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 33" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            </span>
                            <span> info@example.com</span>
                        </div>
                        <div className='flex justify-start items-center'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 34" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            </span>
                            <span> +012 3456 789</span>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-start'>Support Us</h3>
                    <hr />
                    <div className='flex flex-col text-left text-sm '>
                        <div className='flex justify-start items-center mt-1'>
                            <input type="email" name="email" placeholder='Email' id="footer-email" />
                            <input type="submit" value="submit" id="footer-submit" />
                        </div>
                    </div>
                    <p className='footer-text text-xs text-slate-200'>Subscribe to our site to show your support and stay up-to-date with the latest toys</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;
