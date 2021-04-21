import {} from './../types'
import { AllEpisodesStore } from './../types'

interface StateType {
  allEpisodes: AllEpisodesStore
}

export const selectAllEpisodes = (state: StateType): AllEpisodesStore =>
  state.allEpisodes
