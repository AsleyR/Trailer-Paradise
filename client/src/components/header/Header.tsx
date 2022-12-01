import React, { useState } from 'react'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import Navbar from './Navbar'
import { FaBars, FaTimes, FaUser, FaHome, FaSearch } from 'react-icons/fa'

interface IStateMBN { //MBN = Mobile Navbar
  navList: {
    urlName: string
    url: string,
    Fa?: string
  }[]
}

const Header = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [openUserMenu, setOpenUserMenu] = useState(false)
  const [isLogin, setIsLogin] = useState<boolean>()
  const [defaultUser, setDefaultUser] = useState(true)
  const [mobileNavList, setMobileNavList] = useState<IStateMBN["navList"]>([
    {
      urlName: "Explore",
      url: "/explore"
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
    let keyNum = 0
    return (
      mobileNavList.map((navLink) => {
        keyNum = keyNum + 1
        // Determine if link is sign up to give it it's unique 'Sign up' button style
        if (navLink.url === "/sign-up") {
          return (
            <li key={`${keyNum}`} className='text-left text-xl md:text-base bg-col1 rounded-b px-4 py-3 text-white hover:bg-col2 transition-all cursor-pointer' onClick={() => {setIsOpen(!isOpen); navigate(`${navLink.url}`)}}>
              <Link onClick={() => setIsOpen(false)} to={navLink.url} className="px-2">{navLink.urlName}</Link>
            </li>
          )
        }
        else {
          return (
            <li key={`${keyNum}`} className='flex items-center text-left text-xl md:text-base hover:bg-gray1 transition-all px-6 py-3 md:pb-0 cursor-pointer' onClick={() => {setIsOpen(!isOpen); navigate(`${navLink.url}`)}}> 
              <Link onClick={() => setIsOpen(false)} to={navLink.url} className="pl-0">{navLink.urlName}</Link>
            </li>
          )
        }
      })
    )
  }

  const renderUser = () => {
    return (
      <li key={`userProfile`} className='relative w-14 cursor-pointer list-none' onClick={() => setOpenUserMenu(!openUserMenu)}>
        {defaultUser ? 
        <div className='inline-flex justify-center rounded-full bg-gray-200 p-[0.65rem]'>
          <FaUser className='text-4xl text-gray2'/>
        </div>
        :
        <img className='rounded-full max-w-auto w-20 h-full' src='https://avatars.githubusercontent.com/u/79556058?v=4'></img>
        }
      </li>
    )
  }

  const renderMobileUserMenu = () => {
    return (
      <nav className={`absolute z-0 py-2 -bottom-[12.5rem] -right-[2.5rem] bg-dark3 border border-gray2 rounded-l drop-shadow-lg transition-all duration-500 ${openUserMenu ? null:"-right-[80rem]"}`}>
        <ul className='grid grid-rows-auto text-left text-gray-300'>
          <div className='flex justify-start border-b border-gray1 pl-[1rem] pb-2 cursor-pointer' onClick={() => navigate('/profile/id')}>
            {renderUser()}
            <p className='pt-[1rem] pl-2 pr-3 text-lg font-bold'>ZanateMayor</p>
          </div>
          <li className='text-white w-full pl-2 font-bold text-2xl pr-[8rem] mb-1'>Account</li>
          <li className=''><Link className='whitespace-nowrap pl-2 pr-10 text-lg hover:underline' onClick={() => setOpenUserMenu(!openUserMenu)} to={'/profile/id'}>Show Profile</Link></li>
          <li className='grid pb-1'><Link className='pl-2 pr-10 text-lg hover:underline' to={'/profile/settings'}>Settings</Link></li>
        </ul>
        <ul className='grid grid-rows-auto border-t border-gray1 text-gray-300'>
          <li className='cursor-pointer pt-1 pl-2 pr-10 text-lg hover:underline' onClick={() => setOpenUserMenu(!openUserMenu)}>Sign Out</li>
        </ul>
      </nav>
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
    <>
    <header className={`z-20 relative`}>
      <div className={`absolute z-10 inset-x-0 grid grid-cols-[auto_auto] md:grid-cols-2 px-12 md:px-28 md:py-5 bg-black items-center transition-all shadow-lg`}>
        {/* <div className='relative md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl flex justify-start md:hidden">
            {handleMenuChange()}
          </button>
        </div> */}
        <div className={`h-full px-0 md:px-0 py-5 md:py-0 grid grid-cols-1 md:text-left md:grid-cols-[min-content] items-center shadow-lg`}>
          <Link onClick={() => setIsOpen(false)} className='whitespace-normal md:whitespace-nowrap z-50 order-2 md:order-first font-bold text-2xl text-slate-100' to={"/"}><h1>Trailer Paradise</h1></Link>
        </div>
        <div className="block md:hidden justify-self-end">
          <div className="text-white" onClick={() => {navigate('/explore?search=')}}>
            <FaSearch className='text-white text-xl cursor-pointer hover:text-gray-400 transition-all'/>
          </div>
        </div>
        {/* <div className={`z-50 relative h-full md:hidden py-5 justify-self-end`}>
          { isLogin ?
          renderUser():
          null
          }
          {renderMobileUserMenu()}
        </div> */}
        <Navbar isOpen={isOpen}/>
      </div>
    </header>
    {/* <ul className={`z-10 bg-dark2 inset-x-0 pt-0 ${isOpen? 'top-[6rem]':'-top-96'} text-white absolute md:hidden transition-all duration-[350ms]`}>{renderMobileNav()}</ul> */}
    </>
  )
}

export default Header
