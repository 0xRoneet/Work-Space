import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Practice from './Practice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      {/* Practice Component with Object Constructor Example */}
      <Practice />
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
