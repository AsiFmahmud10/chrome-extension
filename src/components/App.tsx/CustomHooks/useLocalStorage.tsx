import { useEffect, useState } from "react"

 const useLocalStorage = <T,>(key:string, defaultValue:T):[T,(value:T)=>void]=>{
    const [storeValue, setStoreValue] = useState(()=>{
        try{
            const value = window.localStorage.getItem(key)
            return value ? JSON.parse(value) : defaultValue
        }catch(err){
            console.log(err)
            return defaultValue
        }
    })
    
    const setValue=(value: T)=>{
        try{
             window.localStorage.setItem(key, JSON.stringify(value))
             setStoreValue(value)
        }catch(err){
            console.log(err)
        }


    }
    
    return [storeValue, setValue]

 }

export default useLocalStorage
