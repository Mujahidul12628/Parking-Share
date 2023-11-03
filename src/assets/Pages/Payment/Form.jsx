import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Form = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleAddParking = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const currency = form.currency.value;
        const postCode = form.postCode.value;
        const address = form.address.value;
        const contactInformation = form.contactInformation.value;

        if (!name || !currency || !postCode || !address || !contactInformation) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all the required fields',
                icon: 'error',
                confirmButtonText: 'Ok',
            });
            return;
        }

        const newParking = { name, currency, postCode, address, contactInformation };
        console.log(newParking);

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
                {/* <div className="mb-2">
                    <label className="label">
                        <span className="label-text">Currency</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="currency" placeholder="Currency" className="w-full input input-bordered" />
                    </label>
                </div> */}
                <div className="mb-2">
                    <label className="label">
                        <span className="label-text">Currency</span>
                    </label>
                    <label className="select">
                        <select name="currency" value={selectedCategory} onChange={handleCategoryChange} className="select-bordered">
                            <option value="" disabled>Select Currency</option>
                            <option value="BDT">BDT</option>
                            <option value="USD">USD</option>
                            <option value="EURO">EURO</option>
                        </select>
                    </label>
                </div>
                <div className="mb-2">
                    <label className="label">
                        <span className="label-text">Post Code</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="postCode" placeholder="Post Code" className="w-full input input-bordered" />
                    </label>
                </div>
                <div className="mb-2">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="address" placeholder="Address" className="w-full input input-bordered" />
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

                {/* Submit Button */}
                <input type="submit" value="Add Parking" className="col-span-2 py-2 mt-5 font-semibold text-white bg-blue-400 border-2 border-blue-400 rounded-md hover:bg-transparent hover:text-blue-500" />
            </form>
        </div>
    );
};

export default Form;

