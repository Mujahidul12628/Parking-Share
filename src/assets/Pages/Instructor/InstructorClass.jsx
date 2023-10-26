

// import React, { useEffect, useState } from 'react';
// import Glide from '@glidejs/glide';
// import '@glidejs/glide/dist/css/glide.core.min.css';

// const InstructorClass = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         // Fetch data from the backend API
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://virtual-academy-server.vercel.app/campData');
//                 const result = await response.json();
//                 setData(result); // Assuming the data is an array of objects
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     useEffect(() => {
//         // Initialize Glide with the fetched data
//         const glide = new Glide('.glide', {
//             type: 'carousel',
//             startAt: 0,
//             perView: 3,
//             autoplay: 2000, // Set the20 autoplay interval in milliseconds (e.g., 2000ms = 2 seconds)
//         });

//         // Mount Glide
//         glide.mount();

//         // Cleanup on component unmount
//         return () => {
//             glide.destroy();
//         };
//     }, [data]); // Trigger the effect when data changes

//     return (
//         <div className="py-10 bg-cyan-50 glide">
//             <div className="glide__track" data-glide-el="track">
//                 <ul className="glide__slides">
//                     {data.map((item) => (
//                         <li key={item.id} className="glide__slide">
//                             {/* Corrected property names */}
//                             <img src={item.instructorImg} alt={item.instructorName} />
//                             <h3>{item.className}</h3>
//                             <p>{item.instructorJob}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>

//     );
// };

// export default InstructorClass;
