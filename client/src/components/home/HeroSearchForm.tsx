import React, { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const HeroSearchForm = () => {
  const [input, setInput] = useState({
    search: ""
  })
  const navigation = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigation(`/explore/?search=${input.search}`)
  }

  const deleteInput = () => {
    setInput({search: ""})
  }

  return (
    <form id='searchForm' name='searchForm' onSubmit={handleOnSubmit} className='grid grid-rows-auto gap-3 sm:gap-0 sm:flex sm:justify-center mt-10'>
        <div className="flex items-center w-full sm:max-w-xl bg-gray1 rounded sm:rounded-l">
          <input 
              placeholder='Name of movie or series...'
              className='pl-3 py-5 w-full sm:w-full rounded sm:rounded-none sm:rounded-l text-lg text-white placeholder:text-neutral-300 bg-gray1 focus:outline-none' 
              type="text"
              name='search'
              value={input.search}
              onChange={handleChange}
          />
          <div className={`${input.search.length === 0 ? "hidden": "grid"} h-full justify-center items-center px-4`}>
            <FaTimes className='cursor-pointer text-white text-xl hover:text-gray-300'
            onClick={() => deleteInput()}
            />
          </div>
        </div>
        <button type={'submit'} className='w-full grid justify-center sm:w-auto text-white bg-col1 hover:bg-col2 items-center transition-all text-xl sm:px-5 py-3 rounded sm:rounded-none sm:rounded-r'><FaSearch/></button>
    </form>
  )
}

export default HeroSearchForm
