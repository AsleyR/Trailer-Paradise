import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='grid gap-8 text-center bg-dark1 text-white py-10 border-t-8 border-slate-900'>
      <div className='flex justify-center px-5'>
        <div className='text-bg2'>
            <span>Create an account today!</span>
            <Link className='bg-col1 text-white rounded-full hover:bg-col2 ml-3 px-5 py-1' to={'/sign-up'}>SIGN UP!</Link>
        </div>
      </div>
        <div className='bg-dark1'>
            <h1 className='text-bg2'>Copyright © Trailer Paradise. All Rights Reserved </h1>
        </div>
    </footer>
  )
}

export default Footer