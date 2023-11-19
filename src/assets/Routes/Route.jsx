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

import UpdateParkingSpacee from "../Pages/UpdateParkingSpace/UpdateParkingSpacee";
import AddParking from "../Pages/AddParkingSpace/AddParking";
import SingleParkingCardDetails from "../Pages/SigngleParkingCardDetails/SingleParkingCardDetails";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import PAymentFailed from "../Pages/Payment/PAymentFailed";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/parking')
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
                path: 'payment/success/:transaction_ID',
                element: <PrivateRoute> <PaymentSuccess></PaymentSuccess> </PrivateRoute>
            },
            {
                path: 'payment/failed/:transaction_ID',
                element: <PrivateRoute> <PAymentFailed></PAymentFailed> </PrivateRoute>
            },

            {
                path: 'addparking',
                element: <PrivateRoute><AddParking></AddParking> </PrivateRoute>
            },
            {
                path: 'details/:id',
                element: <PrivateRoute> <SingleParkingCardDetails></SingleParkingCardDetails> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/parking/${params.id}`)
            },
            {
                path: 'updateparking/:id',
                element: <PrivateRoute><UpdateParkingSpacee></UpdateParkingSpacee></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/parking/${params.id}`)
            },

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