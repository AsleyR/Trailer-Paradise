import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/logIn/LoginForm'

interface IState {
  login: {
    user: string
    pass: string
  }
}

const LogIn = () => {
  const [login, setLogin] = useState<IState["login"]>(
    {
      user: "",
      pass: ""
  })

  return (
    <div className='grid justify-center py-10'>
      <div className=''>
        <h2 className='text-center font-bold text-2xl'>Log in to your account</h2>
        <LoginForm />
        <div>
          <p className='text-lg sm:text-base'>Don't have an account? <Link className='hover:text-col2 transition-all' to={"/sign-up"}>Create one today!</Link></p>
        </div>
      </div>
    </div>
  )
}

export default LogIn
