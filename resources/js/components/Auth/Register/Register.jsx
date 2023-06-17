import React, { useState } from 'react'
import logo from './logo.png'
import './Register.css'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate, Link } from 'react-router-dom'


export default function Register() {

    const navigate = useNavigate()

    const [registerInput, setRegister] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        error_list: []
    })

    const handleInput = (e) => {
        e.persist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value })
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            nom: registerInput.nom,
            prenom: registerInput.prenom,
            email: registerInput.email,
            password: registerInput.password
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('api/register', data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token)
                    localStorage.setItem('auth_name', res.data.username)//save the token and name on local storage application
                    swal('Succès', res.data.message, 'success')
                    navigate('/')
                } else {
                    setRegister({ ...registerInput, error_list: res.data.validation_errors });
                }
            })
        })
    }

    return (
        <div className='d-flex justify-content-center' >
            <form className='form-container mt-5' onSubmit={registerSubmit} >
                <Link to='/' ><img src={logo} className='logo d-flex justify-content-center' /></Link>
                <h2 className='headline' >Faisons de vous un Membre Nike.</h2>
                <p className='p' >
                Inscrivez-vous pour recevoir par e-mail les dernières infos sur les produits et offres de Nike, ainsi que sur les avantages Membres.
                </p>
                <div className="form-group">
                    <label htmlFor="email">Adresse E-mail* :</label>
                    <input type="email" className="form-control email" name='email' placeholder="Votre email address"
                        value={registerInput.email} onChange={handleInput} />
                    <span style={{ 'color': 'red' }} >{registerInput.error_list.email}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="nom">Nom de Famille* :</label>
                    <input type="nom" className="form-control" name='nom' placeholder="Votre nom"
                        value={registerInput.nom} onChange={handleInput} />
                    <span style={{ 'color': 'red' }} >{registerInput.error_list.nom}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="prenom">Prénom :</label>
                    <input type="prenom" className="form-control" name='prenom' placeholder="Votre Prénom"
                        value={registerInput.prenom} onChange={handleInput} />
                    <span style={{ 'color': 'red' }} >{registerInput.error_list.prenom}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mode de passe* :</label>
                    <input type="password" className="form-control" name='password' placeholder="Votre Mot de passe"
                        value={registerInput.password} onChange={handleInput} />
                    <span style={{ 'color': 'red' }} >{registerInput.error_list.password}</span>
                </div><br />
                <div className='d-flex'>
                    <input type="checkbox" />
                    <label >J'accepte la <a href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=MA&language=fr&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df"
                        target="_blank" className='small fw-bold'>Politique de confidentialité</a>  et les <a href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=MA&language=fr&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df"
                            target="_blank" className='small fw-bold'>Conditions d'utilisation</a> de Nike.</label>
                </div>
                <div className='mt-3'>

                    {/* <p class="small fw-bold pt-1 mt-0">J'ai déjà un compte</p> */}
                    <Link to='/login'>
                        <button type="button" class="outline float-start">S'identifier
                        </button>
                    </Link>
                    <button type="submit" className="button float-end">Créer un compte</button>
                </div>
            </form>
        </div>
    )
}

