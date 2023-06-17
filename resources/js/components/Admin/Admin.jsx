import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Routes, Outlet } from 'react-router-dom'

export default function admin() {
    return (
        <div className='container-fluid'>
            <div className='row' >
                <aside className='col-sm-3' >
                    <Sidebar />
                </aside>
                <main className='col-sm-9' >
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
