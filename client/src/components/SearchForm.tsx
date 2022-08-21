import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

interface IState {
    search: {
        search: string
    }
}

const SearchForm: React.FC = () => {
  const [input, setInput] = useState<IState["search"]>({
    search: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  }

  return (
    <div className='grid gap-3 md:gap-0 md:flex pt-2'>
      <input
        className='w-full md:w-full lg:w-1/2 bg-gray1 placeholder:text-gray3 focus:outline-none focus:bg-gray2 px-2 py-2 md:py-3 rounded md:rounded-none md:rounded-l transition-all'
        type="text"
        placeholder="Name of movie or series.."
        value={input.search}
        name="search"
        onChange={handleChange}
      ></input>
      <button className='flex py-2 md:py-0 bg-col1 hover:bg-col2 md:hover:bg-col2 md:bg-col1 rounded md:rounded-none md:rounded-r justify-center text-white text-white items-center md:px-3 transition-all'><FaSearch /></button>
    </div>
  )
}

export default SearchForm
