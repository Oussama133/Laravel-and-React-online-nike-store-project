import React from 'react';
import { useLocation, Route, Routes, Navigate } from 'react-router-dom';
import Register from './Auth/Register/Register';
import Login from './Auth/Login/Login';
import Header from './Header/Header';

export default function Home() {
  const location = useLocation();
  const hideNav = location.pathname === '/login' || location.pathname === '/register';
  const isAuthenticated = !!localStorage.getItem('auth_token');

  return (
    <div>
      {!hideNav && (
        <nav>
          <Header />
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
        

      </Routes>
    </div>
  );
}
