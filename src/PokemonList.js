import { PokemonCard } from "./PokemonCard"

export const PokemonList = ({ pokemon }) => {
  return (
    <>
      {pokemon.map(p => (
        <PokemonCard key={p.name} pokemonUrl={p.url} />
      ))}
    </>
  )
}