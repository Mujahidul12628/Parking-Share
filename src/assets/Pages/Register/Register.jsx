// /* eslint-disable react-hooks/rules-of-hooks */
// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Provider/AuthProvider';

// const Register = () => {
//     const navigate = useNavigate();
//     const [error, setError] = useState('')
//     const [success, setSuccess] = useState('')

//     const { user, createUser } = useContext(AuthContext)
//     console.log(user, createUser)

//     const handleRegister = event => {
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         const confirmPassword = form.confirmPassword.value;
//         const photoURL = form.photoURL.value;

//         console.log(name, email, password, confirmPassword)
//         if (confirmPassword !== password) {
//             setError('Both passwords do not match');
//             setSuccess('');
//             return;
//         } else if (password.length < 6) {
//             setError('Password must be 6 characters long ');
//             setSuccess('');
//             return;
//         } else if (!/[A-Z]/.test(password)) {
//             setError('Password must contain at least one capital letter');
//             setSuccess('');
//             return;
//         } else if (!/[!@#$%^&*]/.test(password)) {
//             setError('Password must contain at least one special character');
//             setSuccess('');
//             return;
//         } else {
//             setError('');
//             setSuccess('Your sign-up is successful');
//             navigate('/login');
//         }


//         createUser(email, password)
//             .then(result => {
//                 const loggedUser = result.user;
//                 console.log(loggedUser);
//                 form.reset();
//                 setSuccess('Your sign-up is successful');
//             })
//             .catch(error => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;

//                 // Handle specific errors and display user-friendly messages
//                 if (errorCode === 'auth/email-already-in-use') {
//                     setError('Email is already in use.');
//                 } else {
//                     setError(errorMessage);
//                 }
//             });

//         const [loading, setLoading] = useState(false);

//         const handleRegister = event => {
//             event.preventDefault();

//             // Set loading to true when starting registration
//             setLoading(true);

//             const form = event.target;
//             const name = form.name.value;
//             const email = form.email.value;
//             const password = form.password.value;
//             const confirmPassword = form.confirmPassword.value;
//             const photoURL = form.photoURL.value;

//             // ... existing code

//             createUser(email, password)
//                 .then(result => {
//                     const loggedUser = result.user;
//                     console.log(loggedUser);
//                     form.reset();
//                     setSuccess('Your sign-up is successful');
//                 })
//                 .catch(error => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;

//                     // ... handle errors

//                 })
//                 .finally(() => {
//                     // Set loading to false when registration is complete (success or error)
//                     setLoading(false);
//                 });
//         };

//         // In your JSX, conditionally render a loading indicator
//         { loading && <p>Loading...</p> }

//         // Regenerate


//     }
//     return (
//         <div className="min-h-screen hero bg-base-200">
//             <div className="flex-col min-w-full hero-content">
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-3xl font-bold">Register</h1>
//                 </div>
//                 <form onSubmit={handleRegister} className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
//                     <p className='text-red-500 mt-2 text-center'>{error} </p>
//                     <p className='text-green-500 mt-2 text-center'>{success} </p>
//                     <div className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Name</span>
//                             </label>
//                             <input type="text" name='name' placeholder="name" className="input input-bordered" required />
//                         </div>

//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="email" name='email' placeholder="email" className="input input-bordered w-50" required />
//                         </div>


//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="password" name='password' placeholder="password" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Confirm Password</span>
//                             </label>
//                             <input type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Photo URL</span>
//                             </label>
//                             <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
//                         </div>
//                         <div className="mt-6 form-control">
//                             <button className="bg-blue-500 btn text-white font-semibold">Register</button>
//                         </div>
//                         <div className='mx-auto mt-3'><span>Already Have Account? </span><Link to="/login" className='text-blue-500'>Login</Link></div>

//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Register;




import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { user, createUser } = useContext(AuthContext)
    console.log(user, createUser)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photoURL = form.photoURL.value;

        console.log(name, email, password, confirmPassword)
        if (confirmPassword !== password) {
            setError('Both passwords do not match');
            setSuccess('');
            return;
        } else if (password.length < 6) {
            setError('Password must be 6 characters long ');
            setSuccess('');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError('Password must contain at least one capital letter');
            setSuccess('');
            return;
        } else if (!/[!@#$%^&*]/.test(password)) {
            setError('Password must contain at least one special character');
            setSuccess('');
            return;
        } else {
            setError('');
            setSuccess('Your sign-up is successful');
        }


        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log("Error:", error)
            })

    }
    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col min-w-full hero-content">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Register</h1>
                </div>
                <form onSubmit={handleRegister} className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                    <p className='text-red-500 mt-2 text-center'>{error} </p>
                    <p className='text-green-500 mt-2 text-center'>{success} </p>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered w-50" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="mt-6 form-control">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className='mx-auto mt-3'><span>Already Have Account? </span><Link to="/login" className='text-blue-500'>Login</Link></div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;


