import React from 'react'
import { useLocation } from 'react-router-dom';
import '../Register/index.css'

const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get('username');
  return (
    <div className='container'>
      <h1>Welcome <span style={{color:"skyblue",textTransform:"capitalize"}}>{username}</span></h1>
    </div>
  )
}

export default Home
