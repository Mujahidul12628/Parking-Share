/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {

    // const { transaction_ID } = useParams();

    return (
        <div className='flex flex-col items-center justify-center py-10 bg-slate-300'>
            <h1 className='text-3xl text-green-500'>Payment Success</h1>
            <h1>Transaction ID = <span className='text-xl text-red-500'></span> </h1>
        </div>
    );
};

export default PaymentSuccess;