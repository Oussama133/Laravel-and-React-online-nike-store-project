import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import './Navbar.css';
import { FaUser, FaSearch } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Profile from '../../Profile/Profile';

export default function Navbar({role}) {

    const [isProfileModalOpen,setIsProfileModalOpen]=useState(false);
    const isAuthenticated = !!localStorage.getItem('auth_name');

    const toggleProfileModal = () => {
        setIsProfileModalOpen(!isProfileModalOpen);
    }
    const closeProfileModal = () => {
        setIsProfileModalOpen(false)
    }
// --------------------------------------------------------------------------------------------------

    const title = ["Livraison et retours gratuits", "-25 % Pour l'achat de deux articles ou plus","Réduction étudiante"];
    const [currentState , setCurrentState] = useState(0)
    useEffect (()=>{
        const intervalId = setInterval(()=>{
            setCurrentState((currentState+1)%title.length);
        },2500);
        return ()=> clearInterval(intervalId);
    },[currentState])

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-white'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center'>
                        <Link to='/' ><img className='logo mx-5' src={logo} alt='Logo' /></Link>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Link className='link-style' to="/homme" ><li className='nav-link mx-3 fw-bold fs-5'>Homme</li></Link>
                        <Link className='link-style' to="/femme" ><li className='nav-link mx-3 fw-bold fs-5'>Femme</li></Link>
                        <Link className='link-style' to="/enfant" ><li className='nav-link mx-3 fw-bold fs-5'>Enfant</li></Link>
                        <Link className='link-style' to="/accessoires" ><li className='nav-link mx-3 fw-bold fs-5'>Accessoires</li></Link>
                        {isAuthenticated && role == 'admin' && (
                            <Link className='link-style' to="/admin"><li className='nav-link mx-3 fw-bold fs-5' >Admin Panel</li></Link>
                        )}
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
                        <li style={{cursor : 'pointer'}} className='nav-link mx-1' onClick={toggleProfileModal} >
                            <FaUser className='icon' />
                        </li>
                        <li className='nav-link mx-1'>
                            <HiOutlineShoppingBag className='icon' />
                        </li>
                    </div>
                </div>
            </nav>
            <nav>
                <h3 className='text-white text-center slider' >{`${title[currentState]}`}</h3>
            </nav>
            {isProfileModalOpen && isAuthenticated && <Profile onClose={closeProfileModal} />}
        </div>
    );
}
