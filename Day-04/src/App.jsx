import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice from './Practice'
import PropApp from './PropApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Practice />
      <PropApp />
      
    </>
  )
}

export default App
