
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Review = () => {
    // const { user } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    const [trainingReviews, setTrainingReviews] = useState([
        {
            reviewer: 'Sakibur Rahman',
            date: 'October 21, 2023',
            reviewText: 'The Training provided a great mix of theory and practical learning.',
            photoURL: 'https://i.ibb.co/HDGd7qw/305805139-1494293114335895-7148184387184749545-n.jpg', // Add photo URL if available
        },
        {
            reviewer: 'Razve Khan',
            date: 'October 20, 2023',
            reviewText: 'I thoroughly enjoyed the sports gaming training!',
            photoURL: 'https://i.ibb.co/vsWLH49/Screenshot-2023-10-22-122336.jpg', // Add photo URL if available
        },
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
        <div className="container mx-auto">
            <h1 className='mt-5 text-2xl font-semibold text-center'>User Review</h1>
            <div>
                {trainingReviews.map((review, index) => (
                    <div key={index} className="flex items-center p-6 mb-4 bg-white rounded-md shadow-md">
                        {review.photoURL && <img src={review.photoURL} alt={`Photo of ${review.reviewer}`} className="w-8 h-8 mr-4 border-2 rounded-full" />}
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
                        className="px-4 py-2 text-white rounded-md bg-blue-400 hover:bg-cyan-600"
                    >
                        Submit Review
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Review;
