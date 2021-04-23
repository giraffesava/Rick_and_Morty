import { AllEpisodesTypes } from './allEpisodes/allEpisodes.actions'

export interface ActionType {
  type: AllEpisodesTypes
  payload?: any[]
}

export interface AllEpisodesStore {
  map?: any
  episodes: any
  loading: boolean
  error: boolean
}

export interface Episodes {
  id: string
  characters: Array<string>
  air_date: string
  episodes: Array<string>
  name: string
  [x: string]: any
}
