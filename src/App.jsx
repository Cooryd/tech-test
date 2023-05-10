import { useState } from 'react'
import { OutputBox } from './OutputBox'
import './App.css'


function App() {
  const [input, setInput] = useState("")

  return (
    <div className="app">
        <OutputBox />
        <input />
      </div>
  )
}

export default App
