
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const TrainerReview = () => {
    const { user } = useContext(AuthContext);
    const [trainingReviews, setTrainingReviews] = useState([
        {
            reviewer: 'Saiful Islam',
            date: 'October 22, 2023',
            reviewText: 'Trainer are very helpful in every session!',
            photoURL: 'https://i.ibb.co/4dPmYT7/317254151-941524960154105-4223630940868111719-n.jpg', // Add photo URL if available
        },
        {
            reviewer: 'Sakibur Rahman',
            date: 'October 21, 2023',
            reviewText: 'The Training provided a great mix of theory and practical learning.',
            photoURL: 'https://i.ibb.co/Xzjq8BV/Screenshot-2023-10-23-041542.jpg', // Add photo URL if available
        }

    ]);

    const [newReview, setNewReview] = useState({
        reviewer: user?.displayName || '',
        email: user?.email || '',
        reviewText: '',
        photoURL: user?.photoURL || '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleAddReview = () => {
        if (newReview.reviewText) {
            const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            const updatedReviews = [
                {
                    reviewer: newReview.reviewer,
                    date: currentDate,
                    reviewText: newReview.reviewText,
                    photoURL: newReview.photoURL,
                },
                ...trainingReviews,
            ];

            setTrainingReviews(updatedReviews);
            // Clear the form fields after adding a new review
            setNewReview({ reviewer: user?.displayName || '', email: user?.email || '', reviewText: '', photoURL: user?.photoURL || '' });
        } else {
            // Handle validation or show an error message to the user
            alert('Please fill in the review text to submit a review.');
        }
    };

    return (
        <div className="container p-8 mx-auto">
            {/* Existing Reviews */}
            <div>
                {trainingReviews.map((review, index) => (
                    <div key={index} className="flex items-center p-6 mb-4 bg-white rounded-md shadow-md">
                        {review.photoURL && <img src={review.photoURL} alt={`Photo of ${review.reviewer}`} className="w-10 h-10 mr-4 rounded-full" />}
                        <div>
                            <h3 className="mb-2 text-lg font-semibold">{review.reviewer}</h3>
                            <p className="mb-2 text-gray-500">{review.date}</p>
                            <p className="text-gray-700">{review.reviewText}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add New Review Form */}
            <div className="p-6 bg-white rounded-md shadow-md">
                <div className='flex items-center justify-between '>
                    <h3 className="text-2xl font-semibold ">Add Your Review</h3>
                    <div className=''>
                        {newReview.photoURL && (
                            <img src={newReview.photoURL} alt="Your Profile" className="w-12 h-12 rounded-full" />
                        )}
                    </div>
                </div>
                <form>
                    <label className="block mb-4">
                        Your Name:
                        <input
                            type="text"
                            name="reviewer"
                            value={newReview.reviewer}
                            onChange={handleInputChange}
                            className="block w-full p-2 mt-1 border-2 rounded-md form-input"
                            disabled
                        />
                    </label>
                    <label className="block mb-4">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={newReview.email}
                            onChange={handleInputChange}
                            className="block w-full p-2 mt-1 border-2 rounded-md form-input"
                            disabled
                        />
                    </label>
                    <label className="block mb-4">
                        Your Review:
                        <textarea
                            name="reviewText"
                            value={newReview.reviewText}
                            onChange={handleInputChange}
                            className="block w-full p-2 mt-1 border-2 rounded-md form-textarea"
                        />
                    </label>
                    <button
                        type="button"
                        onClick={handleAddReview}
                        className="px-4 py-2 text-white rounded-md bg-cyan-500 hover:bg-cyan-600"
                    >
                        Submit Review
                    </button>

                </form>
            </div>
        </div>
    );
};

export default TrainerReview;
