import React from 'react';

const Review = ({data}) => {
    const {name, img, rating, review, country} = data
    return (
        <div className="col">
            <div className="card h-100 shadow rounded-4 mt-5 mt-md-4" >
                <img src={img} className="card-img-top review-img" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title mb-0">{name}</h5>
                    <small>{country}</small>
                    <div className=' d-flex align-items-center justify-content-center'>
                        <div className='border w-50'></div>
                        <img className='quote-img' src="https://cdn-icons-png.flaticon.com/128/6314/6314351.png" alt="" />
                        <div className='border w-50'></div>
                    </div>
                    <p className="card-text">{review}</p>
                    <div>
                        <i class="text-warning fa-solid fa-star"></i>
                        <i class="text-warning fa-solid fa-star"></i>
                        <i class="text-warning fa-solid fa-star"></i>
                        <i class="text-warning fa-solid fa-star"></i>
                        <i class="text-warning fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;