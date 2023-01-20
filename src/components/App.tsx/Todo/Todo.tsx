import React, { useState,KeyboardEvent, useEffect} from 'react'
import { useLocalStorage } from '../CustomHooks'
import Bar from './Bar'

class Storage{
   KEY :string 
   constructor(key:string){
    this.KEY = key
   }

  get=()=>{
    const value = window.localStorage.getItem(this.KEY)
    return value ? JSON.parse(value) : []
  }

  save(arg:string){
    window.localStorage.setItem(this.KEY,arg)
  }
}

export default function Todo() {
  const KEY = "app-todo"
  const storage = new Storage(KEY) 
  const [todoList,setTodoList] = useState<string[]>(storage.get())
  const [inputTodo, setinputTodo] = useState<string>("")
  

  const addNewTodo=()=>{
    window.localStorage.setItem(KEY, JSON.stringify([...storage.get(),inputTodo]))
    setTodoList(storage.get())
    setinputTodo("")
  }

  const handleEditTask=(editTask:string, oldTask:string)=>{
    setTodoList(storage.get())
    let temp:string[] = storage.get()
    temp[temp.indexOf(oldTask)] = editTask
    storage.save(JSON.stringify(temp))
    setTodoList(temp)
    // if we use temp = todoList. The result will be erronious->pass by reference
  }
  //for adding a new task
  const handleChange=(event : React.ChangeEvent<HTMLInputElement>)=>{
    setinputTodo(event.currentTarget.value)
  }

  const handleEnter=(event:KeyboardEvent<HTMLInputElement>)=>{
    if(event.key === "Enter")
      addNewTodo()
    else 
      return undefined
  }
  const handleDeleteTodo=(task:string)=>{
    let currentTodo :string[] = storage.get()
    let updateAra = currentTodo.filter((todo, index)=>{
      return task !== todo
    })
    storage.save(JSON.stringify(updateAra))
    setTodoList(updateAra)
  }

  return (
    <div className=' max-h-[561px] w-80  scroll-smooth  overflow-auto  p-4 text-sm mx-auto backdrop-blur-md bg-gray-50/80 }'>
      
      <input placeholder="add task" className='text-sm  w-full p-1 rounded-md bg-[#ffffffd2] text-gray-900 border-gray-300' value={inputTodo} onKeyDown={handleEnter} type="text" onChange={handleChange} /> 
      {/* <button className=' bg-red-300  btn  ' onClick={addNewTodo}>Add</button> */}
       
       {
          todoList.map((task, index)=>{
            return (
              <div key={task} >
                  
                  <Bar taskObj={{task,index}} handleEditTask={handleEditTask}
                    handleDelete = {handleDeleteTodo}
                  />
              </div>
            )
          })
       }
    </div>
  )
}





// we dont use array index as a key. If we do when delete element we face problem .