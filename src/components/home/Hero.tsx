import React from 'react'

const Hero = () => {
  return (
    <div className='px-20 py-10 bg-cover bg-no-repeat bg-fixed' style={heroBgStyle}>
      <div className='grid pt-10 pb-56 justify-center'>
        <div className='relative max-w-5xl mx-auto pt-20 sm:pt-24'>
          <h1 className='text-center text-slate-100 font-bold text-4xl sm:text-5xl lg:text-6xl'>Welcome to Trailer Paradise</h1>
          <p className='text-center text-slate-100 text-2xl sm:text-3xl pt-3'>Watch your favorites movies and series trailers all in one place.</p>        
          <div className=' grid grid-rows-2 gap-3 sm:gap-0 sm:flex sm:justify-center mt-10'>
            <input className='px-3 py-5 w-full sm:w-8/12 rounded sm:rounded-none sm:rounded-l text-lg text-slate-500' placeholder='Enter movie or series name...'/>
            <button className='text-white bg-col1 hover:bg-col2 transition-all text-xl sm:text-2xl px-5 sm:px-10 py-1 rounded sm:rounded-none sm:rounded-r'>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const heroBgStyle = {
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('images/movieCinema.jpg')"
}

export default Hero
