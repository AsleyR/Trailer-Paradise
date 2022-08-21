import React, { useState } from 'react'
import SignUpForm from '../components/signUp/SignUpForm'


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
    <div className='max-w-full md:h-screen bg-cemter bg-cover bg-fixed' style={movieBg}>
      <div className='bg-dark1 h-screen md:h-auto md:bg-transparent pt-[5rem] md:pt-[10rem]'>
        <div className='grid grid-cols-1 justify-center px-0 text-white'>
          <div className='grid grid-cols-1 justify-left md:justify-self-center'>
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  )
}

const movieBg = {
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('images/movieCinema.jpg')"
}

export default SignUp
