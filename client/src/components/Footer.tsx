import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className='grid gap-8 text-center bg-dark1 text-white py-10 border-t-8 border-dark2'>
      <div className='flex justify-center px-5'>
        <div className='text-bg2'>
            <span>Watch the lastest trailers today!</span>
            <Link className='bg-col1 text-white rounded-full hover:bg-col2 ml-3 px-5 py-1' to={'/explore'}>Explore!</Link>
        </div>
      </div>
      <div className=''>
          <h1 className='text-bg2'>Licensed under <a className='hover:underline' href='https://github.com/AsleyR/Trailer-Paradise/blob/main/LICENSE' target={'_blank'}>GPL-3.0-or-later</a>. All Rights Reserved. </h1>
      </div>
    </footer>
  )
}

export default Footer