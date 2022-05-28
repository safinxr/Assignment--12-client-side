import React from 'react';

const Carousel = () => {
    return (
        <div id='page-top' >
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators ">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active slider-img-1 ">
                        <div class=" text-white carousel-caption slider-text">
                            <h1 className='display-3 fw-bold sub-color2'>welcome to <span className='text-color'>DAKU</span></h1>
                            <h2 className=''>Your trusted tool manufacturing company</h2>
                            <a target="_blank" className='btn bg-color text-white my-3 px-4 fs-5 rounded-5' href="https://www.ups.com/bd/en/shipping.page">Read more <i className="fa-solid fa-angles-right"></i></a>
                        </div>
                    </div>
                    <div className="carousel-item slider-img-2 slider-img-2 ">
                        <div class=" text-white carousel-caption slider-text">
                            <h1 className='display-3 fw-bold sub-color2'>welcome to <span className='text-color'>DAKU</span></h1>
                            <h2 className=''>Your trusted tool manufacturing company</h2>
                            <a target="_blank" className='btn bg-color text-white my-3 px-4 fs-5 rounded-5' href="https://www.ups.com/bd/en/shipping.page">Read more <i className="fa-solid fa-angles-right"></i></a>
                        </div>
                    </div>
                    <div className="carousel-item slider-img-3 ">
                        <div class=" text-white carousel-caption slider-text ">
                            <h1 className='display-3 fw-bold sub-color2'>welcome to <span className='text-color'>DAKU</span></h1>
                            <h2 className=''>Your trusted tool manufacturing company</h2>
                            <a target="_blank" className='btn bg-color text-white my-3 px-4 fs-5 rounded-5' href="https://www.ups.com/bd/en/shipping.page">Read more <i className="fa-solid fa-angles-right"></i></a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;