import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddParking = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const categoryImages = {
        bike: 'https://i.ibb.co/Bsrwrr4/bike.png',
        car: 'https://i.ibb.co/0cqNPMK/car.png',
        Van: 'https://i.ibb.co/jhMwNN5/van.png',
        Bus: 'https://i.ibb.co/CWpGDwW/Bus1.png',
        // Bus: 'https://i.ibb.co/VvW8N9F/bus.png',
        Pickup: 'https://i.ibb.co/CW14vPw/pickup-2.png',
        Truck: 'https://i.ibb.co/vYQkgGP/truck.png',
    };

    const handleAddParking = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const vehicleCategory = form.vehicleCategory.value;
        const location = form.location.value;
        const contactInformation = form.contactInformation.value;
        const reservationStatus = form.reservationStatus.value;
        const rates = form.rates.value;
        const startingTime = form.startingTime.value;
        const endTime = form.endTime.value;

        if (!name || !vehicleCategory || !location || !contactInformation || !reservationStatus || !rates || !startingTime || !endTime) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all the required fields',
                icon: 'error',
                confirmButtonText: 'Ok',
            });
            return;
        }

        const imageUrl = categoryImages[vehicleCategory];

        const newParking = {
            name,
            vehicleCategory,
            imageUrl,
            location,
            contactInformation,
            reservationStatus,
            rates,
            startingTime,
            endTime,
        };

        console.log(newParking);

        // send data to the server
        fetch('https://parking1-phi.vercel.app/parking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newParking),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Parking Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                    // Clear the form after successful submission
                    form.reset();
                }
            });
    };

    return (
        <div className="w-9/12 p-5 pb-8 mx-auto bg-blue-50">
            <h2 className="mb-5 text-3xl font-semibold text-center">Add a parking</h2>
            <form onSubmit={handleAddParking} className="grid grid-cols-2 gap-2">
                {/* Parking Name */}
                <div className="mb-2">
                    <label className="label">
                        <span className="label-text">Service Provider Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Parking Name" className="w-full input input-bordered" />
                    </label>
                </div>

                {/* Vehicle Category */}
                <div className="mb-2">
                    <label className="label">
                        <span className="label-text">Vehicle Category</span>
                    </label>
                    <label className="input-group">
                        <select
                            name="vehicleCategory"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="w-full input input-bordered"
                        >
                            <option value="">Select Vehicle Category</option>
                            <option value="bike">Bike</option>
                            <option value="car">Car</option>
                            <option value="Van">Van</option>
                            <option value="Bus">Bus</option>
                            <option value="Pickup">Pickup</option>
                            <option value="Truck">Truck</option>
                        </select>
                    </label>
                </div>

                {/* Image */}
                {selectedCategory && (
                    <div className="mb-2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            {/* Display the selected category's image dynamically */}
                            <img
                                src={categoryImages[selectedCategory]}
                                alt={`${selectedCategory} image`}
                                className="w-full"

                            />
                        </label>
                    </div>
                )}

                {/* Location */}
                <div className="mb-2">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="location" placeholder="Location" className="w-full input input-bordered" />
                    </label>
                </div>

                {/* Contact Information */}
                <div className="mb-2">
                    <label className="label">
                        <span className="label-text">Contact Information</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="contactInformation" placeholder="Contact Information" className="w-full input input-bordered" />
                    </label>
                </div>

                {/* Reservation Status */}
                <div className="mb-2">
                    <label className="label">
                        <span className="label-text">Reservation Status</span>
                    </label>
                    <label className="input-group">
                        <select
                            name="reservationStatus"
                            className="w-full input input-bordered"
                        >
                            <option value="open">Open</option>
                            <option value="closed">Closed</option>
                        </select>
                    </label>
                </div>

                {/* Rates */}
                <div className="mb-2">
                    <label className="label">
                        <span className="label-text">Rates</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rates" placeholder="Rates" className="w-full input input-bordered" />
                    </label>
                </div>

                {/* Starting Time */}
                <div className="mb-2">
                    <label className="label">
                        <span className="label-text">Starting Date and Time</span>
                    </label>
                    <label className="input-group">
                        <input type="datetime-local" name="startingTime" className="w-full input input-bordered" />
                    </label>
                </div>

                {/* End Time */}
                <div className="mb-2">
                    <label className="label">
                        <span className="label-text">End Time</span>
                    </label>
                    <label className="input-group">
                        <input type="datetime-local" name="endTime" className="w-full input input-bordered" />
                    </label>
                </div>

                {/* Submit Button */}
                <input type="submit" value="Add Parking" className="col-span-2 py-2 mt-5 font-semibold text-white bg-blue-400 border-2 border-blue-400 rounded-md hover:bg-transparent hover:text-blue-500" />
            </form>
        </div>
    );
};

export default AddParking;



// import React from 'react';
// import Swal from 'sweetalert2'

// const AddParking = () => {
//     const handleAddparking = event => {
//         event.preventDefault();

//         const form = event.target;

//         const name = form.name.value;
//         const quantity = form.quantity.value;
//         const supplier = form.supplier.value;
//         const taste = form.taste.value;
//         const category = form.category.value;
//         const details = form.details.value;
//         const photo = form.photo.value;
//         const vehicleCategory = form.vehicleCategory.value;
//         const size = form.size.value;

//         if (!name || !quantity || !supplier || !taste || !category || !details || !photo || !vehicleCategory || !size) {
//             Swal.fire({
//                 title: 'Error!',
//                 text: 'Please fill in all the fields',
//                 icon: 'error',
//                 confirmButtonText: 'Ok'
//             });
//             return;
//         }

//         const newparking = { name, quantity, supplier, taste, category, details, photo, vehicleCategory, size }


//         console.log(newparking);

//         // send data to the server
//         fetch('https://parking1-phi.vercel.app/parking', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(newparking)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.insertedId) {
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'parking Added Successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                     })
//                     // Clear the form after successful submission
//                     form.reset();
//                 }
//             })
//     }
//     return (
//         <div className="bg-[#F4F3F0] p-24">
//             <h2 className="text-3xl font-extrabold">Add a parking</h2>
//             <form onSubmit={handleAddparking}>
//                 {/* form name and quantity row */}
//                 <div className="mb-2 md:flex">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">parking Name</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="name" placeholder="parking Name" className="w-full input input-bordered" />
//                         </label>
//                     </div>
//                     <div className="ml-4 form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Available Quantity</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="quantity" placeholder="Available Quantity" className="w-full input input-bordered" />
//                         </label>
//                     </div>
//                 </div>
//                 {/* form supplier row */}
//                 <div className="mb-2 md:flex">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Supplier Name</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="supplier" placeholder="Supplier Name" className="w-full input input-bordered" />
//                         </label>
//                     </div>
//                     <div className="ml-4 form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Taste</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="taste" placeholder="Taste" className="w-full input input-bordered" />
//                         </label>
//                     </div>
//                 </div>
//                 {/* form category and details row */}
//                 <div className="mb-2 md:flex">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Category</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="category" placeholder="Category" className="w-full input input-bordered" />
//                         </label>
//                     </div>
//                     <div className="ml-4 form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Details</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="details" placeholder="Details" className="w-full input input-bordered" />
//                         </label>
//                     </div>
//                 </div>
//                 <div className="mb-2 md:flex">
//                     <div className=" form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Vehicle Category</span>
//                         </label>
//                         <label className="input-group">
//                             <select name="vehicleCategory" className="w-full input input-bordered">
//                                 <option value="bike">Bike</option>
//                                 <option value="car">Car</option>
//                                 <option value="Van">Van</option>
//                                 <option value="Bus">Bus</option>
//                                 <option value="Pickup">Pickup</option>
//                                 <option value="Truck">Truck</option>
//                             </select>
//                         </label>
//                     </div>
//                     <div className="ml-4 form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Size</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="size" placeholder="size" className="w-full input input-bordered" />
//                         </label>
//                     </div>
//                     {/* <div className="w-full form-control">
//                         <label className="label">
//                             <span className="label-text">Time</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="time" name="time" className="w-full input input-bordered" />
//                         </label>
//                     </div> */}
//                 </div>
//                 {/* form Photo url row */}
//                 <div className="mb-2">
//                     <div className="w-full form-control">
//                         <label className="label">
//                             <span className="label-text">Photo URL</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="photo" placeholder="Photo URL" className="w-full input input-bordered" />
//                         </label>
//                     </div>
//                 </div>
//                 <input type="submit" value="Add parking" className="btn btn-block bg-slate-300" />

//             </form>
//         </div>
//     );
// };

// export default AddParking;