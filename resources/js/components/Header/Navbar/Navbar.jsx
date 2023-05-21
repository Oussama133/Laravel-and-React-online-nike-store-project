import React from 'react';
import logo from './logo.png';
import './Navbar.css';
import { FaUser, FaSearch } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-white'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center'>
                        <img className='logo mx-5' src={logo} alt='Logo' />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Link className='link-style' to="/homme" ><li className='nav-link mx-3 fw-bold fs-5'>Homme</li></Link>
                        <Link className='link-style' to="/femmme" ><li className='nav-link mx-3 fw-bold fs-5'>Femme</li></Link>
                        <Link className='link-style' to="/enfant" ><li className='nav-link mx-3 fw-bold fs-5'>Enfant</li></Link>
                        <Link className='link-style' to="/accessoires" ><li className='nav-link mx-3 fw-bold fs-5'>Accessoires</li></Link>
                    </div>
                    <div className='d-flex justify-content-end align-items-center'>
                        <li className='nav-link'>
                            <div className='input-group'>
                                <input type='search' placeholder='Search' className='form-control border-0' style={{ boxShadow: 'none' }} />
                                <button className='btn btn-outline-none border-0' type='button'>
                                    <FaSearch />
                                </button>
                            </div>
                        </li>
                        <li className='nav-link mx-1'>
                            <AiOutlineHeart className='icon' />
                        </li>
                        <li className='nav-link mx-1'>
                            <FaUser className='icon' />
                        </li>
                        <li className='nav-link mx-1'>
                            <HiOutlineShoppingBag className='icon' />
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
}
