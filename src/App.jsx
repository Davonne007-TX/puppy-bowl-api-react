import './App.css'
import { useState } from 'react'
import AllPlayers from './components/AllPlayers'

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  return (
    <>
    <h1>Puppy Bowl</h1>

    {/* <AllPlayers setSelectedPlayer={setSelectedPlayer} /> */}
    </>
  )
}

export default App
