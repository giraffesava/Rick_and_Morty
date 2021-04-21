import { AllEpisodesTypes } from './allEpisodes/allEpisodes.actions'

export interface ActionType {
  type: AllEpisodesTypes
  payload?: any[]
}

export interface AllEpisodesStore {
  episodes: any
  loading: boolean
  error: boolean
}
