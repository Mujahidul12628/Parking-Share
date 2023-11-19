import React from 'react';
import TestimonialItem from './TestimonialItem';

const TeastimonialParent = () => {

    const testimonials = [
        {
            "name": "Ahad Hossain",
            "userImg": "https://i.ibb.co/0QqQXbd/user1.png",
            "userText": "This parking app saved me time and hassle. Super easy to use! Efficient and user-friendly. Highly recommend it for reliable parking.",
            "review": 5,
            "Time": "2 Days ago",
        },
        {
            "name": "Yousuf Rahman",
            "userImg": "https://i.ibb.co/3Ntp4DJ/user2.png",
            "userText": "Efficient and reliable parking service. Highly recommended! App's features stand out.Using it for a long time. Great job !",
            "review": 4,
            "Time": "2 Days ago",
        },
        {
            "name": "Taimur Islam",
            "userImg": "https://i.ibb.co/GvxQS7D/user4.png",

            "userText": "Great experience with this parking app. Found a spot quickly! easy navigation. Convenient for daily parking needs. Highly satisfied!",
            "review": 4,
            "Time": "4 Days ago",
        },
        {
            "name": "Yeasin Tareq",
            "userImg": "https://i.ibb.co/r2YXfRJ/user5.png",
            "userText": "Love the convenience of this app. No issues. Excellent user interface, seamless parking experience. Go-to app for hassle-free parking.",
            "review": 4.7,
            "Time": "5 Days ago",
        },
        {
            "name": "Hasan Mahmud",
            "userImg": "https://i.ibb.co/XD1Rzv4/user3.png",
            "userText": "Smooth parking experience every time. Easy to navigate! Reliable app, must-have for stress-free parking. Satisfied user!",
            "review": 4.8,
            "Time": "1 Week ago",
        },
        {
            "name": "Nayem Uddin",
            "userImg": "https://i.ibb.co/GvxQS7D/user4.png",
            "userText": "Helped me find parking in busy areas. Very user-friendly app. Efficient in locating parking spaces. Easy to use, essential tool for me.",
            "review": 4.5,
            "Time": "1 Week ago",
        }
    ];



    return (
        <div>
            <TestimonialItem testimonials={testimonials}></TestimonialItem>
        </div>
    );
};

export default TeastimonialParent;


