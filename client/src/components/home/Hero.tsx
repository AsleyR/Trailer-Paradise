import React from 'react'
import HeroSearchForm from './HeroSearchForm'

const Hero = () => {
  return (
    <div className='px-5 md:px-20 py-10 bg-cover bg-no-repeat bg-fixed' style={heroBgStyle}>
      <div className='grid pt-10 pb-56 justify-center'>
        <div className='relative max-w-5xl mx-auto pt-20 sm:pt-24'>
          <h1 className='text-center text-slate-100 font-bold text-4xl sm:text-5xl lg:text-6xl'>Welcome to Trailer Paradise</h1>
          <p className='text-center text-slate-100 text-2xl sm:text-3xl pt-3'>Watch your favorites movies and series trailers all in one place.</p>        
          <HeroSearchForm />
        </div>
      </div>
    </div>
  )
}

const heroBgStyle = {
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('images/movieCinema2.jpg')"
}

export default Hero
