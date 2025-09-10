import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice from './Practice'
import PropApp from './PropApp'
import GencClassComponent from './GencClassComponent'
import ReactLifeCycle from './ReactLifeCycle'
function App() {
 
   const cohortObj = {
       cohortName: "DE25FSFR004",
       cohortCount: 29,
       cohortLocation: "Coimbatore"
   };

  return (
    <>
      {/* <Practice /> */}
      {/* <PropApp /> */}
      {/* <GencClassComponent cohortDetails={cohortObj} /> */}
      <ReactLifeCycle/>
    </>
  )
}

export default App
