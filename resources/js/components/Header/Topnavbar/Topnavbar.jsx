import React, { useState } from 'react'
import logo1 from './logo1.png'
import logo2 from './logo2.png'
import './Topnavbar.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import Contact from '../../Contact-Us/Contact'

export default function Topnavbar() {

    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const toggleContactModal = () => {
        setIsContactModalOpen(!isContactModalOpen)
    }
    const closeContactModal = () => {
        setIsContactModalOpen(false)
    }

    const navigate = useNavigate();

    const logoutSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/logout').then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal('Success', res.data.message, 'success');
                navigate('/login')
            }
        })
    }

    var AuthButton = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButton = (
            <div className='d-flex justify-content-end' >
                <Link to="#" className='link-style' ><li className='nav-link fw-bold' >Aide</li></Link>
                <span className='fw-bold mx-2 my-0' >|</span>
                <Link to='#' className='link-style' ><li className='nav-link fw-bold' onClick={toggleContactModal} >Nous Contacter</li></Link>
                <span className='fw-bold mx-2 my-0'>|</span>
                <Link to='/register' className='link-style' ><li className='nav-link fw-bold' >Nous Rejoindre</li></Link>
                <span className='fw-bold mx-2 my-0' >|</span>
                <Link to='/login' className='link-style' ><li className='nav-link fw-bold' >S'identifier</li></Link>
            </div>
        )
    } else {
        AuthButton = (
            <div className='d-flex justify-content-end' >
                <Link to="#" className='link-style' ><li className='nav-link fw-bold' >Aide</li></Link>
                <span className='fw-bold mx-2 my-0' >|</span>
                <Link to='#' className='link-style' ><li className='nav-link fw-bold' onClick={toggleContactModal} >Nous Contacter</li></Link>
                <span className='fw-bold mx-2 my-0'>|</span>
                <Link to='/register' className='link-style' ><li className='nav-link fw-bold' onClick={logoutSubmit} >Déconnexion</li></Link>
            </div>
        )
    }

    return (
        <div>
            <nav className='navbar navbra-expand-lg navbar-light bg-light' >
                <div className='container-fluid  ' >
                    <div className=' d-flex justify-content-start' >
                        <li className='nav-link' >
                            <img className='img  mx-4' src={logo2} />
                        </li>
                        <li className='nav-link' >
                            <img className='img' src={logo1} />
                        </li>
                    </div>
                    {AuthButton}
                </div>
            </nav>
            {isContactModalOpen && <Contact onClose={closeContactModal} />}
        </div>
    )
}

