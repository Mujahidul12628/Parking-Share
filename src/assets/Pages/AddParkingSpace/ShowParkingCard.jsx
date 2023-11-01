import React, { useState, useEffect } from 'react';
import ParkingSpaceCardItem from '../AddParkingSpace/ParkingSpaceCardItem';
import { useLoaderData } from 'react-router-dom';

const ShowParkingCard = () => {
    const [parkings, setParkings] = useState([]);
    const loadedparkings = useLoaderData();

    useEffect(() => {
        // Update state when loadedparkings changes
        setParkings(loadedparkings);
    }, [loadedparkings]);

    return (
        <div>
            {/* <h1 className='text-2xl text-center'>
                Hot Hot Cold parking: {parkings.length}
            </h1> */}
            {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
                {parkings.map((parking) => (
                    <ParkingSpaceCardItem
                        key={parking._id}
                        parking={parking}
                        parkings={parkings}
                        setParkings={setParkings}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default ShowParkingCard;
