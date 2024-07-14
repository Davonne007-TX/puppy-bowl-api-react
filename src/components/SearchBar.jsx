import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ value, onChange }) {
  const [input, setInput] = useState(value);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    onChange(inputValue);
  };

  return (
    <section className="search">
      <input
        type="text"
        placeholder="Search"
        value={input}
        className="searchBar"
        onChange={handleInputChange}
      />
    </section>
  );
}
