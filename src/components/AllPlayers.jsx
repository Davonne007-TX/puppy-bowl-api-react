import React, { useState, useEffect } from 'react'
import './API/index.js'

export default function AllPlayers({ setSelectedPlayer }) {
    const [players, setPlayers] = useState([]);

    // const cohortName = "2302-ACC-CT-WEB-PT-B";
    // const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

    useEffect(() => {
        const fetchAllPlayers = async () => {
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players")
            const myPlayers = await response.json()
            console.log("All Players:", myPlayers)
            setPlayers(myPlayers.results)
        }

        fetchAllPlayers()
    }, [])

    return (
        <>
          <div>
            {players.map(player => (
              <div className="puppies" key={player.url}>
                <h2>Puppy Player</h2>
                <p>Name: {player.name}</p>
                <p>Climate: {player.breed}</p>
                <p>Population: {player.status}</p>
                <button type="button" className="seeDetails" onClick={() => setSelectedPlayer(planet)}>See Details</button>
              </div>
            ))}
          </div>
        </>
      );
    }