import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="px-2 pt-5 bg-black">
            <div className='text-white text-center container col-12 col-md-4 mx-auto p-5'>
                <h3>DAKU</h3>
                <p>DAKU is a tool Manufacturer's website where you can select and order tools you want. We also take custom orders. We ship our tools globally so you can order it form any country. </p>
                <h4>
                    <i className="mx-3 text-white fa-brands fa-facebook"></i>
                    <i className="mx-3 text-white fa-brands fa-google"></i>
                    <i className="mx-3 text-white fa-brands fa-instagram-square"></i>
                    <i className="mx-3 text-white fa-brands fa-twitter"></i>
                    <i className="mx-3 text-white fa-brands fa-linkedin"></i>

                </h4>
            </div>
            <small className="text-white">
                Copyright &copy; {year} DAKU XR
            </small>
        </footer>
    );
};

export default Footer;