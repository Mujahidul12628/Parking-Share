import React, { useState } from 'react';

const AddTraining = () => {
    const initialTrainingData = {
        className: '',
        instructorName: '',
        instructorJob: '',
        teacherJoined: '',
        experience: '',
        coursesTaught: [''],
        availableSeats: 0,
        price: 0,
        email: '',
        takenClasses: 0,
        rating: 0,
        category: '',
        date: '',
        courseContent: [
            {
                title: '',
                description: 'Overview of the basic skills and rules of training.',
            },
        ],
    };

    const [trainingData, setTrainingData] = useState(initialTrainingData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTrainingData({
            ...trainingData,
            [name]: value,
        });
    };

    const handleCourseChange = (index, value) => {
        const updatedCourses = [...trainingData.coursesTaught];
        updatedCourses[index] = value;

        setTrainingData({
            ...trainingData,
            coursesTaught: updatedCourses,
        });
    };

    const handleContentChange = (index, field, value) => {
        const updatedContent = [...trainingData.courseContent];
        updatedContent[index] = {
            ...updatedContent[index],
            [field]: value,
        };

        setTrainingData({
            ...trainingData,
            courseContent: updatedContent,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can perform actions when the form is submitted, such as sending data to a server or updating state.

        // For now, let's just log the trainingData to the console.
        console.log('Form Submitted:', trainingData);

        // If you want to reset the form after submission, you can use the following line.
        setTrainingData(initialTrainingData);
    };

    return (
        <div className='w-10/12 mx-auto my-10 rounded-md shadowBack'>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 px-6 py-4 rounded-md shadow-lg">
                <div className="col-span-2 text-2xl font-bold text-center text-cyan-500">
                    Add a Training Course
                </div>

                <label>
                    <p>Training Name*</p>
                    <input
                        type="text"
                        name="className"
                        value={trainingData.className}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border-2 rounded-md shadowInput border-cyan-500"
                        required
                    />
                </label>
                <label>
                    <p>Training Price*</p>
                    <input
                        type="number"
                        name="price"
                        value={trainingData.price}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border-2 rounded-md shadowInput border-cyan-500"
                        required
                    />
                </label>
                <label>
                    <p>Available Seats*</p>
                    <input
                        type="number"
                        name="availableSeats"
                        value={trainingData.availableSeats}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border-2 rounded-md shadowInput border-cyan-500"
                        required
                    />
                </label>
                <label>
                    <p>Instructor Name*</p>
                    <input
                        type="text"
                        name="instructorName"
                        value={trainingData.instructorName}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border-2 rounded-md shadowInput border-cyan-500"
                        required
                    />
                </label>
                <label>
                    <p>Instructor Job*</p>
                    <select
                        name="instructorJob"
                        value={trainingData.instructorJob}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border-2 rounded-md shadowInput border-cyan-500"
                        required
                    >
                        <option value="" disabled>Select Instructor Job</option>
                        <option value="Trainer">Trainer</option>
                        <option value="Trainer">Assistant Trainer</option>

                    </select>
                </label>
                <label>
                    <p>Teacher Joining Date*</p>
                    <input
                        type="date"
                        name="teacherJoined"
                        value={trainingData.teacherJoined}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border-2 rounded-md shadowInput border-cyan-500"
                        required
                    />
                </label>

                <label>
                    <p>Experience*</p>
                    <input
                        type="text"
                        name="experience"
                        value={trainingData.experience}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border-2 rounded-md shadowInput border-cyan-500"
                        required
                    />
                </label>




                {/* ... (other input fields) */}

                <label>
                    <p>Category*</p>
                    <select
                        name="category"
                        value={trainingData.category}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border-2 rounded-md shadowInput border-cyan-500"
                        required
                    >
                        <option value="" disabled >Select Category</option>
                        <option value="Indoor">Indoor</option>
                        <option value="Outdoor">Outdoor</option>
                        <option value="Physical">Physical</option>
                    </select>
                </label>
                <label>
                    <p>Description</p>
                    <textarea
                        name="date"
                        value={trainingData.date}
                        onChange={handleChange}
                        className="w-full p-3 mt-1 border-2 rounded-md shadowInput border-cyan-500"
                    />
                </label>
                <label className='relative'>
                    <p>Training Conduct*</p>
                    {trainingData.coursesTaught.map((course, index) => (
                        <input
                            key={index}
                            type="text"
                            value={course}
                            onChange={(e) => handleCourseChange(index, e.target.value)}
                            className="w-full p-2 mt-1 border-2 rounded-md shadowInput border-cyan-500"
                            required
                        />


                    ))}
                    <button
                        type="button"
                        onClick={() => setTrainingData({ ...trainingData, coursesTaught: [...trainingData.coursesTaught, ''] })}
                        className="px-2 py-1 mt-1 border-2 rounded-md shadow-lg border-slate-300 bg-slate-200"
                    >
                        More ...
                    </button>
                </label>


                <button type="submit" className="col-span-2 p-2 mt-4 text-white rounded-md shadowBack bg-cyan-500">
                    Add Training
                </button>
            </form>
        </div>
    );
};

export default AddTraining;
