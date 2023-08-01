{
    /*
        this is where we put our fetches 
        - don't use useEffect

        - basic fetch 
        - exporting api function from this file and components file will import these functions (rfc) 
    */
}

/*fetches*/
export const fetchAllPlayers = async () => {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players");
    const myPlayers = await response.json();
    console.log("Puppy Players:", myPlayers);
    return myPlayers.results;
};

fetchAllPlayers();

