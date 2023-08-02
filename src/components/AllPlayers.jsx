import React, { useState, useEffect } from 'react';

export default function AllPlayers({ setSelectedPlayer }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchAllPlayers = async () => {
      const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players");
      const myPlayers = await response.json();
      console.log("Puppy Players:", myPlayers);
      setPlayers(myPlayers.results);
    };

    fetchAllPlayers();
  }, []);


  return (
    <>
    <section>
      <h1>Puppy Players</h1>
        {/* {players.map((player) => {
          return (
            <div key={player.id}>
              <p>Name: {player.name}</p>
              <p>Breed: {player.breed}</p>
              <p>Status: {player.status}</p>
              <button type="button" className="seeDetails" onClick={() => setSelectedPlayer(player)}>See Details</button>
            </div>
          )
        })} */}

    </section>
    </>
   
    
  )
}