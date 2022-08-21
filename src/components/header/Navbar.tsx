import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

interface IState {
  navList: {
    urlName: string
    url: string
  }[]
}

const Navbar = () => {
  const [navList, setNavList] = useState<IState["navList"]>([
    {
    urlName: "Search",
    url: "/trailer"
    },
    {
      urlName: "Gallery",
      url: "/gallery"
    },
    {
      urlName: "Log in",
      url: "/log-in"
    },
    {
      urlName: "Sign up",
      url: "/sign-up"
    }
  ])

  const renderNavList = () => {
    return (
      navList.map((navLink) => {
          // Determine if link is sign up to give it it's unique 'Sign up' button style
          if (navLink.url === "/sign-up") {
            return (
              <li className='text-xl md:text-base bg-col1 rounded px-2 py-1 text-white hover:bg-col2 transition-all mb-3 md:mb-0'>
                <Link to={navLink.url} className="">{navLink.urlName}</Link>
              </li>
            )
          }
          else {
            return (
              <li className='text-xl md:text-base hover:text-slate-300 transition-all pb-3 md:pb-0'>
                <Link to={navLink.url}>{navLink.urlName}</Link>
              </li>
            )
          }
      })
    )
  }

  return (
    <>
    <nav className='hidden md:grid'>
      <ul className='grid md:grid-none md:flex text-slate-100 md:justify-end md:gap-6 lg:gap-12 items-center'>
        {renderNavList()}
      </ul>
      <button className="hidden text-2xl flex justify-end md:hidden">
        <FaBars className='text-white' />
      </button>
      <button className='hidden flex justify-end md:hidden'>
        <FaTimes className='text-white'/>
      </button>
    </nav>
    </>
  )
}

export default Navbar
