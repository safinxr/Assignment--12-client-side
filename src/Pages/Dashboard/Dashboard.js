import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className='row'>

                <div className='col-3 shadow-lg sid-nav p-0 rounded-0'>
                        <Link className='link-hover nav-link w-100 fs-4 ps-5 mt-2 mb-2 py-2'  to='/dashboard/myorders'>My Orders</Link>
                        <Link className='link-hover nav-link w-100 fs-4 ps-5 mb-2 py-2'  to='/dashboard/profile'>My Profile</Link>
                        <Link className='link-hover nav-link w-100 fs-4 ps-5 mb-2 py-2'  to='/dashboard/addreview'>Add Review</Link>




                </div>
                <div className='col-9 ms-auto px-5 mt-3'>
                    <h2 className='sub-color2 fw-bold text-center'>Welcome to your Dashboard</h2>
                    <Outlet></Outlet>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;