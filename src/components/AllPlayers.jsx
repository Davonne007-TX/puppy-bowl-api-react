import React, { useState, useEffect } from 'react';

export default function AllPlayers({ setSelectedPlayer }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchAllPlayers = async () => {
      const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players");
      const myPlayers = await response.json();
      console.log("Puppy Players:", myPlayers);
      setPlayers(myPlayers.data.players); 
    }

    fetchAllPlayers();
  }, []);



  return (
    <>
    <section>
      <h1>Puppy Players</h1>
         {players.map((player) => {
          return (
            <div key={player.id} className="puppy-container">
              <p>Name: {player.name}</p>
              <img src={player.imageUrl} className="dogImages" />
              <p>Breed: {player.breed}</p>
              <p>Cohort Id: {player.cohortId}</p>
              <p>ID: {player.id}</p>
              <p>{player.cohortId}</p>
              <p>Status {player.status}</p>

              <button type="button" className="seeDetails" onClick={() => setSelectedPlayer(player)}>See Details</button>
            </div>
          )
        })} 


    </section>
    </>
   
    
  )
}