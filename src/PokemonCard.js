import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"

export const PokemonCard = ({ pokemonUrl }) => {

  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState({
    name: "",
    id: "",
    types: [],
    image: ""
  })
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    setLoading(true)
    Axios.get(pokemonUrl).then(res => {
      setLoading(false)
      setPokemon({
        name: res.data.name,
        id: res.data.id,
        types: res.data.types,
        image: res.data.sprites.other["official-artwork"].front_default
      })
      setReverse((res.data.id - 1) % 4 > 1)
    })
  }, [])

  return (
    <>
      {loading
        ?
        <div className="Card">
          <div className="Card-img-loading"></div>
          <div className="Card-info">
            <p>Loading...</p>
          </div>
        </div>
        :
        <Link to={`/${pokemon.name}`} style={{ textDecoration: "none" }}>
          <div className="Card">
            <img className={reverse ? "Reverse" : undefined} src={pokemon.image} alt={pokemon.name} />
            <div className={reverse ? "Card-info Reverse" : "Card-info"}>
              <h4>#{"0".repeat(4 - pokemon.id.toString().length) + pokemon.id}</h4>
              <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
              {pokemon.types.map(t => (
                <p>{t.type.name.toUpperCase()}</p>
              ))}
            </div>
          </div>
        </Link>
      }
    </>
  )
}