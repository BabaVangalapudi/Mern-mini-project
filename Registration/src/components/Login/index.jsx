import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Register/index.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
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
          toast.success("Login Successful");
          navigate('/home')
        } else {
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
          <input type="text" name='username' placeholder='Enter your name' id='username' value={username} onChange={(e) => setUsername
            (e.target.value)} />
        </div>
        <div className='input-each'>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' placeholder='Set your password' id='password' value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='register-btn'>Login</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
      <div>
        <Link to="/"><button className='register-btn'>Register</button></Link>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
