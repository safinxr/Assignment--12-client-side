import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import Product from './Product';

const Products = () => {
    const {data, isLoading } = useQuery('products', ()=> fetch(`http://localhost:5000/product?count=6`).then(res =>res.json()))

    return (
        <div className="container py-5">
            <div className='d-flex justify-content-center mb-4 mt-5'>
                <h1 className="fw-bolder sub-color shadow py-3 px-4 rounded-4 d-inline-block ">OUR PRODUCTS</h1>
            </div>
            <div>
                {
                    isLoading ? <Loading></Loading>: ''
                }
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        data?.map(product => <Product 
                        key={product._id}
                        data={product}
                        ></Product>)
                    }                 
                </div>
            </div>
        </div>
    );
};

export default Products;