import React from 'react'
import {useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import './SearchBar.css'

export default function SearchBar() {
    const [input, setInput] = useState("")

  return (
    <div className="search">
      <FaSearch id="search-icon" /> 
        <input 
        type="text"
        placeholder="Search"
        value={input}
        className="searchBar"
        onChange={(e) => setInput(e.target.value)}
        />
        
    </div>
  )
}
