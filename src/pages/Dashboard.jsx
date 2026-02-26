import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
const BASE_URL=import.meta.env.VITE_API_URL
const Dashboard = () => {
    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Selected, setSelected] = useState("")
    const [Tasks, setTasks] = useState([])
    const [Status, setStatus] = useState("")
   const [EditingId, setEditingId] = useState("")
   const [UpdatedTitle, setUpdatedTitle] = useState("")
   const [UpdatedDescription, setUpdatedDescription] = useState("")
   const [UpdateStatus, setUpdateStatus] = useState("")
   const [Users, setUsers] = useState([])

   async function fetchTasks(){

          try{
              let res1=await fetch(`${BASE_URL}/api/tasks`,{method:"GET",credentials:'include'})
        let tasks=await res1.json()
        if(!tasks || tasks.length==0){
          return "No tasks available"
        }
        if(!res1.ok) {
          throw new Error("Failed to Fetch")
        }
      
        setTasks(tasks)
      }
      catch(error){
        console.log(error.message)
      }
    }
   useEffect(() => {
    fetchTasks()
   }, [])
   
    async function handleTasks(){
if(EditingId){
    
    let res=await fetch(`${BASE_URL}/api/tasks/${EditingId}`,{method:"PUT",credentials:'include',
      headers:{
      "Content-Type": "application/json"
    },body:JSON.stringify({Title,Description,Status})})
    
    let updatedTask=await res.json()
    setTasks((prev)=>prev.map((task)=> task._id==EditingId?updatedTask:task));
    setEditingId(null)

}
else{
    let res=await fetch(`${BASE_URL}/api/tasks`,{method:"POST",credentials:'include',headers:{
  "Content-Type": "application/json"
},body:JSON.stringify({Title,Description,Status})})

let data=await res.json()
if(!res.ok){
    console.log("Error : ",data)
    return
}

console.log("task Created : ",data)

}
    setDescription("")
    setStatus("")
    setTitle("")
 fetchTasks()

    }
async function handleDelete(id){
        
          let res=await fetch(`${BASE_URL}/api/tasks/${id}`,{method:"DELETE",credentials:'include',headers:{
      "Content-Type": "application/json"
    }})

    let data=await res.json()
    if(res.ok) setTasks(prev=>prev.filter(task=>task._id!==id))
  //  await fetchTasks()
    }

async function handleEditClick(task){
  setEditingId(task._id)
  setTitle(task.Title)
  setDescription(task.Description)
  setStatus(task.Status)
  }


  return (
    <div className='space-y-3 mb-5 mx-11 '>
        <div className='text-4xl font-bold mt-4 text-center'>Dashboard</div>


     <div className='font-bold text-lg'>Title :  </div><input type="text" placeholder='Enter Title' className='border-gray-300 border-2 rounded-md px-3 py-2 sm:w-[60%] w-full flex flex-col ' value={Title} onChange={(e)=>{setTitle(e.target.value)}} />

     <div className='font-bold text-lg'>Description : </div> <input type="text" placeholder='Enter Description' className='border-gray-300 border-2  rounded-md px-3 py-2 sm:w-[60%] w-full' value={Description} onChange={(e)=>{setDescription(e.target.value)}} />

       <div className='font-bold text-lg'>Status : </div> 
       <select name="select" id="select" className='border-gray-300 border-2 rounded-md px-3 py-2 sm:w-[60%] w-full' value={Status} onChange={(e)=>{setStatus(e.target.value)}}>
        <option value="">-- Choose --</option>
        <option value="Pending ">Pending</option>
        <option value="In Progress" >In Progess</option>
        <option value="Completed" >Completed</option>
       </select>
       {/* <input type="text" placeholder='Enter Status' className='border-gray-300 border-2 rounded-md px-3 py-2 w-[50%] text-center' value={Status} onChange={(e)=>{setStatus(e.target.value)}} /> */}

     <div > <button onClick={()=>{handleTasks()}} className='px-2 py-2 font-bold sm:w-[60%] w-full text-white bg-blue-600 hover:bg-blue-700 text-center rounded-lg mt-2'>{EditingId ?"update Task" : "Add Task"}</button></div>

      <div className='text-3xl font-semibold '>Your Tasks</div>
      {Tasks.length==0 && (<div className=" text-2xl font-semibold mx-40 ">No Task Available</div>)}
      {Tasks.map((items,index)=>{
        return(
            <div key={items._id} className='border border-gray-400 rounded-xl space-y-3 sm:w-[60%] p-4 flex justify-between'>
              
               <div><div className='font-bold text-2xl'>{items.Title}</div>
                <div className='font-semibold text-xl'>{items.Description}</div>
                <div className={`font-semibold ${items.Status=="Pending" ? "text-red-500" :items.Status=="Completed" ? "text-green-500" : "text-yellow-500"} text-lg`}>{items.Status}</div></div> 
                <div className=''>
                <button className='mx-3  px-3 py-2 text-white font-bold bg-black text-center rounded-lg' onClick={()=>{handleDelete(items._id)}}> Delete</button>
                <button className='px-3 py-2 text-white font-bold bg-black text-center rounded-lg' onClick={()=>{handleEditClick(items)}}>Edit</button>
                
                </div>
            </div>
    )

      })}
        
    </div>
  )
}

export default Dashboard
