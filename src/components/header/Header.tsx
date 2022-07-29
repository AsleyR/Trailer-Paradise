import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='header'>
      <Link className='header-link' to={"/"}><h1>Trailer Paradise</h1></Link>
        <Navbar />
    </header>
  )
}

export default Header
