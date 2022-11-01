import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import Header from "./Header"
import NavSearchForm from './NavSearchForm'

interface IState {
  navList: {
    urlName: string
    url: string
  }[]
}

// const useSharedIsOpen = () => useBetween(Header)

const Navbar = ({ isOpen }: any) => {
  const location = useLocation()
  const [path, setPath] = useState(location.pathname)
  const [isLogin, setIsLogin] = useState<Boolean>()
  const [defaultUser, setDefaultUser] = useState<Boolean>(true)
  const [openUserMenu, setOpenUserMenu] = useState<Boolean>(false)

  // Close User menu if route changes
  useEffect(() => {
    if (location.pathname !== path) {
      setPath(location.pathname)
      setOpenUserMenu(false)
    }
  }, [location])

  const renderNavList = () => {
    return (
      <>
      <NavSearchForm/>
      <li key={'1'} className='text-xl md:text-base hover:text-slate-300 transition-all pb-3 md:pb-0'>
        <a href='/explore'>Explore</a>
      </li>
      {/* <li className='text-xl md:text-base hover:text-slate-300 transition-all pb-3 md:pb-0'>
        <Link to={navList[1].url}>{navList[1].urlName}</Link>
      </li> */}
      {/* {isLogin ? renderUser():renderLoginBtns()} */}
      </>
    )
  }

  // const renderUser = () => {
  //   return (
  //     <li className='relative w-10 cursor-pointer' onClick={() => setOpenUserMenu(!openUserMenu)}>
  //       {defaultUser ? 
  //       <div className='inline-flex justify-center rounded-full bg-gray-200 p-[0.65rem]'>
  //         <FaUser className='text-xl text-gray2'/>
  //       </div>
  //       :
  //       <img className='rounded-full max-w-auto h-full' src='https://avatars.githubusercontent.com/u/79556058?v=4'></img>
  //       }
  //     </li>
  //   )
  // }

  // const renderLoginBtns = () => {
  //   return (
  //     <>
  //     <li key={'2'} className='text-xl md:text-base hover:text-slate-300 transition-all pb-3 md:pb-0'>
  //       <Link to={navList[1].url}>{navList[1].urlName}</Link>
  //     </li>
  //     <li key={'3'} className='text-xl md:text-base bg-col1 rounded px-2 py-1 text-white hover:bg-col2 transition-all mb-3 md:mb-0'>
  //       <Link to={navList[2].url} className="">{navList[2].urlName}</Link>
  //     </li>
  //     </>
  //   )
  // }

  const renderUserMenu = () => {
    return (
      <div className={`md:absolute py-2 -bottom-[7.2rem] right-[5rem] bg-dark3 border border-gray1 rounded-l rounded-b drop-shadow-lg transition-all`}>
        <ul className='grid grid-rows-auto text-left text-gray-300'>
          <li className='text-white w-full pl-2 pr-10 font-bold text-xl mb-1'>Account</li>
          <li><Link className='pl-2 pr-10 hover:underline' onClick={() => setOpenUserMenu(!openUserMenu)} to={'/profile/id'}>Show Profile</Link></li>
          <li className='grid pb-1'><Link className='pl-2 pr-10 hover:underline' to={'/profile/settings'}>Settings</Link></li>
        </ul>
        <ul className='grid grid-rows-auto border-t border-gray1 text-gray-300'>
          <li className='cursor-pointer pt-1 pl-2 pr-10 hover:underline' onClick={() => setOpenUserMenu(!openUserMenu)}>Sign Out</li>
        </ul>
      </div>
    )
  }

  return (
    <>
    <nav className='hidden md:grid'>
      <ul className='grid md:grid-none md:flex text-slate-100 md:justify-end md:gap-6 lg:gap-12 items-center'>
        {renderNavList()}
      </ul>
      {openUserMenu ? renderUserMenu(): null}
    </nav>
    </>
  )
}

export default Navbar
