import React from 'react';
import { Link } from 'react-router-dom';

const Shipping = () => {
    return (
        <div className='shipping-img my-5 d-flex justify-content-center align-items-center'>
            <div className='col-12 col-md-6'>
                <h1 className='text-white'> We have a Global shipping licence so we can deliver your product where ever you want. Know more about our shipping here,</h1>
                <a target="_blank" className='btn bg-color text-white my-3' href="https://www.ups.com/bd/en/shipping.page">Read more <i className="fa-solid fa-angles-right"></i></a>
            </div>
        </div>
    );
};

export default Shipping;