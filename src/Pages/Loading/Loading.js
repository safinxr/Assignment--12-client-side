import React from 'react';

const Loading = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center'>
            <div className="spinner-border text-color " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;