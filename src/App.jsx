import React from 'react'
import Home from './components/Home'
import AllPlayers from './components/AllPlayers'
import NewForm from './components/NewForm'
import { Routes, Route, Link } from 'react-router-dom'


export default function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/allPlayers">Our Puppy Contenders</Link>
      <Link to="/newForm">Add a new player</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allPlayers" element={<AllPlayers />} />
        <Route path="/newForm" element={<NewForm />} />
    </Routes>
    </>
  )
}






