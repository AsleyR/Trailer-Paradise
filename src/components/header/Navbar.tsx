import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-ul'>
        <li>
            <Link to={"/"} className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to={"/search"} className="navbar-link">Search</Link>
        </li>
        <li>
            <Link to={"/gallery"} className="navbar-link">Gallery</Link>
        </li>
        <li>
            <Link to={"log-in"} className="navbar-link-log-in">Log In</Link>
        </li>
        <li className='sign-up-li'>
            <Link to={"sign-up"} className="navbar-link-sign-up">Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
