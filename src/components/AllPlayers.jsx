import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { fetchAllPlayers, fetchTeams, deletePlayer } from "./API";
import { Link } from "react-router-dom";

export default function AllPlayers({ setSelectedPlayer }) {
  const [players, setPlayers] = useState([]);
  const [searchPlayers, setSearch] = useState("");
  const [teams, setTeams] = useState([]);

  //Fetch All Players
  useEffect(() => {
    const fetchPlayers = async () => {
      const playersData = await fetchAllPlayers();
      setPlayers(playersData);

      const teamsData = await fetchTeams();
      setTeams(teamsData);
    };
    fetchPlayers();
  }, []);

  //Search Bar
  const handelSearchInput = (options) => {
    setSearch(options);
  };

  const searchedPuppies = players.filter((player) =>
    player.name.toLowerCase().includes(searchPlayers.toLowerCase())
  );

  //Delete Function
  const handleDelete = async (playerId) => {
    try {
      await deletePlayer(playerId);
      const updatedPlayers = players.filter((player) => player.id != playerId);
      setPlayers(updatedPlayers);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <section>
        <h2>Our Puppy Competitors</h2>
        <p className="searchDescription">Search for player below &#x2199;</p>

        <SearchBar value={searchPlayers} onChange={handelSearchInput} />

        {searchedPuppies.map((player) => {
          return (
            <div key={player.id} className="puppy-container">
              <p className="puppiesName">{player.name}</p>
              <img src={player.imageUrl} className="dogImages" />
              <p>Breed: {player.breed}</p>
              <p>Cohort Id: {player.cohortId}</p>
              <p>Created At: {player.createdAt}</p>
              <p>ID: {player.id}</p>
              <p>Status {player.status}</p>
              <p>Team Id: {player.teamId}</p>
              <p>Updated At: {player.updatedAt}</p>

              <div className="details-delete-bts">
                <Link to={`/player/${player.id}`} className="seeDetails">
                  See Details
                </Link>

                <button
                  type="button"
                  className="deleteButton"
                  onClick={() => handleDelete(player.id)}
                >
                  Delete Player
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
