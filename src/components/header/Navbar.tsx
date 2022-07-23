import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-ul'>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/gallery"}>Gallery</Link>
        </li>
        <li>
            <Link to={"log-in"}>Log In</Link>
        </li>
        <li>
            <Link to={"sign-up"}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
