import React from 'react'
import { useState } from 'react'
// import BASE_URL from '../config.js'
import { Link,useNavigate } from 'react-router-dom'
const BASE_URL=import.meta.env.VITE_API_URL
const Login = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    let navigate=useNavigate()
    async function handleLogins() {
      // e.preventDefault()
     let res=await fetch(`${BASE_URL}/api/Login`,{method:"POST",credentials:'include',headers:{
      "Content-Type": "application/json"
    },body:JSON.stringify({Email,Password})})

    const data=await res.json()
    console.log(data)
    if(data.success==true){
      document.querySelector(".message").innerHTML="Login Successful"
      document.querySelector(".message").classList.add("text-green-500")
       document.querySelector(".message").classList.remove("text-red-600")
       navigate("/dashboard")
    }
    else{
      document.querySelector(".message").innerHTML="Login Failed"
      document.querySelector(".message").classList.add("text-red-600")
      document.querySelector(".message").classList.remove("text-green-500")
    }

  }
  return (
   <>
   <form  className='loginForm bg-[#f0f6fa] w-full h-screen flex justify-center '>
   <div className="container w-[25%] mt-10 py-2">
      <div className="loginBox border-2 border-gray-200 w-full bg-white p-6 rounded-lg">
      <div className='text-3xl font-bold mb-2'>Welcome Back!</div>
      <div className="loginSubheading mb-4">Log in to manage your tasks</div>
        <div className='font-semibold text-[16px] mb-1'>Email</div>
         <div><input type="email" placeholder='you@gmail.com' value={Email} onChange={(e)=>{setEmail(e.target.value)}} className='border-gray-300 border-[1px] rounded-md px-3 py-2 w-full placeholder:text-gray-500 mb-4'/></div>
         <div className='font-semibold text-[16px] mb-1'>Password</div>
         <div><input type="password" placeholder= 'Enter Password' value={Password} onChange={(e)=>{setPassword(e.target.value)} }  className='border-gray-300 border-[1px] rounded-md px-3 py-2 mb-6  w-full placeholder:text-gray-500'/></div>
      <button id="add" type="button" onClick={()=>{handleLogins()}}  className="bg-[#9136e0] w-full rounded-lg py-2 px-3 text-white font-semibold text-[17px] hover:bg-purple-700 mb-4">Login</button>
    
      <div className='text-center text-[15px]'>New Here? <Link className='text-purple-600 cursor-pointer underline' to="/signup">Create an Account</Link> </div>
      <div className="message text-center font-semibold mb-2"></div>
      
      </div>
     </div>
     </form>
   </>
  )
}

export default Login
