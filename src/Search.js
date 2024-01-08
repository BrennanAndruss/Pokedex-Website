import { useState } from "react"

export const Search = ({ searchPokemon }) => {

  const [input, setInput] = useState("")

  return (
    <div className="Search">
      <button>Filters</button>
      <input type="text" placeholder="Search Pokemon" onChange={(event) => {
        setInput(event.target.value);
      }} />
      <button onClick={searchPokemon.bind(null, input)}>Search</button>
    </div>
  )
}