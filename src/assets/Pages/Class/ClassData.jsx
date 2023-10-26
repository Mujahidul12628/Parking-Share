import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";
import { BsArrowRightCircle } from "react-icons/bs";

const ClassData = () => {
    const [courses, setCourses] = useState([]);
    const [displayCourses, setDisplayCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCategory, setFilterCategory] = useState("");
    const [filterInstructor, setFilterInstructor] = useState("");
    const [loading, setLoading] = useState(true);
    const [selectedValue, setSelectedValue] = useState("");


    useEffect(() => {
        fetch("https://virtual-academy-server.vercel.app/campData")
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
                setDisplayCourses(data.slice(0, 6));
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let filteredCourses = courses.filter((course) =>
            course.className.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filterCategory) {
            filteredCourses = filteredCourses.filter(
                (course) => course.category === filterCategory
            );
        }

        if (filterInstructor) {
            filteredCourses = filteredCourses.filter(
                (course) => course.instructorName === filterInstructor
            );
        }

        setDisplayCourses(filteredCourses.slice(0, 6));
    }, [courses, searchTerm, filterCategory, filterInstructor]);

    const handleDisplayCourses = () => {
        if (displayCourses.length > 6) {
            setDisplayCourses(courses.slice(0, 6));
        } else {
            setDisplayCourses(courses);
        }
    };
    return (
        <div id="popularCourses" className="px-5 my-10 xl:px-0">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h2 className="mb-8 text-3xl font-bold text-center">
                        Popular Courses
                    </h2>
                    <div className="flex flex-col justify-between sm:flex-row item-center">
                        <div className="relative w-full sm:w-10/12 md:w-7/12 lg:w-5/12">
                            <input
                                type="text"
                                placeholder="Search Course Name"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-1 border-2 rounded-md border-cyan-500"
                            />
                            <IoIosSearch className="absolute transform -translate-y-1/2 text-cyan-600 top-1/2 right-1" size={30} />
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            <select

                                value={filterInstructor}
                                onChange={(e) => setFilterInstructor(e.target.value)}
                                className="p-1 m-0 border-2 rounded-md border-cyan-500 sm:mr-2"
                            >
                                <option value="">Search By Instructor</option>
                                {courses.map((course) => (
                                    <option key={course.id} value={course.instructorName}>
                                        {course.instructorName}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="p-1 mt-3 border-2 rounded-md border-cyan-500 sm:mt-0 sm:ml-2"
                            >
                                <option value="">Search By Categories</option>
                                {courses.map((course) => (
                                    <option key={course.id} value={course.category}>
                                        {course.category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="grid gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3">
                        {displayCourses.length === 0 ? (
                            <p className="text-xl text-red-500 text-start">No course found...</p>
                        ) : (
                            displayCourses.map((course) => (
                                <div key={course.id} className="p-4 my-5 rounded bg-cyan-50 shadowAlll">
                                    <img className='rounded' src={course.classImg} alt={course.className} />
                                    <div className="flex items-center justify-between mt-3 ">
                                        <h2 className="text-xl font-semibold text-cyan-500">{course.className}</h2>
                                        <div className='flex item-center text-amber-400'>
                                            <AiFillStar size={17} />
                                            <AiFillStar size={17} />
                                            <AiFillStar size={17} />
                                            <AiFillStar size={17} />
                                            <AiFillStar size={17} />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-3 ">
                                        <h2 className="text-2xl font-semibold text-cyan-500">${course.price}</h2>

                                        <Link to="/class">
                                            <button className="flex items-center px-2 py-1 text-white rounded-md justify-evenly bg-cyan-500">
                                                <span>Explore</span>
                                                <BsArrowRightCircle size={20} className="ml-2 font-bold text-white"></BsArrowRightCircle>
                                            </button>
                                        </Link>


                                    </div>

                                </div>
                            ))
                        )}
                    </div>
                    <div className="mt-4 text-center">
                        <button
                            onClick={handleDisplayCourses}
                            className="p-2 text-4xl rounded-full text-cyan-500 bg-cyan-50"
                        >
                            {displayCourses.length > 6 ? <FaChevronUp /> : <FaChevronDown />}
                        </button>

                    </div>
                </>
            )}
        </div>
    );

    // return (
    //     <div id="popularCourses" className="px-5 my-10 xl:px-0">
    //         {loading ? (
    //             <div>Loading...</div>
    //         ) : (
    //             <>
    //                 <h2 className="mb-8 text-3xl font-bold text-center">
    //                     Popular Courses
    //                 </h2>
    //                 <div className="flex flex-col justify-between sm:flex-row item-center">
    //                     <div className="relative w-full sm:w-10/12 md:w-7/12 lg:w-5/12">
    //                         <input
    //                             type="text"
    //                             placeholder="Search Course Name"
    //                             value={searchTerm}
    //                             onChange={(e) => setSearchTerm(e.target.value)}
    //                             className="w-full p-1 border-2 rounded-md border-cyan-500"
    //                         />
    //                         <IoIosSearch className="absolute text-green-600 transform -translate-y-1/2 top-1/2 right-1" size={30} />
    //                     </div>
    //                     <div className="flex flex-col sm:flex-row">
    //                         {/* Your filter dropdowns go here */}
    //                     </div>
    //                 </div>
    //                 <div className="grid gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3">
    //                     {displayCourses.length === 0 ? (
    //                         <p className="text-xl text-red-500 text-start">No course found...</p>
    //                     ) : (
    //                         displayCourses.map((course) => (
    //                             <div key={course.id} className="p-4 my-5 rounded bg-cyan-50 shadowAlll">
    //                                 <img className='rounded' src={course.classImg} alt={course.className} />
    //                                 <h3 className="my-2 text-lg font-semibold">{course.className}</h3>
    //                                 <p className="my-2 text-gray-600">Instructor Name: {course.instructorName}</p>
    //                                 {/* Other course details go here */}
    //                             </div>
    //                         ))
    //                     )}
    //                 </div>
    //                 <div className="mt-4 text-center">
    //                     <button
    //                         onClick={handleDisplayCourses}
    //                         className="p-2 text-4xl text-green-500 rounded-full bg-green-50"
    //                     >
    //                         {displayCourses.length > 6 ? <FaChevronUp /> : <FaChevronDown />}
    //                     </button>
    //                 </div>
    //             </>
    //         )}
    //     </div>
    // );
};

export default ClassData;
