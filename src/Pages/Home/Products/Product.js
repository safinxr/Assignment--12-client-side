import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ data }) => {
    const { img, name, description, available, minimum, price, _id } = data
    const navigate = useNavigate()
    return (
        <div className="col ">
            <div className="card h-100 border-0 shadow rounded-4">
                <div className='cart-img-div'>
                    <img src={img} className="card-img-top h-100 w-100" alt="..." />
                </div>
                <div className="card-body pb-1">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className='mb-1'>Available quantity: {available}</p>
                    <p className='mb-1'>Minimum quantity: {minimum}</p>
                    <p className='mb-1'>Price: ${price}</p>
                </div>
                <div className="">
                    <button onClick={()=>navigate(`/order/${_id}`)} className='btn w-100 fs-5 text-white bg-color fw-bold c-rounded-bottom '>Order Now <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;