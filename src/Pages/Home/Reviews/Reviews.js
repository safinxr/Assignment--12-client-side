import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Review from './Review';


const Reviews = () => {
    const [count , setCount] = useState(3)
    const { data, isLoading, refetch } = useQuery('reviews', () => fetch(`https://polar-garden-93471.herokuapp.com/review?count=${count}`).then(res => res.json()))


    return (
        <div className='bg-sub py-5 my-5'>
            <div className='container py-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                        data?.map(reviews => <Review
                        key={reviews._id}
                        data={reviews}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;