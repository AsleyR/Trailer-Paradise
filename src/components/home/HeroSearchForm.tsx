import React from 'react'

const HeroSearchForm = () => {
  return (
    <div className='grid grid-rows-auto gap-3 sm:gap-0 sm:flex sm:justify-center mt-10'>
        <input 
            placeholder='Name of movie or series...'
            className='px-3 py-5 w-full sm:w-8/12 rounded sm:rounded-none sm:rounded-l text-lg text-white placeholder:text-gray3 bg-dark2 focus:bg-gray1 focus:outline-none' 
            type="text"
            name='searchForm'
        />
        <button className='w-full sm:w-auto justify-self-center sm:justify-self-auto text-white bg-col1 hover:bg-col2 transition-all text-xl sm:text-2xl sm:px-10 py-2 sm:py-3 rounded sm:rounded-none sm:rounded-r'>Search</button>
    </div>
  )
}

export default HeroSearchForm
