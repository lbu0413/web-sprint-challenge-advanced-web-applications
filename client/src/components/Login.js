import React, { useState } from "react";
import { axiosWithAuth } from '../axiosWithAuth'
import { useHistory } from 'react-router-dom'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [form, setForm] = useState({ username: "", password: "" })
  const history = useHistory()

  const submitHandler = e => {
    e.preventDefault()

    axiosWithAuth()
    .post('/api/login', form)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      history.push('/colors')
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <br/>
      <form onSubmit={submitHandler}>
        <label>Username
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => setForm({...form, username: e.target.value })} 
          />
        </label>
        <label>Password
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setForm({...form, password: e.target.value })} 
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
