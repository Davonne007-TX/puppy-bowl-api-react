import React from 'react'
import { useState } from 'react'

export default function NewForm() {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [cohortId, setCohortId] = useState("")
    const [createdAt, setCreatedAt] = useState("")
    const [id, setId] = useState("")
    const [status, setStatus] = useState("")
    const [teamId, setTeamId] = useState("")
    const[updatedAt, setUpdatedAt] = useState("");

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
                Cohort Id: {""}
                 <input 
                 value={cohortId}
                 onChange={(e) => setCohortId(e.target.value)} />
            </label>

            <label>
               Created At: <input value={createdAt} />
            </label>

            <label>
                ID: <input value={id} />
            </label>

            <label>
                Status: <input value={status} />
            </label>

            <label>
                Team Id: <input value={teamId} />
            </label>

            <label>
                Updated At: <input value={updatedAt} />
            </label>
        </form>
          
    </div>
  )
}
