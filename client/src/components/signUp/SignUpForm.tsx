import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
    if (input.pass.length < 8 && input.pass.length !== 0) {
      return (
        <p className='text-col2'>Password is too short!</p>
      )
    }
  }

  return (
    <div className='md:bg-dark3/[0.9] grid gap-2 px-8 md:px-12 w-full pt-16 pb-8 rounded md:rounded-lg transition-all'>
      <h2 className='text-3xl font-bold pb-5 text-left md:text-center'>Create an Account</h2>
      <input
        required
        type="email"
        name="email"
        placeholder='Email'
        value={input.email}
        onChange={handleChange}
        className="pl-5 py-3 bg-gray1 placeholder:text-gray3 focus:bg-gray2 focus:outline-none focus:text-white rounded w-full"
      />
      <br></br>
      <input
        required
        type="text"
        name="user"
        placeholder='Username'
        value={input.user}
        onChange={handleChange}
        className=" pl-5 py-3 bg-gray1 placeholder:text-gray3 focus:bg-gray2 focus:outline-none focus:text-white rounded w-full"
      />
      <br></br>
      <div className='mb-5'>
        <input
          required
          type="password"
          name="pass"
          placeholder='Password'
          value={input.pass}
          onChange={handleChange}
          className="pl-5 py-3 bg-gray1 placeholder:text-gray3 focus:bg-gray2 focus:outline-none focus:text-white rounded w-full"
        />
        {passLengthCheck()}
      </div>
      <br></br>
      <button className='w-full md:w-auto bg-col1 hover:bg-col2 transition-all text-white text-lg font-bold px-3 py-2 rounded'>Create Account</button>
      <p className='pt-10 md:pt-8 text-lg sm:text-xl md:text-base transition-all'>Already have an account? <Link className='hover:text-col2 transition-all' to={"/log-in"}>Log in instead!</Link></p>
    </div>
  )
}

export default SignUpForm
