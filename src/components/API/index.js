
/*fetches all players*/
export const fetchAllPlayers = async () => {
    try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players");
        const myPlayers = await response.json();
        console.log("Puppy Players:", myPlayers);
        return myPlayers.data.players
          
    } catch (error){
      console.log("Error", error);
      return[]
    }
}
        
//delete a puppy 
export const deletePlayer = async (playerId) => {
    try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-PT-B/players/${playerId}`", {
            method: 'DELETE',
        })
    } catch (error) {
        console.log("Error", error)

    }
}




//New Form - New Puppy Bowl Contender
// const submitThisForm = async (e) => {
//     e.preventDefault();

//     const addedPuppy = {
//         name, 
//         breed,
//         cohortId,
//         createdAt,
//         imageUrl,
//         id,
//         status,
//         teamId,
//         updatedAt
//     }

//     try {
//         const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(addedPuppy)
//         });

//         const result = await response.json();
//         console.log(result);

//     } catch (error){
//         console.log("Error", error)
//     }
// }

