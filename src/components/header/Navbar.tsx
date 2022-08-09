import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=''>
      <ul className='hidden md:flex text-slate-100 justify-end md:gap-6 lg:gap-12 items-center'>
        <li className='hover:text-slate-500 transition-all'>
          <Link to={"/trailer"} className="">Search</Link>
        </li>
        <li className='hover:text-slate-500 transition-all'>
            <Link to={"/gallery"} className="">Gallery</Link>
        </li>
        <li className='hover:text-slate-500 transition-all'>
            <Link to={"log-in"} className="">Log in</Link>
        </li>
        <li className='bg-col1 rounded px-2 py-1 text-white hover:bg-col2 transition-all'>
            <Link to={"sign-up"} className="">Sign up</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
