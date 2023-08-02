import React from 'react'

export default function SinglePlayer({player}) {
  
  return (
    <div className="puppies-container">
    <h2>Puppy Contender</h2>
    <p>Name: {player.name}</p>
    <p>Breed: {player.breed}</p>
    <p>Status: {player.status}</p>
    <p>Image: {player.imageUrl}</p>
    <p>Created At: {player.createdAt}</p>
   </div>
  )
}
