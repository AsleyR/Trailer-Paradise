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
    <div>
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
      <input
        type="password"
        name="pass"
        placeholder='Password'
        value={input.pass}
        onChange={handleChange}
      />
      <br></br>
      <button>Sign In</button>
    </div>
  )
}

export default LoginForm
