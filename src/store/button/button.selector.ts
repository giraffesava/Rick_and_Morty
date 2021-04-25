import { StateType, ButtonStore } from './../types'

export const selectAllEpisodes = (state: StateType): ButtonStore =>
  state.buttonReducer
