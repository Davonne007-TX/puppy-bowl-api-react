import React from 'react'
import { useState } from 'react'
import Home from './components/Home'
import AllPlayers from './components/AllPlayers'
import NewForm from './components/NewForm'
import SinglePlayer from './components/SinglePlayer'
import { Routes, Route, Link } from 'react-router-dom'


export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);


  return (
    <>
      <h1>Puppy Bowl 2023</h1>
      <Link to="/">Home</Link>
      <Link to="/allPlayers">Our Puppy Contenders</Link>
      <Link to="/newForm">Add a new player</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allPlayers" element={<AllPlayers setSelectedPlayer={setSelectedPlayer} />} />
        <Route path="/newForm" element={<NewForm />} />
    </Routes>

  {selectedPlayer && (
  <SinglePlayer player={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />

  )}
  
    </>
  )
}






