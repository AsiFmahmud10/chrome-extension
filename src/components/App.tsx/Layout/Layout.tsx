import React from 'react'
import {w0,w1,w2} from "../../../images"
import Clock from '../Clock/Clock'
import getQuote from '../CustomHooks/useQuote'

type LayoutProps={
    children: JSX.Element[] | JSX.Element
}

export default function Layout({children}:LayoutProps) {
    
  const getBackgroundImage=()=>{
        const imgArray= [w0,w1,w2]
        const selectedImage = imgArray[Math.round(Math.random()*2)]
        return `url(${selectedImage})`
  }
    const quote = getQuote()

    return (
    <div className='w-screen bg-no-repeat
     h-screen bg-cover bg-center ' style={{backgroundImage:getBackgroundImage() }}
    >
      <div className=' flex flex-col h-full '>

          <Clock/>

          <div className=''>
              {children}
          </div>
          <div className=' font-semibold text-xl font mt-auto mx-auto p-4 text-white '>
            {quote}
          </div>
      </div>
        
    </div>
  )
}