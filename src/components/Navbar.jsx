// src/components/index.jsx
import React from 'react'
import MainCard from './CardComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'



function Navbar() {
  
  return (
    <div className='navClass'>
      <ul className="nav justify-content-center">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>

        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/aboutfamily">About Family</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Events">Events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar