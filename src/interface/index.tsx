export interface IPokemon {
  species: IPokemonsList
  name: string
  id: number
  height: number
  weight: number
  is_default: boolean
  sprites: ISprite
}
export interface IPokemonsList {
  url: string
  name: string
}
interface ISprite {
  front_default: string
  other: {
    dream_world: {
      front_default: string
    }
  }
}
