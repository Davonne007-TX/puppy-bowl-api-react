import React, { useEffect } from 'react'
import { useState } from 'react'

export default function NewForm() {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [cohortId, setCohortId] = useState("")
    const [createdAt, setCreatedAt] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [id, setId] = useState("")
    const [status, setStatus] = useState("")
    const [teamId, setTeamId] = useState("")
    const[updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
    async function newFormEntry(addedPlayer) {
        try {
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(addedPlayer)
            });

            const result = await response.son();
            console.log(result);

        } catch (error){
            console.log("Error", error)
        }
    }
   
  }, [])

  return (
    <div className="newForm">
        <form>
            <label>
                Name: <input 
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </label>

            <label>
                Breed: {""} 
                <input 
                value={breed}
                onChange={(e) => setBreed(e.target.value) } />
            </label>

            <label>
                Image URL: {""} 
                <input 
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value) } />
            </label>


            <label>
                Cohort Id: {""}
                 <input 
                 value={cohortId}
                 onChange={(e) => setCohortId(e.target.value)} />
            </label>

            <label>
               Created At: <input value={createdAt}
               onChange={(e) => setCreatedAt(e.target.value)} />
            </label>

            <label>
                ID: <input value={id}
                onChange={(e) => setId(e.target.value)} />
            </label>

            <label>
                Status: <input value={status}
                onChange={(e) => setStatus(e.target.value)} /> 
            </label>

            <label>
                Team Id: <input value={teamId}
                 onChange={(e) => setTeamId(e.target.value)} />  
            </label>

            <label>
                Updated At: <input value={updatedAt}
                onChange={(e) => setUpdatedAt(e.target.value)} />
            </label>

            <button type="button">Submit</button>
        </form>
          
    </div>
  )
}
