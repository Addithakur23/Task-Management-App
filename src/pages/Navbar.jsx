import React from 'react'
import {useNavigate } from 'react-router-dom'
import { Link,Outlet } from 'react-router-dom'
const BASE_URL=import.meta.env.VITE_API_URL
function Navbar({user,setUser}){
    const navigate=useNavigate()
    const handleLogout=async()=>{
     try {const res=  await fetch(`${BASE_URL}/api/logout`,{method:"POST",credentials:'include'})
      if(!res.ok){
        console.log("Logout Failed")
        return
      }
        setUser(null)
        navigate("/login")}
        catch(err){
          console.log("Logout Error : ",err)
        }
    }
  return (
    <div>
       <nav className='flex justify-between   items-center  py-5 px-5 sm:px-16 bg-purple-600  text-white font-bold sticky top-0'>
      <div className='text-2xl'>Task Manager</div>
      
    {user ?(  <div className='flex gap-6'>
        <div className='bg-green-400 rounded-full text-white font-bold px-4 py-2 text-lg'>{user?.Name?.charAt(0).toUpperCase()}</div>
        <button onClick={handleLogout} className='text-lg'>Logout</button>
      </div>)
     :( <div>
     <div className='flex gap-6 text-lg'>
      <Link to="/signup">SignUp</Link>
      <Link to="/login">Login </Link></div>
     </div>)
    }
    
    </nav>
    
     <Outlet/>
    </div>
  )
}

export default Navbar
