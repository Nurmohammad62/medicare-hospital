import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

//Home page
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;