import { AllEpisodesStore, StateType } from './../types'

export const selectAllEpisodes = (state: StateType): AllEpisodesStore =>
  state.allEpisodesReducer
