import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'

export default function NewForm() {
const [formData, setFormData] = useState( {
  name: "",
  breed: "",
  cohortId: "",
  createdAt: "",
  imageUrl: "",
  id: "",
  status: "",
  teamId: "",
  updatedAt: "",
})

  const submitThisForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log(result);

    } catch (error) {
      console.log("Error", error);
      alert("Error adding new puppy. Please try again later.");
    }
  }

  //useNavigate
  const navigateToAllPlayers = () => {
  navigate('/allPlayers');
  }

  let navigate = useNavigate();

  return (
    <div className="newForm">
      <h3>Please fill out form for New Player Entry:</h3><br />

      <form onSubmit={submitThisForm}>
        <label>
          Name:
          <input
            value={name}
            onChange={(e) => setFormData({...formData, name: e.target.value}) } />
  
        </label>

        <label>
          Breed:
          <input
            value={breed}
            onChange={(e) => setFormData({...formData, breed: e.target.value})} />
        </label>

        <label>
          Image URL:
          <input
            value={imageUrl}
            onChange={(e) => setFormData({...formData, imageUrl: e.target.value})} />
         </label>

        <label>
          Cohort Id:
          <input
            value={cohortId}
            onChange={(e) => setFormData({...formData, cohortId: e.target.value})} />
        </label>

        <label>
          Created At:
          <input
            value={createdAt}
            onChange={(e) => setFormData({...formData, createdAt: e.target.value})} />
        </label>

        <label>
          ID:
          <input
            value={id}
            onChange={(e) => setFormData({...formData, id: e.target.value})} />
        </label>

        <label>
          Status:
          <input
            value={status}
            onChange={(e) => setFormData({...formData, status: e.target.value})} />
        </label>

        <label>
          Team Id:
          <input
            value={teamId}
            onChange={(e) => setFormData({...formData, teamId: e.target.value})} />
        </label>

        <label>
          Updated At:
          <input
            value={updatedAt}
            onChange={(e) => setFormData({...formData, updatedAt: e.target.value})} />
        </label>

        <button
          type="submit"
          className="submitButton">Submit</button>

         <button 
         type="button"
         className="backButton"
         onClick={navigateToAllPlayers}>Back to Puppies</button>
      </form>
    </div>
  )
}





// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import './Form.css'

// export default function NewForm() {
//   const [name, setName] = useState("")
//   const [breed, setBreed] = useState("")
//   const [cohortId, setCohortId] = useState("")
//   const [createdAt, setCreatedAt] = useState("")
//   const [imageUrl, setImageUrl] = useState("")
//   const [id, setId] = useState("")
//   const [status, setStatus] = useState("")
//   const [teamId, setTeamId] = useState("")
//   const [updatedAt, setUpdatedAt] = useState("");

//   const submitThisForm = async (e) => {
//     e.preventDefault();

//     const addedPuppy = {
//       name,
//       breed,
//       cohortId,
//       createdAt,
//       imageUrl,
//       id,
//       status,
//       teamId,
//       updatedAt
//     }

//     try {
//       const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(addedPuppy)
//       });

//       const result = await response.json();
//       console.log(result);

//     } catch (error) {
//       console.log("Error", error);
//       alert("Error adding new puppy. Please try again later.");
//     }
//   }

//   //useNavigate
//   const navigateToAllPlayers = () => {
//   navigate('/allPlayers');
//   }

//   let navigate = useNavigate();

//   return (
//     <div className="newForm">
//       <h3>Please fill out form for New Player Entry:</h3><br />

//       <form onSubmit={submitThisForm}>
//         <label>
//           Name:
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)} />
//         </label>

//         <label>
//           Breed:
//           <input
//             value={breed}
//             onChange={(e) => setBreed(e.target.value)} />
//         </label>

//         <label>
//           Image URL:
//           <input
//             value={imageUrl}
//             onChange={(e) => setImageUrl(e.target.value)} />
//         </label>

//         <label>
//           Cohort Id:
//           <input
//             value={cohortId}
//             onChange={(e) => setCohortId(e.target.value)} />
//         </label>

//         <label>
//           Created At:
//           <input
//             value={createdAt}
//             onChange={(e) => setCreatedAt(e.target.value)} />
//         </label>

//         <label>
//           ID:
//           <input
//             value={id}
//             onChange={(e) => setId(e.target.value)} />
//         </label>

//         <label>
//           Status:
//           <input
//             value={status}
//             onChange={(e) => setStatus(e.target.value)} />
//         </label>

//         <label>
//           Team Id:
//           <input
//             value={teamId}
//             onChange={(e) => setTeamId(e.target.value)} />
//         </label>

//         <label>
//           Updated At:
//           <input
//             value={updatedAt}
//             onChange={(e) => setUpdatedAt(e.target.value)} />
//         </label>

//         <button
//           type="submit"
//           className="submitButton">Submit</button>

//          <button 
//          type="button"
//          className="backButton"
//          onClick={navigateToAllPlayers}>Back to Puppies</button>
//       </form>
//     </div>

// }


