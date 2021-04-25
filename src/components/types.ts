export interface Props {
  episodes?: Episodes
  season?: string
  episode?: number
  allCharacters?: any
}

export interface Episodes {
  episode?: number
  split?: any
  map?: any
  air_date: string
  characters: Array<string>
  episodes: string
  id: number
  name: string
}
