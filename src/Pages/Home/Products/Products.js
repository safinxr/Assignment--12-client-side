import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import Product from './Product';

const Products = () => {
    const [count , setCount] = useState(3)
    const { data, isLoading, refetch } = useQuery('products', () => fetch(`http://localhost:5000/product?count=${count}`).then(res => res.json()))

    const recount= async ()=>{
        const newCount = count + 3;
        await setCount(newCount);        
        await refetch();  
    }
    return (
        <div className="container pt-5">
            <div className='d-flex justify-content-center mb-4 mt-5'>
                <h1 className="fw-bolder sub-color shadow py-3 px-4 rounded-4 d-inline-block ">OUR PRODUCTS</h1>
            </div>
            <div>
                {
                    isLoading ? <Loading></Loading> : ''
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
            <div className='d-flex justify-content-center mb-4 mt-5'>
                <button onClick={recount} className={count > data?.length ? 'd-none' : 'btn  shadow-lg rounded-5 px-5 py-2 sub-color fw-bold border-0 mx-auto'}><h2>See more <i className="fa-solid fa-angles-down"></i></h2></button>
            </div>

        </div>
    );
};

export default Products;