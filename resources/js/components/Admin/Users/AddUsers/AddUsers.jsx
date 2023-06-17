import React, { useState } from 'react'
import './AddUsers.css'
import { AiOutlineUserAdd } from 'react-icons/ai'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

export default function AddUsers() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        role: ''
    })

    const handleInput = (e) => {
        e.persist();
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            nom: userData.nom,
            prenom: userData.prenom,
            email: userData.email,
            password: userData.password,
            role: userData.role
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('http://127.0.0.1:8000/api/add', data).then(res => {
                if (res.data.status === 200) {
                    swal('Succès', res.data.message, 'success')
                    navigate('/admin/users')
                }
                else {
                    swal('Oops', res.data.validation_errors, 'warning')
                }
            })
        })
    }

    return (
        <div>
            <form>
                <h3 className='text-center my-3' >𝐀𝐣𝐨𝐮𝐭𝐞𝐫 𝐮𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫 𝐨𝐮 𝐮𝐧 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐭𝐞𝐮𝐫.</h3>

                <div className='col' >
                    <div className="form-group">
                        <input className='input w-100 my-3' required name='nom' type="text" placeholder='𝙽𝚘𝚖'
                            value={userData.nom}
                            onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <input className='input w-100 my-3' required name='prenom' type="text" placeholder='𝙿𝚛𝚎𝚗𝚘𝚖'
                            value={userData.prenom}
                            onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="email" required className='input w-100 my-3' placeholder='𝙴𝚖𝚊𝚒𝚕' name='email'
                            value={userData.email}
                            onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="password" required className='input w-100 my-3' placeholder='𝙼𝚘𝚝 𝚍𝚎 𝚙𝚊𝚜𝚜𝚎' name='password'
                            value={userData.password}
                            onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <select name="role" required className='w-100 input my-3' value={userData.role}
                            onChange={handleInput} >
                            <option value="" disabled selected >𝚂𝚎𝚕𝚎𝚌𝚝 𝚕𝚎 𝚁𝚘𝚕𝚎</option>
                            <option value="user">𝚄𝚝𝚒𝚕𝚒𝚜𝚊𝚝𝚎𝚞𝚛</option>
                            <option value="admin">𝙰𝚍𝚖𝚒𝚗</option>
                        </select>
                    </div>
                    <button onClick={handleSubmit} className='btn btn-success rounded float-end my-3' ><AiOutlineUserAdd />  Ajouter</button>
                </div>
            </form>
        </div>
    )
}

