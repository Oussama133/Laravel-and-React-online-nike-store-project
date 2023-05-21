import React from 'react'
import Register from './Auth/Register/Register'
import { useLocation, Route, Routes } from 'react-router-dom'
import Login from './Auth/Login/Login'
import Topnavbar from './Header/Topnavbar/Topnavbar'

export default function Home() {

    const location = useLocation()
    const hideNav = location.pathname === '/login' || location.pathname === '/register'

    return (
        <div>
            {!hideNav && (
            <nav>
                <Topnavbar />
            </nav>
            )}
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}

