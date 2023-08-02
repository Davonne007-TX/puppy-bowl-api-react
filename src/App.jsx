import './App.css'
import { useState } from 'react'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  return (
    <>
      <h1>Puppy Bowl 2023</h1>

      {selectedPlayer ? (
        <SinglePlayer player={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />
      ) : (
        <AllPlayers setSelectedPlayer={setSelectedPlayer} />
      )}
   </>
  )
}

export default App



