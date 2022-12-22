import React, { useState,KeyboardEvent, useEffect} from 'react'
import { useLocalStorage } from '../CustomHooks'
import Bar from './Bar'

export default function Todo() {

  const [storeValue, setValue] = useLocalStorage<string[]>("app-todo",[])
  const [todoList,setTodoList] = useState<string[]>(storeValue)
  const [inputTodo, setinputTodo] = useState<string>("")

  useEffect(()=>{
    setValue(todoList)
  },[todoList])
  
  const addNewTodo=()=>{
    setTodoList([...todoList,inputTodo]) //alternate not working ??
    setinputTodo("")
  }
  const handleChange=(event : React.ChangeEvent<HTMLInputElement>)=>{
    setinputTodo(event.currentTarget.value)
  }

  const handleEditTodo=(editTask:string, taskIndex:number)=>{
    let temp = [...todoList]
    temp[taskIndex] = editTask
    setTodoList(temp)
    // if we use temp = todoList. The result will be erronious->pass by reference
  }
  const handleEnter=(event:KeyboardEvent<HTMLInputElement>)=>{
    if(event.key === "Enter")
      addNewTodo()
    else 
      return undefined
  }
  const handleDeleteTodo=(task:string)=>{
    let updateAra = todoList.filter((todo, index)=>{
      return task !== todo
    })
    setTodoList(updateAra)
  }

  return (
    <div className='w-96 p-4 mx-auto  bg-[#f3f2f256] }'>
      
      <input className='text-sm  p-1 rounded-md bg-[#ffffffd2] text-gray-900 border-gray-300' value={inputTodo} onKeyDown={handleEnter} type="text" onChange={handleChange} /> 
      <button className=' bg-red-300  btn  ' onClick={addNewTodo}>Add</button>
       
       {
          todoList.map((todo, index)=>{
            return (
              <div key={todo} >
                  {todo}
                  <Bar todoObj={{todo,index}} handleEdit={handleEditTodo}
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