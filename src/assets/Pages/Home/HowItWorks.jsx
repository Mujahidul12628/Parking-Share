import React, { useState, useEffect } from 'react';

const HowItWorks = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const images = [
        'https://i.ibb.co/HFqz5dT/Search.png',
        'https://i.ibb.co/rFSbsyR/Booking.png',
        'https://i.ibb.co/98f84jn/Confirmation.png',
        'https://i.ibb.co/3m6y2y2/Parking.png',
    ];
    // const images = [
    //     'https://i.ibb.co/q5vJFhB/Screenshot-2023-10-30-221855.jpg',
    //     'https://i.ibb.co/yPXTxzt/green-easter-car-with-blue-egg-Custom.jpg',
    //     'https://i.ibb.co/9bVrhfN/60199365-451568855578025-5917086133421867008-n.jpg',
    //     'https://i.ibb.co/yPXTxzt/green-easter-car-with-blue-egg-Custom.jpg',
    // ];

    const buttonNames = [
        'Step',
        'Step',
        'Step',
        'Step',
    ];
    const stepTittle = [
        'Search from Anywhere',
        'Book in Advance or On Demand',
        'Confirmation for reservation',
        'Park with Confidence',
    ];

    // const stepDescriptions = [
    //     'Find and reserve parking spaces from anywhere.',
    //     'Secure your parking spot by booking slot.',
    //     'Confirmation of service provider & user.',
    //     'Enjoy the spot is reserved just for you.',
    // ];
    const stepDescriptions = [
        'Find and reserve parking spaces from anywhere with our easy-to-use search feature.',
        'Secure your parking spot by booking in advance or choose on-demand parking services.',
        'After Successful reservation,Owner & users receive a confirmation with details.',
        'Enjoy stress-free parking with confidence, knowing your spot is reserved just for you.',
    ];

    const handleButtonClick = (step) => {
        setCurrentStep(step);
        // Perform any additional actions based on the button click
    };

    useEffect(() => {
        // Automatically click the next button after 5 seconds
        const timeout = setTimeout(() => {
            setCurrentStep((prevStep) => (prevStep < 3 ? prevStep + 1 : 0));
        }, 5000);

        return () => clearTimeout(timeout);
    }, [currentStep]);

    return (
        <div className='my-5'>
            <h2 className="mb-1 text-2xl font-semibold text-center text-blue-500 ">How It Works</h2>
            <p className="w-full mx-auto mb-4 text-lg text-center sm:w-8/12">
                Welcome to our parking app! Follow these simple steps to make your parking experience stress-free.
            </p>

            <div className="grid grid-cols-12 gap-2">
                <div className="order-2 col-span-12 px-1 py-4 border-l-2 rounded-lg shadow-md sm:order-1 sm:mt-0 sm:p-4 sm:col-span-6 md:col-span-6 lg:col-span-7 processShadow">

                    <div className="flex flex-col h-full space-y-4">
                        {buttonNames.map((name, index) => (
                            <div className="flex items-center h-full " key={index}>
                                <button
                                    className={`${currentStep === index ? 'bg-blue-500 text-white font-semibold' : 'bg-gray-200 font-semibold'
                                        } px-4 p-2 rounded-md hover:bg-blue-100 h-full`}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    {index + 1}
                                </button>
                                <div className="flex-grow">
                                    <div className="ml-3 font-semibold lg:text-lg">
                                        {stepTittle[index]}
                                    </div>
                                    <div className="ml-3 text-sm text-gray-600 sm:hidden md:block">
                                        {stepDescriptions[index]}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="flex items-center justify-center order-1 h-full col-span-12 p-2 border-l-2 rounded-lg sm:order-2 processShadow sm:col-span-6 md:col-span-6 lg:col-span-5">
                    <img
                        src={images[currentStep]}
                        alt={`Step ${currentStep + 1}`}
                        className="w-9/12 h-auto rounded-lg sm:w-full"
                    />
                </div>
            </div>




        </div>
    );
};

export default HowItWorks;
