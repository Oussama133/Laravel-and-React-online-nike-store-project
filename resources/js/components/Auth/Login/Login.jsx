import React, {useState} from 'react'
import logo from '../Register/logo.png'
import '../Register/Register.css'
import { Link, useNavigate } from 'react-router-dom'

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
                    swal("Success", res.data.message, "success")
                    navigate('/')
                }
                else if (res.data.status === 401) {
                    swal("Warning", res.data.message, "warning");
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
                <p className='p' >Maroc</p>
                <div className='form-group' >
                    <label htmlFor="email">Adresse E-mail* :</label>
                    <input type="email" className='form-control' name='email' placeholder='E-mail'
                    value={loginInput.email} onChange={handleInput} />
                    <span style={{'color':'red'}} >{loginInput.error_list.email}</span>
                </div>
                <div className='form-group' >
                    <label htmlFor="password">Password* :</label>
                    <input type="password" className='form-control' name='password' placeholder='Password'
                     value={loginInput.password} onChange={handleInput} />
                     <span style={{'color':'red'}} >{loginInput.error_list.password}</span>
                </div><br />
                <p className='p' >En continuant j'accepte <Link to='/policy' ><span style={{ textDecoration: "underline" }} >la politique de confidentialité </span></Link>
                    et <Link to='/condition' ><span style={{ textDecoration: "underline" }} >les conditions d'utilisation</span></Link>de Nike .</p>
                <button type='submit' className='btn btn-dark float-end mt-3 rounded' >Continue</button>
            </form>
        </div>
    )
}

