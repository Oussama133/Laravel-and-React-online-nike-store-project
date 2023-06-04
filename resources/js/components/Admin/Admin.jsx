import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Routes } from 'react-router-dom'

export default function admin() {
  return (
    <div>
        <aside>
            <Sidebar/>
        </aside>
        <main>
            <Routes>
                
            </Routes>
        </main>
    </div>
  )
}
