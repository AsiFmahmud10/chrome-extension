const quotes=[
    "asdsad",
    "asdsad",
    "asdasdasd"
]
const getQuote=()=>{
    const selectedQuote = quotes[Math.round(Math.random()*(quotes.length - 1))]  
    return selectedQuote
}
export default getQuote