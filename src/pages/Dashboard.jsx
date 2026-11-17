import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
const BASE_URL=import.meta.env.VITE_API_URL
const Dashboard = () => {
    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Selected, setSelected] = useState("")
    const [Tasks, setTasks] = useState([])
    const [Status, setStatus] = useState("Pending")
   const [EditingId, setEditingId] = useState("")
   const [UpdatedTitle, setUpdatedTitle] = useState("")
   const [UpdatedDescription, setUpdatedDescription] = useState("")
   const [UpdateStatus, setUpdateStatus] = useState("")
   const [Users, setUsers] = useState([])
     const [active, setActive] = useState("All");
      const [User, setUser] = useState(null)

     
     async function fetchTasks(status = "All") {
       try {
         const url =
         status === "All"
         ? `${BASE_URL}/api/tasks`
         : `${BASE_URL}/api/tasks?status=${encodeURIComponent(status)}`;
         
         const res1 = await fetch(url, {
           method: "GET",
           credentials: "include"
          });
          
          const data = await res1.json();
          
          if (!res1.ok) {
            throw new Error(data.message || "Failed to fetch tasks");
          }
          
          setTasks(data.tasks);
          
        } catch (error) {
          console.log(error.message);
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
    <>
    <div className='container mb-5  bg-[#f0f6fa] w-full h-full'>
        {/* <div className='text-4xl font-bold mt-4 text-center'>Dashboard</div> */}
<div className="main flex gap-10 justify-center flex-wrap">
  <div className="NewTask w-[25%] border-2 border-gray-200 bg-white p-6 rounded-lg mt-10 h-[25%]">
     <div className='font-semibold text-[16px] mb-1'>Title :  </div><input type="text" placeholder='Enter Title' className='border-gray-300 border-[1px] rounded-md px-3 py-2 w-full placeholder:text-gray-500 mb-4' value={Title} onChange={(e)=>{setTitle(e.target.value)}} />

     <div className='font-semibold text-[16px] mb-1'>Description : </div> <input type="text" placeholder='Enter Description' className='border-gray-300 border-[1px] rounded-md px-3 py-2 w-full placeholder:text-gray-500 mb-4' value={Description} onChange={(e)=>{setDescription(e.target.value)}} />

       <div className='font-semibold text-[16px] mb-1'>Status : </div> 
       <select name="select" id="select" className='border-gray-300 border-[1px] rounded-md px-3 py-2 w-full placeholder:text-gray-500 mb-4' value={Status} onChange={(e)=>{setStatus(e.target.value)}}>
        <option value="Pending ">Pending</option>
        <option value="In Progress" >In Progess</option>
        <option value="Completed" >Completed</option>
       </select>
       {/* <input type="text" placeholder='Enter Status' className='border-gray-300 border-2 rounded-md px-3 py-2 w-[50%] text-center' value={Status} onChange={(e)=>{setStatus(e.target.value)}} /> */}

     <div > <button onClick={()=>{handleTasks()}} className='bg-[#9136e0] w-full rounded-lg py-2 px-3 text-white font-semibold text-[17px] hover:bg-purple-700 mb-4'>{EditingId ?"update Task" : "Add Task"}</button></div>

  </div>
   <div className="Alltasks w-[45%] h-full">

      <div className='text-3xl font-semibold mt-10 mb-4'>Your Tasks</div>
      <div className="taskList mb-5">
        <ul className='flex gap-3 '>
       

{["All", "Pending", "In Progress", "Completed"].map((item) => (
  <li
    key={item}
     onClick={() => {
      setActive(item);
      fetchTasks(item);
    }}
    className={`border border-black py-1 px-3 rounded-2xl text-[14px] cursor-pointer ${
      active === item
        ? "bg-black text-white"
        : "bg-white text-black"
    }`}
  >
    {item}
  </li>
))}
        </ul>
      </div>
      <div className="tasks w-full">
      {Tasks.length==0 && (<div className=" text-2xl font-semibold mx-40 ">No Task Available</div>)}
      {Tasks.map((items,index)=>{
        return(
            <div key={items._id} className='border-2 border-gray-200 bg-white py-2 px-5 w-full flex justify-between items-center mb-4 rounded-xl'>
              
               <div className='taskInfo '><div className='font-semibold text-xl'>{items.Title}</div>
                <div className='description mb-2'>{items.Description}</div>
                <div
  className={`font-semibold text-[13px] w-fit py-1 px-3 rounded-xl ${
    items.Status === "Pending"
      ? "text-red-500 bg-yellow-100"
      : items.Status === "Completed"
      ? "text-green-700 bg-green-300"
      : items.Status === "In Progress"
      ? "text-blue-700 bg-blue-300"
      : ""
  }`}
>
  {items.Status}
</div>
                </div> 
                <div className='Btns flex gap-3'>
                <button className='  px-3 py-2 font-semibold border border-red-600 hover:text-white hover:bg-red-600 bg-white text-red-600 text-center rounded-lg' onClick={()=>{handleDelete(items._id)}}> Delete</button>
                <button className='  px-3 py-2 font-semibold border border-blue-600 hover:text-white hover:bg-blue-600 bg-white text-blue-600 text-center rounded-lg' onClick={()=>{handleEditClick(items)}}>Edit</button>
                
                </div>
            </div>
    )

      })}
        </div>
    </div>
   </div>
</div>

</>
  )
}

export default Dashboard
