import { useState, useEffect } from "react"



const QuoteContainer = () => {

  const limit = 30
  const skip = 1
  const API_QUOTES = `https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`

  const [quotes, setQuotes] = useState()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch(API_QUOTES)
      .then(response => response.json())
      .then(data => {
        setQuotes(data.quotes)
      })
  }, [])
  
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }

  const changeQuote = () => {
    setIndex(getRandomInt(30))
  }

  return (
    <div>
      {
        quotes && (
          <>
            <h2>"{quotes[index].quote}"</h2>
            <p>{quotes[index].author}</p>
          </>
        )
      }
      <button onClick={changeQuote}>Next quote</button>
    </div>
  )
}

export default QuoteContainer