import React from 'react';
import Footer from '../../Footer/Footer';
import Carousel from '../Carousel/Carousel';
import ContactUs from '../ContactUs/ContactUs';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Shipping from '../Shipping/Shipping';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Products></Products>
            <Summary></Summary>
            <Reviews></Reviews>
            <Shipping></Shipping>
            <ContactUs></ContactUs>
            <Footer></Footer>

        </div>
    );
};

export default Home;