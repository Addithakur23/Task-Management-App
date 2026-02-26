import React from 'react'
import { useState } from 'react'
// import BASE_URL from '../config.js'
import { Link,useNavigate } from 'react-router-dom'
const BASE_URL=import.meta.env.VITE_API_URL
const Login = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [User, setUser] = useState(null)
    let navigate=useNavigate()
    async function handleLogins() {
      // e.preventDefault()
     let res=await fetch(`${BASE_URL}/api/Login`,{method:"POST",credentials:'include',headers:{
      "Content-Type": "application/json"
    },body:JSON.stringify({Email,Password})})

    const data=await res.json()
    if(data.success==true){
      document.querySelector(".message").innerHTML="Login Successful"
      document.querySelector(".message").classList.add("text-green-500")
       document.querySelector(".message").classList.remove("text-red-600")
       setUser(data)
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
   <form >
   <div className="container flex flex-col  justify-center  mx-auto mt-28 sm:w-[27%]  md:w-[35%] lg:w-[30%]  py-4 ">
      <div className="inputs space-y-2 border border-black p-6 rounded-lg">

      <div className='text-3xl font-bold text-center'>Login</div>
        <div className='font-semibold text-lg'>Email</div>
         <div><input type="email" placeholder='Enter Email' value={Email} onChange={(e)=>{setEmail(e.target.value)}} className='border-gray-300 border-2 rounded-md px-3 py-2 w-full'/></div>
         <div className='font-semibold text-lg'>Password</div>
         <div><input type="password" placeholder= 'Enter Password' value={Password} onChange={(e)=>{setPassword(e.target.value)} }  className='border-gray-300 border-2 rounded-md px-3 py-2 mb-3  w-full'/></div>
      <button id="add" type="button" onClick={()=>{handleLogins()}}  className="bg-blue-500 w-full rounded-lg py-2 px-3 text-white font-bold text-lg hover:bg-blue-600">Login</button>
    
      <div className='text-center'>Create a Account? <Link className='text-blue-600 cursor-pointer' to="/signup">Sign Up</Link> </div>
      <div className="message text-center font-semibold"></div>
      
      </div>
     </div>
     </form>
   </>
  )
}

export default Login
