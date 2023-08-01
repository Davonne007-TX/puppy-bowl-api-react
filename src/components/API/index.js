{
    /*
        this is where we put our fetches 
        - don't use useEffect

        - basic fetch 
        - exporting api function from this file and components file will import these functions (rfc) 
    */
}

/*fetches*/
const cohortName = "2302-ACC-CT-WEB-PT-B";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        const result = await response.json();
        return result.data.players;
        
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

