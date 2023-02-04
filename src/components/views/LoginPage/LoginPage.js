import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_action/user_actions'
import { useNavigate } from 'react-router-dom'
import Auth from '../../../hoc/auth'


function LoginPage(_props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.target.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password
    }

    dispatch(loginUser(body))
      .then(response => {
        if (response.payload.loginSuccess) {
          navigate('/')
        } else {
          alert('Failed to login')
        }
      })
  }

  return (
    <div>
      <form style={{display:'flex', flexDirection: 'column'}}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br/>
        <button>
          Login
        </button>
      </form>
    </div>
  )
}

export default Auth(LoginPage, false)