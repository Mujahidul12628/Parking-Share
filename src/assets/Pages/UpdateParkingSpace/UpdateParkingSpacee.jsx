
// import { useLoaderData } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const UpdateParkingSpacee = () => {
//     const parking = useLoaderData();
//     const { _id, name, location, contactInformation, reservationStatus, rates, startingTime, endTime, vehicleCategory } = parking;

//     const handleUpdateParking = (event) => {
//         event.preventDefault();

//         const form = event.target;

//         const updatedName = form.querySelector('[name=name]').value;
//         const updatedVehicleCategory = form.querySelector('[name=vehicleCategory]').value;
//         const updatedLocation = form.querySelector('[name=location]').value;
//         const updatedContactInformation = form.querySelector('[name=contactInformation]').value;
//         const updatedReservationStatus = form.querySelector('[name=reservationStatus]').value;
//         const updatedRates = form.querySelector('[name=rates]').value;
//         const updatedStartingTime = form.querySelector('[name=startingTime]').value;
//         const updatedEndTime = form.querySelector('[name=endTime]').value;

//         const updatedParking = {
//             name: updatedName,
//             vehicleCategory: updatedVehicleCategory,
//             location: updatedLocation,
//             contactInformation: updatedContactInformation,
//             reservationStatus: updatedReservationStatus,
//             rates: updatedRates,
//             startingTime: updatedStartingTime,
//             endTime: updatedEndTime,
//         };

//         console.log(updatedParking);

//         // send data to the server
//         fetch(`http://localhost:5000/parking/${_id}`, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify(updatedParking),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 if (data.modifiedCount > 0) {
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'Parking Updated Successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool',
//                     });
//                 }
//             });
//     };


//     return (
//         <div className="bg-[#F4F3F0] p-24">
//             <h2 className="text-3xl font-extrabold">Update parking: {name}</h2>
//             <form onSubmit={handleUpdateParking}>
//                 {/* form name and quantity row */}
//                 <div className="mb-8 md:flex">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">parking Name</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="name" defaultValue={name} placeholder="parking Name" className="w-full input input-bordered" />
//                         </label>
//                     </div>
//                     <div className="ml-4 form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Vehicle Category</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="vehicleCategory" defaultValue={vehicleCategory} placeholder="Vehicle Category" className="w-full input input-bordered" />
//                         </label>
//                     </div>
//                 </div>
//                 {/* form supplier row */}
//                 <div className="mb-8 md:flex">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Location</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="location" defaultValue={location} placeholder="Location" className="w-full input input-bordered" />
//                         </label>
//                     </div>
//                     <div className="ml-4 form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Reservation Status</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="reservationStatus" defaultValue={reservationStatus} placeholder="Reservation on/off" className="w-full input input-bordered" />
//                         </label>
//                     </div>
//                 </div>
//                 {/* form category and details row */}
//                 <div className="mb-8 md:flex">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Price</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="rates" defaultValue={rates} placeholder="Price $" className="w-full input input-bordered" />
//                         </label>
//                     </div>
//                     <div className="ml-4 form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Contact Information</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="contactInformation" defaultValue={contactInformation} placeholder="Contact Number" className="w-full input input-bordered" />
//                         </label>
//                     </div>

//                 </div>
//                 <div className="mb-8 md:flex">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Starting Date & Time</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="startingTime" defaultValue={startingTime} placeholder="Starting Date - Time" className="w-full input input-bordered" />
//                         </label>
//                     </div>
//                     <div className="ml-4 form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">End Date & Time</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="endTime" defaultValue={endTime} placeholder="End Date - Time" className="w-full input input-bordered" />
//                         </label>
//                     </div>

//                 </div>
//                 {/* form Photo url row */}

//                 <input type="submit" value="Add Parking" className="w-full col-span-2 py-2 mt-5 font-semibold text-white bg-blue-400 border-2 border-blue-400 rounded-md hover:bg-transparent hover:text-blue-500" />

//             </form>
//         </div>
//     );
// };

// export default UpdateParkingSpacee;

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const parking = useLoaderData();
    const { _id, name, location } = parking;

    const updateParkingSpace = (event) => {
        event.preventDefault();

        const form = event.target;
        const updatedName = form.name.value;
        const updatedLocation = form.location.value;

        const updatedParking = { name: updatedName, location: updatedLocation };

        console.log(updatedParking);

        // send data to the server
        fetch(`http://localhost:5000/parking/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedParking),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Coffee Updated Successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            })
            .catch((error) => {
                console.error("Error updating coffee:", error);
                // Handle the error, show an error message, etc.
            });
    };

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Update Coffee: {name}</h2>
            <form onSubmit={updateParkingSpace}>
                <div className="mb-8 md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Parking Owner Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                placeholder="Name"
                                className="w-full input input-bordered"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="location"
                                defaultValue={location}
                                placeholder="Location"
                                className="w-full input input-bordered"
                            />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateCoffee;
