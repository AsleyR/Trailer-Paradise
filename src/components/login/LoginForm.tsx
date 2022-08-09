import React, { useState } from 'react'

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
    <div className='grid border-2 border-slate-300 p-5 my-5 rounded-md bg-gray-100'>
      <p className='pb-1 text-lg sm:text-base'>Username or email address</p>
      <input
        type="text"
        name="user"
        placeholder=''
        value={input.user}
        onChange={handleChange}
        className="border border-slate-300 rounded mb-3"
      />
      <br></br>
      <p className='text-lg sm:text-base pb-1'>Password</p>
      <input
        type="password"
        name="pass"
        placeholder=''
        value={input.pass}
        onChange={handleChange}
        className="border border-slate-300 rounded mb-5"
      />
      <br></br>
      <button className='text-xl sm:text-base bg-col1 rounded text-slate-100 text-center font-bold p-1 hover:bg-col2 transition-all'>Log in</button>
    </div>
  )
}

export default LoginForm
