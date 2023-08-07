import React from 'react'
import { useState } from 'react'
import Home from './components/Home'
import AllPlayers from './components/AllPlayers'
import NewForm from './components/NewForm'
import { Routes, Route, Link } from 'react-router-dom'
// import SinglePlayer from './components/SinglePlayer'


export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null) // i had this state here ,., and then I put the routes

  return (
    <>
  
        <h1>Puppy Bowl 2023</h1>

        <div className="navBar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/allPlayers">Our Puppy Contenders</Link></li>
          <li><Link to="/newForm">Add a new player</Link></li>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allPlayers" element={<AllPlayers setSelectedPlayer={setSelectedPlayer} />} /> 
        <Route path="/newForm" element={<NewForm />} />
    </Routes>
   </>
  )
}

