import React, { useState } from 'react'
import logo from './logo.png'
import './Register.css'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate , Link } from 'react-router-dom'


export default function Register() {

    const navigate = useNavigate()

    const [registerInput , setRegister] = useState({
        nom : '',
        prenom : '',
        email : '',
        password : '',
        error_list : []
    })

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput,[e.target.name]:e.target.value})
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            nom : registerInput.nom,
            prenom : registerInput.prenom,
            email : registerInput.email,
            password : registerInput.password
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('api/register', data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token)
                    localStorage.setItem('auth_name', res.data.username)//save the token and name on local storage application
                    swal('Success', res.data.message, 'success')
                    navigate('/')
                } else {
                    setRegister({ ...registerInput, error_list: res.data.validation_errors });
                }
            })
        })
    }

    return (
        <div className='d-flex justify-content-center' >
            <form className='form-container' onSubmit={registerSubmit} >
                    <Link to='/' ><img src={logo} className='logo d-flex justify-content-center' /></Link>
                    <h2 className='headline' >SOYEZ LE PREMIER INFORMÉ</h2>
                    <p className='p' >
                        Inscrivez-vous pour recevoir les e-mails Nike et profiter
                        avant tout le monde de notre actu, de contenus passionnants
                        te d'offres exclusives
                    </p>
                    <div className="form-group">
                        <label htmlFor="email">Adresse E-mail* :</label>
                        <input type="email" className="form-control" name='email' placeholder="Inscrire votre email address"
                        value={registerInput.email} onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nom">Prénom* :</label>
                        <input type="nom" className="form-control" name='nom' placeholder="Inscrire votre nom"
                        value={registerInput.nom} onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Nom de Famille* :</label>
                        <input type="prenom" className="form-control" name='prenom' placeholder="Inscrire votre Prenom"
                        value={registerInput.prenom} onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password* :</label>
                        <input type="password" className="form-control" name='password' placeholder="Inscrire votre Mot de passe"
                        value={registerInput.password} onChange={handleInput} />
                    </div><br />
                    <Link to='/login' ><p>Je ai déjà un compte </p></Link>
                    <button type="submit" className="btn btn-dark float-end mt-3 rounded">Créer un compte</button>
            </form>
        </div>
    )
}

