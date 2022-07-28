import React, { useState } from 'react'

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
    <div>
      <input
        type="text"
        placeholder="search..."
        value={input.search}
        name="search"
        onChange={handleChange}
      />
      <button>Search</button>
    </div>
  )
}

export default SearchForm
