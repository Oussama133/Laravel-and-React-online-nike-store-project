import React from 'react'
import Topnavbar from './Topnavbar/Topnavbar'
import Navbar from './Navbar/Navbar'

export default function Header() {
  return (
    <div>
        <nav>
          <Topnavbar />
        </nav>
        <nav>
            <Navbar/>
        </nav>
    </div>
  )
}

