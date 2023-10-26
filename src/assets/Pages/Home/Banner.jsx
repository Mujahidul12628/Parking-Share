import React, { useContext } from 'react';
import banner1 from '../../images/a1.jpg'
import banner2 from '../../images/b.jpg'
import banner3 from '../../images/f.jpg'
import banner4 from '../../images/a.jpg'
import Search from './Search';


const Banner = () => {

    return (

        <div className='grid mx-auto grid-cols- md:grid-cols-2 max-w-7xl bg-cyan-100 shadowAll '>
            <div className="flex flex-col items-center justify-center">
                <div className="w-3/4 p-1 mx-auto">
                    <h1 className="my-2 text-2xl font-bold text-cyan-500">Elevate Your Game, Excel with Excellence</h1>
                    <h1 className="my-3 text-lg font-semibold text-cyan-500">Join Our Elite Sports Summer Camp</h1>
                    <p className="text-justify">Experience the Thrill of a Lifetime at Our Premier Sports Summer Camp! Unleash your potential, make lifelong friends, and create unforgettable memories.</p>

                    <div className='mt-5'>
                        <Search></Search>
                    </div>

                    <button className="max-w-md px-3 py-2 my-5 text-white rounded-lg bg-cyan-500 " type="submit">Enroll Now</button>
                </div>
            </div>
            <div className="grid w-5/6 grid-cols-2 gap-2 p-2 mx-auto my-1 border-2 rounded-lg border-cyan-200 shadowAll">
                <div className="transition-transform duration-500 transform hover:scale-105">
                    <img className='rounded-lg ' src={banner4} alt="Photo 3" />
                </div>
                <div className="transition-transform duration-500 transform hover:scale-105">
                    <img className='rounded-lg ' src={banner3} alt="Photo 4" />
                </div>
                <div className="transition-transform duration-500 transform hover:scale-105">
                    <img className='rounded-lg ' src={banner2} alt="Photo 2" />
                </div>
                <div className="transition-transform duration-500 transform hover:scale-105 ">
                    <img className='rounded-lg shadowAll' src={banner1} alt="Photo 1" />
                </div>
            </div>

        </div>


    );
};

export default Banner;