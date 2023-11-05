import {
    createBrowserRouter,
} from "react-router-dom";



import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Common/ErrorPage/ErrorPage";

import MainLayout from "../Common/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

import Payment from "../Pages/Payment/Payment";
import UpdateParkingSpacee from "../Pages/UpdateParkingSpace/UpdateParkingSpacee";
import ShowParkingCard from "../Pages/AddParkingSpace/ShowParkingCard";
import AddParking from "../Pages/AddParkingSpace/AddParking";
import SingleParkingCardDetails from "../Pages/SigngleParkingCardDetails/SingleParkingCardDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [

            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://parking1-phi.vercel.app/parking')
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: '/payment',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },

            {
                path: 'addparking',
                element: <PrivateRoute><AddParking></AddParking> </PrivateRoute>
            },
            {
                path: 'details/:id',
                element: <PrivateRoute> <SingleParkingCardDetails></SingleParkingCardDetails> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://parking1-phi.vercel.app/parking/${params.id}`)
            },

            {
                path: 'updateparking/:id',
                element: <PrivateRoute><UpdateParkingSpacee></UpdateParkingSpacee></PrivateRoute>,
                loader: ({ params }) => fetch(`https://parking1-phi.vercel.app/parking/${params.id}`)
            },


            // {
            //     path: "all-toys",
            //     element: <AllToys></AllToys>,
            //     loader: () => fetch('https://action-avenue-server.vercel.app/class')
            // },

            // {
            //     path: "add-toys",
            //     element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
            // },
            // {
            //     path: "/view-details/:id",
            //     element: <PrivateRoutes> <ViewDetails></ViewDetails></PrivateRoutes>,
            //     loader: ({ params }) => fetch(`https://action-avenue-server.vercel.app/toy/${params.id}`)
            // }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard> </PrivateRoute>,
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router