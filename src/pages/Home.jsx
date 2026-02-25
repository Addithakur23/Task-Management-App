import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'
const Home = () => {
  return (
    <div>
      <div className='text-7xl text-center mt-44 font-bold text-purple-500'>Task Manager</div>
    <div className='text-2xl text-center mt-4'>Where you can manage and save your Tasks</div> 
    <div className='flex justify-center gap-4 items-center mt-6'>
  <Link to={"/signup"}>   <button className='px-7 py-3 bg-black text-white text-xl font-bold text-center rounded-xl'>Get Started</button></Link> 
     <Link to={"/login"}>  <button className='px-7 py-3 bg-black text-white text-xl font-bold text-center rounded-xl'>Login</button></Link> 
    </div>
    </div>
  )
}

export default Home 
