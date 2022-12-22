import React from 'react'
import {w0,w1,w2} from "../../../images"

type LayoutProps={
    children: JSX.Element[] | JSX.Element
}

export default function Layout({children}:LayoutProps) {
    const imgArray= [w0,w1,w2]
    const selectedImage = imgArray[Math.round(Math.random()*2)]
    const backgroundImage = `url(${selectedImage})`

  return (
    <div className='w-screen bg-no-repeat
     h-screen bg-cover bg-center ' style={{backgroundImage:backgroundImage }}
    >
        <div className=''>
            {children}
        </div>
    </div>
  )
}