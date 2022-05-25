import React from 'react';
import Carousel from '../Carousel/Carousel';
import Products from '../Products/Products';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Products></Products>
            <Summary></Summary>

        </div>
    );
};

export default Home;