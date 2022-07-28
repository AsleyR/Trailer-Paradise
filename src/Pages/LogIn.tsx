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
    <div>
      <h2>Sign in into your account</h2>
      <LoginForm />
      <div>
        <p>Don't have an account? <Link to={"/sign-up"}>Create one today!</Link></p>
      </div>
    </div>
  )
}

export default LogIn
