import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'
// import NewForm from './components/NewForm' //I do do not the form rendered on every page so do I need to have this here, to gave NewFrom.jsx on here

export default function AllPlayers({ setSelectedPlayer }) {
  const [players, setPlayers] = useState([]);
  const[searchQuery, setSearchQuery] = useState("")

useEffect(() => {
  const fetchAllPlayers = async () => {
  try {
     const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players");
        const myPlayers = await response.json();
        console.log("Puppy Players:", myPlayers);
        setPlayers(myPlayers.data.players); 
  
  } catch (error){
    console.log("Error", error);
  }
}
   fetchAllPlayers()
}, []);

const handelSearchInput = (event) => {
  setSearchQuery(event.target.value)
};

const filteredPuppies = players.filter((player) => 
player.name.toLowerCase().includes(searchQuery.toLowerCase())) 

  return (
    <>
    <section>
      <h2>Puppy Players</h2>
      {/* <NewForm /> */}

      <SearchBar value={searchQuery} onChange={handelSearchInput} />

        {filteredPuppies.map((player) => {
          return (
            <div key={player.id} className="puppy-container">
              <p>Name: {player.name}</p>
              <img src={player.imageUrl} className="dogImages" />
              <p>Breed: {player.breed}</p>
              <p>Cohort Id: {player.cohortId}</p>
              <p>Created At: {player.createdAt}</p>
              <p>ID: {player.id}</p>
              <p>Status {player.status}</p>
              <p>Team Id: {player.teamId}</p>
              <p>Updated At: {player.updatedAt}</p>

              <button type="button" className="seeDetails" onClick={() => setSelectedPlayer(player)}>See Details</button>
            </div>
          )
        })} 
    </section>
    </>
  )
}