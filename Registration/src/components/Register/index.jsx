import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import "./index.css"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpass, setConfirmpass] = useState("")
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username || !email || !password || !confirmpass) {
      setErrorMessage('All fields are required');
      return;
    }
    if (password !== confirmpass) {
      setErrorMessage('Passwords do not match');
      return;
    }
    setErrorMessage('');
    axios.post("http://localhost:3001",{username, email,password,confirmpass})
    .then(result => {
      if (result.data === 'Username already exists') {
        setErrorMessage("User already exists")
      } else {
        setSuccessMessage("Your account created now you can login")
      }
    })
    .catch(err => {
      setErrorMessage('Something went wrong. Please try again later.');
      console.log(err)})
    setUsername("")
    setEmail("")
    setPassword("")
    setConfirmpass("")
  }
  return (
    <div className='container'>
      <h2>Registeration</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-each'>
          <label htmlFor="username">Username</label>
          <input type="text" name='username' autoComplete='off' placeholder='Enter your name' id='username' value={username} onChange={(e)=>setUsername
          (e.target.value)} />
        </div>
        <div className='input-each'>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' autoComplete='off' placeholder='Enter your email' id='email' value={email} 
          onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='input-each'>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' autoComplete='off' placeholder='Set your password' id='password' value={password} 
          onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className='input-each'>
          <label htmlFor="confirm">Confirm Password</label>
          <input type="text" name='confirm' placeholder='Confirm your password' autoComplete='off' id='confirmpass' value={confirmpass} 
          onChange={(e)=>setConfirmpass(e.target.value)}/>
        </div>
        <button className='register-btn'>Register</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
      <div>
        <Link to="/login"><button className='register-btn'>Login</button></Link>
      </div>
    </div>
  )
}

export default Register
