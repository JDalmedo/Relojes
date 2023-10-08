import { useState } from 'react'
import './App.css'
import DigitalClock from './components/DigitalClock/DigitalClock'
import Countdown from './components/CountDown/CountDown'

const App = () => {

  const [count, setCount] = useState(0);
  
  return (
    <>
      <DigitalClock />
      <Countdown/>
    </>
  )
}

export default App
