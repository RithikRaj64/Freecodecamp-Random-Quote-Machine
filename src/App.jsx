import { useState } from 'react'
import QuoteList from './assets/quotes.json'
import { FaTwitter } from 'react-icons/fa'
import './App.css'

const getQuote = () => {
  return QuoteList[Math.floor(Math.random() * QuoteList.length)];
}

function App() {
  const [quote, setQuote] = useState(getQuote());

  return (
    <>
      <div id="background">
        <div id="quote-box">
          <h2 id="text">{quote.quote}</h2>
          <h2 id="author">{quote.author}</h2>
          <div id="buttons">
            <a id="tweet-quote" href='twitter.com/intent/tweet' target='_blank'>
              <FaTwitter />
            </a>
            <button id="new-quote" onClick={() => {setQuote(getQuote())}}>New Quote</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
