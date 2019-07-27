import React from "react";

const Search = ({ handleChange, value, name, onClick }) => (
  <div>
    <input type="search" name={name} onChange={(event) => handleChange(event)} value={value} placeholder="Procurar" />
    <button onClick={() => onClick()}>SEARCH</button>
  </div>
);

export default Search;