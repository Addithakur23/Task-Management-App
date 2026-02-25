 import { useState,useEffect } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link,Outlet } from 'react-router-dom'
import Navbar from './pages/Navbar.jsx'

function App() { 
  const [User, setUser] = useState(null)
useEffect(() => {

    fetch("http://localhost:3000/api/me",{credentials:'include'})
  
  .then(res=>res.json())
  .then(data=>{
    if(data._id) {
      setUser(data)
      console.log(data)
    }
  })
  .catch(err=> console.log(err))
}, [])

  return (
    <>
    {console.log(User)}
    <Navbar user={User}  setUser={setUser}/>
    </>
  )
}

export default App

