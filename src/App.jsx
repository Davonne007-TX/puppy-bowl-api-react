import './App.css'
import { useState } from 'react'
import AllPlayers from './components/AllPlayers'

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  return (
    <>
    <h1>Puppy Bowl</h1>
    <AllPlayers setSelectedPlayer={setSelectedPlayer} />

    {selectedPlayer && (
      <div className="puppy-container">
        <h2>Puppy Contender</h2>
        <p>Name: {selectedPlayer.name}</p>
        <p>Breed: {selectedPlayer.breed}</p>
        <p>Status: {selectedPlayer.status}</p>
        <p>Image: {selectedPlayer.imageUrl}</p>
        <p>Created At: {selectedPlayer.createdAt}</p>
      </div>
    )}
   </>
  )
}

export default App



