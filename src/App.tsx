import { useState } from 'react'
import './App.css'
import './GridBackground.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid-bg'>
      <h1>Test</h1>
    </div>
  )
}

export default App
