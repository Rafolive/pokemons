import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { BASE, SPRITE } from "../utils/constants"
import { IPokemonsList } from "../interface"
import { Link } from "react-router-dom"
import { Loader, Button } from "./ui"

const PokemonsList = () => {
  const [pokemonList, setPokemonList] = useState<IPokemonsList[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  let history = useHistory()
  const handleRandom = () => {
    const rURL = pokemonList[Math.floor(Math.random() * pokemonList.length)]
    history.push(`/pokemon/${rURL.name}`)
  }

  useEffect(() => {
    const getPokemonsList = async () => {
      try {
        const listUrl: string = `${BASE}/pokemon?limit=20}`
        setLoading(true)
        const response: any = await fetch(listUrl)
        const data: any = await response.json()
        setLoading(false)
        const results: IPokemonsList[] = data.results
        setPokemonList(results)
      } catch (err) {
        console.log(err)
      }
    }
    getPokemonsList()
  }, [])

  // if (loading) {
  //   return <Loader />
  // }

  return (
    <>
      <h3>Pokemons Application</h3>
      <div className="button-group">
        <Button variant="warning" onClick={handleRandom}>
          Random Pokemon
        </Button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        pokemonList && (
          <div className="row">
            {pokemonList.map((item: IPokemonsList, index: number) => {
              return (
                <div className="col col-3" key={index + 1}>
                  <div className="card">
                    <div className="image">
                      <img
                        src={`${SPRITE}/${index + 1}.png`}
                        alt={`${item.name}`}
                      />
                    </div>
                    <div className="pokemon-name">{item.name}</div>
                    <div className="details">
                      <Link key={`${index}`} to={`/pokemon/${item.name}`}>
                        <Button size="sm" variant="success">
                          More details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )
      )}
    </>
  )
}

export default PokemonsList
