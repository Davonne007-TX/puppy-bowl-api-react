/*fetches all players*/
export const fetchAllPlayers = async () => {
    try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players");
        const myPlayers = await response.json();
        console.log("Puppy Players:", myPlayers);
        return myPlayers.data.players
          
    } catch (error){
      console.log("Error", error);
    //   return[]
    }
}

//fetch player by id
export const fetchPlayerById = async (id) => {
    try {
        const response = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${id}`
        )
        const result = await response.json();
        console.log(result)
        return result

    } catch (error) {
      console.error(error);

    }
}



        
//delete a puppy 
export const deletePlayer = async (playerId) => {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-PT-B/players/${playerId}`, {
            method: 'DELETE',
        })
        const result = await response.json()
        console.log(result)
        
    } catch (error) {
        console.log("Error", error)

    }
}

//fetches teams
export const fetchTeams = async () => {
    try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-B/teams")
        const teamsData = await response.json();
        console.log("Teams:", teamsData);
        return teamsData.data;

    } catch (error) {
        console.log("Error", error)
        return[]

    }
}

