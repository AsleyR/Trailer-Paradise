import React, { useState } from 'react'

interface IState {
  signUp: {
    email: string
    user: string
    pass: string
  }
}

const SignUpForm: React.FC = () => {
  const [input, setInput] = useState<IState["signUp"]>({
    email: "",
    user: "",
    pass: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const passLengthCheck = () => {
    if (input.pass.length < 8 && input.pass.length != 0) {
      return (
        <label className='mx-5 text-col2'>Password is too short!</label>
      )
    }
  }

  return (
    <div className='my-6'>
      <p className='pt-3 text-xl'>Email</p>
      <input
        type="email"
        name="email"
        placeholder=''
        value={input.email}
        onChange={handleChange}
        className="border border-slate-400 rounded w-full md:w-64"
      />
      <br></br>
      <p className='pt-3 text-xl'>Username</p>
      <input
        type="text"
        name="user"
        placeholder=''
        value={input.user}
        onChange={handleChange}
        className="border border-slate-400 rounded w-full md:w-64"
      />
      <br></br>
      <p className='pt-3 text-xl'>Password</p>
      <div>
        <input
          type="password"
          name="pass"
          placeholder=''
          value={input.pass}
          onChange={handleChange}
          className="border border-slate-400 rounded w-full md:w-64"
        />
        {passLengthCheck()}
      </div>
      <br></br>
      <button className='w-full md:w-auto bg-col1 hover:bg-col2 transition-all text-white px-3 py-1 rounded'>Create Account</button>
    </div>
  )
}

export default SignUpForm
