import React, { useState } from 'react'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import Navbar from './Navbar'
import { FaBars, FaTimes } from 'react-icons/fa'

interface IStateMBN { //MBN = Mobile Navbar
  navList: {
    urlName: string
    url: string
  }[]
}

const Header = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [mobileNavList, setMobileNavList] = useState<IStateMBN["navList"]>([
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

  const navigate = useNavigate()

  const renderMobileNav = () => {
    return (
      mobileNavList.map((navLink) => {
        // Determine if link is sign up to give it it's unique 'Sign up' button style
        if (navLink.url === "/sign-up") {
          return (
            <li className='text-center text-xl md:text-base bg-col1 rounded-b px-2 py-2 text-white hover:bg-col2 transition-all cursor-pointer' onClick={() => {setIsOpen(!isOpen); navigate(`${navLink.url}`)}}>
              <Link onClick={() => setIsOpen(false)} to={navLink.url} className="">{navLink.urlName}</Link>
            </li>
          )
        }
        else {
          return (
            <li className='text-center text-xl md:text-base hover:text-slate-300 transition-all pb-5 md:pb-0 cursor-pointer' onClick={() => {setIsOpen(!isOpen); navigate(`${navLink.url}`)}}>
              <Link onClick={() => setIsOpen(false)} to={navLink.url}>{navLink.urlName}</Link>
            </li>
          )
        }
      })
    )
  }

  const handleMenuChange = () => {
    if (isOpen) {
      return (
        <FaTimes className='z-50 text-white'/>
      )
    }
    else {
      return (
        <FaBars className='z-50 text-white'/>
      )
    }
  }

  const getCurrentRoute = (): string => {
    const background = location.pathname === '/' ? 'bg-black': 'bg-dark1'
    return background
  }

  return (
    <header className={`relative`}>
      <div className='absolute inset-x-0 grid md:grid-rows-none md:grid-cols-2 md:px-20 md:py-10 items-center bg-dark1 transition-all shadow-lg'>
        <div className={`z-50 py-10 md:py-0 px-10 md:px-0 grid grid-cols-2 md:grid-cols-none ${isOpen ? 'bg-black md:bg-dark1':getCurrentRoute()} shadow-lg`}>
          <Link onClick={() => setIsOpen(false)} className='z-50 font-bold text-2xl text-slate-100' to={"/"}><h1>Trailer Paradise</h1></Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl flex justify-end md:hidden">
            {handleMenuChange()}
          </button>
        </div>
        <ul className={`z-20 bg-dark2 inset-x-0 pt-3 ${isOpen? 'top-28':'-top-96'} text-white absolute md:hidden transition-all duration-[350ms]`}>{renderMobileNav()}</ul>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
