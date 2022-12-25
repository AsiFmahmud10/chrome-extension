import React, { useEffect, useState } from 'react'

 const Clock =()=> {
    let currentTime = new Date().toLocaleTimeString() 
    const [time, setTime] = useState(currentTime)
    
    useEffect(()=>{
      let interval = setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
      },1000)
      return ()=>{
        clearInterval(interval)
      }
    },[])

    return (
    <span className=' shadow-md   backdrop-blur-md text-white font-bold text-7xl '>
      {time}
    </span>

  )
}
export default Clock