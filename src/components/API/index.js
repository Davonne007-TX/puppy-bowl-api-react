{
    /*
        this is where we put our fetches 
        - don't use useEffect

        - basic fetch 
        - exporting api function from this file and components file will import these functions (rfc) 
    */
}

// /*fetches*/
// export default fetchAllPlayers = async (players) => {
//     try {
//         const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT/players");
//         const result = await response.json();
//         // setPlayers(myPlayers.data.players);  //how do we define setPlayers
        
//     } catch (err) {
//         console.error('Uh oh, trouble fetching players!', err);
//     }
// };





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

