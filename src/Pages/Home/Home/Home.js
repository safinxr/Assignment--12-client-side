import React from 'react';
import Footer from '../../Footer/Footer';
import Carousel from '../Carousel/Carousel';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Products></Products>
            <Reviews></Reviews>
            <Summary></Summary>
            <Footer></Footer>

        </div>
    );
};

export default Home;