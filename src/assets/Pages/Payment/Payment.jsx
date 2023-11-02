import React, { useState } from 'react';

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [name, setName] = useState('');

    const handlePayment = async () => {
        // Call your server to initiate the payment process with SSL Commerce
        try {
            const response = await fetch('https://virtual-academy-server.vercel.app/campData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cardNumber,
                    expiryDate,
                    cvv,
                    name,
                    // other payment details
                }),
            });

            const result = await response.json();
            // Handle the response from your server and update the UI accordingly
        } catch (error) {
            console.error('Error processing payment:', error);
            // Handle errors
        }
    };

    return (
        <div className="max-w-md p-6 mx-auto mt-8 bg-white rounded-md shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Payment Information</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                    Card Number:
                    <input
                        type="text"
                        className="w-full p-2 mt-1 border rounded-md"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                </label>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        Expiry Date:
                        <input
                            type="text"
                            className="w-full p-2 mt-1 border rounded-md"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        CVV:
                        <input
                            type="text"
                            className="w-full p-2 mt-1 border rounded-md"
                            value={cvv}
                            onChange={(e) => setCVV(e.target.value)}
                        />
                    </label>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                    Cardholder Name:
                    <input
                        type="text"
                        className="w-full p-2 mt-1 border rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>
            <button
                className="px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-600"
                onClick={handlePayment}
            >
                Submit Payment
            </button>
        </div>
    );
};

export default Payment;

