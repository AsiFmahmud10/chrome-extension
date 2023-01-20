import useLocalStorage from "./useLocalStorage"

const quotes=[
    "asdsad",
    "asdsad",
    "asdasdasd"
]


const useQuote=()=>{
    type QuoteObjType={
        currentDate : string,
        quote:string
    }
    const currentDate = new Date().toLocaleDateString()
    const dateObj = {currentDate,quote:quotes[0]}
    type typeDataObj = typeof dateObj 
    const [storeValue, setValue] = useLocalStorage<typeDataObj>("today-quote", dateObj)

    
    const selectedQuote = quotes[Math.round(Math.random()*(quotes.length - 1))]  
    return selectedQuote
}


export default useQuote