import React from 'react'
import Topnavbar from './Topnavbar/Topnavbar'
import Navbar from './Navbar/Navbar'

export default function Header({role}) {
  return (
    <div>
        <nav>
          <Topnavbar />
        </nav>
        <nav>
            <Navbar role={role} />
        </nav>
    </div>
  )
}

