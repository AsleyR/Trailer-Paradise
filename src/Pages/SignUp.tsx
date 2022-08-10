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
    <div className='grid grid-cols-none md:grid-cols-2 gap-20 px-20 py-10'>
      <div>
        <h2 className='text-2xl sm:text-2xl'>Create an account today and enjoy all the latest movie and serie trailers!</h2>
        <SignUpForm />
        <p className='text-lg sm:text-xl md:text-base'>Already have an account? <Link className='hover:text-col2 transition-all' to={"/log-in"}>Log in instead!</Link></p>
      </div>
      <div className="bg-none bg-fixed bg-no-repeat bg-cover bg-center rounded md:bg-signup lg:bg-signup">
        {/* <img className='max-w-full min-h-auto rounded' src='movieNetflix.jpg' alt='Computer with Netflix Open in Browser'></img> */}
      </div>
    </div>
  )
}

export default SignUp
