import { useEffect, useState } from "react"

 const useLocalStorage = <T,>(key:string, defaultValue:T):[T,(value:T)=>void,()=>void]=>{
    const [storeValue, setStoreValue] = useState(()=>{
        
        try{
            const value = window.localStorage.getItem(key)
            return value ? JSON.parse(value) : defaultValue
        }catch(err){
            console.log(err)
            return defaultValue
        }
    })

    const refresh=()=>{
        let value = window.localStorage.getItem(key)
        value =  value ? JSON.parse(value) : defaultValue
        setStoreValue(value)
        console.log(storeValue)
        console.log('storeValue')
    }
    
    
    const setValue=(value: T)=>{
        try{
             window.localStorage.setItem(key, JSON.stringify(value))
             setStoreValue(value)
        }catch(err){
            console.log(err)
        }


    }
    
    return [storeValue, setValue,refresh]

 }

export default useLocalStorage
