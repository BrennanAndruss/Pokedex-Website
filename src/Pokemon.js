import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Axios from "axios"

export const Pokemon = () => {

  const { name } = useParams()
  const { pokemon, setPokemon } = useState({
    name: "",
    id: "",
    types: [],
    image: ""
  })
  const { species, setSpecies } = useState("")
  const { pokedexData, setPokedexData } = useState({
    description: "",
    height: 0,
    weight: 0
  })
  const { trainingData, setTrainingData } = useState({
    baseExp: 0,
    baseFriendship: 0,
    catchRate: 0,
    growthRate: ""
  })
  const { typeEffectiveness, setTypeEffectiveness } = useState({
    weaknesses: [],
    resistances: []
  })
  const { baseStats, setBaseStats } = useState({
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0
  })

  useEffect(() => {

  }, [])

  return (
    <>
      <h1>Pokemon: {name}</h1>
      <Link to="/"><button>Back</button></Link>
    </>
  )
}