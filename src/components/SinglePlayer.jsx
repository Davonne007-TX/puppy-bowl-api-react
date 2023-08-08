import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchPlayerById } from './API'

export default function SinglePlayer({ setSelectedPlayer }) {
  const [player, setPlayer] = useState({})

  let { id } = useParams()

  useEffect(() => {  
     const fetchPlayer = async () => {
     const {data: {player}} = await fetchPlayerById(id);
     setPlayer(player);
  
    }
   fetchPlayer();
  }, [])

  return (
    <div className="singlePuppy-container">
      <h2>You have Selected Puppy Contender &#x2199;</h2>
        <p className="puppiesName">Name: {player.name}</p>
        <img src={player.imageUrl} className="dogImages" />
        <p>Breed: {player.breed}</p>
        <p>Cohort Id: {player.cohortId}</p>
        <p>ID: {player.id}</p>
        <p>Team Id: {player.teamId}</p>
        <p>Status {player.status}</p>
        <Link to={"/allPlayers"} className="seeDetails">Back to List</Link>
   </div>
  )
}






