// import React, { useState, useEffect } from 'react';

// const SuggestedClass = () => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         // Simulate fetching data from an API
//         // You should replace this with your actual data fetching logic
//         const fetchData = async () => {
//             try {
//                 // Replace this URL with your API endpoint
//                 const response = await fetch('https://virtual-academy-server.vercel.app/campData');
//                 const data = await response.json();
//                 setImages(data); // Assuming the API returns an array of image sources
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="carousel carousel-center rounded-box">
//             {images.map((src, index) => (
//                 <div className="carousel-item" key={index}>
//                     <img className='w-1/4' src={src.classImg} alt={`Slide ${index + 1}`} />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default SuggestedClass;


import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const SuggestedClass = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Simulate fetching data from an API
        // You should replace this with your actual data fetching logic
        const fetchData = async () => {
            try {
                // Replace this URL with your API endpoint
                const response = await fetch('https://virtual-academy-server.vercel.app/campData');
                const data = await response.json();
                setImages(data); // Assuming the API returns an array of image sources
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Customize settings for the react-slick carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display three slides at a time
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>

            {images.map((src, index) => (
                <div className='border border-cyan-500' key={index}>
                    <img className='your-custom-class' src={src.classImg} alt={`Slide ${index + 1}`} />
                    <div>
                        <h2 className='px-4 mt-3 text-lg font-semibold text-start text-cyan-500'>{src?.className}</h2>
                        <div className='text-center'>
                            <p className='px-4 text-start'>Instructor: {src?.instructorName}</p>
                            <div className='flex justify-between px-4 py-2 text-lg'>
                                <p>Seats: {src?.availableSeats}</p>
                                <p className='text-lg font-semibold text-right'>${src?.price}</p>
                            </div>


                            <Link className='mt-3' to={`/class`}>

                                <button className="w-11/12 py-1 mb-2 text-white rounded-lg bg-cyan-500">
                                    See Class
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            ))}
        </Slider>
    );
};

export default SuggestedClass;

