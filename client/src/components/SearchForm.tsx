import React, { useEffect, useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

interface IState {
    search: {
        search: string
    }
}

const SearchForm: React.FC = () => {
  const navigation = useNavigate()
  const [input, setInput] = useState<IState["search"]>({
    search: ""
  })
  const params = new URLSearchParams(window.location.search)
  const search = params.get('search')

  useEffect(() => {
    if (search !== null) {
      setInput({search: search})
    }
    else if (window.location.search === "") {
      setInput({search: ""})
    }
  }, [window.location.search])

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {   
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const deleteInput = () => {
    setInput({search: ""})
    window.location.search = "?search="
  }

  return (
    <form id='searchForm' name='searchForm' className='grid gap-3 md:gap-0 md:flex pt-2 items-center'>
      <div className="flex w-full lg:w-1/2 lg:max-w-lg bg-gray1 focus:outline-none rounded md:rounded-none md:rounded-l transition-all">
        <input
          className='w-full bg-gray1 placeholder:text-neutral-300 focus:outline-none px-2 py-2 md:py-3 rounded md:rounded-none md:rounded-l'
          type="text"
          placeholder="Name of movie or series.."
          value={input.search}
          id="search"
          name="search"
          onChange={handleChange}
        ></input>
        <div className={`${input.search.length === 0 ? "hidden": "grid"} bg-gray1 h-full py-4 px-2`}>
          <FaTimes className='cursor-pointer hover:text-gray-300'
          onClick={() => deleteInput()}
          />
        </div>
      </div>
      <button type={'submit'}
      className='flex cursor-pointer py-2 md:py-4 bg-col1 hover:bg-col2 md:hover:bg-col2 md:bg-col1 rounded md:rounded-none md:rounded-r justify-center text-white items-center md:px-3 transition-all'><FaSearch />
      </button>
    </form>
  )
}

export default SearchForm
