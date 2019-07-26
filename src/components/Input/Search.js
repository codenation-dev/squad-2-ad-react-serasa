import React from "react";

const Search = ({ handleChage, value, name, onClick }) => (
  <div>
    <input type="search" name={name} onChange={(event) => handleChage(event)} value={value} placeholder="Procurar" />
    <button onClick={() => onClick()}></button>
  </div>
);

export default Search;