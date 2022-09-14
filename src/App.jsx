import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Data from './components/Data'
import Card from "./components/Card"

function App() {

  const myTravel = Data.map(item => {
    return (
      <Card
      key={item.id}
      {...item}
      />
    )
  })
  return (
    <div className="App">
     <Header/>
     {myTravel}
    </div>
  )
}

export default App
