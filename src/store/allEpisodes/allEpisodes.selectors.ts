import { AllEpisodesStore } from './../types'

interface StateType {
  allEpisodesReducer: AllEpisodesStore
}

export const selectAllEpisodes = (state: StateType): AllEpisodesStore =>
  state.allEpisodesReducer.episodes
