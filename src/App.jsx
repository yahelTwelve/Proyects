import { useState } from 'react'
import './App.css'
import quotes from './db/quotes.json'
import getRandomElement from './utils/random'
import QuoteBox from './components/QuoteBox'
import Planet1 from './components/Planet1'
import PlanetShadow1 from './components/PlanetShadow1'
import PlanetShadow1_2 from './components/PlanetShadow1_2'

function App() {
  
  const [quote, setQuote] = useState(getRandomElement(quotes))

  const handleChangeQuote = () =>{
    setQuote(getRandomElement(quotes))
    setBackground(getRandomElement(bgs))
  }

  const bgs= ['bg1', 'bg2', 'bg3', 'bg4']

  const [background, setBackground] = useState(getRandomElement(bgs))

  console.log(quote)

  return (
    <main className={`${background}`}>
  <QuoteBox quote={quote} handleChangeQuote= {handleChangeQuote}/>
  <div>
  <Planet1/>
  <PlanetShadow1/>
  <PlanetShadow1_2/>
  </div>
    </main>
  )
}

export default App
