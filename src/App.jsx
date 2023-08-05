import './App.css'
import { useState } from 'react'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NewForm from './components/NewForm'
import NavBar from './components/NavBar'

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  return (
    <>
      <h1>Puppy Bowl 2023</h1>
      <NavBar />
      <img src="/images/mainImage.jpg" className="mainPic" />
      <NewForm />
       
      {selectedPlayer ? (
        <SinglePlayer player={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />
      ) : (
        <AllPlayers setSelectedPlayer={setSelectedPlayer} />
      )}
   </>
  )
}

export default App





