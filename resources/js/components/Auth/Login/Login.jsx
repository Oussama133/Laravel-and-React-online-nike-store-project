import React, { useState } from 'react'
import logo from '../Register/logo.png'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export default function Login() {

    const navigate = useNavigate();

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: []
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('api/login', data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    localStorage.setItem('auth_role', res.data.role)
                    swal("Success", res.data.message, "success")
                    if (res.data.role == 'admin') {
                        navigate('/admin')
                    } else {
                        navigate('/')
                    }
                }
                else if (res.data.status === 401) {
                    swal("Avertissement", res.data.message, "warning");
                }
                else {
                    setLogin({ ...loginInput, error_list: res.data.validation_errors });
                }
            })
        })
    }

    return (
        <div className='d-flex justify-content-center align-items-center '  >
            <form className='form-container mt-5' onSubmit={loginSubmit} >
                <Link to='/' ><img src={logo} className='logo d-flex justify-content-center' /></Link>
                <h2>Entrez votre email pour nous rejoindre ou connectez-vous.</h2>
                <div className='form-group mt-3' >
                    <label htmlFor="email" className='mb-2'>Adresse E-mail</label>
                    <input type="email" className='form-control email' name='email' placeholder='E-mail'
                        value={loginInput.email} onChange={handleInput} />
                    <span style={{ 'color': 'red' }} >{loginInput.error_list.email}</span>
                </div>
                <div className='fµorm-group mt-3' >
                    <label htmlFor="password" className='mb-2'>Mode de passe</label>
                    <input type="password" className='form-control' name='password' placeholder='Mode de passe'
                        value={loginInput.password} onChange={handleInput} />
                    <span style={{ 'color': 'red' }} >{loginInput.error_list.password}</span>
                </div><br />
                <p class="small fw-bold pt-1 mb-0">Don't have an account?</p>
                <div class="text-center text-lg-start mt-2 pt-2">
                    <Link to='/register'>
                        <button type="button" class="outline float-start">Créer un compte
                        </button>
                    </Link>
                    <button type='submit' className='button float-end' >Continue</button>

                </div>
            </form>
        </div>
    )
}

