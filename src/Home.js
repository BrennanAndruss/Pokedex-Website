import { useState, useEffect } from "react"
import { Search } from "./Search"
import { PokemonList } from "./PokemonList"
import Axios from "axios"

export const Home = () => {

  let totalPokemon = 1010
  const [allResults, setAllResults] = useState([])
  const [results, setResults] = useState([])
  const [id, setId] = useState(0)
  const [pokemonLists, setPokemonLists] = useState([])

  useEffect(() => {
    // Obtain a list of all results from PokeAPI
    Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokemon}`).then(response => {
      setAllResults(response.data.results)
      setResults(response.data.results)
      // Load the first set of Pokemon
      loadPokemon(response.data.results)
    })
  }, [])

  const loadPokemon = (res) => {
    // Add the next set of results to the Pokemon list and update state
    let newId = id + 12
    setPokemonLists([...pokemonLists, ...res.slice(id, id + 12)])
    setId(id + 12)
  }

  const searchPokemon = (input) => {
    // Regenerate results based on search input (and filters, for later)
    let searchResults = allResults.filter((res) => res.name.includes(input));
    // Add the next set of results to the Pokemon list and update state
    setPokemonLists(searchResults.slice(0, 12))
    setResults(searchResults)
    setId(12)
  }

  return (
    <>
      <Search searchPokemon={searchPokemon} />
      <div className="List">
        <PokemonList pokemon={pokemonLists} />
        {id < results.length
          &&
          <button style={{ margin: "auto" }} onClick={loadPokemon.bind(null, results)}>Load More Pokemon</button>
        }
      </div>
    </>
  )
}