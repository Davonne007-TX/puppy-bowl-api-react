import React, { useState, useEffect } from 'react';
import './API/index.js'

export default function AllPlayers({ setSelectedPlayer }) {
const [players, setPlayers] = useState([]);

// useEffect(() => {
//   const fetchData = async () => {
//     const puppyData = await fetchAllPlayers();
//     setPlayers(puppyData);
//   } 
//    fetchData();
// }, [])

return (
  <>
    <div>
      {players.map(player => (
        <div className="puppies" key={player.url}>
          <h2>Puppy Player</h2>
          <p>Name: {player.name}</p>
          <p>Climate: {player.breed}</p>
          <p>Population: {player.status}</p>
          <button type="button" className="seeDetails" onClick={() => setSelectedPlayer(player)}>See Details</button>
        </div>
      ))}
    </div>
  </>
);
}
   
