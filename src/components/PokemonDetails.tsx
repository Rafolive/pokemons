import React, { useEffect, useState } from "react"
import { IPokemon } from "../interface"
import { BASE } from "../utils/constants"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { Loader } from "./ui"

const PokemonDetails = () => {
  const { name }: { name: string } = useParams<any>()
  const [pokemon, setPokemon] = useState<IPokemon>()
  const [loading, setLoading] = useState<boolean>(false)

  const getPokemonDetails = async () => {
    try {
      const listUrl: string = `${BASE}/pokemon/${name}`
      setLoading(true)
      const response: any = await fetch(listUrl)
      const pokemon: IPokemon = await response.json()
      setLoading(false)
      console.log(pokemon)
      setPokemon(pokemon)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPokemonDetails()
  }, [])

  return (
    <>
      {pokemon && (
        <>
          <h3>{pokemon.species.name}</h3>
          {loading ? (
            <Loader />
          ) : (
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  <Link to="/">&#x21b5; Back</Link>{" "}
                </div>
              </div>
              <div className="card-body">
                <div className="row pokemon-card">
                  <div className="col col-2">
                    <div className="card-image">
                      <img
                        alt={`image_${pokemon.species.name}`}
                        src={pokemon.sprites.other.dream_world.front_default}
                      />
                    </div>
                  </div>
                  <div className="col col-10">
                    <div className="pokemon-info">
                      <ul>
                        <li>
                          Name: <span>{pokemon.species.name}</span>
                        </li>
                        <li>
                          Id: <span>{pokemon.id}</span>
                        </li>
                        <li>
                          Height: <span>{pokemon.height}</span>
                        </li>
                        <li>
                          Weight: <span>{pokemon.weight}</span>
                        </li>
                        <li>
                          Default:{" "}
                          <span>{pokemon.is_default ? "Yes" : "no"}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default PokemonDetails
