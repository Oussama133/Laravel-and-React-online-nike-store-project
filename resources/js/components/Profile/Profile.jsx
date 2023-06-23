import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import { FaTrashAlt } from 'react-icons/fa'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export default function Profile({ onClose }) {
  const navigate = useNavigate();

  //------------------- update informations ----------------------------------
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    swal({
      title: 'Confirmation',
      text: 'Êtes-vous sûr(e) de vouloir modifier votre informations ?',
      icon: 'warning',
      buttons: ['Annuler', 'Modifier'],
      dangerMode: true,
      closeOnClickOutside: false,
    }).then((confirmed) => {
      if (confirmed) {
        axios.post('api/update', formData).then((res) => {
          if (res.data.status === 200) {
            swal('Succès', res.data.message, 'success');
            navigate('/');
          }
        });
      }
    });

    // Manually modify the button color
    const confirmButton = document.querySelector('.swal-button--confirm');
    if (confirmButton) {
      confirmButton.style.backgroundColor = '#198754';
    }
  };
  //------------------- update informations fin -------------------------------------

  //------------------- Update Password ---------------------------------------------
  const [formPasswordData, setFormPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handlePasswordUpdate = (e) => {
    e.preventDefault();

    if (
      formPasswordData.oldPassword.trim() === '' ||
      formPasswordData.newPassword.trim() === '' ||
      formPasswordData.confirmPassword.trim() === ''
    ) {
      swal('Erreur', 'Veuillez remplir tous les champs du mot de passe', 'error');
      return;
    }

    swal({
      title: 'Confirmation',
      text: 'Êtes-vous sûr(e) de vouloir modifier votre mot de passe ?',
      icon: 'warning',
      buttons: ['Annuler', 'Modifier'],
      dangerMode: true,
      closeOnClickOutside: false,
    }).then((confirmed) => {
      if (confirmed) {
        axios.post('api/update-password', formPasswordData).then((res) => {
          if (res.data.status === 200) {
            swal('Succès', res.data.message, 'success');
            navigate('/');
          }
        });
      }
    });

    // Manually modify the button color
    const confirmButton = document.querySelector('.swal-button--confirm');
    if (confirmButton) {
      confirmButton.style.backgroundColor = '#198754';
    }
  };
  //------------------- Update Password Fin -----------------------------------------

  //------------------ getting the authenticated user infos -------------------------
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('api/show');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, []);
  //------------------ getting the authenticated user infos Fin -------------------------

  //----------------------------- Delete User -----------------------------------------
  const deleteAccount = (e) => {
    e.preventDefault();
    swal({
      title: 'Confirmation',
      text: 'Êtes-vous sûr(e) de vouloir supprimer votre compte ?',
      icon: 'warning',
      buttons: ['Annuler', 'Supprimer'],
      dangerMode: true,
    }).then((confirmed) => {
      if (confirmed) {
        axios.post('api/delete').then((res) => {
          if (res.data.status === 200) {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_name');
            swal('Succès', res.data.message, 'success');
            navigate('/');
          }
        });
      }
    });
  };
  //------------------------ Delete User Fin ------------------------------------------


  return (
    <div className='d-flex justify-content-center align-items-center position-fixed top-0 left-0 w-100 h-100 bg-dark bg-opacity-50'>
      <div className='bg-white rounded p-3'>
        <button className='btn btn-outline-secondary fw-bold ' onClick={onClose}>X</button><br />
        <form>
          <div className="row">
            <h3 className='text-center' >Informations du compte</h3>

            <div className="col">
              <div className="form-group">
                <label htmlFor="prenom">Changé le prénom</label>
                <input type="text" className='form-control my-2' name='prenom'
                  placeholder={user ? user.prenom : ''}
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })} />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="nom">Changé le nom</label>
                <input type="text" className='form-control my-2' name="nom"
                  placeholder={user ? user.nom : ''}
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })} />
              </div>
            </div>

          </div>
          <div className='form-group' >
            <label htmlFor="email">Changé l'email</label>
            <input type="email" className='form-control my-2' name="email"
              placeholder={user ? user.email : ''}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <button type='submit' className='btn btn-success float-end' onClick={handleSubmit}><FiEdit /> Modifier les informations personelle</button><br />

          {/* ------------------------------------------------------------ Password --------------------------------------------------------- */}
          <div className='form-group w-50' >
            <label htmlFor="password">Changé le mot de passe</label>
            <input required className='form-control my-2' type="password" name="password"
              placeholder="Entrez l'ancien mot de passe"
              value={formPasswordData.oldPassword}
              onChange={(e) => setFormPasswordData({ ...formPasswordData, oldPassword: e.target.value })} />

            <input className='form-control my-2' type="password" name="new-password"
              placeholder="Entrez le nouveau mot de passe"
              value={formPasswordData.newPassword}
              onChange={(e) => setFormPasswordData({ ...formPasswordData, newPassword: e.target.value })} />

            <input className='form-control my-2' type="password" name="new-password"
              placeholder="Confirmez le nouveau mot de passe"
              value={formPasswordData.confirmPassword}
              onChange={(e) => setFormPasswordData({ ...formPasswordData, confirmPassword: e.target.value })} />
          </div>

          <div>
            <button onClick={onClose} className='btn btn-outline-success float-start'><AiOutlineArrowLeft /> Annuler</button>
            <button type='submit' className='btn btn-success float-end' onClick={handlePasswordUpdate}><FiEdit /> Modifier le mot de passe</button>
          </div>

          <h6 className='text-center text-danger mt-5 delete' onClick={deleteAccount} ><FaTrashAlt /> Supprimer le compte</h6>
        </form>
      </div>
    </div>
  );
}
