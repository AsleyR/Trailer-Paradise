import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='max-w-full h-screen bg-dark2'>
      <div className='grid grid-cols-1 justify-items-center px-0 md:px-10 lg:px-10 pt-56'>
          <h1 className='px-2 lg:px-0 font-bold text-col1 text-6xl sm:text-5xl md:text-7xl text-center'>Lost your way?</h1>
          <h2 className='px-10 lg:px-80 my-5 text-lg text-white sm:text-lg md:text-2xl font-thin text-center'>Sorry, we can't find that page. You'll find lots to explore on the home page.</h2>
          <div className='bg-white hover:bg-gray-300 text-base lg:text-lg px-5 lg:px-8 py-1 lg:py-2 rounded cursor-pointer transition-all'>
            <Link className='text-gray-800 font-bold' to={"/"}>Home Page</Link>
          </div>
          <div className='border-l-2 border-col1 my-10 py-2 pl-3 text-white'>
            <p className='font-thin text-2xl'>Error Code <span className='text-3xl font-bold'>404</span></p>
          </div>
      </div>
    </div>
  )
}

export default ErrorPage
