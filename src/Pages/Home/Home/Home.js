import React from 'react';
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

        </div>
    );
};

export default Home;