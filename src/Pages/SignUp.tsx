import React, { useState } from 'react'
import SignUpForm from '../components/signUp/SignUpForm'
import { Link } from "react-router-dom"


interface IState {
  signUp: {
    user: string
    pass: string
  }
}

const SignUp = () => {
  const [signUp, setSignUp] = useState<IState["signUp"]>({
      user: "",
      pass: ""
  })


  return (
    <div>
      <h2>Create an account</h2>
      <SignUpForm />
      <p>Already have an account? <Link to={"/log-in"}>Sign in</Link></p>
    </div>
  )
}

export default SignUp
