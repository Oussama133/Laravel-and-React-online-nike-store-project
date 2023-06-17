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
import Footer from './Footer/Footer'; // Resolved conflict here
import Admin from './admin/admin';

//-----------------------------------------------------------------
import AddUsers from './Admin/Users/AddUsers/AddUsers';
import UsersList from './Admin/Users/UsersList/UsersList';
import Dashboard from './Admin/Dashboard/Dashboard';
import ProductsList from './Admin/Products/ProductsList/ProductsList';
import AddProduct from './Admin/Products/AddProduct/AddProduct';
    

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




                {isAdmin ? (
                    <Route path="/admin" element={<Admin />}>
                        <Route path='dashboard' element={<Dashboard/>} />
                        <Route path='users' element={<UsersList/>} />
                        <Route path='add-user' element={<AddUsers/>} />
                        <Route path='products' element={<ProductsList/>} />
                        <Route path='add-product' element={<AddProduct/>} />
                    </Route>
                ) : (
                    // Redirect to another page or show an access denied message
                    <Route path="/admin" element={<Navigate to="/" replace />} />
                )}

            </Routes>

            <footer className='mt-5' >
                <Footer />
            </footer>
        </div>
    );
}
