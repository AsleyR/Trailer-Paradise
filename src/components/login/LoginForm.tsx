import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface IState {
  login: {
    user: string
    pass: string
  }
}

const LoginForm: React.FC = () => {
  const [input, setInput] = useState<IState["login"]>({
    user: "",
    pass: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='grid bg-transparent md:bg-dark3/[0.9] gap-2 px-8 md:px-12 py-16 rounded md:rounded-lg'>
      <h2 className='text-left md:text-center md:text-left font-bold text-4xl pb-5'>Log in</h2>
      <input
        required
        type="text"
        name="user"
        placeholder='Username'
        value={input.user}
        onChange={handleChange}
        className="pl-5 py-3 bg-gray1 placeholder:text-gray3 focus:bg-gray2 focus:outline-none focus:text-white rounded w-full"
      />
      <br></br>
      <input
        required
        type="password"
        name="pass"
        placeholder='Password'
        value={input.pass}
        onChange={handleChange}
        className="pl-5 py-3 bg-gray1 placeholder:text-gray3 focus:bg-gray2 focus:outline-none focus:text-white rounded w-full"
      />
      <br></br>
      <button className='mt-5 text-lg bg-col1 rounded text-slate-100 text-center font-bold py-2 hover:bg-col2 transition-all'>Log in</button>
      <p className='pt-5 text-lg sm:text-base transition-all'>Don't have an account? <Link className='hover:text-col2 transition-all' to={"/sign-up"}>Create one today!</Link></p>
    </div>
  )
}

export default LoginForm
