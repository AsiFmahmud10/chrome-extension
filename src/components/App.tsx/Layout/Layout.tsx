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
      <div className=' flex flex-col justify-between  h-full  '>
          <div className='  '>
            <Clock/>
          </div>

          <div className=' bg-blue-500 flex justify-end align-bottom '>
            <div className=' h-[500px] m-4 '>
              {children}

            </div>
          </div>
 
      </div>

    </div>
  )
}