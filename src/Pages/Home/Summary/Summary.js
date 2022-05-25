import React from 'react';

const Summary = () => {
    return (
        <div className='container py-5   my-5'>
            <h1 className='text-center my-4 fw-bold sub-color'>MILLIONS BUSINESS TRUST US</h1>
            <div className='row shadow rounded-4'>
                <div className='col-6 col-md-3 border-end p-4'>
                    <h5 className='mb-1'>Served customer</h5>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h1 className='fw-bolder mb-0 main-color'>50K+</h1>
                        <h2 className='main-color'><i className="fa-solid fa-calendar-check"></i></h2>
                    </div>
                    <small>21% more than last Year</small>

                </div>
                <div className='col-6 col-md-3 border-end p-4'>
                    <h5 className='mb-1'>Annual revenue</h5>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h1 className='fw-bolder mb-0 sub-color2'>850K+</h1>
                        <h2 className='sub-color2'><i class="fa-solid fa-money-bill-trend-up"></i></h2>
                    </div>
                    <small>30% more than last Year</small>

                </div>
                <div className='col-6 col-md-3 border-end p-4'>
                    <h5 className='mb-1'>Happy Clients</h5>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h1 className='fw-bolder mb-0 main-color'>45k+</h1>
                        <h2 className='main-color'><i class="fa-solid fa-users"></i></h2>
                    </div>
                    <small>50% more than last Year</small>

                </div>
                <div className='col-6 col-md-3 p-4'>
                    <h5 className='mb-1'>Feedbacks</h5>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h1 className='fw-bolder mb-0 sub-color2'>40k+</h1>
                        <h2 className='sub-color2'><i className="fa-solid fa-heart"></i></h2>
                    </div>
                    <small>31% more than last Year</small>

                </div>
            </div>
        </div>
    );
};

export default Summary;