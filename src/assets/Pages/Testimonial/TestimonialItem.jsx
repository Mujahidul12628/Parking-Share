/* eslint-disable react/prop-types */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';

const TestimonialItem = ({ testimonials }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1536, // Add 2xl breakpoint
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1900, // Add 2xl breakpoint
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    };

    return (
        <div className="mt-8">
            <h2 className="mb-1 text-2xl font-semibold text-center text-blue-500 ">Testimonials from  Users</h2>
            <p className="w-full mx-auto mb-4 text-lg text-center sm:w-8/12">
                Discover the experiences of our satisfied clients. Explore the stories of convenience, reliability, and satisfaction from our users.
            </p>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="outline-none">
                        <div className="p-4 mx-2 my-5 border-l-4 border-blue-400 reviewShadow testimonial">
                            <div className="flex flex-col items-center mb-4">
                                <img
                                    src={testimonial.userImg}
                                    alt={`${testimonial.name}'s Avatar`}
                                    className="w-12 h-12 mr-4 rounded-full user-img"
                                />
                                <h3 className="text-lg font-semibold text-center">{testimonial.name}</h3>
                                <div className="flex items-center justify-center">
                                    <p className="flex items-center p-1 text-amber-400">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <FaStar key={i} className={i < testimonial.review ? 'text-amber-400' : 'text-gray-300'} />
                                        ))}
                                    </p>
                                    <span className="ml-2">{testimonial.review}</span>
                                </div>
                            </div>
                            <p className="text-justify text-gray-600">{testimonial.userText}</p>
                            <div className='flex items-center justify-center mt-4 mb-2'>
                                <span className='mx-1'> <FaRegClock size={20} /> </span>
                                <span className=''>{testimonial.Time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialItem;
