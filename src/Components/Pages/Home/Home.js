import React from 'react';
import { Card } from 'react-bootstrap';
import Banner from './Banner';
import BookAppoinment from './BookAppoinment';
import Cards from './Cards';
import Care from './Care';
import Contact from './Contact';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-10'>
            <Banner />
            <Cards/>
            <Services />
            <Care />
            <BookAppoinment />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;