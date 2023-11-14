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
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings} className="mt-8">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="outline-none">
                    <div className="p-4 mx-2 my-5 border-l-4 border-blue-500 rounded-lg reviewShadow testimonial">


                        <div className="flex items-center mb-2">
                            <img
                                src={testimonial.userImg}
                                alt={`${testimonial.name}'s Avatar`}
                                className="w-12 h-12 mr-4 rounded-full user-img"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-center ">{testimonial.name}</h3>
                                <div className="flex items-center justify-center ">
                                    <p className="flex items-center p-1 text-amber-400">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <FaStar key={i} className={i < testimonial.review ? 'text-amber-400' : 'text-gray-300'} />
                                        ))}
                                    </p>
                                    <span className="ml-2">{testimonial.review}</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-justify text-gray-600">{testimonial.userText}</p>
                        <div className='flex items-center justify-center mt-4 mb-2'>
                            <span className='mx-1'> <FaRegClock size={20} /> </span>
                            <span className=''>{testimonial.Time} </span>
                        </div>
                    </div>


                </div>
            ))}
        </Slider>
    );
};

export default TestimonialItem;
