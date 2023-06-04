import React, { useRef } from 'react'
import logo from './logo.png'
import './Contact.css'
import {IoIosSend} from 'react-icons/io'
import emailjs from '@emailjs/browser'

export default function Contact({ onClose }) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ecq86b7','template_xf52bkt',form.current,'RDd96wQ3Tj8YwYQpq')
            .then((result)=>{
                console.log(result.text);
            },(error) => {
                console.log(error.text);
            });
    };

    return (
        <div className=" contact d-flex justify-content-center align-items-center position-fixed top-0 left-0 w-100 h-100 bg-dark bg-opacity-50">
            <div className="bg-white rounded p-3 w-50">
                <button className="btn fw-bold" onClick={onClose}>X</button>
                <form ref={form} onSubmit={sendEmail} >
                    <h3 className='text-center fw-bold' >Contactez nous</h3>
                    <div className='d-flex justify-content-center' >
                        <img src={logo} className='logo-contact' />
                    </div>
                    <div className="form-group">
                        <input className='input w-100 my-3' name='nom' type="text" placeholder='Nom' />
                    </div>
                    <div className='form-group'>
                        <input className='input w-100 my-3' name='email' type="email" placeholder='E-mail' />
                    </div>
                    <div className="form-group">
                        <textarea className='input w-100 my-3' name='message' placeholder='Message' cols="20" rows="5"></textarea>
                    </div>
                    <div className='d-flex justify-content-center' >
                        <button type='submit' className='btn btn-dark' >Envoyer <IoIosSend/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

