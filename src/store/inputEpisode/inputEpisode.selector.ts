import { StateType, InputEpisodeStore } from './../types'

export const selectEpisode = (state: StateType): InputEpisodeStore =>
  state.inputEpisodeReducer
