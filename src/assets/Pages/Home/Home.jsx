import React from 'react';
import Class from '../Class/Class';
import Banner from './Banner';
import Instructor from '../Instructor/Instructor';
import ClassData from '../Class/ClassData';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ClassData></ClassData>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;