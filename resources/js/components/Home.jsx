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

import AddUsers from './Admin/Users/AddUsers/AddUsers';
import UsersList from './Admin/Users/UsersList/UsersList';
import Dashboard from './Admin/Dashboard/Dashboard';
import ProductsList from './Admin/Products/ProductsList/ProductsList';

import AddProduct from './Admin/Products/AddProduct/AddProduct';
import AjouterImage from './Admin/AjouterImageproduct/AjouterIamge';
import ImagesProduct from './Admin/ListImagesProduct/ImagesProduct';
// page de les images dans l'url//
import ListProduct from './Admin/AjouterImageproduct/IndexImages/ListProduct';
import Indeximage2 from './Admin/AjouterImageproduct/IndexImages/Indeximage2';
import Indeximage3 from './Admin/AjouterImageproduct/IndexImages/Indeximage3';
import Indeximage4 from './Admin/AjouterImageproduct/IndexImages/Indeximage4';
import Indeximage5 from './Admin/AjouterImageproduct/IndexImages/IndexImage5';
import Indeximage6 from './Admin/AjouterImageproduct/IndexImages/Indeximage6';
import Indeximage7 from './Admin/AjouterImageproduct/IndexImages/Indeximage7';
import Indeximage8 from './Admin/AjouterImageproduct/IndexImages/Indeximage8';
import Indeximage9 from './Admin/AjouterImageproduct/IndexImages/Indeximage9';
import Indeximage10 from './Admin/AjouterImageproduct/IndexImages/Indeximage10';
import Indeximage11 from './Admin/AjouterImageproduct/IndexImages/Indeximage11';
import Indeximage12 from './Admin/AjouterImageproduct/IndexImages/Indeximage12';
import Indeximage13 from './Admin/AjouterImageproduct/IndexImages/Indeximage13';
import Indeximage14 from './Admin/AjouterImageproduct/IndexImages/Indeximage14';
import Indeximage15 from './Admin/AjouterImageproduct/IndexImages/Indeximage15';
import Indeximage16 from './Admin/AjouterImageproduct/IndexImages/Indeximage16';



export default function Home() {
    const location = useLocation();
    const hideNav = location.pathname === '/login' || location.pathname === '/register';
    const hideFooter = location.pathname === '/login' || location.pathname === '/register';
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
                <Route path='/add-product' element={<AddProduct />} />
                <Route path='products' element={<ProductsList />} />
                <Route path='ajouterImage' element={<AjouterImage />} />
                <Route path='ProductsList' element={<ListProduct />} />
                <Route path='imagesproduct' element={<ImagesProduct />} />
                <Route path='indeximage2' element={<Indeximage2 />} />
                <Route path='indeximage3' element={<Indeximage3 />} />
                <Route path='indeximage4' element={<Indeximage4 />} />
                <Route path='indeximage5' element={<Indeximage5 />} />
                <Route path='indeximage6' element={<Indeximage6 />} />
                <Route path='indeximage7' element={<Indeximage7 />} />
                <Route path='indeximage8' element={<Indeximage8 />} />
                <Route path='indeximage9' element={<Indeximage9 />} />
                <Route path='indeximage10' element={<Indeximage10 />} />
                <Route path='indeximage11' element={<Indeximage11 />} />
                <Route path='indeximage12' element={<Indeximage12 />} />
                <Route path='indeximage13' element={<Indeximage13 />} />
                <Route path='indeximage14' element={<Indeximage14 />} />
                <Route path='indeximage15' element={<Indeximage15 />} />
                <Route path='indeximage16' element={<Indeximage16 />} />




                {isAdmin ? (
                    <Route path="/admin" element={<Admin />}>
                        <Route path='dashboard' element={<Dashboard />} />
                        <Route path='users' element={<UsersList />} />
                        <Route path='add-user' element={<AddUsers />} />
                        <Route path='products' element={<ProductsList />} />

                    </Route>
                ) : (
                    // Redirect to another page or show an access denied message
                    <Route path="/admin" element={<Navigate to="/" replace />} />
                )}

            </Routes>

            {!hideFooter && (
                <footer className='mt-5' >
                    <Footer />
                </footer>
            )}
        </div>
    );
}
