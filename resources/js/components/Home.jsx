import React from 'react';
import { useLocation, Route, Routes, Navigate } from 'react-router-dom';
import Register from './Auth/Register/Register';
import Login from './Auth/Login/Login';
import Header from './Header/Header';
import Homme from './Categories/Homme/Homme';
import Femme from './Categories/Femme/Femme';
import Enfant from './Categories/Enfant/Enfant';
import Accessoires from './Categories/Accessoires/Accessoires';
import Accueil from './Accueil/Accueil';
<<<<<<< HEAD
import Footer from './Footer/Footer';
=======
import Admin from './admin/admin';
>>>>>>> c9da36806730edd615853679f5f6e36337a2bef0

export default function Home() {
    const location = useLocation();
    const hideNav = location.pathname === '/login' || location.pathname === '/register';
    const isAuthenticated = !!localStorage.getItem('auth_token');
    const role = localStorage.getItem('auth_role');
    const isAdmin = role === 'admin'

    return (
        <div>
            {!hideNav && (
                <nav>
                    <Header role={role} />
                </nav>
            )}
            <Routes>
                {isAuthenticated ? (
                    <Route path="*" element={<Navigate to="/" replace />} />
                ) : (
                    <>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </>
                )}
                <Route path='/' element={<Accueil />} />
                <Route path='/homme' element={<Homme />} />
                <Route path='femme' element={<Femme />} />
                <Route path='/enfant' element={<Enfant />} />
                <Route path='/accessoires' element={<Accessoires />} />
<<<<<<< HEAD
=======
                
                {isAdmin ? (
                    <Route path="/admin" element={<Admin />} />
                ) : (
                    // Redirect to another page or show an access denied message
                    <Route path="/admin" element={<Navigate to="/" replace />} />
                )}
>>>>>>> c9da36806730edd615853679f5f6e36337a2bef0

            </Routes>
            
            <footer className='mt-5' >
                <Footer />
            </footer>
        </div>
    );
}
