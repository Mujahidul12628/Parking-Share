

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ManageTraining = () => {

    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('https://virtual-academy-server.vercel.app/campData')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const displayedData = showAll ? data : data.slice(0, 10);


    const handleUpdate = (index) => {
        const newQuantity = prompt('Enter the new quantity:'); // You can use a more sophisticated UI for input
        if (newQuantity !== null && !isNaN(newQuantity)) {
            const newData = [...data];
            newData[index].quantity = Number(newQuantity);
            setData(newData);
            toast.success("Quantity Updated", {
                autoClose: 1000,
            });
        } else {
            toast.warning("Invalid quantity input", {
                autoClose: 1000,
            });
        }
    };

    const handleDelete = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);

        // Show toast notification for successful deletion
        toast.error('Item Deleted', {
            autoClose: 1000,
        });
    };

    return (
        <div className='custom-scrollbar'>
            <h1 className='my-4 text-2xl font-semibold text-center lg:text-3xl text-cyan-500'>Selected Training</h1>
            {data.length > 0 ? (
                <div>
                    <table className="w-full mt-8 border border-collapse">
                        <thead>
                            <tr>
                                <th className="p-1 py-3 sm:table-cell bg-stone-200">Picture</th>
                                <th className="py-3 sm:table-cell bg-stone-200">Name</th>
                                <th className="py-3 sm:table-cell bg-stone-200">Instructor</th>
                                <th className="py-3 sm:table-cell bg-stone-200">Price</th>
                                <th className="py-3 sm:table-cell bg-stone-200">Category</th>
                                <th className="py-3 sm:table-cell bg-stone-200">Ratings</th>
                                <th className="py-3 sm:table-cell bg-stone-200">Payment</th>
                                <th className="py-3 sm:table-cell bg-slate-200">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedData.map((item, index) => (
                                <tr key={index}>
                                    <td className="border-b min-w-[100px] flex items-center justify-center">
                                        <img src={item.classImg} alt={item.className} className="m-2 w-28 h-28" />
                                    </td>
                                    <td className="border-b min-w-[100px] text-center">{item.className}</td>
                                    <td className="border-b min-w-[100px] text-center">{item.instructorName}</td>
                                    <td className="border-b min-w-[100px] text-center">{item.price}</td>
                                    <td className="border-b min-w-[100px] text-center">{item.category}</td>
                                    <td className="border-b min-w-[100px] text-center">{item.rating}</td>
                                    <td className="border-b min-w-[100px] text-center relative ">
                                        <Link to="/payment">

                                            <button className='p-1 px-3 text-sm text-white bg-green-500 rounded-md'>Payment</button>
                                        </Link>
                                    </td>
                                    <td className="border-b min-w-[100px] text-center relative ">
                                        <button className='p-1 text-sm text-white bg-red-500 rounded-md ' onClick={() => handleDelete(index)}>Remove Courses</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center justify-center px-4 py-2 mt-4 text-white rounded-md submit"
                    >
                        {showAll ? "Show Less" : "Show All Data"}
                    </button>
                </div>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
};

export default ManageTraining;


