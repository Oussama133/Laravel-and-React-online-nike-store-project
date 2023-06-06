import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Routes, Outlet } from 'react-router-dom'

export default function admin() {
    return (
        <div className='container-fluid' >
        <div className='row' >
            <aside className='col-sm-4' >
                <Sidebar />
            </aside>
            <main className='col-sm-8' >
                <Outlet />
            </main>
        </div>
        </div>
    )
}
