import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Register/index.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = ({toastTrigger}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username || !password) {
      setErrorMessage('All fields are required');
      return;
    }
    setErrorMessage('');
    axios.post("http://localhost:3001/login", { username, password })
      .then(result => {
        if (result.data === "Success") {
          toastTrigger("success")
          navigate(`/home?username=${username}`);
        } else {
          toastTrigger("err")
          setErrorMessage("Incorrect Password")
        }
      })
      .catch(err => console.log(err))
    setUsername("")
    setPassword("")
  }
  return (
    <div className='container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-each'>
          <label htmlFor="username">Username</label>
          <input className='input-box' type="text" name='username' placeholder='Enter your name' id='username' value={username} onChange={(e) => setUsername
            (e.target.value)} />
        </div>
        <div className='input-each'>
          <label htmlFor="password">Password</label>
          <input className='input-box' type="password" name='password' placeholder='Set your password' id='password' value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='register-btn'>Login</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
      <div>
        <Link to="/"><button className='register-btn'>Register</button></Link>
      </div>
  
    </div>
  )
}

export default Login
