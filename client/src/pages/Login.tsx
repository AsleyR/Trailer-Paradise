import React, { useState } from 'react'
import LoginForm from '../components/login/LoginForm'

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
    <div className='max-w-full h-screen  bg-center bg-fixed bg-cover bg-no-repeat' style={movieBg}>
      <div className='bg-dark1 md:bg-transparent h-screen md:h-auto pt-[5rem] md:pt-[10rem]'>
        <div className='grid grid-cols-1 md:grid-cols-none justify-left md:justify-center text-white transition-all'>
          <div className=''>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

const movieBg = {
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('images/movieCinema3.jpg')"
}

export default LogIn
