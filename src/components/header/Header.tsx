import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='grid grid-cols-2 py-4 px-20 items-center bg-black'>
      <Link className='font-bold text-2xl text-slate-100' to={"/"}><h1>Trailer Paradise</h1></Link>
      <Navbar />
    </header>
  )
}

export default Header
