import React from 'react'

const TPFeatures = () => {
  return (
    <div className='bg-dark1'>
        <div className='grid gap-10 md:gap-0 grid-rows-2 lg:grid-rows-none lg:grid-cols-2 bg-dark1 border-t-8 border-slate-900 items-center px-10 sm:px-40 md:px-40 py-24'>
            <div className=''>
                <h1 className='text-white text-center lg:text-left text-4xl sm:text-4xl md:text-5xl font-bold'>Save, and Watch it later.</h1>
                <p className='text-white text-center lg:text-left text-2xl sm:text-2xl pt-5'>With a Trailer Paradise account, you can choose to watch any of your favorite trailers at any time!</p>
            </div>
            <div className='flex justify-center lg:justify-end'>
                <img className='text-slate-300 w-8/12 h-full rounded' src="images/watching-tv.jpg" alt='TV with FRIENDS on Netflix'></img>
            </div>
            </div>
        <div className='grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 border-t-8 border-slate-900 justify-center items-center px-20 sm:px-40 md:px-40 py-24'>
            <div className='flex justify-center order-last lg:order-none lg:justify-start'>
                <img className='text-slate-300 w-8/12 h-full rounded' src='images/devices.jpg' alt='f'></img>
            </div>
            <div className=''>
                <h1 className='font-bold text-4xl md:text-5xl text-center lg:text-left text-white'>Watch everywhere.</h1>
                <p className='text-2xl text-white text-center lg:text-left pt-5'>Enjoy your favorites movies and series trailers on your phone, tablet, and laptop without any hasle.</p>
            </div>
        </div>
    </div>
  )
}

export default TPFeatures
