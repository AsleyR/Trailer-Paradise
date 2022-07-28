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
        <label>Password is too short!</label>
      )
    }
  }

  return (
    <div>
      <p>Email</p>
      <input
        type="email"
        name="email"
        placeholder='Email'
        value={input.email}
        onChange={handleChange}
      />
      <br></br>
      <p>Username</p>
      <input
        type="text"
        name="user"
        placeholder='Username'
        value={input.user}
        onChange={handleChange}
      />
      <br></br>
      <p>Password</p>
      <div>
        <input
          type="password"
          name="pass"
          placeholder='Password'
          value={input.pass}
          onChange={handleChange}
        />
        {passLengthCheck()}
      </div>
      <br></br>
      <button>Create Account</button>
    </div>
  )
}

export default SignUpForm
