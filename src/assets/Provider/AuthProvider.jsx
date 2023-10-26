/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars*/
// import React, { createContext, useEffect, useState } from 'react';
// import { useContext } from 'react';
// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut,
//     signInWithEmailAndPassword,
//     GoogleAuthProvider,
//     signInWithPopup
// } from 'firebase/auth';

// import app from '../Firebase/firebase.config';

// export const AuthContext = createContext(null);
// const auth = getAuth(app)

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState({})

//     const registerUser = (name, email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password);
//     }
//     const signInWithGoogle = () => {
//         const provider = new GoogleAuthProvider();
//         return signInWithPopup(auth, provider);
//     };

//     const loginUser = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password);
//     }
//     const signIn = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     const logOut = () => {
//         return signOut(auth);
//     }


//     useEffect(() => {

//         const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
//             setUser(loggedUser);
//         });
//         return () => {
//             unSubscribe();
//         }

//     }, [])

//     const authInfo = { registerUser, user, logOut, loginUser, signInWithGoogle };
//     return (

//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );

// };

// export default AuthProvider;

/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;