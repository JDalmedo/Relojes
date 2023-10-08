import { useState } from 'react'
import './App.css'
import DigitalClock from './components/DigitalClock/DigitalClock'

const App = () => {

  const [count, setCount] = useState(0);
  
  return (
    <>
      <DigitalClock />
    </>
  )
}

export default App
