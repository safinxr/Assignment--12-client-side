import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [navColor, setNavColor] = useState(false)
    
    
    const changNavColor =()=>{
        if(window.scrollY >= 100){
            setNavColor(true)
        }
        else{
            setNavColor(false)
        }
    }
    window.addEventListener('scroll', changNavColor)
    return (
        <nav className='navbar navbar-expand-lg sticky-top bg-color'>
            <div className="container">
                <Link className='navbar-brand ' to='/'>
                    <img className='w-75' src="https://i.ibb.co/z7WkSHJ/Untitled-150-70px-160-70px-160-60px-180-60px-200-60px.png" alt="" />
                    
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className='nave-item'>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "nav-link text-info fs-4 ms-2" : "nav-link fs-4 ms-2 text-white"
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='nave-item'>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "nav-link text-info fs-4 ms-2" : "nav-link fs-4 ms-2 text-white"
                                }
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className='nave-item'>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "nav-link text-info fs-4 ms-2" : "nav-link fs-4 ms-2 text-white"
                                }
                                to="/login"
                            >
                                Login
                            </NavLink>
                        </li>                       
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;