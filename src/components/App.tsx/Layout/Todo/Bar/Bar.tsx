import React, { useState, KeyboardEvent } from 'react'

type barProps={
  todoObj: {todo:string,index:number},
  handleEdit: (editTask:string,index:number) => void,
  handleDelete:(task:string) => void
}

const Bar=({todoObj,handleEdit,handleDelete}: barProps)=>{
  const {todo, index} = todoObj
  const [editTask, setEditTask] = useState(todo)
  const [editing, setEditing] = useState(false)

  const handleKeyDown =(e :KeyboardEvent<HTMLInputElement>)=>{
    if(e.key === "Enter"){
      handleEdit(editTask,index)
      setEditing(false)
    }  
  }
  
  return(
    <>
    {
       editing ? 
       <div>
       <input className='block w-fullflex rounded-sm p-2 text-gray-600  justify-between w-full bg-gray-100 my-2' type="text" value={editTask} onChange={(e)=>{setEditTask(e.target.value)}} onKeyDown={handleKeyDown}  />
     </div> 
     :
      <div className='flex rounded-sm p-1  justify-between w-full bg-gray-100 my-2 '>
        <>   
        <span className=''>
          {todo}
        </span> 
          <span className=' text-white'>
            <button className='bg-green-500 btn' onClick={()=>{setEditing(true)}} >Edit</button>
            <button className='btn bg-red-600' onClick={()=>{handleDelete(todo)}} >delete</button>  
          </span>
        </>
        </div>
    }
     
    
    </>
  )
}

export default Bar