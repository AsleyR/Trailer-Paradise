import React, { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

interface IState {
  input: {
    search: string
  }
}

const NavSearchForm = () => {
  const navigation = useNavigate()
  const [input, setInput] = useState<IState['input']>({
    search: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    navigation(`/explore/?search=${input.search}`)
  }

  const deleteInput = () => {
    setInput({search: ""})
  }

  return (
    <div className="max-w-xs w-full">
        <form onSubmit={handleSubmit} className='max-w-full bg-gray1 rounded flex w-full items-center py-1 px-3 gap-3'>
            <FaSearch className='text-neutral-100'/>
            <input 
            type="text" 
            name="search" 
            id="searchInput"
            placeholder='Search...' 
            value={input.search}
            onChange={handleChange}
            className="w-full bg-inherit text-white focus:outline-none placeholder:text-neutral-300"
            />
            <div onClick={deleteInput} className={`${input.search.length === 0 ? 'hidden': "flex"} justify-end h-full`}>
                <FaTimes className=' text-neutral-100 hover:text-neutral-400 cursor-pointer'/>
            </div>
        </form>
    </div>
  )
}

export default NavSearchForm
