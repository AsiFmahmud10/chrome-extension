import React, { useState, KeyboardEvent } from 'react'

type barProps={
  taskObj: {task:string,index:number},
  handleEditTask: (editTask:string,oldTask:string) => void,
  handleDelete:(task:string) => void
}

const Bar=({taskObj,handleEditTask,handleDelete}: barProps)=>{
  
  const {task, index} = taskObj
  const [editTask, setEditTask] = useState(task)
  const [editing, setEditing] = useState(false)

  const handleKeyDown =(e :KeyboardEvent<HTMLInputElement>)=>{
    if(e.key === "Enter"){
      handleEditTask(editTask,task)
      setEditing(false)
    }  
  }
  
  return(
    <div className=' drop-shadow-sm shadow-gray-500 w-full  flex-col '>
    {
       editing ? 
       <div>
          <input className='block w-full rounded-sm p-2 text-gray-600  bg-white my-2' type="text" value={editTask} onChange={(e)=>{setEditTask(e.target.value)}} onKeyDown={handleKeyDown}  />
       </div> 
     :
      <div className=' rounded-sm p-1  justify-between  bg-white my-2 '>
         
        <span className=' break-words '>
          <h1>{task}</h1>
        </span> 
          <span className=' text-white'>
            <button className='bg-green-500 btn' onClick={()=>{
                
                setEditing(true)
              }} >Edit</button>
            <button className='btn bg-red-600' onClick={()=>{handleDelete(task)}} >delete</button>  
          </span>
        
      </div>
    }
     
    
    </div>
  )
}

export default Bar