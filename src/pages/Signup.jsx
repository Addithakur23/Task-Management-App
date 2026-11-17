import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import { Link, Outlet } from 'react-router-dom'
const BASE_URL=import.meta.env.VITE_API_URL
// import BASE_URL from '../config'
const Signup = () => {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  let navigate = useNavigate()
  async function handleSignups() {
    let res = await fetch(`${BASE_URL}/api/Signup`, {
      method: "POST", headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify({ Name, Email, Password })
    })
    const data = await res.json()
    console.log(data)

    if (res.ok) {
      setEmail("")
      setName("")
      setPassword("")
      navigate("/login")
    }
  }
  return (
    <form className='signupForm bg-[#f0f6fa] w-full h-screen flex justify-center '>
      <div className="container w-[25%] mt-10 py-2">
        <div className="signupBox border-2 border-gray-200 w-full bg-white p-6 rounded-lg">

          <div className='text-3xl font-bold mb-2'>Create your account</div>
          <div className="signupSubheading mb-4">Start organising your tasks.</div>
          <div className='font-semibold text-[16px] mb-1'>Name</div>

          <div><input type="text" placeholder='Your name' value={Name} onChange={(e) => { setName(e.target.value) }} className='border-gray-300 border-[1px] rounded-md px-3 py-2 w-full placeholder:text-gray-500 mb-4' />
          </div>

          <div className='font-semibold text-[16px] mb-1'>Email</div>
          <div><input type="email" placeholder='you@gmail.com' value={Email} onChange={(e) => { setEmail(e.target.value) }} className='border-gray-300 border-[1px] rounded-md px-3 py-2 w-full placeholder:text-gray-500 mb-4' />
          </div>

          <div className='font-semibold text-[16px] mb-1'>Password</div>
          <div><input type="password" placeholder='Create a password' value={Password} onChange={(e) => { setPassword(e.target.value) }} className='border-gray-300 border-[1px] rounded-md px-3 py-2 w-full placeholder:text-gray-500 mb-6'/>
          </div>
          
          <button id="add" type="button" onClick={() => { handleSignups() }} className="bg-[#9136e0] w-full rounded-lg py-2 px-3 text-white font-semibold text-[17px] hover:bg-purple-700 mb-4">Sign Up</button>

          <div className='text-center text-[15px]'> Already Registered? <Link className='text-purple-600 cursor-pointer underline' to="/login">Login</Link> </div>

        </div>
      </div>

    </form>
  )
}

export default Signup
