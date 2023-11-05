


import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import google from '../../images/google.jpg';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleGoogleSignIn = event => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/');
            })
            .catch(error => {
                console.log('Error:', error);
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen rounded-md hero">
            <div className="flex-col min-w-full rounded-md hero-content">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-blue-600">Login</h1>
                </div>
                <form onSubmit={handleLogin} className="flex-shrink-0 w-full max-w-sm shadow-2xl card">
                    <div className="card-body box-shadow-carousel ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="border input input-bordered border-blue-400" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="password"
                                    className="w-full border input input-bordered border-blue-400"
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                    {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                                </span>
                            </div>

                            <label className="label">
                                <a href="#" className="p-1 font-semibold label-text-alt link link-hover text-sky-600">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="py-1 text-lg font-semibold text-white border-2 rounded-md details border-blue-500 bg-blue-500">Login</button>
                        </div>
                        <div className='mx-auto mt-3'><span>Have not any account yet? </span><Link to="/register" className='text-blue-500'>Register</Link></div>
                        <div className="mt-6 form-control">
                            <button onClick={handleGoogleSignIn} className="py-2 bg-white border-2 rounded-md border-blue-500 ">
                                <img className='w-2/12 mx-auto rounded-md ' src={google} alt="Photo 4" />
                            </button>
                        </div>
                        {/* <div className="mt-1 form-control">
                            <button onClick={handleGoogleSignIn} className="py-1 bg-white border-2 border-blue-400 rounded-md ">
                                <img className='w-1/12 mx-auto rounded-md ' src={fb1} alt="Photo 4" />
                            </button>
                        </div> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

